"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import type {
  PortfolioCategory,
  PortfolioCategoryId,
} from "../../lib/portfolio/portfolioCategories";
import { coreSystems } from "../../lib/portfolio/coreSystems";
import { portfolioProjects } from "../../lib/portfolio/portfolioProjects";
import s from "./CategoryCircleSelector.module.scss";

type Props = {
  categories: PortfolioCategory[];
  activeCategoryId: PortfolioCategoryId;
  onChange: (id: PortfolioCategoryId) => void;
};

type Side = "left" | "right";

/** Bal oldal: AI UX (coreSystems[1]), jobb oldal: Questell (coreSystems[0]) */
const LEFT_SYSTEM_INDEX = 1;
const RIGHT_SYSTEM_INDEX = 0;

const STEM_OFFSET = 38;
const ENDPOINT_STEM_OFFSET = 14;
const ENDPOINT_STEM_OFFSET_LEFT = 30; /* bal: törzs jobbra, így a pontok biztosan balra esnek → szárak kifelé */
const ARC_BASE = 6;
const ARC_STEP = 10;

export const CategoryCircleSelector: React.FC<Props> = ({
  categories,
  activeCategoryId,
  onChange,
}) => {
  const [selectedSide, setSelectedSide] = useState<Side | null>(null);
  const [hoveredSide, setHoveredSide] = useState<Side | null>(null);
  const [connectionPaths, setConnectionPaths] = useState<{ left: string[]; right: string[] }>({ left: [], right: [] });
  const [endpointPaths, setEndpointPaths] = useState<{ left: string[][]; right: string[][] }>({ left: [], right: [] });

  const layoutRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const leftNodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const rightNodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const leftEndpointRefs = useRef<(HTMLSpanElement | null)[][]>([]);
  const rightEndpointRefs = useRef<(HTMLSpanElement | null)[][]>([]);

  const leftSystem = useMemo(() => coreSystems[LEFT_SYSTEM_INDEX], []);
  const rightSystem = useMemo(() => coreSystems[RIGHT_SYSTEM_INDEX], []);

  const leftCategories = useMemo(
    () =>
      leftSystem.portfolioCategoryIds
        .map((id) => categories.find((c) => c.id === id))
        .filter((c): c is PortfolioCategory => Boolean(c)),
    [categories, leftSystem.portfolioCategoryIds]
  );

  const rightCategories = useMemo(
    () =>
      rightSystem.portfolioCategoryIds
        .map((id) => categories.find((c) => c.id === id))
        .filter((c): c is PortfolioCategory => Boolean(c)),
    [categories, rightSystem.portfolioCategoryIds]
  );

  const leftFirstId = leftCategories[0]?.id;
  const rightFirstId = rightCategories[0]?.id;

  const leftPanelVisible = selectedSide === "left" || hoveredSide === "left";
  const leftPanelFaint = leftPanelVisible && selectedSide !== "left";
  const rightPanelVisible = selectedSide === "right" || hoveredSide === "right";
  const rightPanelFaint = rightPanelVisible && selectedSide !== "right";

  useEffect(() => {
    const layout = layoutRef.current;
    const panel = panelRef.current;
    if (!layout || !panel) return;

    const updatePaths = () => {
      const layoutRect = layout.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      const panelCx = panelRect.left - layoutRect.left + panelRect.width / 2;
      const panelCy = panelRect.top - layoutRect.top + panelRect.height / 2;
      const panelLeft = panelRect.left - layoutRect.left;
      const panelRight = panelRect.right - layoutRect.left;
      const branchXLeft = panelLeft - STEM_OFFSET;
      const branchXRight = panelRight + STEM_OFFSET;

      const leftPaths: string[] = [];
      for (let i = 0; i < leftCategories.length; i++) {
        const el = leftNodeRefs.current[i];
        const ny = el
          ? (el.getBoundingClientRect().top - layoutRect.top + el.getBoundingClientRect().height / 2)
          : panelCy + (i - (leftCategories.length - 1) / 2) * 48;
        const nodeRightEdge = el
          ? el.getBoundingClientRect().right - layoutRect.left
          : branchXLeft - 60;
        leftPaths.push(`M ${panelLeft} ${panelCy} L ${branchXLeft} ${panelCy} L ${branchXLeft} ${ny} L ${nodeRightEdge} ${ny}`);
      }
      const leftMidIdx =
        leftCategories.length === 0
          ? -1
          : leftPaths.length > 0
            ? Math.min(
                Math.floor(leftCategories.length / 2),
                leftPaths.length - 1
              )
            : -1;
      if (leftPaths.length > 0 && leftMidIdx >= 0) {
        const el = leftNodeRefs.current[leftMidIdx];
        const ny = el
          ? (el.getBoundingClientRect().top - layoutRect.top + el.getBoundingClientRect().height / 2)
          : panelCy;
        const nodeRightEdge = el
          ? el.getBoundingClientRect().right - layoutRect.left
          : branchXLeft - 60;
        leftPaths[leftMidIdx] = `M ${panelCx} ${panelCy} L ${branchXLeft} ${panelCy} L ${branchXLeft} ${ny} L ${nodeRightEdge} ${ny}`;
      }

      const rightPaths: string[] = [];
      for (let i = 0; i < rightCategories.length; i++) {
        const el = rightNodeRefs.current[i];
        const ny = el
          ? (el.getBoundingClientRect().top - layoutRect.top + el.getBoundingClientRect().height / 2)
          : panelCy + (i - (rightCategories.length - 1) / 2) * 48;
        const nodeLeftEdge = el
          ? el.getBoundingClientRect().left - layoutRect.left
          : branchXRight + 60;
        rightPaths.push(`M ${panelRight} ${panelCy} L ${branchXRight} ${panelCy} L ${branchXRight} ${ny} L ${nodeLeftEdge} ${ny}`);
      }
      const rightMidIdx =
        rightCategories.length === 0
          ? -1
          : rightPaths.length > 0
            ? Math.min(
                Math.floor(rightCategories.length / 2),
                rightPaths.length - 1
              )
            : -1;
      if (rightPaths.length > 0 && rightMidIdx >= 0) {
        const el = rightNodeRefs.current[rightMidIdx];
        const ny = el
          ? (el.getBoundingClientRect().top - layoutRect.top + el.getBoundingClientRect().height / 2)
          : panelCy;
        const nodeLeftEdge = el
          ? el.getBoundingClientRect().left - layoutRect.left
          : branchXRight + 60;
        rightPaths[rightMidIdx] = `M ${panelCx} ${panelCy} L ${branchXRight} ${panelCy} L ${branchXRight} ${ny} L ${nodeLeftEdge} ${ny}`;
      }

      const leftEps: string[][] = [];
      for (let i = 0; i < leftCategories.length; i++) {
        const nodeEl = leftNodeRefs.current[i];
        const nodeLeft = nodeEl ? nodeEl.getBoundingClientRect().left - layoutRect.left : 0;
        const nodeCy = nodeEl ? nodeEl.getBoundingClientRect().top - layoutRect.top + nodeEl.getBoundingClientRect().height / 2 : 0;
        const branchX = nodeLeft - ENDPOINT_STEM_OFFSET_LEFT;
        const projects = portfolioProjects.filter((p) => p.categoryId === leftCategories[i].id);
        const paths: string[] = [];
        for (let j = 0; j < projects.length; j++) {
          const ep = leftEndpointRefs.current[i]?.[j];
          if (!ep) continue;
          const r = ep.getBoundingClientRect();
          let ex = r.left - layoutRect.left + r.width / 2;
          const ey = r.top - layoutRect.top + r.height / 2;
          if (ex >= branchX) ex = branchX - 2;
          paths.push(`M ${nodeLeft} ${nodeCy} L ${branchX} ${nodeCy} L ${branchX} ${ey} L ${ex} ${ey}`);
        }
        leftEps.push(paths);
      }

      const rightEps: string[][] = [];
      for (let i = 0; i < rightCategories.length; i++) {
        const nodeEl = rightNodeRefs.current[i];
        const nodeRight = nodeEl ? nodeEl.getBoundingClientRect().right - layoutRect.left : 0;
        const nodeCy = nodeEl ? nodeEl.getBoundingClientRect().top - layoutRect.top + nodeEl.getBoundingClientRect().height / 2 : 0;
        const branchX = nodeRight + ENDPOINT_STEM_OFFSET;
        const projects = portfolioProjects.filter((p) => p.categoryId === rightCategories[i].id);
        const paths: string[] = [];
        for (let j = 0; j < projects.length; j++) {
          const ep = rightEndpointRefs.current[i]?.[j];
          if (!ep) continue;
          const r = ep.getBoundingClientRect();
          const ex = r.left - layoutRect.left + r.width / 2;
          const ey = r.top - layoutRect.top + r.height / 2;
          paths.push(`M ${nodeRight} ${nodeCy} L ${branchX} ${nodeCy} L ${branchX} ${ey} L ${ex} ${ey}`);
        }
        rightEps.push(paths);
      }

      setConnectionPaths({ left: leftPaths, right: rightPaths });
      setEndpointPaths({ left: leftEps, right: rightEps });
    };

    const t = setTimeout(updatePaths, 80);
    const ro = new ResizeObserver(updatePaths);
    ro.observe(layout);
    return () => {
      clearTimeout(t);
      ro.disconnect();
    };
  }, [selectedSide, leftPanelVisible, rightPanelVisible, leftCategories.length, rightCategories.length, activeCategoryId]);

  const handleLeftClick = () => {
    if (selectedSide === "left") {
      setSelectedSide(null);
    } else {
      setSelectedSide("left");
      if (leftFirstId) onChange(leftFirstId);
    }
  };

  const handleRightClick = () => {
    if (selectedSide === "right") {
      setSelectedSide(null);
    } else {
      setSelectedSide("right");
      if (rightFirstId) onChange(rightFirstId);
    }
  };

  const circleClass = [
    s.circleOuter,
    !selectedSide ? s.circleInactive : "",
    selectedSide === "left" ? s.circleLeftActive : "",
    selectedSide === "right" ? s.circleRightActive : "",
  ].filter(Boolean).join(" ");

  const showLeftLines = selectedSide === "left";
  const showRightLines = selectedSide === "right";

  return (
    <div ref={layoutRef} className={s.layout}>
      <aside
        className={`${s.sidePanel} ${!leftPanelVisible ? s.sidePanelHidden : ""} ${leftPanelFaint ? s.sidePanelFaint : ""}`}
        aria-label={leftSystem.selectorLabel}
        aria-hidden={!leftPanelVisible}
      >
        <ul className={s.categoryList}>
          {leftCategories.map((cat, i) => {
            const projects = portfolioProjects.filter((p) => p.categoryId === cat.id);
            const isActive = activeCategoryId === cat.id;
            const isFaint = leftPanelFaint && !isActive;
            return (
              <li key={cat.id} className={s.categoryListItem}>
                {projects.length > 0 && (
                  <div className={`${s.endpointGroup} ${s.endpointGroupLeft}`} aria-hidden>
                    {projects.map((project, j) => (
                      <span
                        key={project.id}
                        className={s.endpointDotWrap}
                        style={{ marginLeft: j * 10 }}
                      >
                        <span
                          ref={(el) => {
                            if (!leftEndpointRefs.current[i]) leftEndpointRefs.current[i] = [];
                            leftEndpointRefs.current[i][j] = el;
                          }}
                          className={`${s.endpointDot} ${isFaint ? s.endpointDotFaint : ""} ${isActive ? s.endpointDotActive : ""}`}
                        />
                      </span>
                    ))}
                  </div>
                )}
                <button
                  ref={(el) => { leftNodeRefs.current[i] = el; }}
                  type="button"
                  className={`${s.categoryChip} ${isActive ? s.categoryChipActive : ""}`}
                  onClick={() => onChange(cat.id)}
                >
                  {cat.shortLabel}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <div
        className={s.centerCircleWrap}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div ref={panelRef} className={circleClass}>
          <span className={s.midline} aria-hidden />
          <button
            type="button"
            className={`${s.halfButton} ${s.halfLeft}`}
            onClick={handleLeftClick}
            onMouseEnter={() => setHoveredSide("left")}
            aria-label={`${leftSystem.selectorLabel} – kategóriák`}
          >
            <span className={s.halfLabel}>{leftSystem.selectorLabel}</span>
          </button>
          <button
            type="button"
            className={`${s.halfButton} ${s.halfRight}`}
            onClick={handleRightClick}
            onMouseEnter={() => setHoveredSide("right")}
            aria-label={`${rightSystem.selectorLabel} – kategóriák`}
          >
            <span className={s.halfLabel}>{rightSystem.selectorLabel}</span>
          </button>
        </div>
      </div>

      <aside
        className={`${s.sidePanel} ${!rightPanelVisible ? s.sidePanelHidden : ""} ${rightPanelFaint ? s.sidePanelFaint : ""}`}
        aria-label={rightSystem.selectorLabel}
        aria-hidden={!rightPanelVisible}
      >
        <ul className={s.categoryList}>
          {rightCategories.map((cat, i) => {
            const projects = portfolioProjects.filter((p) => p.categoryId === cat.id);
            const isActive = activeCategoryId === cat.id;
            const isFaint = rightPanelFaint && !isActive;
            return (
              <li key={cat.id} className={s.categoryListItem}>
                <button
                  ref={(el) => { rightNodeRefs.current[i] = el; }}
                  type="button"
                  className={`${s.categoryChip} ${isActive ? s.categoryChipActive : ""}`}
                  onClick={() => onChange(cat.id)}
                >
                  {cat.shortLabel}
                </button>
                {projects.length > 0 && (
                  <div className={`${s.endpointGroup} ${s.endpointGroupRight}`} aria-hidden>
                    {projects.map((project, j) => (
                      <span
                        key={project.id}
                        className={s.endpointDotWrap}
                        style={{ marginLeft: ARC_BASE + j * ARC_STEP }}
                      >
                        <span
                          ref={(el) => {
                            if (!rightEndpointRefs.current[i]) rightEndpointRefs.current[i] = [];
                            rightEndpointRefs.current[i][j] = el;
                          }}
                          className={`${s.endpointDot} ${isFaint ? s.endpointDotFaint : ""} ${isActive ? s.endpointDotActive : ""}`}
                        />
                      </span>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {connectionPaths.left.length > 0 && (
        <svg className={s.connectionsSvg} aria-hidden>
          <defs>
            <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(100, 160, 255, 0.5)" />
              <stop offset="100%" stopColor="rgba(120, 180, 255, 0.85)" />
            </linearGradient>
            <linearGradient id="lineGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(120, 180, 255, 0.85)" />
              <stop offset="100%" stopColor="rgba(100, 160, 255, 0.5)" />
            </linearGradient>
            <linearGradient id="lineGradCyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 200, 220, 0.6)" />
              <stop offset="100%" stopColor="rgba(0, 255, 255, 0.9)" />
            </linearGradient>
          </defs>
          {showLeftLines && connectionPaths.left.map((d, i) => (
            <path
              key={`left-${i}`}
              className={s.connectionPath}
              d={d}
              fill="none"
              stroke="url(#lineGradLeft)"
              strokeWidth="2.2"
              ref={(el) => {
                if (el) {
                  const len = el.getTotalLength();
                  el.style.setProperty("--path-len", String(len));
                }
              }}
            />
          ))}
          {showRightLines && connectionPaths.right.map((d, i) => (
            <path
              key={`right-${i}`}
              className={s.connectionPath}
              d={d}
              fill="none"
              stroke="url(#lineGradRight)"
              strokeWidth="2.2"
              ref={(el) => {
                if (el) {
                  const len = el.getTotalLength();
                  el.style.setProperty("--path-len", String(len));
                }
              }}
            />
          ))}
          {showLeftLines && activeCategoryId && endpointPaths.left.map((paths, i) =>
            leftCategories[i]?.id === activeCategoryId && paths?.length
              ? paths.map((d, j) => (
                  <path
                    key={`left-ep-${i}-${j}`}
                    className={s.endpointPath}
                    d={d}
                    fill="none"
                    stroke="url(#lineGradCyan)"
                    strokeWidth="1.8"
                    ref={(el) => {
                      if (el) el.style.setProperty("--path-len", String(el.getTotalLength()));
                    }}
                  />
                ))
              : null
          )}
          {showRightLines && activeCategoryId && endpointPaths.right.map((paths, i) =>
            rightCategories[i]?.id === activeCategoryId && paths?.length
              ? paths.map((d, j) => (
                  <path
                    key={`right-ep-${i}-${j}`}
                    className={s.endpointPath}
                    d={d}
                    fill="none"
                    stroke="url(#lineGradCyan)"
                    strokeWidth="1.8"
                    ref={(el) => {
                      if (el) el.style.setProperty("--path-len", String(el.getTotalLength()));
                    }}
                  />
                ))
              : null
          )}
        </svg>
      )}
    </div>
  );
};
