"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

// Let op: Header staat BUITEN deze wrapper (in layout.js), want position:fixed
// werkt niet meer goed binnen een element dat GSAP transformeert.
export default function SmoothScroll({ children }) {
  const smootherRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });
    return () => smootherRef.current?.kill();
  }, []);

  // Bij elke paginawissel: begin bovenaan, niet halverwege of onderaan.
  // (ScrollSmoother houdt zijn eigen scrollpositie bij, dus de normale
  // Next.js scroll-restore werkt hier niet vanzelf.)
  //
  // Ook: ScrollTrigger moet ververst worden na een paginawissel, anders
  // gebruikt hij nog de posities/hoogte van de VORIGE pagina — daardoor
  // vuurden de tekst-animaties (SplitReveal) niet af totdat je de pagina
  // handmatig herlaadt.
  useEffect(() => {
    smootherRef.current?.scrollTo(0, false);
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
