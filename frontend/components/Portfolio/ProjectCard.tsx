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

  // 2) Content Schema & Validation System – külön oldal
  if (project.id === "content-schema-validation") {
    return "/freelance/content-schema-validation";
  }

  // 3) Backend Story Resolution & Page API – külön oldal
  if (project.id === "backend-story-resolution") {
    return "/freelance/backend-story-resolution";
  }

  // 4) Client Cache & Prefetch Layer – külön oldal
  if (project.id === "client-cache-prefetch-layer") {
    return "/freelance/client-cache-prefetch-layer";
  }

  // 5) Dynamic Story Renderer – külön oldal
  if (project.id === "dynamic-story-renderer") {
    return "/freelance/dynamic-story-renderer";
  }

  // 6) Decision Flow Runtime Engine – külön oldal
  if (project.id === "decision-runtime-engine") {
    return "/freelance/decision-runtime-engine";
  }

  // 7) Runtime State Management System – külön oldal
  if (project.id === "runtime-state-management-system") {
    return "/freelance/runtime-state-management-system";
  }

  // 8) Conditional Logic & Rule Engine – külön oldal
  if (project.id === "conditional-logic-rule-engine") {
    return "/freelance/conditional-logic-rule-engine";
  }

  // 9) Fragment & Flag State System – külön oldal
  if (project.id === "fragment-flag-state-system") {
    return "/freelance/fragment-flag-state-system";
  }

  // 10) Frontend Event Tracking & Identity Layer – külön oldal
  if (project.id === "frontend-event-tracking-identity-layer") {
    return "/freelance/frontend-event-tracking-identity-layer";
  }

  // 11) Client Event Queue & Batch Upload System – külön oldal
  if (project.id === "client-event-queue-batch-upload-system") {
    return "/freelance/client-event-queue-batch-upload-system";
  }

  // 12) Backend Event Ingestion & Append-Only Storage – külön oldal
  if (project.id === "backend-event-ingestion-append-only-storage") {
    return "/freelance/backend-event-ingestion-append-only-storage";
  }

  // 13) Reporting & Decision Path Analytics Engine – külön oldal
  if (project.id === "reporting-decision-path-analytics-engine") {
    return "/freelance/reporting-decision-path-analytics-engine";
  }

  // 14) Minden más egyelőre anchor (később adhatunk nekik külön oldalt)
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
