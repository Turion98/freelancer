import type { ModuleDetailData } from "../moduleDetailTypes";

export const dynamicStoryRendererModule: ModuleDetailData = {
  id: "dynamic-story-renderer",
  category: "json-engine",

  hero: {
    eyebrow: "Runtime UI Orchestration",
    title: "Dynamic Story Renderer",
    lead:
      "A dynamic rendering layer that interprets normalized page JSON, selects the correct React rendering branch at runtime, and composes the appropriate UI for each interaction type.",
    chips: [
      "Dynamic Rendering",
      "React Composition",
      "Type Guards",
      "Runtime UI",
      "Questell Runtime",
    ],
   businessValue:
  "This module gives the platform a reusable rendering engine that can interpret structured content and assemble the right UI at runtime. That makes it possible to support different experience types without rebuilding the frontend for every new flow."
},

  snapshot: [
    {
      label: "Purpose",
      value:
        "Transform normalized story page definitions into the correct runtime UI without hardcoding individual screens for each experience.",
    },
    {
      label: "Problem",
      value:
        "When rendering logic is tied to dedicated screens, interaction logic becomes fragmented, duplicated, and difficult to scale across different experience types.",
    },
    {
      label: "Core Mechanism",
      value:
        "The renderer inspects page type and subtype, selects the correct rendering branch, and composes the matching React components dynamically.",
    },
    {
      label: "System Benefit",
      value:
        "The platform can support quizzes, narrative flows, puzzles, and marketing journeys through one reusable rendering engine.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How dynamic page rendering works at runtime",
    steps: [
      {
        title: "Normalized page JSON received",
        description:
          "The runtime passes the current page object into the renderer after navigation state is resolved.",
      },
      {
        title: "Type guards evaluate the page",
        description:
          "The renderer inspects page type and subtype to determine which interaction model should handle the page.",
      },
      {
        title: "Rendering branch selected",
        description:
          "A matching renderer branch is selected for transition, puzzle, logic, or default narrative rendering.",
      },
      {
        title: "React UI composed dynamically",
        description:
          "The renderer assembles the correct component composition and returns the interactive UI for display.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "A JSON-driven content system only becomes useful if structured content definitions can be transformed into a functioning user interface.",
      "In Questell, this responsibility is handled by a dynamic story renderer that interprets normalized page objects and maps them to the correct React components at runtime.",
      "Instead of hardcoding interaction flows into dedicated screens, the renderer receives structured page JSON and selects the correct UI composition dynamically.",
      "This architecture allows multiple experience formats — including quizzes, narrative journeys, marketing flows, and training modules — to run through the same rendering engine.",
    ],
  },

  problem: {
    intro:
      "In many interactive applications, rendering logic is tightly coupled to dedicated screens, which makes the system harder to extend and reuse.",
    points: [
      "Interaction logic becomes scattered across multiple UI components.",
      "New interaction types require building custom page implementations from scratch.",
      "Content structure becomes tightly coupled with rendering logic.",
      "UI code duplication increases across different flows.",
      "Scaling the platform to support multiple experience formats becomes difficult.",
    ],
    examples: [
      "A new puzzle format requires adding another dedicated page screen instead of extending a shared renderer.",
      "Two campaign flows reuse similar UI patterns but duplicate the same rendering logic in separate components.",
      "A logic-only page still needs a custom screen even though it primarily performs runtime evaluation.",
      "As new page types are introduced, the frontend becomes fragmented instead of growing through one predictable orchestration layer.",
    ],
  },

  solution: {
    intro:
      "The system introduces a single renderer entry point that receives the current page as normalized JSON and selects the appropriate UI branch based on page type.",
    points: [
      "Receive normalized page JSON as the single rendering input.",
      "Use explicit type guards to inspect page type and subtype.",
      "Route the page into the correct rendering branch.",
      "Compose page-specific React UI modules dynamically.",
      "Keep content structure, runtime logic, and UI presentation cleanly separated.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Renderer Architecture",
      description:
        "The renderer sits between runtime state and the UI component layer, turning structured page definitions into concrete React compositions.",
      data: {
        layout: {
          canvasHeight: 460,
          nodeWidth: "md",
          nodeHeight: "md",
          edgeStyle: "elbow",
          labelStyle: "badge",
        },
        nodes: [
          {
            id: "page-json",
            label: "Page JSON",
            x: 12,
            y: 16,
            width: "md",
          },
          {
            id: "type-guards",
            label: "Type Guards",
            x: 34,
            y: 32,
            width: "md",
          },
          {
            id: "renderer",
            label: "Renderer Branch\nSelection",
            x: 56,
            y: 50,
            width: "lg",
          },
          {
            id: "components",
            label: "React Component\nComposition",
            x: 76,
            y: 68,
            width: "lg",
          },
          {
            id: "ui",
            label: "Rendered UI",
            x: 82,
            y: 86,
            width: "md",
          },
        ],
        edges: [
          {
            from: "page-json",
            to: "type-guards",
            label: "inspect page",
            route: "auto",
            labelOffsetX: 3.4,
            labelOffsetY: -0.2,
          },
          {
            from: "type-guards",
            to: "renderer",
            label: "match branch",
            route: "auto",
            labelOffsetX: 3.8,
            labelOffsetY: -0.2,
          },
          {
            from: "renderer",
            to: "components",
            label: "compose UI",
            route: "auto",
            labelOffsetX: 4.2,
            labelOffsetY: -0.2,
          },
          {
            from: "components",
            to: "ui",
            label: "rendered output",
            route: "auto",
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Renderer Pipeline",
      description:
        "The renderer evaluates page structure first, then maps it into the correct UI composition.",
      data: {
        steps: [
          "Receive normalized page JSON",
          "Evaluate page type guards",
          "Select matching renderer branch",
          "Compose React components",
          "Render interactive UI",
        ],
      },
    },
    {
      type: "sequence",
      title: "Navigate / Evaluate / Render Sequence",
      description:
        "Message flow across runtime state, renderer, type guards, and UI components during page rendering.",
      data: {
        columns: [
          { id: "user", label: "User" },
          { id: "runtime", label: "Runtime State" },
          { id: "renderer", label: "Story Renderer" },
          { id: "guards", label: "Type Guards" },
          { id: "ui", label: "UI Components" },
        ],
        rows: [
          { id: "step-1" },
          { id: "step-2" },
          { id: "step-3" },
          { id: "step-4" },
          { id: "step-5" },
          { id: "step-6" },
          { id: "step-7" },
          { id: "step-8" },
        ],
        items: [
          {
            id: "step-1",
            row: "step-1",
            column: "user",
            colSpan: 2,
            variant: "forward",
            stepNumber: 1,
            label: "Navigate to page",
            detail: "User action moves the experience to a new current page",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "runtime",
            colSpan: 2,
            variant: "forward",
            stepNumber: 2,
            label: "Provide current page JSON",
            detail: "Runtime passes normalized page data into the renderer",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "renderer",
            colSpan: 2,
            variant: "forward",
            stepNumber: 3,
            label: "Run type evaluation",
            detail: "Renderer checks page type and subtype through explicit guards",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "guards",
            colSpan: 2,
            variant: "backward",
            stepNumber: 4,
            label: "Return matching branch",
            detail: "Type guard results identify which UI branch should render the page",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "renderer",
            colSpan: 2,
            variant: "forward",
            stepNumber: 5,
            label: "Compose UI components",
            detail: "Renderer assembles the correct React component structure",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "ui",
            colSpan: 2,
            variant: "backward",
            stepNumber: 6,
            label: "Return rendered branch",
            detail: "The selected page-specific UI composition is prepared for display",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "renderer",
            colSpan: 2,
            variant: "backward",
            stepNumber: 7,
            label: "Deliver final render output",
            detail: "Renderer returns the fully composed interactive UI",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "runtime",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Display page to user",
            detail: "Frontend shows the rendered page inside the runtime experience",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Renderer Branching",
    title: "Example type guards and component mapping",
    language: "json",
    code: `function isTransitionVideoPage(p) {
  return p?.type === "transition" && p?.transition?.kind === "video";
}

const isRiddle = (p) =>
  p?.type === "puzzle" && p?.kind === "riddle";

const isRunes = (p) =>
  p?.type === "puzzle" && p?.kind === "runes";

if (isTransitionVideoPage(pageData)) {
  return <TransitionVideo {...pageData} />;
}

if (isRiddle(pageData)) {
  return <RiddleQuiz {...pageData} />;
}

if (isRunes(pageData)) {
  return <PuzzleRunes {...pageData} />;
}

return (
  <>
    <NarrativePanel {...pageData} />
    <ChoiceButtons {...pageData} />
  </>
);`,
  },

  flow: {
    title: "Dynamic rendering during page navigation",
    steps: [
      {
        title: "Page JSON received",
        description:
          "When navigation changes the active page, the runtime passes the current normalized page object into the renderer.",
      },
      {
        title: "Renderer evaluates structure",
        description:
          "The renderer inspects type and subtype information to determine which interaction model applies.",
      },
      {
        title: "Matching branch selected",
        description:
          "A specific branch is selected for transition, puzzle, logic, or default narrative rendering.",
      },
      {
        title: "Components composed",
        description:
          "The matching UI modules are assembled into the correct React composition for the page.",
      },
      {
        title: "Interactive UI rendered",
        description:
          "The composed branch is rendered to the user as the visible runtime page.",
      },
      {
        title: "Logic pages may redirect automatically",
        description:
          "Some non-visual page types can perform runtime evaluation first and continue the flow without adding unnecessary UI complexity.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Page inspection layer",
      items: [
        "Inspect page type and subtype before rendering.",
        "Use explicit type guards to identify supported interaction models.",
        "Ensure each rendering branch receives the correct page structure.",
      ],
    },
    {
      title: "Renderer orchestration layer",
      items: [
        "Act as the single entry point for page rendering.",
        "Select the correct rendering branch for each page definition.",
        "Keep branching logic centralized instead of spreading it across screens.",
      ],
    },
    {
      title: "UI composition layer",
      items: [
        "Assemble page-specific React components dynamically.",
        "Support reusable compositions such as narrative + choice layouts.",
        "Map structured content definitions to the correct UI modules.",
      ],
    },
    {
      title: "Extensibility layer",
      items: [
        "Allow new interaction types to be added incrementally.",
        "Support extension through new page shapes and renderer branches.",
        "Localize rendering growth inside one predictable orchestration module.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime stability impact",
    paragraphs: [
      "The renderer keeps rendering decisions centralized, which reduces fragmentation across the frontend codebase.",
      "Typed page definitions and explicit type guards help ensure that each component branch receives the correct structure.",
      "Because content structure, runtime logic, and UI presentation remain separated, the platform can evolve without turning into a collection of hardcoded screens.",
      "This makes the frontend behave more like a runtime engine than a traditional set of manually defined pages.",
    ],
  },

  outcome: [
    "Reusable rendering architecture for multiple interactive formats.",
    "Centralized UI orchestration in one predictable renderer module.",
    "Extensible support for new interaction types without rewriting the runtime.",
    "Clear separation between content definitions and UI presentation.",
    "A frontend runtime that renders structured content definitions instead of fixed screens.",
  ],

  takeaways: [
    "Dynamic UI rendering from structured data",
    "Centralized renderer orchestration",
    "Type-guard driven rendering branches",
    "Reusable React component composition",
    "Extensible runtime UI systems",
  ],

  relatedModules: [
  {
    title: "Backend Story Resolution & Page API",
    href: "/freelance/backend-story-resolution",
  },
  {
    title: "Content Schema & Validation System",
    href: "/freelance/content-schema-validation",
  },
  {
    title: "Client Cache & Prefetch Layer",
    href: "/freelance/client-cache-prefetch-layer",
  },
],
};