// lib/portfolio/portfolioProjects.ts

import type { PortfolioCategoryId } from "./portfolioCategories";

export type PortfolioProjectStatus = "beta" | "live" | "concept";

export type PortfolioProject = {
  id: string;
  categoryId: PortfolioCategoryId;
  title: string;
  shortLabel: string;
  tag: string;
  status: PortfolioProjectStatus;
  summary: string;
  valueProp: string;
  anchorId: string; // landing oldalon belüli section anchor
  highlights?: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ai-intake-discovery-flow",
    categoryId: "ai-ux",
    title: "AI Intake & Discovery Flow",
    shortLabel: "AI Intake Flow",
    tag: "AI discovery onboarding",
    status: "beta",
    summary:
      "AI-guided kérdéssor, ami pár lépésben feltérképezi az ügyfél igényeit, céljait, korlátait és érettségét.",
    valueProp:
      "Megmutatja, hogyan tervezel AI-alapú bevezető folyamatot, ami már az első perctől strukturálja a briefet.",
    anchorId: "project-ai-intake-discovery-flow",
    highlights: [
      "AI-guided onboarding kérdésáram",
      "Válasz-alapú dinamikus kérdéslogika",
      "Instant összefoglaló: célok, kockázatok, scope-szint",
    ],
  },
  {
    id: "ai-recommendation-layer",
    categoryId: "ai-ux",
    title: "AI-Powered Recommendation Layer",
    shortLabel: "Recommendation Layer",
    tag: "AI recommendation UX",
    status: "concept",
    summary:
      "A rendszer a user válaszai alapján releváns munkákat, szolgáltatáscsomagokat vagy UX megoldásokat emel ki.",
    valueProp:
      "A user nem egy listát kap, hanem testreszabott ajánlót: látja, hol találkoznak az ő igényei a te kompetenciáddal.",
    anchorId: "project-ai-recommendation-layer",
    highlights: [
      "Input-alapú ajánlóréteg (referenciák, csomagok)",
      "AI-driven decision surface, nem csak UI-grid",
      "Portfólió-highlight dinamikus kiemelése",
    ],
  },
  {
    id: "dynamic-offer-generator",
    categoryId: "ai-ux",
    title: "Dynamic Offer & Proposal Generator",
    shortLabel: "Offer Generator",
    tag: "AI proposal outline",
    status: "concept",
    summary:
      "A discovery flow után az AI egy mini-ajánlatot állít össze: scope, workflow, következő lépések – ár nélkül.",
    valueProp:
      "Közvetlenül támogatja a konverziót: a user már egy „félig kész” ajánlattal lép tovább, nem üres kontaktformmal.",
    anchorId: "project-dynamic-offer-generator",
    highlights: [
      "Automatikus ajánlat-váz a válaszokból",
      "Scope + workflow + következő lépések",
      "Letöltés / email-integrációra előkészítve",
    ],
  },
  {
    id: "auto-filled-inquiry-form",
    categoryId: "ai-ux",
    title: "Auto-Filled Inquiry & Project Form",
    shortLabel: "Auto-filled Form",
    tag: "AI-assisted form",
    status: "concept",
    summary:
      "A CTA mögött az AI előkészíti a projektadatokat: a user csak finomít, nem nulláról tölt ki egy hosszú formot.",
    valueProp:
      "Csökkenti a frictiont és növeli a conversiont: az érdeklődő már egy előkészített projekt-formot kap.",
    anchorId: "project-auto-filled-inquiry-form",
    highlights: [
      "Brief-alapú auto-kitöltés",
      "Hiányzó információk intelligens bekérése",
      "Exportálható inquiry / discovery form",
    ],
  },
  {
    id: "ai-project-insight-dashboard",
    categoryId: "ai-ux",
    title: "Real-Time AI Project Insight Dashboard",
    shortLabel: "Insight Dashboard",
    tag: "Real-time AI insights",
    status: "concept",
    summary:
      "Mini dashboard, ami valós időben mutatja, hogyan értelmezi az AI a user igényeit, és milyen UX/flow javaslatokat generál.",
    valueProp:
      "Transzparens, „wow”-faktoros élmény: a user látja, hogy az AI tényleg dolgozik a briefjén, nem csak egy fekete doboz.",
    anchorId: "project-ai-project-insight-dashboard",
    highlights: [
      "Kulcsszavak, kompetenciák és kockázatok azonosítása",
      "Projektek UX flow mintákba sorolása",
      "Mini, interaktív dashboard közvetlenül a landingon",
    ],
  },

  // Marketing kategória – most még placeholder
  // {
  //   id: "marketing-demo-1",
  //   categoryId: "marketing",
  //   ...
  // },
];
