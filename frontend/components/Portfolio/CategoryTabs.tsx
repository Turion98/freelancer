// app/components/Portfolio/CategoryTabs.tsx
"use client";

import React from "react";
import type { PortfolioCategory, PortfolioCategoryId } from "../../lib/portfolio/portfolioCategories";
import s from "./CategoryTabs.module.scss";

type Props = {
  categories: PortfolioCategory[];
  activeCategoryId: PortfolioCategoryId;
  onChange: (id: PortfolioCategoryId) => void;
};

export const CategoryTabs: React.FC<Props> = ({
  categories,
  activeCategoryId,
  onChange,
}) => {
  return (
    <div className={s.wrapper}>
      {categories.map((cat) => {
        const isActive = cat.id === activeCategoryId;
        return (
          <button
            key={cat.id}
            type="button"
            className={`${s.tab} ${isActive ? s.tabActive : ""}`}
            onClick={() => onChange(cat.id)}
          >
            <span className={s.label}>{cat.shortLabel}</span>
            <span className={s.desc}>{cat.description}</span>
          </button>
        );
      })}
    </div>
  );
};
