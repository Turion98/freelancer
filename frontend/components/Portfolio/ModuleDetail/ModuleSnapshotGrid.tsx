"use client";

import React from "react";
import s from "./ModuleSnapshotGrid.module.scss";

type Item = { label: string; value: string };

type Props = {
  items: Item[];
};

export function ModuleSnapshotGrid({ items }: Props) {
  return (
    <div className={s.wrapper}>
      <div className={s.grid}>
        {items.map((item) => (
          <div key={item.label} className={s.item}>
            <div className={s.label}>{item.label}</div>
            <div className={s.value}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
