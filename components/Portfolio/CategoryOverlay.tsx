import React from "react";
import type { PortfolioCategory } from "../../lib/portfolio/portfolioCategories";
import type { PortfolioProject } from "../../lib/portfolio/portfolioProjects";
import s from "./CategoryOverlay.module.scss";
import { ProjectGrid } from "./ProjectGrid";

type Props = {
  category: PortfolioCategory;
  projects: PortfolioProject[];
  mode?: "enter" | "exit";
};

export const CategoryOverlay: React.FC<Props> = ({ category, projects, mode = "enter" }) => {
  return (
    <div
      className={
        mode === "exit"
          ? `${s.overlay} ${s.exit}`
          : `${s.overlay} ${s.enter}`
      }
    >
      <div className={s.overlayInner}>
        <header className={s.header}>
          <h3 className={s.title}>{category.label}</h3>
          <p className={s.subtitle}>{category.description}</p>
        </header>

        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
};
