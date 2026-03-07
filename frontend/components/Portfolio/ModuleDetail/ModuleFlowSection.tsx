"use client";

import React from "react";
import s from "./ModuleFlowSection.module.scss";

type Step = { title: string; description: string };

type Props = {
  title: string;
  steps: Step[];
};

export function ModuleFlowSection({ title, steps }: Props) {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.steps}>
        {steps.map((step, i) => (
          <div key={i} className={s.step}>
            <div className={s.stepTitle}>{step.title}</div>
            <div className={s.stepDescription}>{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
