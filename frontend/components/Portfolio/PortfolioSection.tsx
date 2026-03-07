// app/components/Portfolio/PortfolioSection.tsx
"use client";

import React, { useState } from "react";
import s from "./PortfolioSection.module.scss";
import {
  portfolioCategories,
  type PortfolioCategoryId,
} from "../../lib/portfolio/portfolioCategories";
import { portfolioProjects } from "../../lib/portfolio/portfolioProjects";
import { CategoryTabs } from "./CategoryTabs";
import { CategoryOverlay } from "./CategoryOverlay";

export const PortfolioSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<PortfolioCategoryId>(
    portfolioCategories[0].id
  );

  const [prevCategoryId, setPrevCategoryId] =
    useState<PortfolioCategoryId | null>(null);

  const handleChange = (newId: PortfolioCategoryId) => {
    if (newId === activeCategoryId) return; // felesleges re-render elkerülése
    setPrevCategoryId(activeCategoryId);
    setActiveCategoryId(newId);
  };

  const activeCategory = portfolioCategories.find(
    (c) => c.id === activeCategoryId
  );
  const prevCategory = prevCategoryId
    ? portfolioCategories.find((c) => c.id === prevCategoryId)
    : undefined;

  const activeProjects = portfolioProjects.filter(
    (p) => p.categoryId === activeCategoryId
  );
  const prevProjects =
    prevCategoryId != null
      ? portfolioProjects.filter((p) => p.categoryId === prevCategoryId)
      : [];

  if (!activeCategory) return null;

  return (
    <section id="portfolio" className={s.section}>
      <div className={s.sectionHeader}>
        <h2 className={s.title}>Portfólió modulok</h2>
        <p className={s.subtitle}>
          Nem klasszikus „referenciák”, hanem modulok: AI-alapú UX rendszer,
          ami a saját briefeden mutatja meg, mit tud.
        </p>
      </div>

      <CategoryTabs
        categories={portfolioCategories}
        activeCategoryId={activeCategoryId}
        onChange={handleChange}
      />

      {/* Két overlay egymás fölött: exit (kicsúszik), enter (becsúszik) */}
      <div className={s.overlayStack}>
        {prevCategory && (
          <CategoryOverlay
            key={`prev-${prevCategory.id}`}
            category={prevCategory}
            projects={prevProjects}
            mode="exit"
          />
        )}

        {activeCategory && (
          <CategoryOverlay
            key={`active-${activeCategory.id}`}
            category={activeCategory}
            projects={activeProjects}
            mode="enter"
          />
        )}
      </div>
    </section>
  );
};
