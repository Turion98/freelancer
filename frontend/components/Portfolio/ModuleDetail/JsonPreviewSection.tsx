"use client";

import React from "react";
import s from "./JsonPreviewSection.module.scss";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  code: string;
  language?: "json";
};

export function JsonPreviewSection({
  eyebrow,
  title,
  lead,
  code,
  language = "json",
}: Props) {
  return (
    <section className={s.section} aria-labelledby="json-preview-title">
      <div className={s.header}>
        {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
        <h2 id="json-preview-title" className={s.title}>
          {title}
        </h2>
        {lead && <p className={s.lead}>{lead}</p>}
      </div>

      <div className={s.codeShell}>
        <div className={s.codeTopbar}>
          <span className={s.dot} />
          <span className={s.dot} />
          <span className={s.dot} />
          <span className={s.lang}>{language}</span>
        </div>

        <pre className={s.pre}>
          <code>{code}</code>
        </pre>
      </div>
    </section>
  );
}