"use client";

import React from "react";
import s from "./ModuleResponsibilitiesSection.module.scss";

type Block = { title: string; items: string[] };

type Props = {
  responsibilities: Block[];
};

export function ModuleResponsibilitiesSection({ responsibilities }: Props) {
  if (!responsibilities?.length) return null;

  return (
    <div className={s.wrapper}>
      {responsibilities.map((block, i) => (
        <div key={i} className={s.block}>
          <h3 className={s.blockTitle}>{block.title}</h3>
          <ul className={s.items}>
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
