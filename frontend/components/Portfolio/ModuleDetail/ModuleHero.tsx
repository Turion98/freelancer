"use client";

import React from "react";
import s from "./ModuleHero.module.scss";

type Props = {
  eyebrow?: string;
  title: string;
  lead: string;
  chips?: string[];
  businessValue?: string;
};

export function ModuleHero({ eyebrow, title, lead, chips, businessValue }: Props) {
  return (
    <header className={s.hero} id="module-hero">
      {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
      <h1 className={s.title}>{title}</h1>
      <p className={s.lead}>{lead}</p>
      {chips && chips.length > 0 && (
        <div className={s.chips}>
          {chips.map((chip) => (
            <span key={chip} className={s.chip}>
              {chip}
            </span>
          ))}
        </div>
      )}
      {businessValue && (
        <div className={s.businessValue}>
          <span className={s.businessValueLabel}>Business Value</span>
          <p className={s.businessValueText}>{businessValue}</p>
        </div>
      )}
    </header>
  );
}
