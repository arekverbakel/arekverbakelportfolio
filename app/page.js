import Link from "next/link";
import styles from "./Home.module.css";

// Precies 2 kaarten op de homepage — zo staat het ook in Figma.
const PROJECTS = [
  {
    slug: "/project-1",
    title: "SMART",
    label: "LOGO & HUISSTIJL 2026",
    tag: "LOGO, BRANDING, HUISSTIJL, UX, UI, SOCIAL CONTENT,",
    image: "/images/project-smart.jpg", // = "SMART INSTA FOTO.png" uit Drive
  },
  {
    slug: "/project-2",
    title: "STUDIO GIFTIG",
    label: "PERSOONLIJK PROJECT 2026",
    tag: "STREEKTAART, ENZ.",
    image: "/images/project-giftig.jpg", // = "HermanLaatsteFoto Portfolio.png" uit Drive
  },
];

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
          <h2>NAAST HET ONTWERPEN</h2>
          <p>
            Buiten het ontwerpen om vind je me vaak in de sportschool.
            Daarnaast ben ik altijd wel aan het creëren, of dat nu digitaal is
            of op papier. ik ben altijd op zoek naar nieuwe vormen en ideeën
            om mijn werk sterker te maken.
          </p>
        </div>
        <div className={styles.aboutPhoto}>
          {/* Vervang public/images/profile.jpg door je eigen foto in kleur —
              wordt hier automatisch zwart-wit via CSS grayscale. */}
          <img src="/images/profile.jpg" alt="Arek Verbakel" />
        </div>
      </section>

      {/* ---------- PORTFOLIO PREVIEW ---------- */}
      <section className={`container ${styles.portfolio}`}>
        <div className={styles.portfolioHeader}>
          <h2>PORTFOLIO</h2>
          <span className={styles.year}>&apos;26</span>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <Link
              href={project.slug}
              key={project.title}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.cardTitleRow}>
                <span>{project.title}</span>
                <span>{project.label}</span>
              </div>
              <p className={styles.cardTag}>{project.tag}</p>
            </Link>
          ))}
        </div>

        <Link href="/portfolio" className={styles.viewMore}>
          Bekijk meer →
        </Link>
      </section>
    </>
  );
}
