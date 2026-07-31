"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";
import styles from "./Header.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Header bevat in het echte ontwerp GEEN logo/navigatie — die staat in de
// footer (de glas-blokken). Hier alleen: locatie, beschikbaarheid, CTA.
//
// Directional scroll: schuift omhoog weg bij scrollen naar beneden, komt
// meteen terug bij scrollen naar boven. Logica volgens de officiële GSAP
// "directionally-aware-header" demo.
export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const showAnim = gsap
      .from(el, {
        yPercent: -100,
        paused: true,
        duration: 0.6,
        ease: "power2.out",
      })
      .progress(1);

    const trigger = ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.textBlock}>
          <p className={styles.label}>Gevestigd in NL</p>
          <p className={styles.value}>Werkt wereldwijd</p>
        </div>
        <div className={`${styles.textBlock} ${styles.availability}`}>
          <p className={styles.label}>Beschikbaar als freelancer</p>
          <p className={styles.value}>vanaf september 2026</p>
        </div>
        <MagneticButton
          href="mailto:arekverbakelbusiness@gmail.com"
          className={styles.cta}
          strength={0.4}
        >
          Contact opnemen
        </MagneticButton>
      </div>
    </header>
  );
}
