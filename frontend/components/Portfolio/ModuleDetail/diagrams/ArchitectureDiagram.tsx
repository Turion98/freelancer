"use client";

import React from "react";
import s from "./ArchitectureDiagram.module.scss";

type Node = { id: string; label: string };
type Edge = { from: string; to: string; label?: string };

type Props = {
  nodes: Node[];
  edges: Edge[];
};

export function ArchitectureDiagram({ nodes }: Props) {
  const get = (id: string) => nodes.find((n) => n.id === id);

  const author = get("author");
  const schema = get("schema");
  const frontend = get("frontend");
  const backend = get("backend");
  const storage = get("storage");
  const runtime = get("runtime");

  // fallback if the expected node structure is not present
  if (!schema || !frontend || !backend || !storage || !runtime) {
    return (
      <div className={s.wrapper}>
        <div className={s.fallbackGrid}>
          {nodes.map((node) => (
            <div key={node.id} className={s.node}>
              {node.label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={s.wrapper}>
      <div className={s.diagram}>
        {author && <div className={`${s.node} ${s.author}`}>{author.label}</div>}

        <div className={`${s.node} ${s.schema}`}>{schema.label}</div>

        <div className={`${s.node} ${s.frontend}`}>{frontend.label}</div>
        <div className={`${s.node} ${s.backend}`}>{backend.label}</div>

        <div className={`${s.node} ${s.storage}`}>{storage.label}</div>
        <div className={`${s.node} ${s.runtime}`}>{runtime.label}</div>

        <div className={`${s.line} ${s.schemaToFrontend}`} />
        <div className={`${s.line} ${s.schemaToBackend}`} />
        <div className={`${s.line} ${s.frontendToStorage}`} />
        <div className={`${s.line} ${s.backendToStorage}`} />
        <div className={`${s.line} ${s.storageToRuntime}`} />

        {author && <div className={`${s.line} ${s.authorToFrontend}`} />}

        <div className={`${s.edgeLabel} ${s.labelAuthor}`}>
          uploads story JSON
        </div>
        <div className={`${s.edgeLabel} ${s.labelSharedLeft}`}>
          shared contract
        </div>
        <div className={`${s.edgeLabel} ${s.labelSharedRight}`}>
          shared contract
        </div>
        <div className={`${s.edgeLabel} ${s.labelStorage}`}>
          accepted story
        </div>
        <div className={`${s.edgeLabel} ${s.labelRuntime}`}>
          runtime-safe content
        </div>
      </div>
    </div>
  );
}