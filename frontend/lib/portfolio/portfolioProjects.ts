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
    id: "ai-lead-qualification",
    categoryId: "ai-ux",
    title: "AI-Assisted Lead Qualification",
    shortLabel: "Lead Qualification",
    tag: "AI discovery conversion",
    status: "concept",
    summary:
      "An AI-driven system that converts discovery conversation signals into structured project inquiries, transforming exploratory portfolio interactions into meaningful collaboration opportunities.",
    valueProp:
      "Connects exploration and project initiation by transforming conversation signals into structured inquiries and meaningful project briefs.",
    anchorId: "project-ai-lead-qualification",
    highlights: [
      "AI discovery conversation signals",
      "Intent detection and client profile",
      "Structured project brief generation",
    ],
  },
  {
    id: "ai-generated-client-profile",
    categoryId: "ai-ux",
    title: "AI-Generated Client Profile",
    shortLabel: "Client Profile",
    tag: "AI discovery profiling",
    status: "concept",
    summary:
      "A profiling system that turns discovery conversation signals into an evolving structured client profile the platform can act on.",
    valueProp:
      "Keeps important project context available for recommendations, qualification, and inquiry flows instead of losing it inside raw chat logs.",
    anchorId: "project-ai-generated-client-profile",
    highlights: [
      "Conversation signal extraction",
      "Structured client attributes",
      "Shared profile for downstream systems",
    ],
  },
  {
    id: "conversational-visitor-discovery",
    categoryId: "ai-ux",
    title: "Conversational Visitor Discovery",
    shortLabel: "Visitor Discovery",
    tag: "AI discovery conversation",
    status: "concept",
    summary:
      "An AI-assisted interaction layer that helps visitors explain their goals in natural language and discover the most relevant modules across the portfolio.",
    valueProp:
      "Reduces friction by turning vague visitor goals into structured intent signals the platform can use for navigation and recommendations.",
    anchorId: "project-conversational-visitor-discovery",
    highlights: [
      "Natural language goal capture",
      "Intent extraction and profiling",
      "Guided discovery across the portfolio",
    ],
  },
  {
    id: "dynamic-use-case-recommendation",
    categoryId: "ai-ux",
    title: "Dynamic Use Case Recommendation",
    shortLabel: "Use Case Recommendation",
    tag: "AI use case ranking",
    status: "concept",
    summary:
      "An AI-assisted recommendation system that connects visitor intent signals with the most relevant portfolio use cases.",
    valueProp:
      "Turns the portfolio into an adaptive recommendation surface by matching structured visitor profiles with use case metadata.",
    anchorId: "project-dynamic-use-case-recommendation",
    highlights: [
      "Intent-based use case ranking",
      "Metadata and profile matching",
      "Adaptive discovery surface",
    ],
  },
  {
    id: "state-driven-conversation-control",
    categoryId: "ai-ux",
    title: "State-Driven Conversation Control",
    shortLabel: "Conversation Control",
    tag: "AI orchestration",
    status: "concept",
    summary:
      "A structured conversation control system that organizes AI-assisted discovery into defined states, keeping the interaction purposeful and aligned with recommendation and qualification workflows.",
    valueProp:
      "Keeps discovery focused and coordinated through explicit conversation stages instead of loose, reactive chat.",
    anchorId: "project-state-driven-conversation-control",
    highlights: [
      "State machine for discovery stages",
      "Coordinated with profiling and recommendations",
      "Guided interaction logic",
    ],
  },
  {
    id: "content-schema-validation",
    categoryId: "json-engine",
    title: "Content Schema & Validation System",
    shortLabel: "Schema Validation",
    tag: "JSON content architecture",
    status: "concept",
    summary: "Questell content contract és validációs réteg.",
    valueProp: "Előkészített technikai use case – részletes aloldal később.",
    anchorId: "project-content-schema-validation",
    highlights: [
      "Közös JSON Schema (CoreSchema.json) frontend és backend számára",
      "AJV validáció feltöltéskor és a runtime előtt",
      "Stabil content contract a szerzők és a runtime engine között",
    ],
  },
  {
    id: "backend-story-resolution",
    categoryId: "json-engine",
    title: "Backend Story Resolution & Page API",
    shortLabel: "Story Resolution",
    tag: "JSON content delivery",
    status: "concept",
    summary:
      "Backend réteg, ami strukturált story JSON fájlokat tölt, oldalanként feloldja a kéréseket, normalizálja a választ és stabil page contractot ad a frontend runtime-nak.",
    valueProp:
      "Csak a kért oldal kerül kiszolgálásra; a teljes story graph nem töltődik le, így könnyebb a runtime és skálázhatóbb a tartalom.",
    anchorId: "project-backend-story-resolution",
    highlights: [
      "Page-level API, inkrementális kiszolgálás",
      "Story JSON betöltés és feloldás backend oldalon",
      "Normalizált page válasz, stabil runtime contract",
    ],
  },

  {
    id: "client-cache-prefetch-layer",
    categoryId: "json-engine",
    title: "Client Cache & Prefetch Layer",
    shortLabel: "Client Cache",
    tag: "Runtime performance layer",
    status: "concept",
    summary:
      "Frontend runtime cache- és prefetch-réteg, ami lokálisan tárolja a feloldott page-eket és előre betölti a valószínű következő lépéseket.",
    valueProp:
      "Megmutatja, hogyan gyorsítod fel a page-level API-ra épülő story runtime-ot hibrid kliens cache-sel és bounded prefetchinggel.",
    anchorId: "project-client-cache-prefetch-layer",
    highlights: [
      "L1 memória cache + L2 LocalStorage rétegelt tárolás",
      "TTL-alapú érvényesség és kompozit cache key",
      "Bounded prefetch a valószínű következő oldalakra",
    ],
  },

  {
    id: "dynamic-story-renderer",
    categoryId: "json-engine",
    title: "Dynamic Story Renderer",
    shortLabel: "Story Renderer",
    tag: "Runtime UI engine",
    status: "concept",
    summary:
      "Dinamikus story renderer, ami normalizált page JSON alapján választ renderelési ágat, és mindig a megfelelő React UI-t állítja össze.",
    valueProp:
      "Megmutatja, hogyan futtatsz többféle interaktív élményt (quiz, narratív flow, kampány) ugyanazon frontend engine alatt, külön hardcode-olt képernyők nélkül.",
    anchorId: "project-dynamic-story-renderer",
    highlights: [
      "Normalizált page JSON → dinamikus UI-kompozíció",
      "Típusőrök alapján választott renderelési ágak",
      "Egy megosztott renderer engine több élménytípushoz",
    ],
  },

  {
    id: "decision-runtime-engine",
    categoryId: "decision-runtime",
    title: "Decision Flow Runtime Engine",
    shortLabel: "Runtime Engine",
    tag: "Runtime Navigation",
    status: "concept",
    summary:
      "A runtime decision engine that evaluates navigation rules inside interactive experiences and determines which page should be resolved next.",
    valueProp:
      "Egy központi döntési réteg értékeli a navigációs szabályokat és a state-et, így a flow-k adatvezéreltek maradnak.",
    anchorId: "project-decision-runtime-engine",
    highlights: [
      "Decision Graph",
      "Runtime Navigation",
      "Branching Logic",
      "State Evaluation",
    ],
  },

  {
    id: "runtime-state-management-system",
    categoryId: "decision-runtime",
    title: "Runtime State Management System",
    shortLabel: "State Management",
    tag: "Shared Runtime State",
    status: "concept",
    summary:
      "A centralized runtime state layer that stores current page data, unlocked fragments, flags, global variables, and history so every interactive system component can operate from the same consistent session state.",
    valueProp:
      "Egy központi state réteg: a session progress, feltételek és perzisztencia egy helyen, így a UI és a logika tisztán szétválik.",
    anchorId: "project-runtime-state-management-system",
    highlights: [
      "Shared State",
      "GameState Context",
      "Fragments & Flags",
      "Persistence",
    ],
  },

  {
    id: "conditional-logic-rule-engine",
    categoryId: "decision-runtime",
    title: "Conditional Logic & Rule Engine",
    shortLabel: "Rule Engine",
    tag: "Runtime Rule Evaluation",
    status: "concept",
    summary:
      "A rule-based evaluation layer that interprets conditional logic defined inside story JSON and resolves navigation outcomes dynamically from runtime state.",
    valueProp:
      "A feltételes navigációs szabályok a story JSON-ból jönnek, a rule engine a runtime state alapján értékeli őket – tartalomvezérelt, karbantartható branching.",
    anchorId: "project-conditional-logic-rule-engine",
    highlights: [
      "Rule Engine",
      "Conditional Logic",
      "State Evaluation",
      "Declarative Branching",
    ],
  },

  {
    id: "fragment-flag-state-system",
    categoryId: "decision-runtime",
    title: "Fragment & Flag State System",
    shortLabel: "Fragments & Flags",
    tag: "Lightweight Runtime Markers",
    status: "concept",
    summary:
      "A lightweight state marker system that tracks unlocked fragments and boolean flags across the user journey so interactive experiences can adapt dynamically based on earlier actions.",
    valueProp:
      "Könnyű state markerek: fragmentek és flagek a progress és a feltételek nyomon követésére – adaptív flow-k egyszerű, skálázható modellben.",
    anchorId: "project-fragment-flag-state-system",
    highlights: [
      "Fragments",
      "Flags",
      "State Markers",
      "Progress Tracking",
    ],
  },

  {
    id: "frontend-event-tracking-identity-layer",
    categoryId: "analytics-pipeline",
    title: "Frontend Event Tracking & Identity Layer",
    shortLabel: "Event Tracking",
    tag: "Runtime Analytics Foundation",
    status: "concept",
    summary:
      "A centralized frontend analytics layer that captures runtime interactions, enriches them with consistent identity context, and stores them in a structured event stream for journey reconstruction.",
    valueProp:
      "Strukturált analytics: interakciók identity kontextussal, event queue, run tracking – rekonstruálható user journey-k és döntés-alapú elemzés.",
    anchorId: "project-frontend-event-tracking-identity-layer",
    highlights: [
      "Frontend Analytics",
      "Identity Model",
      "Run Tracking",
      "Event Queue",
    ],
  },

  {
    id: "client-event-queue-batch-upload-system",
    categoryId: "analytics-pipeline",
    title: "Client Event Queue & Batch Upload System",
    shortLabel: "Event Queue & Upload",
    tag: "Client Analytics Transport",
    status: "concept",
    summary:
      "A client-side transport layer that buffers analytics events locally, persists them in story-scoped storage, and uploads them to the backend in controlled batches without blocking runtime interaction.",
    valueProp:
      "Lokális event queue, batch upload, retry safety – a runtime nem függ a hálózattól, az analytics megbízhatóan kerül a backendre.",
    anchorId: "project-client-event-queue-batch-upload-system",
    highlights: [
      "Event Queue",
      "Batch Upload",
      "Local Persistence",
      "Retry Safety",
    ],
  },

  {
    id: "backend-event-ingestion-append-only-storage",
    categoryId: "analytics-pipeline",
    title: "Backend Event Ingestion & Append-Only Storage",
    shortLabel: "Event Ingestion",
    tag: "Backend Analytics Intake",
    status: "concept",
    summary:
      "A backend ingestion layer that receives batched frontend analytics events, normalizes their runtime identity fields, and stores them in append-only JSONL logs as the canonical source of truth for later reporting.",
    valueProp:
      "A backend megőrzi a nyers event logot append-only JSONL-ben – későbbi reporting, path rekonstrukció és debugging egy megbízható forrásból.",
    anchorId: "project-backend-event-ingestion-append-only-storage",
    highlights: [
      "FastAPI Ingestion",
      "Append-Only Logs",
      "JSONL Storage",
      "Batch Processing",
    ],
  },

  {
    id: "reporting-decision-path-analytics-engine",
    categoryId: "analytics-pipeline",
    title: "Reporting & Decision Path Analytics Engine",
    shortLabel: "Decision Path Analytics",
    tag: "Behavior Analytics Reconstruction",
    status: "concept",
    summary:
      "A backend reporting engine that processes append-only event logs, reconstructs sessions and runs, extracts decision paths, and generates behavioral metrics for branching interactive experiences.",
    valueProp:
      "A nyers event logból session, run és decision path rekonstrukció – drop-off, completion és outcome metrikák branching élményekhez.",
    anchorId: "project-reporting-decision-path-analytics-engine",
    highlights: [
      "Reporting Engine",
      "Session Reconstruction",
      "Run Analytics",
      "Decision Paths",
    ],
  },

  // Marketing kategória – most még placeholder
  // {
  //   id: "marketing-demo-1",
  //   categoryId: "marketing",
  //   ...
  // },
];
