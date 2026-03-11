import type { PortfolioCategoryId } from "./portfolioCategories";

export type CoreSystem = {
  id: string;
  title: string;
  /** Rövid cím a kategóriaválasztó panelján (pl. "Questell", "AI UX") */
  selectorLabel: string;
  shortDescription: string;
  whatItEnables: string[];
  portfolioCategoryIds: PortfolioCategoryId[];
  aiFacets?: string[];
  systemHighlights?: string[];
};

export const coreSystems: CoreSystem[] = [
  {
  id: "questell-platform",
  title: "Questell Interactive Content Engine",
  selectorLabel: "Questell",
  shortDescription:
    "Questell is an interactive content engine designed to transform static information into guided decision journeys. Instead of presenting everything at once, the system leads visitors step-by-step through structured choices, revealing the most relevant content based on their decisions. Originally created for marketing experiences, the architecture evolved into a flexible platform capable of modeling complex decision flows for product discovery, campaign journeys, and other interactive exploration scenarios. The entire system — from the content schema to the runtime engine — was designed and built as a self-initiated full-stack project.",

  whatItEnables: [
    "interactive campaign flows instead of static pages",
    "structured product and offer discovery",
    "decision-based storytelling with measurable outcomes",
    "behavioral insight collection during the journey",
  ],

  portfolioCategoryIds: [
    "json-engine",
    "decision-runtime",
    "analytics-pipeline",
  ],
  systemHighlights: [
    "12 interactive decision-based use cases",
    "schema-driven content architecture",
    "modular runtime decision engine",
    "analytics-ready interaction tracking",
    "full-stack system designed and built independently"
  ],

  
},
  {
    id: "ai-ux-integration",
    title: "AI-Assisted UX & Discovery Layer",
    selectorLabel: "AI UX",
    shortDescription:
      "This project demonstrates how I integrate AI into frontend product experiences. Instead of using AI as a simple chatbot addon, the goal is to create guided discovery interfaces where conversation, state, recommendations, and UX logic work together to help users understand complex systems more naturally.",
    whatItEnables: [
      "conversational visitor discovery",
      "AI-guided recommendation across portfolio modules",
      "progressive understanding of user intent and needs",
      "lead qualification through structured interaction",
    ],
    portfolioCategoryIds: ["ai-ux"],
    
    
  },
];