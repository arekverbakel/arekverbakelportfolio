import SplitReveal from "@/components/SplitReveal";
import TransitionLink from "@/components/TransitionLink";
import styles from "./Smart.module.css";

export const metadata = {
  title: "SMART — Arek Verbakel",
};

export default function SmartProject() {
  return (
    <>
      <article className={`container ${styles.wrap}`}>
        <div className={styles.dark}>
          <SplitReveal as="h1" className={styles.title}>
            SMART
          </SplitReveal>

          {/* Grijs paneel: bevat zowel het metablok als alle afbeeldingen,
              zo staat het ook in Figma (niet los ervan). */}
          <div className={styles.panel}>
            <div className={styles.meta}>
              <div className={styles.metaCol}>
                <SplitReveal as="p" className={styles.metaLabel}>
                  Jaar
                </SplitReveal>
                <SplitReveal as="p" className={styles.metaYear}>
                  2026
                </SplitReveal>
              </div>

              <div className={styles.metaCol}>
                <SplitReveal as="p" className={styles.metaLabel}>
                  Diensten
                </SplitReveal>
                <SplitReveal as="p" className={styles.metaValue}>
                  Logo, huisstijl, social content
                </SplitReveal>
              </div>

              <div className={styles.metaCol}>
                <SplitReveal as="p" className={styles.metaLabel}>
                  Samenvatting
                </SplitReveal>
                <SplitReveal as="p" className={styles.metaValue}>
                  Smart is een marketing consultant die ondernemers helpt om
                  op een slimme, authentieke en effectieve manier zichtbaar
                  te worden op social media. Voor dit merk ontwikkelde ik een
                  complete visuele identiteit die professionaliteit
                  uitstraalt zonder afstandelijk te worden. Het ontwerp is
                  helder, modern en vriendelijk precies zoals Smart zelf
                  opereert: strategisch sterk, maar altijd persoonlijk.
                </SplitReveal>
              </div>
            </div>

            <div className={styles.imageBlock}>
              <img src="/images/smart-poster.png" alt="SMART campagneposter" />
            </div>
            <div className={styles.imageBlock}>
              <img
                src="/images/smart-logo-guide.png"
                alt="SMART logo-richtlijnen"
              />
            </div>
            <div className={styles.imageBlock}>
              <img src="/images/smart-colors.png" alt="SMART kleurenpalet" />
            </div>
            <div className={styles.imageBlock}>
              <img
                src="/images/smart-typography.png"
                alt="SMART lettertypes"
              />
            </div>
            <div className={styles.imageBlock}>
              <img
                src="/images/smart-moodboard.png"
                alt="SMART moodboard en symbolen"
              />
            </div>
            {/* Ontbreekt nog: SMART TEMPLATE IPHONE — stuur die foto nog
                even mee, dan zet ik 'm hier neer. */}
          </div>
        </div>
      </article>

      <TransitionLink href="/portfolio" className={styles.back}>
        <SplitReveal as="span">Terug naar portfolio →</SplitReveal>
      </TransitionLink>
    </>
  );
}
