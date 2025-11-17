// app/components/FreelanceLanding/FreelanceLanding.tsx

import { FreelanceHeader } from "../FreelanceHeader/FreelanceHeader";
import { HeroSection } from "../HeroSection/HeroSection";
import { PortfolioSection } from "../Portfolio/PortfolioSection";
import { AiIntakeFlowDetails } from "../Pages/AiIntakeFlowDetails/AiIntakeFlowDetails";
import styles from "./FreelanceLanding.module.scss";

export function FreelanceLanding() {
  return (
    <div className={styles.page}>
      <FreelanceHeader />

      <main className={styles.main}>
        <HeroSection />

        {/* Portfólió modulok grid */}
        <PortfolioSection />

        {/* AI Intake Flow – részletes aloldal, scroll-cél az anchorId-hez */}
        
      </main>
    </div>
  );
}
