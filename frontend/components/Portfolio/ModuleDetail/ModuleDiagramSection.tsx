"use client";

import React from "react";
import { PipelineDiagram } from "./diagrams/PipelineDiagram";
import { ArchitectureDiagram } from "./diagrams/ArchitectureDiagram";
import { SequenceDiagram } from "./diagrams/SequenceDiagram";
import s from "./ModuleDiagramSection.module.scss";

type DiagramItem = {
  type: "pipeline" | "architecture" | "sequence";
  title: string;
  description?: string;
  data: unknown;
};

type Props = {
  diagrams: DiagramItem[];
};

function renderDiagram(item: DiagramItem) {
  switch (item.type) {
    case "pipeline": {
      const data = item.data as { steps?: string[] };
      return data.steps ? <PipelineDiagram steps={data.steps} /> : null;
    }
    case "architecture": {
      const data = item.data as { nodes?: { id: string; label: string }[]; edges?: { from: string; to: string; label?: string }[] };
      return data.nodes && data.edges ? (
        <ArchitectureDiagram nodes={data.nodes} edges={data.edges} />
      ) : null;
    }
    case "sequence":
      return <SequenceDiagram data={item.data} />;
    default:
      return null;
  }
}

export function ModuleDiagramSection({ diagrams }: Props) {
  if (!diagrams?.length) return null;

  return (
    <div className={s.wrapper}>
      {diagrams.map((item, i) => (
        <div key={i} className={s.diagramBlock}>
          <h3 className={s.title}>{item.title}</h3>
          {item.description && (
            <p className={s.description}>{item.description}</p>
          )}
          <div className={s.diagramBox}>{renderDiagram(item)}</div>
        </div>
      ))}
    </div>
  );
}
