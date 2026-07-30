"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

const TransitionContext = createContext(() => {});
export const usePageTransition = () => useContext(TransitionContext);

// Bouwt de "d" van een vol-scherm paneel met een golvende rand op hoogte edgeY
// (0 = boven, 100 = onder, in een 0-100 viewBox). curve = sterkte van de bocht.
function buildPath(edgeY, curve) {
  return `M0,100 L0,${edgeY + curve} Q50,${edgeY - curve} 100,${edgeY + curve} L100,100 Z`;
}

export default function PageTransition({ children }) {
  const pathRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const state = useRef({ edgeY: 100, pendingHref: null });
  const isFirstRender = useRef(true);

  const navigate = (href) => {
    if (state.current.pendingHref) return; // animatie al bezig
    state.current.pendingHref = href;

    gsap.to(state.current, {
      edgeY: 0,
      duration: 0.7,
      ease: "power3.inOut",
      onUpdate: () => {
        const progress = 1 - state.current.edgeY / 100;
        const curve = 18 * Math.sin(progress * Math.PI);
        pathRef.current?.setAttribute(
          "d",
          buildPath(state.current.edgeY, curve)
        );
      },
      onComplete: () => {
        router.push(href);
      },
    });
  };

  // Zodra de nieuwe pagina gemount is (pathname veranderd), het paneel weer weghalen.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!state.current.pendingHref) return;
    state.current.pendingHref = null;

    gsap.to(state.current, {
      edgeY: 100,
      duration: 0.7,
      ease: "power3.inOut",
      onUpdate: () => {
        const progress = state.current.edgeY / 100;
        const curve = 18 * Math.sin(progress * Math.PI);
        pathRef.current?.setAttribute(
          "d",
          buildPath(state.current.edgeY, curve)
        );
      },
    });
  }, [pathname]);

  return (
    <TransitionContext.Provider value={navigate}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 999,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <path ref={pathRef} d={buildPath(100, 0)} fill="#171717" />
      </svg>
      {children}
    </TransitionContext.Provider>
  );
}
