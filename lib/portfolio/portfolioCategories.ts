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
      "AI-alapú projektfelmérés, flow vizualizáció és ajánlat-előkészítés – maga a rendszer a referencia.",
  },
  {
    id: "marketing",
    label: "Marketing kampány projektek",
    shortLabel: "Marketing Engine",
    description:
      "Interaktív kampány-játékok, fragment-alapú sztorik és nyereményjáték logikák. (Hamarosan részletezve.)",
  },
];
