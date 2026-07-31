import SplitReveal from "@/components/SplitReveal";
import TransitionLink from "@/components/TransitionLink";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import styles from "./Home.module.css";

// Homepage toont alleen de eerste 2 projecten (zo staat het in Figma) —
// de volledige lijst (incl. "meer binnenkort") staat op /portfolio.
const PREVIEW_PROJECTS = PROJECTS.slice(0, 2);

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroPanel} aria-hidden="true" />

        <div className={styles.heroSpread}>
          <span>EEN</span>
          <span>HELE</span>
          <span>GOEDE</span>
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroMedia}>MEDIA</span>
          <span>VORMGEVER</span>
        </h1>
      </section>

      {/* ---------- NAAST HET ONTWERPEN ---------- */}
      <section className={`container ${styles.about}`}>
        <div className={styles.aboutText}>
          <SplitReveal as="h2">Naast het ontwerpen</SplitReveal>
          <SplitReveal as="p">
            Buiten het ontwerpen om vind je me vaak in de sportschool.
            Daarnaast ben ik altijd wel aan het creëren, of dat nu digitaal is
            of op papier. ik ben altijd op zoek naar nieuwe vormen en ideeën
            om mijn werk sterker te maken.
          </SplitReveal>
        </div>
        <div className={styles.aboutPhoto}>
          {/* Vervang public/images/profile.png door je eigen foto in kleur —
              wordt hier automatisch zwart-wit via CSS grayscale. */}
          <img src="/images/profile.png" alt="Arek Verbakel" />
        </div>
      </section>

      {/* ---------- PORTFOLIO PREVIEW ---------- */}
      <section className={`container ${styles.portfolio}`}>
        <div className={styles.portfolioHeader}>
          <SplitReveal as="h2">PORTFOLIO</SplitReveal>
          <SplitReveal as="span" className={styles.year}>
            &apos;26
          </SplitReveal>
        </div>

        <div className={styles.grid}>
          {PREVIEW_PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>

        <TransitionLink href="/portfolio" className={styles.viewMore}>
          <SplitReveal as="span">Bekijk meer →</SplitReveal>
        </TransitionLink>
      </section>
    </>
  );
}
