// app/components/Portfolio/ProjectGrid.tsx

import React from "react";
import type { PortfolioProject } from "../../lib/portfolio/portfolioProjects";
import s from "./ProjectGrid.module.scss";
import { ProjectCard } from "./ProjectCard";

type Props = {
  projects: PortfolioProject[];
};

export const ProjectGrid: React.FC<Props> = ({ projects }) => {
  if (!projects.length) {
    return (
      <div className={s.emptyState}>
        <p>Még nincs publikált projekt ezen a kategórián belül. Hamarosan…</p>
      </div>
    );
  }

  return (
    <div className={s.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
