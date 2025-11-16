import { FreelanceHeader } from "../FreelanceHeader/FreelanceHeader";
import { HeroSection } from "../HeroSection/HeroSection";
import styles from "./FreelanceLanding.module.scss";

export function FreelanceLanding() {
  return (
    <div className={styles.page}>
      <FreelanceHeader />

      <main className={styles.main}>
        <HeroSection />

        <section className={styles.section}>
          <h2 className={styles.title}>Freelance landing – WIP</h2>
          <p className={styles.subtitle}>
            Ez itt a fejlesztés alatti verzió. Fokozatosan kerülnek be ide az AI
            chat, a portfólió grid és a projekt-brief folyamat elemei.
          </p>
        </section>
      </main>
    </div>
  );
}
