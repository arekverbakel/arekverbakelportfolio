import SplitReveal from "@/components/SplitReveal";
import TransitionLink from "@/components/TransitionLink";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import styles from "./Portfolio.module.css";

export const metadata = {
  title: "Portfolio — Arek Verbakel",
};

export default function PortfolioPage() {
  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.header}>
        <SplitReveal as="p" className={styles.range}>
          [2024-2026]
        </SplitReveal>
        <div className={styles.headerText}>
          <SplitReveal as="h1">PORTFOLIO</SplitReveal>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>

      <TransitionLink href="/" className={styles.back}>
        <SplitReveal as="span">Terug naar home →</SplitReveal>
      </TransitionLink>
    </section>
  );
}
