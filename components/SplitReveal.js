"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/**
 * Splitst de tekst in regels en laat elke regel omhoog "in beeld schuiven"
 * zodra hij in het scherm scrolt — zelfde principe als de GSAP
 * "responsive line splits on scroll" demo (SplitText + gemaskeerde regels).
 */
export default function SplitReveal({ as: Tag = "div", className, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const split = new SplitText(el, {
      type: "lines",
      linesClass: "split-line",
    });

    // Elke regel krijgt een overflow:hidden wrapper, zodat de regel er
    // van onderaf "in schuift" i.p.v. gewoon zichtbaar te worden.
    const wrappers = split.lines.map((line) => {
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
      return wrapper;
    });

    const anim = gsap.from(split.lines, {
      yPercent: 110,
      opacity: 0,
      duration: 1.6,
      ease: "power3.out",
      stagger: 0.18,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
      split.revert();
      wrappers.forEach((w) => w.remove());
    };
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
