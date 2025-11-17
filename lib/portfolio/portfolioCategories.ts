// lib/portfolio/portfolioCategories.ts

export type PortfolioCategoryId = "ai-ux" | "marketing";

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
    description:
      "",
  },
  {
    id: "marketing",
    label: "Marketing kampány projektek",
    shortLabel: "Marketing Engine",
    description:
      "",
  },
];