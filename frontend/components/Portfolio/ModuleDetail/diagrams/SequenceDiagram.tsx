"use client";

import React from "react";
import s from "./SequenceDiagram.module.scss";

type SequenceActor = {
  id: string;
  label: string;
};

type SequenceStep = {
  from: string;
  to: string;
  label: string;
  detail?: string;
};

type SequenceData = {
  actors: SequenceActor[];
  steps: SequenceStep[];
};

type Props = {
  data: SequenceData;
};

export function SequenceDiagram({ data }: Props) {
  const { actors, steps } = data;
  const actorIndex = new Map(actors.map((a, i) => [a.id, i]));
  const cols = actors.length;
  const gridCols = `repeat(${cols}, 1fr)`;

  return (
    <div className={s.wrapper}>
      <div className={s.actors} style={{ gridTemplateColumns: gridCols }}>
        {actors.map((actor) => (
          <div key={actor.id} className={s.actor}>
            <span className={s.actorLabel}>{actor.label}</span>
          </div>
        ))}
      </div>

      <div className={s.steps}>
        {steps.map((step, i) => {
          const fromIdx = actorIndex.get(step.from);
          const toIdx = actorIndex.get(step.to);
          if (fromIdx === undefined || toIdx === undefined) return null;

          const isSelf = fromIdx === toIdx;
          const start = Math.min(fromIdx, toIdx) + 1;
          const end = Math.max(fromIdx, toIdx) + 2;
          const isForward = fromIdx <= toIdx;

          return (
            <div
              key={`${step.from}-${step.to}-${i}`}
              className={s.stepRow}
              style={{ gridTemplateColumns: gridCols }}
            >
              <div
                className={isSelf ? s.selfStep : isForward ? s.forwardStep : s.backwardStep}
                style={{
                  gridColumn: isSelf ? `${fromIdx + 1}` : `${start} / ${end}`,
                }}
              >
                <div className={s.line} />
                {!isSelf && <div className={s.arrow} />}
                <div className={s.labelCard}>
                  <span className={s.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={s.stepLabel}>{step.label}</span>
                  {step.detail && (
                    <span className={s.stepDetail}>{step.detail}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
