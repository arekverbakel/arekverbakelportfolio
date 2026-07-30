import Link from "next/link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <Link href={project.slug} className={styles.card}>
      <div className={styles.cardImage}>
        <img src={project.image} alt={project.title} />
      </div>
      <div className={styles.cardTitleRow}>
        <span>{project.title}</span>
        <span>{project.label}</span>
      </div>
      <p className={styles.cardTag}>{project.tag}</p>
    </Link>
  );
}
