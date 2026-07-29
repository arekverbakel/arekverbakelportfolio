import Link from "next/link";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/over-mij", label: "Over mij" },
  { href: "https://www.linkedin.com", label: "Linkedin" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <span className={styles.logo}>Are Verbakel</span>
          <Link href="/contact" className={styles.cta}>
            Contact opnemen
          </Link>
        </div>

        <nav className={styles.nav} aria-label="Footer menu">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Are Verbakel. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
