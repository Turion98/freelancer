"use client";

import React from "react";
import type { ModuleDetailData } from "../../../lib/portfolio/moduleDetailTypes";
import { ModuleHero } from "./ModuleHero";
import { ModuleSnapshotGrid } from "./ModuleSnapshotGrid";
import { ModuleNarrativeSection } from "./ModuleNarrativeSection";
import { ArchitectureDiagram } from "./diagrams/ArchitectureDiagram";
import { PipelineDiagram } from "./diagrams/PipelineDiagram";
import { SequenceDiagram } from "./diagrams/SequenceDiagram";
import { ModuleFlowSection } from "./ModuleFlowSection";
import { ModuleResponsibilitiesSection } from "./ModuleResponsibilitiesSection";
import { RuntimeSafetySection } from "./RuntimeSafetySection";
import { ModuleOutcomeSection } from "./ModuleOutcomeSection";
import { ModuleTakeawaysSection } from "./ModuleTakeawaysSection";
import { RelatedModulesSection } from "./RelatedModulesSection";
import s from "./ModuleDetailPageShell.module.scss";
import { JsonPreviewSection } from "./JsonPreviewSection";
import { ModuleEntryFlow } from "./ModuleEntryFlow";

type Props = {
  data: ModuleDetailData;
};

function getDiagramsByType(diagrams: ModuleDetailData["diagrams"]) {
  const architecture = diagrams?.find((d) => d.type === "architecture");
  const pipeline = diagrams?.find((d) => d.type === "pipeline");
  const sequence = diagrams?.find((d) => d.type === "sequence");
  return { architecture, pipeline, sequence };
}

export function ModuleDetailPageShell({ data }: Props) {
  const { architecture: architectureItem, pipeline: pipelineItem, sequence: sequenceItem } =
    getDiagramsByType(data.diagrams);

  return (
    <div className={s.pageBg}>
      <article className={s.shell} id={data.id}>
        <ModuleHero
          eyebrow={data.hero.eyebrow}
          title={data.hero.title}
          lead={data.hero.lead}
          chips={data.hero.chips}
        />
        {data.entryFlow && <ModuleEntryFlow {...data.entryFlow} />}
        {data.jsonPreview && (
          <JsonPreviewSection
            eyebrow={data.jsonPreview.eyebrow}
            title={data.jsonPreview.title}
            lead={data.jsonPreview.lead}
            code={data.jsonPreview.code}
            language={data.jsonPreview.language}
          />
        )}
        <ModuleSnapshotGrid items={data.snapshot} />
        <ModuleNarrativeSection
          overview={data.overview}
          problem={data.problem}
          solution={data.solution}
          contentStructure={data.contentStructure}
        />

        {architectureItem && (
          <div className={s.architectureDiagramSlot}>
            <h3 className={s.diagramSlotTitle}>{architectureItem.title}</h3>
            {architectureItem.description && (
              <p className={s.diagramSlotDescription}>{architectureItem.description}</p>
            )}
            <div className={s.diagramSlotBox}>
              {((): React.ReactNode => {
                const d = architectureItem.data as {
                  layout?: {
                    canvasHeight?: number;
                    nodeWidth?: "lg" | "md";
                    nodeHeight?: "lg" | "md";
                    edgeStyle?: string;
                    labelStyle?: string;
                  };
                  nodes?: {
                    id: string;
                    label: string;
                    x?: number;
                    y?: number;
                    width?: "lg" | "md";
                  }[];
                  edges?: {
                    from: string;
                    to: string;
                    label?: string;
                    sourceAnchor?: "left" | "right" | "top" | "bottom";
                    targetAnchor?: "left" | "right" | "top" | "bottom";
                    route?: "horizontal" | "vertical" | "auto";
                    labelOffsetX?: number;
                  }[];
                };
                return d?.nodes && d?.edges ? (
                  <ArchitectureDiagram
                    layout={d.layout}
                    nodes={d.nodes}
                    edges={d.edges}
                  />
                ) : null;
              })()}
            </div>
          </div>
        )}

        {data.flow && (
          <ModuleFlowSection title={data.flow.title} steps={data.flow.steps} />
        )}

        {pipelineItem && (
          <div className={s.pipelineDiagramSlot}>
            <h3 className={s.diagramSlotTitle}>{pipelineItem.title}</h3>
            {pipelineItem.description && (
              <p className={s.diagramSlotDescription}>{pipelineItem.description}</p>
            )}
            <div className={s.diagramSlotBox}>
              {((): React.ReactNode => {
                const d = pipelineItem.data as { steps?: string[] };
                return d?.steps ? <PipelineDiagram steps={d.steps} /> : null;
              })()}
            </div>
          </div>
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

        {sequenceItem &&
          (() => {
            const seqData = sequenceItem.data as {
              columns?: { id: string; label: string }[];
              rows?: { id: string }[];
              items?: unknown[];
            };
            const hasSequenceData =
              seqData?.columns?.length && seqData?.rows?.length && seqData?.items?.length;
            return hasSequenceData ? (
              <div className={s.sequenceDiagramSlot}>
                <h3 className={s.diagramSlotTitle}>{sequenceItem.title}</h3>
                {sequenceItem.description && (
                  <p className={s.diagramSlotDescription}>{sequenceItem.description}</p>
                )}
                <div className={s.diagramSlotBox}>
                  <SequenceDiagram
                    data={
                      sequenceItem.data as {
                        columns: { id: string; label: string }[];
                        rows: { id: string }[];
                        items: {
                          id: string;
                          row: string;
                          column: string;
                          colSpan?: number;
                          variant: "forward" | "backward" | "self";
                          stepNumber: number;
                          label: string;
                          detail?: string;
                        }[];
                      }
                    }
                  />
                </div>
              </div>
            ) : null;
          })()}

        <ModuleOutcomeSection outcome={data.outcome} />
        <ModuleTakeawaysSection takeaways={data.takeaways} />
        {data.relatedModules && data.relatedModules.length > 0 && (
          <RelatedModulesSection relatedModules={data.relatedModules} />
        )}
      </article>
    </div>
  );
}
