import SplitReveal from "@/components/SplitReveal";
import TransitionLink from "@/components/TransitionLink";
import styles from "./Herman.module.css";

export const metadata = {
  title: "Herman — Arek Verbakel",
};

const GALLERY = [
  { src: "/images/herman-voorbeeld-studio.png", alt: "Herman — studio, aan het werk" },
  { src: "/images/herman-schets-1.png", alt: "Herman — schets 1" },
  { src: "/images/herman-schets-2.png", alt: "Herman — schets 2" },
  { src: "/images/herman-schets-3.png", alt: "Herman — schets 3" },
  { src: "/images/herman-schets-4.png", alt: "Herman — schets 4" },
  { src: "/images/herman-schets-5.png", alt: "Herman — schets 5" },
  { src: "/images/herman-schets-6.png", alt: "Herman — schets 6" },
  { src: "/images/herman-schets-8.png", alt: "Herman — schets 8" },
];

export default function HermanProject() {
  return (
    <>
      <article className={`container ${styles.wrap}`}>
        <div className={styles.dark}>
          <SplitReveal as="h1" className={styles.title}>
            Herman
          </SplitReveal>

          <div className={styles.panel}>
            <div className={styles.meta}>
              <div className={styles.metaCol}>
                <SplitReveal as="p" className={styles.metaLabel}>
                  Jaar
                </SplitReveal>
                <SplitReveal as="p" className={styles.metaYear}>
                  2025
                </SplitReveal>
              </div>

              <div className={styles.metaCol}>
                <SplitReveal as="p" className={styles.metaLabel}>
                  Diensten
                </SplitReveal>
                <SplitReveal as="p" className={styles.metaValue}>
                  Muurschildering, concept, artdirection
                </SplitReveal>
              </div>

              <div className={styles.metaCol}>
                <SplitReveal as="p" className={styles.metaLabel}>
                  Samenvatting
                </SplitReveal>
                <SplitReveal as="p" className={styles.metaSummary}>
                  Voor dit persoonlijke project ontwikkelde ik een groot
                  wandwerk rond een anatomisch skelet als uitgangspunt. Met
                  behulp van een grid-transfertechniek werd de compositie
                  stap voor stap opgebouwd: van ruwe schets tot volledig
                  spraygeschilderde schedel. Het proces stond centraal net
                  zoveel als het eindresultaat.
                </SplitReveal>
              </div>
            </div>

            <div className={styles.grid}>
              {GALLERY.map((img) => (
                <div className={styles.imageBlock} key={img.src}>
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>

            <div className={styles.imageBlock}>
              <img
                src="/images/herman-laatste-foto.png"
                alt="Herman — eindresultaat"
              />
            </div>
          </div>
        </div>
      </article>

      <TransitionLink href="/portfolio" className={styles.back}>
        <SplitReveal as="span">Terug naar portfolio →</SplitReveal>
      </TransitionLink>
    </>
  );
}
