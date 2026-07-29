"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

/**
 * Magnetische knop: beweegt licht mee met de cursor binnen de 'zone',
 * en veert elastisch terug naar het midden bij mouseleave.
 * Logica exact zoals aangeleverd (mapRange + gsap.to, geen wiggle).
 */
export default function MagneticButton({
  href,
  children,
  className,
  strength = 0.4,
  zonePadding = 24,
}) {
  const zoneRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const btn = btnRef.current;
    if (!zone || !btn) return;

    const handleMove = (e) => {
      const rect = zone.getBoundingClientRect();
      const x = gsap.utils.mapRange(
        rect.left,
        rect.right,
        -rect.width / 2,
        rect.width / 2,
        e.clientX
      );
      const y = gsap.utils.mapRange(
        rect.top,
        rect.bottom,
        -rect.height / 2,
        rect.height / 2,
        e.clientY
      );

      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const handleLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: true,
      });
    };

    zone.addEventListener("mousemove", handleMove);
    zone.addEventListener("mouseleave", handleLeave);
    return () => {
      zone.removeEventListener("mousemove", handleMove);
      zone.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return (
    <div
      ref={zoneRef}
      style={{
        display: "inline-block",
        padding: zonePadding,
        margin: -zonePadding,
      }}
    >
      <Link href={href} ref={btnRef} className={className}>
        {children}
      </Link>
    </div>
  );
}
