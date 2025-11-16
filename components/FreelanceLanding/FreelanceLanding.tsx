import { FreelanceHeader } from "../FreelanceHeader/FreelanceHeader";
import { HeroSection } from "../HeroSection/HeroSection";
import { PortfolioSection } from "../Portfolio/PortfolioSection";
import styles from "./FreelanceLanding.module.scss";

export function FreelanceLanding() {
  return (
    <div className={styles.page}>
      <FreelanceHeader />

      <main className={styles.main}>
        <HeroSection />

        {/* 🔥 ÚJ: Portfólió modulok megjelenítése */}
        <PortfolioSection />
      </main>
    </div>
  );
}
