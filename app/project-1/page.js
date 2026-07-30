import SplitReveal from "@/components/SplitReveal";
import TransitionLink from "@/components/TransitionLink";
import styles from "./Smart.module.css";

export const metadata = {
  title: "SMART — Arek Verbakel",
};

export default function SmartProject() {
  return (
    <article className={`container ${styles.wrap}`}>
      {/* ---------- INTRO ---------- */}
      <header className={styles.intro}>
        <SplitReveal as="p" className={styles.eyebrow}>
          LOGO & HUISSTIJL 2026
        </SplitReveal>
        <SplitReveal as="h1">SMART</SplitReveal>
        <SplitReveal as="p" className={styles.intake}>
          Verbinden met. De juiste mensen. SMART helpt bedrijven communiceren
          met hun droomklanten — de huisstijl vertaalt dat idee letterlijk:
          een tekstballon verwerkt in de negatieve ruimte van het logo, met
          dezelfde scherpe hoek terug in de letters zelf.
        </SplitReveal>
      </header>

      {/* ---------- HERO POSTER ---------- */}
      <div className={styles.hero}>
        <img src="/images/smart-poster.png" alt="SMART campagneposter" />
      </div>

      {/* ---------- KLEUREN ---------- */}
      <section className={styles.section}>
        <SplitReveal as="h2">Kleuren</SplitReveal>
        <div className={styles.imageBlock}>
          <img src="/images/smart-colors.png" alt="SMART kleurenpalet" />
        </div>
      </section>

      {/* ---------- TYPOGRAFIE ---------- */}
      <section className={styles.section}>
        <SplitReveal as="h2">Typografie</SplitReveal>
        <div className={styles.imageBlock}>
          <img
            src="/images/smart-typography.png"
            alt="SMART lettertypes: Nethead, Panel Sans, Input Serif"
          />
        </div>
      </section>

      {/* ---------- LOGO ---------- */}
      <section className={styles.section}>
        <SplitReveal as="h2">Logo & beeldmerk</SplitReveal>
        <div className={styles.imageBlock}>
          <img src="/images/smart-logo-guide.png" alt="SMART logo-richtlijnen" />
        </div>
      </section>

      {/* ---------- MOODBOARD ---------- */}
      <section className={styles.section}>
        <SplitReveal as="h2">Moodboard & symbolen</SplitReveal>
        <div className={styles.imageBlock}>
          <img
            src="/images/smart-moodboard.png"
            alt="SMART moodboard en symbolen"
          />
        </div>
      </section>

      <TransitionLink href="/portfolio" className={styles.back}>
        <SplitReveal as="span">Terug naar portfolio →</SplitReveal>
      </TransitionLink>
    </article>
  );
}
