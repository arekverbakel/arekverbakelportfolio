import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrap}`}>
        {/* Groot watermerk op de achtergrond, glas-blokken zweven erover */}
        <span className={styles.wordmark} aria-hidden="true">
          <span className={styles.wordmarkLine}>Arek</span><span className={styles.wordmarkLine}>Verbakel</span>
        </span>

        <div className={styles.grid}>
          <Link href="/contact" className={`${styles.glass} ${styles.contact}`}>
            <span>Contact</span>
          </Link>
          <Link
            href="/portfolio"
            className={`${styles.glass} ${styles.portfolio}`}
          >
            <span>Portfolio</span>
          </Link>
          <Link
            href="/over-mij"
            className={`${styles.glass} ${styles.overMij}`}
          >
            <span>Over mij</span>
          </Link>
          <Link
            href="https://www.linkedin.com"
            className={`${styles.glass} ${styles.linkedin}`}
          >
            <span>Linkedin</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
