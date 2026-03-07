"use client";

import React from "react";
import s from "./PipelineDiagram.module.scss";

type Props = {
  steps: string[];
};

export function PipelineDiagram({ steps }: Props) {
  return (
    <div className={s.wrapper}>
      <div className={s.timeline}>
        <div className={s.rail} />

        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              className={`${s.item} ${isLeft ? s.left : s.right}`}
            >
              <div className={s.dot} />
              <div className={s.card}>
                <div className={s.index}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className={s.label}>{step}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}