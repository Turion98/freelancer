// app/components/FreelanceLanding/FreelanceLanding.tsx

"use client";

import React, { useState } from "react";
import { FreelanceHeader } from "../FreelanceHeader/FreelanceHeader";
import { HeroSection } from "../HeroSection/HeroSection";
import { PortfolioSection } from "../Portfolio/PortfolioSection";
import { CoreSystemsSection } from "../Portfolio/CoreSystemsSection";
import { portfolioCategories } from "../../lib/portfolio/portfolioCategories";
import type { PortfolioCategoryId } from "../../lib/portfolio/portfolioCategories";
import styles from "./FreelanceLanding.module.scss";

export function FreelanceLanding() {
  const [activeCategoryId, setActiveCategoryId] =
    useState<PortfolioCategoryId>(portfolioCategories[0].id);

  const handleSelectCategory = (id: PortfolioCategoryId) => {
    setActiveCategoryId(id);
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={styles.page}>
      <FreelanceHeader />

      <main className={styles.main}>
        <HeroSection />

        <CoreSystemsSection onCategorySelect={handleSelectCategory} />

        {/* Portfólió modulok grid */}
        <PortfolioSection
          activeCategoryId={activeCategoryId}
          onCategoryChange={setActiveCategoryId}
        />
      </main>
    </div>
  );
}
