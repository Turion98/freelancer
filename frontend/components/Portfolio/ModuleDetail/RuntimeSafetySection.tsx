"use client";

import React from "react";
import s from "./RuntimeSafetySection.module.scss";

type Props = {
  title: string;
  paragraphs: string[];
  preventedIssues?: string[];
};

export function RuntimeSafetySection({
  title,
  paragraphs,
  preventedIssues,
}: Props) {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.paragraphs}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {preventedIssues && preventedIssues.length > 0 && (
        <div className={s.preventedIssues}>
          <div className={s.label}>Prevented issues</div>
          <ul>
            {preventedIssues.map((issue, i) => (
              <li key={i}>{issue}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
