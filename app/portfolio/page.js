import Link from "next/link";
import SplitReveal from "@/components/SplitReveal";
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
        <div className={styles.headerText}>
          <SplitReveal as="h1">PORTFOLIO</SplitReveal>
          <SplitReveal as="span" className={styles.year}>
            &apos;26
          </SplitReveal>
        </div>
        <SplitReveal as="p" className={styles.range}>
          [2024-2026]
        </SplitReveal>
      </div>

      <div className={styles.panel}>
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>

      <Link href="/" className={styles.back}>
        Terug naar home →
      </Link>
    </section>
  );
}
