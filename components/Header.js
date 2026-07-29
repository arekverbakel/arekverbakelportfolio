"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/over-mij", label: "Over mij" },
  { href: "https://www.linkedin.com", label: "Linkedin" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Topbalk: locatie + beschikbaarheid — alleen zichtbaar op desktop */}
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <p className={styles.topbarText}>
            Gevestigd in de NL <span className={styles.dot}>·</span> Werkt
            wereldwijd
          </p>
          <p className={`${styles.topbarText} ${styles.availability}`}>
            Beschikbaar als freelancer vanaf juli 2026
          </p>
        </div>
      </div>

      {/* Hoofdnavigatie */}
      <div className={`container ${styles.navRow}`}>
        <Link href="/" className={styles.logo}>
          Are Verbakel
        </Link>

        <nav className={styles.navDesktop} aria-label="Hoofdmenu">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className={`${styles.cta} ${styles.ctaDesktop}`}>
          Contact opnemen
        </Link>

        <button
          className={styles.burger}
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.burgerLine} ${open ? styles.open1 : ""}`} />
          <span className={`${styles.burgerLine} ${open ? styles.open2 : ""}`} />
        </button>
      </div>

      {/* Mobiel uitklapmenu */}
      {open && (
        <div className={styles.mobileMenu}>
          <nav aria-label="Mobiel menu">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/contact"
            className={styles.cta}
            onClick={() => setOpen(false)}
          >
            Contact opnemen
          </Link>
        </div>
      )}
    </header>
  );
}
