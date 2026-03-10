"use client";

"use client";

import React from "react";
import s from "./SequenceDiagram.module.scss";

type SequenceDiagramColumn = {
  id: string;
  label: string;
};

type SequenceDiagramRow = {
  id: string;
};

type SequenceDiagramItemVariant = "forward" | "backward" | "self";

type SequenceDiagramItem = {
  id: string;
  row: string;
  column: string;
  colSpan?: number;
  variant: SequenceDiagramItemVariant;
  stepNumber: number;
  label: string;
  detail?: string;
};

type SequenceDiagramData = {
  columns: SequenceDiagramColumn[];
  rows: SequenceDiagramRow[];
  items: SequenceDiagramItem[];
};

type Props = {
  data: SequenceDiagramData;
};

export function SequenceDiagram({ data }: Props) {
  const { columns, rows, items } = data;

  const columnIndex = new Map<string, number>(
    columns.map((column, index) => [column.id, index])
  );

  const colCount = columns.length;
  const gridCols = `repeat(${colCount}, 1fr)`;

  return (
    <div className={s.wrapper}>
      <div className={s.actors} style={{ gridTemplateColumns: gridCols }}>
        {columns.map((column) => (
          <div key={column.id} className={s.actor}>
            <span className={s.actorLabel}>{column.label}</span>
          </div>
        ))}
      </div>

      <div className={s.steps}>
        {rows.map((row) => {
          const rowItems = items.filter((item) => item.row === row.id);

          if (!rowItems.length) {
            return null;
          }

          return (
            <div
              key={row.id}
              className={s.stepRow}
              style={{ gridTemplateColumns: gridCols }}
            >
              {rowItems.map((item) => {
                const colIdx = columnIndex.get(item.column);
                if (colIdx === undefined) return null;

                const startCol = colIdx + 1;
                const endCol = item.colSpan
                  ? startCol + item.colSpan
                  : startCol + 1;

                const isSelf = item.variant === "self";

                const stepClass =
                  item.variant === "self"
                    ? s.selfStep
                    : item.variant === "backward"
                    ? s.backwardStep
                    : s.forwardStep;

                return (
                  <div
                    key={item.id}
                    className={stepClass}
                    style={{
                      gridColumn: item.colSpan
                        ? `${startCol} / ${endCol}`
                        : `${startCol}`,
                    }}
                  >
                    <div className={s.line} />
                    {!isSelf && <div className={s.arrow} />}
                    <div className={s.labelCard}>
                      <span className={s.stepNum}>
                        {String(item.stepNumber).padStart(2, "0")}
                      </span>
                      <span className={s.stepLabel}>{item.label}</span>
                      {item.detail && (
                        <span className={s.stepDetail}>{item.detail}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
