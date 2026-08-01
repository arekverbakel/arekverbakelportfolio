import SplitReveal from "@/components/SplitReveal";
import TransitionLink from "@/components/TransitionLink";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import styles from "./OverMij.module.css";

export const metadata = {
  title: "Over mij — Arek Verbakel",
};

const TIMELINE = [
  {
    title: "Studio Springtime",
    role: "Freelance Grafisch Ontwerper",
    period: "2025 - Heden",
    description:
      "In samenwerking met Studio Springtime werk ik aan uiteenlopende creatieve projecten. Ik focus me hier op het vertalen van toffe ideeën naar strakke visuele ontwerpen die echt blijven hangen.",
  },
  {
    title: "Mediavormgever",
    role: "MBO 4 Diploma",
    period: "2021 - 2025",
    description:
      "Mijn diploma behaald aan het SintLucas, waar ik de basis heb gelegd voor mijn creatieve visie en technische skills in mediavormgeving.",
  },
  {
    title: "Stage Studio Giftig",
    role: "Grafisch Designer",
    period: "2024 - 2025",
    description:
      "Tijdens mijn stage bij Studio Giftig werkte ik mee aan grafische ontwerpen en ondersteunde ik het team bij verschillende creatieve projecten.",
  },
  {
    title: "Stage Vindkracht13",
    role: "Mediavormgever",
    period: "2023 - 2024",
    description:
      "Werkte aan verschillende websites, logo's en huisstijlen, en ondersteunde bij het ontwikkelen van visuele content en videobewerking.",
  },
];

const PREVIEW_PROJECTS = PROJECTS.slice(0, 2);

export default function OverMijPage() {
  return (
    <>
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
          <img src="/images/profile.png" alt="Arek Verbakel" />
        </div>
      </section>

      {/* ---------- ERVARINGEN ---------- */}
      <section className={`container ${styles.experienceWrap}`}>
        <div className={styles.dark}>
          <div className={styles.titleBand}>
            <SplitReveal as="h2" className={styles.ervaringenTitle}>
              ERVARINGEN
            </SplitReveal>
          </div>

          <div className={styles.panel}>
            {TIMELINE.map((item) => (
              <div className={styles.row} key={item.title}>
                <div className={styles.rowGrid}>
                  <div className={styles.rowLeft}>
                    <SplitReveal as="h3" className={styles.rowTitle}>
                      {item.title}
                    </SplitReveal>
                    <p className={styles.rowRole}>{item.role}</p>
                  </div>
                  <SplitReveal as="span" className={styles.rowPeriod}>
                    {item.period}
                  </SplitReveal>
                </div>
                <SplitReveal as="p" className={styles.rowDescription}>
                  {item.description}
                </SplitReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PORTFOLIO PREVIEW ---------- */}
      <section className={`container ${styles.portfolio}`}>
        <div className={styles.portfolioHeader}>
          <SplitReveal as="h2">PORTFOLIO</SplitReveal>
        </div>

        <div className={styles.grid}>
          {PREVIEW_PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>

        <TransitionLink href="/" className={styles.back}>
          <SplitReveal as="span">Terug naar home →</SplitReveal>
        </TransitionLink>
      </section>
    </>
  );
}
