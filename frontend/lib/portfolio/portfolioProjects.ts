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
    id: "ai-intake-flow", // <-- EZ lett a kulcs: ezt nézi a ProjectCard
    categoryId: "ai-ux",
    title: "AI Intake Flow",
    shortLabel: "AI Intake Flow",
    tag: "AI discovery onboarding",
    status: "beta",
    summary:
      "AI-guided kérdéssor, ami pár lépésben feltérképezi az ügyfél igényeit, céljait, korlátait és érettségét.",
    valueProp:
      "Megmutatja, hogyan tervezel AI-alapú bevezető folyamatot, ami már az első perctől strukturálja a briefet.",
    anchorId: "project-ai-intake-flow", // ha később lesz landing-szekció, ez jó anchor
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
