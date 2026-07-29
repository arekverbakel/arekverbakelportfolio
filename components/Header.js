import Link from "next/link";
import styles from "./Header.module.css";

// Header bevat in het echte ontwerp GEEN logo/navigatie — die staat in de
// footer (de glas-blokken). Hier alleen: locatie, beschikbaarheid, CTA.
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.text}>
          Gevestigd in de NL <span className={styles.dot}>·</span> Werkt
          wereldwijd
        </p>
        <p className={`${styles.text} ${styles.availability}`}>
          Beschikbaar als freelancer vanaf juli 2026
        </p>
        <Link href="/contact" className={styles.cta}>
          Contact opnemen
        </Link>
      </div>
    </header>
  );
}
