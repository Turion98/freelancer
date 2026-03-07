// lib/portfolio/portfolioCategories.ts

export type PortfolioCategoryId =
  | "ai-ux"
  | "json-engine"
  | "decision-runtime"
  | "analytics-pipeline"
 

export type PortfolioCategory = {
  id: PortfolioCategoryId;
  label: string;
  shortLabel: string;
  description: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "ai-ux",
    label: "AI UX & Flow modulok",
    shortLabel: "AI UX Flow",
    description: "",
  },
  {
    id: "json-engine",
    label: "JSON Content Engine",
    shortLabel: "Content Engine",
    description: "",
  },
  {
    id: "decision-runtime",
    label: "Decision Runtime",
    shortLabel: "Runtime Engine",
    description: "",
  },
  {
    id: "analytics-pipeline",
    label: "Analytics Pipeline",
    shortLabel: "Analytics",
    description: "",
  },
  
];