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

  const actorIndex = new Map(actors.map((actor, i) => [actor.id, i]));
  const gridTemplateColumns = `repeat(${actors.length}, minmax(140px, 1fr))`;

  return (
    <div className={s.wrapper}>
      <div className={s.diagram} style={{ gridTemplateColumns }}>
        {actors.map((actor) => (
          <div key={actor.id} className={s.actor}>
            <div className={s.actorCard}>{actor.label}</div>
            <div className={s.actorLine} />
          </div>
        ))}

        <div className={s.steps}>
          {steps.map((step, i) => {
            const fromIndex = actorIndex.get(step.from);
            const toIndex = actorIndex.get(step.to);

            if (fromIndex === undefined || toIndex === undefined) {
              return null;
            }

            const start = Math.min(fromIndex, toIndex) + 1;
            const end = Math.max(fromIndex, toIndex) + 1;
            const isForward = fromIndex < toIndex;

            return (
              <div
                key={`${step.from}-${step.to}-${i}`}
                className={s.stepRow}
                style={{ gridTemplateColumns }}
              >
                <div
                  className={`${s.message} ${
                    isForward ? s.forward : s.backward
                  }`}
                  style={{
                    gridColumn: `${start} / ${end + 1}`,
                  }}
                >
                  <div className={s.arrowLine} />
                  <div className={s.arrowHead} />
                  <div className={s.messageCard}>
                    <div className={s.messageIndex}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className={s.messageLabel}>{step.label}</div>
                    {step.detail ? (
                      <div className={s.messageDetail}>{step.detail}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}