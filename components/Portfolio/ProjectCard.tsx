// app/components/Portfolio/ProjectCard.tsx

"use client";

import React from "react";
import Link from "next/link";
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

// Eldöntjük, hova mutasson a "Tudj meg többet"
const getDetailHref = (project: PortfolioProject): string => {
  // 1) AI Intake Flow – külön oldal
  if (project.id === "ai-intake-flow") {
    return "/freelance/ai-intake-flow";
  }

  // 2) Minden más egyelőre anchor (később adhatunk nekik külön oldalt)
  if (project.anchorId) {
    return `#${project.anchorId}`;
  }

  // fallback, ha semmi nincs beállítva
  return "#portfolio";
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const detailHref = getDetailHref(project);

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

        <Link href={detailHref} className={s.moreLink}>
          <span>Tudj meg többet</span>
          <span className={s.chevron}>↘</span>
        </Link>
      </div>
    </article>
  );
};
