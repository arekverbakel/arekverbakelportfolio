import Link from "next/link";
import styles from "./Home.module.css";

const PROJECTS = [
  {
    slug: "/project-1",
    title: "SMART",
    tagline: "Verbinden met. De juiste mensen.",
    tags: "LOGO & HUISSTIJL 2026",
    image: "/images/project-smart.jpg",
  },
  {
    slug: "/project-2",
    title: "Studio Giftig",
    tagline: "Logo, branding, huisstijl, UX, UI, social content",
    tags: "LOGO, BRANDING, HUISSTIJL, UX, UI, SOCIAL CONTENT",
    image: "/images/project-giftig.jpg",
  },
  {
    slug: "/portfolio",
    title: "Persoonlijk project",
    tagline: "Logo, branding, huisstijl, UX, UI, social content",
    tags: "PERSOONLIJK PROJECT 2026",
    image: "/images/project-persoonlijk.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className={`container ${styles.hero}`}>
        <h1 className={styles.heroTitle}>
          <span className={styles.line}>EEN</span>
          <span className={styles.line}>HELE</span>
          <span className={styles.line}>GOEDE</span>
          <span className={`${styles.line} ${styles.mediaLine}`}>
            <span>MEDIA</span>
            <span>VORMGEVER</span>
          </span>
        </h1>
      </section>

      {/* ---------- NAAST HET ONTWERPEN ---------- */}
      <section className={`container ${styles.about}`}>
        <div className={styles.aboutPhoto}>
          {/* Vervang public/images/profile.jpg door je eigen foto in kleur —
              de grayscale-filter hieronder maakt hem zwart-wit op de site. */}
          <img src="/images/profile.jpg" alt="Are Verbakel" />
        </div>
        <div className={styles.aboutText}>
          <h2>NAAST HET ONTWERPEN</h2>
          <p>
            Buiten het ontwerpen om vind je me vaak in de sportschool.
            Daarnaast ben ik altijd wel aan het creëren, of dat nu digitaal is
            of op papier. Ik ben altijd op zoek naar nieuwe vormen en ideeën
            om mijn werk sterker te maken.
          </p>
        </div>
      </section>

      {/* ---------- PORTFOLIO PREVIEW ---------- */}
      <section className={`container ${styles.portfolio}`}>
        <div className={styles.portfolioHeader}>
          <h2>
            PORTFOLIO <span className={styles.year}>&apos;26</span>
          </h2>
          <Link href="/portfolio" className={styles.viewMore}>
            Bekijk meer →
          </Link>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <Link
              href={project.slug}
              key={project.title}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                {/* Vervang met het geëxporteerde project-thumbnail uit Figma */}
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardTag}>{project.tags}</p>
                <h3>{project.title}</h3>
                <p className={styles.cardTagline}>{project.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
