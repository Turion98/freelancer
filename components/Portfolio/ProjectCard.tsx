// app/components/Portfolio/ProjectCard.tsx

import React from "react";
import type { PortfolioProject } from "../../lib/portfolio/portfolioProjects";
import s from "./ProjectCard.module.scss";

type Props = {
  project: PortfolioProject;
};

const statusLabel: Record<PortfolioProject["status"], string> = {
  beta: "Beta",
  live: "Live",
  concept: "Koncept",
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <article className={s.card}>
      {/* --- Always visible part --- */}
      <div className={s.baseContent}>
        <div className={s.headerRow}>
          <span className={s.tag}>{project.tag}</span>
          <span className={`${s.status} ${s[`status_${project.status}`]}`}>
            {statusLabel[project.status]}
          </span>
        </div>

        <h4 className={s.title}>{project.title}</h4>
        <p className={s.summary}>{project.summary}</p>
      </div>

      {/* --- Hidden until hover (extra content) --- */}
      <div className={s.cardExtra}>
        {project.highlights && project.highlights.length > 0 && (
          <ul className={s.highlightList}>
            {project.highlights.map((h) => (
              <li key={h} className={s.highlight}>
                {h}
              </li>
            ))}
          </ul>
        )}

        <a href={`#${project.anchorId}`} className={s.moreLink}>
          <span>Tudj meg többet</span>
          <span className={s.chevron}>↘</span>
        </a>
      </div>
    </article>
  );
};
