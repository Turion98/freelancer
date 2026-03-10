"use client";

import React, { useMemo } from "react";
import s from "./ArchitectureDiagram.module.scss";

type AnchorSide = "left" | "right" | "top" | "bottom";

type NodeInput = {
  id: string;
  label: string;
  x?: number;
  y?: number;
  width?: "lg" | "md";
};

type NodeNormalized = {
  id: string;
  label: string;
  x: number;
  y: number;
  halfW: number;
  halfH: number;
};

type LayoutInput = {
  canvasHeight?: number;
  nodeWidth?: "lg" | "md";
  nodeHeight?: "lg" | "md";
  edgeStyle?: string;
  labelStyle?: string;
};

type EdgeInput = {
  from: string;
  to: string;
  label?: string;
  sourceAnchor?: AnchorSide;
  targetAnchor?: AnchorSide;
  route?: "horizontal" | "vertical" | "auto";
  labelOffsetX?: number;
  labelOffsetY?: number;
};

type Props = {
  layout?: LayoutInput;
  nodes: NodeInput[];
  edges: EdgeInput[];
};

const HALF_W_LG = 7;
const HALF_W_MD = 6;
const HALF_H_MD = 3.5;
const HALF_H_LG = 4;

function getHalfW(width?: "lg" | "md", layoutDefault?: "lg" | "md"): number {
  const w = width ?? layoutDefault ?? "md";
  return w === "lg" ? HALF_W_LG : HALF_W_MD;
}

function getHalfH(layoutDefault?: "lg" | "md"): number {
  const h = layoutDefault ?? "md";
  return h === "lg" ? HALF_H_LG : HALF_H_MD;
}

function normalizeNodes(
  nodes: NodeInput[],
  layout?: LayoutInput
): NodeNormalized[] {
  if (!nodes?.length) return [];

  const layoutW = layout?.nodeWidth;
  const layoutH = layout?.nodeHeight;
  const defaultHh = getHalfH(layoutH);

  const hasAllCoords = nodes.every(
    (n) => typeof n.x === "number" && typeof n.y === "number"
  );

  if (hasAllCoords) {
    return nodes.map((n) => ({
      id: n.id,
      label: n.label,
      x: Math.max(0, Math.min(100, Number(n.x))),
      y: Math.max(0, Math.min(100, Number(n.y))),
      halfW: getHalfW(n.width, layoutW),
      halfH: defaultHh,
    }));
  }

  const n = nodes.length;
  const cols = Math.min(3, Math.max(1, Math.ceil(Math.sqrt(n))));
  const rows = Math.ceil(n / cols);
  const pad = 12;
  const w = 100 - 2 * pad;
  const h = 100 - 2 * pad;

  return nodes.map((node, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = pad + (col + 0.5) * (w / cols);
    const y = pad + (row + 0.5) * (h / rows);

    return {
      id: node.id,
      label: node.label,
      x,
      y,
      halfW: getHalfW(node.width, layoutW),
      halfH: defaultHh,
    };
  });
}

function getAnchorPoint(
  node: NodeNormalized,
  side: AnchorSide
): { x: number; y: number } {
  const { x, y, halfW, halfH } = node;

  switch (side) {
    case "left":
      return { x: x - halfW, y };
    case "right":
      return { x: x + halfW, y };
    case "top":
      return { x, y: y - halfH };
    case "bottom":
      return { x, y: y + halfH };
    default:
      return { x, y };
  }
}

function getEdgeAnchors(
  fromNode: NodeNormalized,
  toNode: NodeNormalized,
  edge: EdgeInput
): { x1: number; y1: number; x2: number; y2: number } {
  if (edge.sourceAnchor && edge.targetAnchor) {
    const p1 = getAnchorPoint(fromNode, edge.sourceAnchor);
    const p2 = getAnchorPoint(toNode, edge.targetAnchor);
    return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
  }

  const sx = fromNode.x;
  const sy = fromNode.y;
  const tx = toNode.x;
  const ty = toNode.y;
  const dx = tx - sx;
  const dy = ty - sy;

  const hw = fromNode.halfW;
  const hh = fromNode.halfH;
  const tw = toNode.halfW;
  const th = toNode.halfH;

  if (Math.abs(dx) >= Math.abs(dy)) {
    if (dx >= 0) return { x1: sx + hw, y1: sy, x2: tx - tw, y2: ty };
    return { x1: sx - hw, y1: sy, x2: tx + tw, y2: ty };
  }

  if (dy >= 0) return { x1: sx, y1: sy + hh, x2: tx, y2: ty - th };
  return { x1: sx, y1: sy - hh, x2: tx, y2: ty + th };
}

type Point = { x: number; y: number };

type Segment = {
  a: Point;
  b: Point;
  length: number;
  isHorizontal: boolean;
  isVertical: boolean;
};

type ElbowPathResult = {
  d: string;
  points: Point[];
};

function getElbowPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  route: "horizontal" | "vertical" | "auto" = "auto"
): ElbowPathResult {
  const dx = x2 - x1;
  const dy = y2 - y1;

  const horizontalFirst =
    route === "horizontal" || (route !== "vertical" && Math.abs(dx) >= Math.abs(dy));

  if (horizontalFirst) {
    const bendX = x1 + dx * 0.5;

    const points = [
      { x: x1, y: y1 },
      { x: bendX, y: y1 },
      { x: bendX, y: y2 },
      { x: x2, y: y2 },
    ];

    const d = `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y} L ${points[3].x} ${points[3].y}`;
    return { d, points };
  }

  const bendY = y1 + dy * 0.5;

  const points = [
    { x: x1, y: y1 },
    { x: x1, y: bendY },
    { x: x2, y: bendY },
    { x: x2, y: y2 },
  ];

  const d = `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y} L ${points[3].x} ${points[3].y}`;
  return { d, points };
}

function getSegments(points: Point[]): Segment[] {
  const segments: Segment[] = [];

  for (let i = 0; i < points.length - 1; i += 1) {
    const a = points[i];
    const b = points[i + 1];
    const dx = b.x - a.x;
    const dy = b.y - a.y;

    segments.push({
      a,
      b,
      length: Math.abs(dx) + Math.abs(dy),
      isHorizontal: Math.abs(dy) < 0.001,
      isVertical: Math.abs(dx) < 0.001,
    });
  }

  return segments;
}

function getPreferredLabelSegment(
  points: Point[],
  route: "horizontal" | "vertical" | "auto" = "auto"
): Segment | undefined {
  const segments = getSegments(points);

  const horizontals = segments
    .filter((s) => s.isHorizontal)
    .sort((a, b) => b.length - a.length);

  const verticals = segments
    .filter((s) => s.isVertical)
    .sort((a, b) => b.length - a.length);

  if (route === "vertical") {
    return horizontals[0] ?? verticals[0] ?? segments[0];
  }

  if (route === "horizontal") {
    return horizontals[0] ?? verticals[0] ?? segments[0];
  }

  return horizontals[0] ?? verticals[0] ?? segments[0];
}

function getLabelPosition(
  points: Point[],
  edge?: EdgeInput
): { x: number; y: number } {
  const route = edge?.route ?? "auto";
  const chosen = getPreferredLabelSegment(points, route);

  if (!chosen) {
    return {
      x: 50 + (edge?.labelOffsetX ?? 0),
      y: 50 + (edge?.labelOffsetY ?? 0),
    };
  }

  const midX = (chosen.a.x + chosen.b.x) / 2;
  const midY = (chosen.a.y + chosen.b.y) / 2;

  if (chosen.isHorizontal) {
    return {
      x: midX + (edge?.labelOffsetX ?? 0),
      y: midY - 2.2 + (edge?.labelOffsetY ?? 0),
    };
  }

  return {
    x: midX + 2.2 + (edge?.labelOffsetX ?? 0),
    y: midY + (edge?.labelOffsetY ?? 0),
  };
}

export function ArchitectureDiagram({ layout, nodes, edges }: Props) {
  const normalizedNodes = useMemo(
    () => normalizeNodes(Array.isArray(nodes) ? nodes : [], layout),
    [nodes, layout]
  );

  const nodeMap = useMemo(
    () => new Map(normalizedNodes.map((n) => [n.id, n])),
    [normalizedNodes]
  );

  const validEdges = useMemo(() => {
    if (!Array.isArray(edges)) return [];
    return edges.filter((e) => nodeMap.has(e.from) && nodeMap.has(e.to));
  }, [edges, nodeMap]);

  const diagramStyle = useMemo(
    () => (layout?.canvasHeight ? { minHeight: layout.canvasHeight } : undefined),
    [layout?.canvasHeight]
  );

  if (normalizedNodes.length === 0) {
    return (
      <div className={s.wrapper}>
        <div className={s.fallbackMessage}>Diagram data is missing.</div>
      </div>
    );
  }

  return (
    <div className={s.wrapper}>
      <div className={s.diagram} style={diagramStyle}>
        <svg
          className={s.edgesOverlay}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient
              id="architectureDiagramEdgeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
              <stop offset="50%" stopColor="rgba(125,219,227,0.42)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.16)" />
            </linearGradient>
          </defs>

          {validEdges.map((edge, i) => {
            const fromNode = nodeMap.get(edge.from);
            const toNode = nodeMap.get(edge.to);
            if (!fromNode || !toNode) return null;

            const { x1, y1, x2, y2 } = getEdgeAnchors(fromNode, toNode, edge);
            const path = getElbowPath(x1, y1, x2, y2, edge.route ?? "auto");
            const labelPos = getLabelPosition(path.points, edge);

            return (
              <g key={`${edge.from}-${edge.to}-${i}`}>
                <path
                  d={path.d}
                  fill="none"
                  stroke="url(#architectureDiagramEdgeGradient)"
                  strokeWidth="0.52"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {edge.label && (
                  <g
                    className={s.edgeLabelBadge}
                    transform={`translate(${labelPos.x}, ${labelPos.y})`}
                  >
                    <rect
                      className={s.edgeLabelPill}
                      x={-7.8}
                      y={-1.05}
                      width={15.6}
                      height={2.1}
                      rx={1.05}
                      ry={1.05}
                    />
                    <text
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={s.edgeLabelText}
                    >
                      {edge.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {normalizedNodes.map((node) => (
          <div
            key={node.id}
            className={s.node}
            data-node-id={node.id}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className={s.nodeLabel} style={{ whiteSpace: "pre-line" }}>
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}