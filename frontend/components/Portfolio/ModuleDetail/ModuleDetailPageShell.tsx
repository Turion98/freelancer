"use client";

import React from "react";
import type { ModuleDetailData } from "../../../lib/portfolio/moduleDetailTypes";
import { ModuleHero } from "./ModuleHero";
import { ModuleSnapshotGrid } from "./ModuleSnapshotGrid";
import { ModuleNarrativeSection } from "./ModuleNarrativeSection";
import { ModuleDiagramSection } from "./ModuleDiagramSection";
import { ModuleFlowSection } from "./ModuleFlowSection";
import { ModuleResponsibilitiesSection } from "./ModuleResponsibilitiesSection";
import { RuntimeSafetySection } from "./RuntimeSafetySection";
import { ModuleOutcomeSection } from "./ModuleOutcomeSection";
import { ModuleTakeawaysSection } from "./ModuleTakeawaysSection";
import { RelatedModulesSection } from "./RelatedModulesSection";
import s from "./ModuleDetailPageShell.module.scss";

type Props = {
  data: ModuleDetailData;
};

export function ModuleDetailPageShell({ data }: Props) {
  return (
    <div className={s.pageBg}>
      <article className={s.shell} id={data.id}>
      <ModuleHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        lead={data.hero.lead}
        chips={data.hero.chips}
      />
      <ModuleSnapshotGrid items={data.snapshot} />
      <ModuleNarrativeSection
        overview={data.overview}
        problem={data.problem}
        solution={data.solution}
        contentStructure={data.contentStructure}
      />
      {data.diagrams && data.diagrams.length > 0 && (
        <ModuleDiagramSection diagrams={data.diagrams} />
      )}
      {data.flow && (
        <ModuleFlowSection title={data.flow.title} steps={data.flow.steps} />
      )}
      {data.responsibilities && data.responsibilities.length > 0 && (
        <ModuleResponsibilitiesSection responsibilities={data.responsibilities} />
      )}
      {data.runtimeSafety && (
        <RuntimeSafetySection
          title={data.runtimeSafety.title}
          paragraphs={data.runtimeSafety.paragraphs}
          preventedIssues={data.runtimeSafety.preventedIssues}
        />
      )}
      <ModuleOutcomeSection outcome={data.outcome} />
      <ModuleTakeawaysSection takeaways={data.takeaways} />
      {data.relatedModules && data.relatedModules.length > 0 && (
        <RelatedModulesSection relatedModules={data.relatedModules} />
      )}
      </article>
    </div>
  );
}
