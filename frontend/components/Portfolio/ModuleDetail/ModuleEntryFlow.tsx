"use client";

import React from "react";
import type { ModuleDetailData } from "../../../lib/portfolio/moduleDetailTypes";
import s from "./ModuleEntryFlow.module.scss";

type Props = NonNullable<ModuleDetailData["entryFlow"]>;

export function ModuleEntryFlow({ eyebrow, title, lead, steps }: Props) {
  return (
    <section className={s.section} aria-labelledby="entry-flow-title">
      <div className={s.header}>
        {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
        <h2 id="entry-flow-title" className={s.title}>
          {title}
        </h2>
        {lead && <p className={s.lead}>{lead}</p>}
      </div>

      <div className={s.flow}>
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div className={s.connector} aria-hidden />}
            <div className={s.stepCard}>
              <span className={s.stepIndex}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={s.stepTitle}>{step.title}</h3>
              {step.description && (
                <p className={s.stepDescription}>{step.description}</p>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
