"use client";

import React from "react";
import Link from "next/link";
import s from "./RelatedModulesSection.module.scss";

type Item = { title: string; href: string };

type Props = {
  relatedModules: Item[];
};

export function RelatedModulesSection({ relatedModules }: Props) {
  if (!relatedModules?.length) return null;

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Related modules</h3>
      <div className={s.links}>
        {relatedModules.map((item) => (
          <Link key={item.href} href={item.href} className={s.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
