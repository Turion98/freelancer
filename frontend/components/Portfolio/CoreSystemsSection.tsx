import React from "react";
import { coreSystems } from "../../lib/portfolio/coreSystems";
import type { PortfolioCategoryId } from "../../lib/portfolio/portfolioCategories";
import s from "./CoreSystemsSection.module.scss";
import { CoreSystemCard } from "./CoreSystemCard";

type Props = {
  onCategorySelect?: (id: PortfolioCategoryId) => void;
};

export const CoreSystemsSection: React.FC<Props> = ({ onCategorySelect }) => {
  if (!coreSystems.length) return null;

  return (
    <section className={s.section} aria-labelledby="core-systems-heading">
      <div className={s.inner}>
        <header className={s.header}>
          <h2 id="core-systems-heading" className={s.title}>
            Systems behind this portfolio
          </h2>
          <p className={s.subtitle}>
            A high-level view of the core systems powering the Questell
            platform and the AI-assisted UX layer. Each system groups together
            multiple technical modules from the portfolio.
          </p>
        </header>

        <div className={s.grid}>
          {coreSystems.map((system) => (
            <CoreSystemCard
              key={system.id}
              system={system}
              onCategorySelect={onCategorySelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

