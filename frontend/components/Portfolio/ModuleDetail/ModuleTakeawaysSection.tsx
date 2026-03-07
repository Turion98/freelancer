"use client";

import React from "react";
import s from "./ModuleTakeawaysSection.module.scss";

type Props = {
  takeaways: string[];
};

export function ModuleTakeawaysSection({ takeaways }: Props) {
  if (!takeaways?.length) return null;

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Takeaways</h3>
      <div className={s.tags}>
        {takeaways.map((tag, i) => (
          <span key={i} className={s.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
