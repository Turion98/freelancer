"use client";

import React from "react";
import s from "./ModuleOutcomeSection.module.scss";

type Props = {
  outcome: string[];
};

export function ModuleOutcomeSection({ outcome }: Props) {
  if (!outcome?.length) return null;

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Outcome</h3>
      <ul className={s.list}>
        {outcome.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
