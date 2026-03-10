"use client";

import React from "react";
import s from "./ModuleNarrativeSection.module.scss";

type Props = {
  overview?: { paragraphs: string[] };
  problem: { intro?: string; title?: string; points: string[]; examples?: string[] };
  solution: { intro?: string; points?: string[]; paragraphs?: string[] };
  contentStructure?: {
    title: string;
    intro?: string;
    storyRootFields?: string[];
    pageFields?: string[];
    supportedInteractions?: string[];
  };
};

export function ModuleNarrativeSection({
  overview,
  problem,
  solution,
  contentStructure,
}: Props) {
  return (
    <div className={s.section}>
      {overview?.paragraphs && overview.paragraphs.length > 0 && (
        <div className={s.paragraphs}>
          {overview.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      <div className={s.problemSolutionBlock}>
        <p className={s.intro}>{problem.intro}</p>
        <ul className={s.list}>
          {problem.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        {problem.examples && problem.examples.length > 0 && (
          <div className={s.examples}>
            <div className={s.examplesLabel}>Examples</div>
            <ul className={s.list}>
              {problem.examples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className={s.problemSolutionBlock}>
        {solution.intro && <p className={s.intro}>{solution.intro}</p>}
        {(solution.points?.length ?? 0) > 0 ? (
          <ul className={s.list}>
            {solution.points!.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        ) : solution.paragraphs && solution.paragraphs.length > 0 ? (
          <div className={s.paragraphs}>
            {solution.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : null}
      </div>

      {contentStructure && (
        <div className={s.contentStructureBlock}>
          <h3 className={s.sectionTitle}>{contentStructure.title}</h3>
          {contentStructure.intro && (
            <p className={s.intro}>{contentStructure.intro}</p>
          )}
          {contentStructure.storyRootFields &&
            contentStructure.storyRootFields.length > 0 && (
              <div>
                <div className={s.fieldLabel}>Story root fields</div>
                <div className={s.fieldList}>
                  {contentStructure.storyRootFields.map((f) => (
                    <span key={f} className={s.fieldTag}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}
          {contentStructure.pageFields &&
            contentStructure.pageFields.length > 0 && (
              <div style={{ marginTop: 12 }}>
                <div className={s.fieldLabel}>Page fields</div>
                <div className={s.fieldList}>
                  {contentStructure.pageFields.map((f) => (
                    <span key={f} className={s.fieldTag}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}
          {contentStructure.supportedInteractions &&
            contentStructure.supportedInteractions.length > 0 && (
              <div style={{ marginTop: 12 }}>
                <ul className={s.interactionsList}>
                  {contentStructure.supportedInteractions.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      )}
    </div>
  );
}
