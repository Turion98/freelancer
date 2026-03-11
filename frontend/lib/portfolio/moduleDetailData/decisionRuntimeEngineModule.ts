import type { ModuleDetailData } from "../moduleDetailTypes";

export const decisionRuntimeEngineModule: ModuleDetailData = {
  id: "decision-runtime-engine",
  category: "runtime-engine",

  hero: {
    eyebrow: "Runtime Navigation Core",
    title: "Decision Flow Runtime Engine",
    lead:
      "A centralized runtime engine that evaluates structured navigation rules, user choices, and runtime state to determine which page should be resolved next inside interactive experiences.",
    chips: [
      "Decision Graph",
      "Runtime Navigation",
      "Branching Logic",
      "State Evaluation",
      "Questell Runtime",
    ],
    businessValue:
      "This module makes complex interactive flows scalable by moving decision logic out of UI components and into a reusable runtime engine. That allows branching experiences to remain flexible, consistent, and much easier to maintain as story complexity grows.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Resolve the next page dynamically at runtime based on structured navigation rules, user interaction, and current story state.",
    },
    {
      label: "Problem",
      value:
        "When branching logic is scattered across UI screens, navigation becomes duplicated, brittle, and difficult to scale as interactive flows grow more complex.",
    },
    {
      label: "Core Mechanism",
      value:
        "The runtime interprets each experience as a directed decision graph and evaluates page transitions through direct links, choices, conditional rules, or runtime-variable-based switching.",
    },
    {
      label: "System Benefit",
      value:
        "Navigation logic stays centralized and reusable, while the rendering layer remains focused purely on displaying the currently resolved page.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How decision-based navigation works at runtime",
    steps: [
      {
        title: "Story loaded as structured graph",
        description:
          "The experience is defined as structured JSON where pages act as nodes and navigation rules define transitions between them.",
      },
      {
        title: "User reaches current page",
        description:
          "The runtime receives the active page together with current state values such as flags, fragments, globals, and navigation history.",
      },
      {
        title: "Decision runtime evaluates transitions",
        description:
          "The engine inspects available rules on the current page and determines which navigation path is valid under the current runtime context.",
      },
      {
        title: "Next page resolved for rendering",
        description:
          "The resolved destination page becomes the next active page and is passed to the frontend renderer for display.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Interactive experiences such as quizzes, onboarding flows, and narrative journeys require more than static page rendering.",
      "They need a runtime system capable of evaluating user decisions and determining how the experience should continue from one page to the next.",
      "In Questell, this responsibility is handled by the Decision Flow Runtime Engine, which interprets story navigation rules dynamically during runtime execution.",
      "Instead of hardcoding branching paths inside individual UI components, the engine treats each experience as a directed decision graph and centralizes navigation logic in one reusable runtime layer.",
    ],
  },

  problem: {
    intro:
      "Traditional interactive applications often distribute decision logic across UI components, which creates architectural and maintenance problems as flows become more complex.",
    points: [
      "Navigation logic becomes duplicated across multiple screens and interaction handlers.",
      "Multi-step branching flows become difficult to understand and maintain over time.",
      "Conditional transitions are harder to reason about when embedded directly inside UI logic.",
      "User state and navigation state become tightly coupled to rendering components.",
      "Adding new interactive formats increases implementation complexity because navigation logic is not reusable.",
    ],
    examples: [
      "A choice screen directly hardcodes which page component should open next.",
      "A conditional redirect depends on previous user actions but is resolved inside UI event handlers.",
      "A branching narrative requires repeated navigation rules across multiple components.",
      "A new story format forces developers to rebuild navigation logic instead of reusing a shared engine.",
    ],
  },

  solution: {
    intro:
      "The platform introduces a dedicated decision runtime that evaluates page-level transition rules independently from the rendering layer.",
    points: [
      "Treat each experience as a directed graph where pages are nodes and transitions are edges.",
      "Interpret direct next references, choice-based branches, conditional logic rules, and runtime-variable-based switching through one shared engine.",
      "Resolve navigation from the current page and runtime state instead of hardcoding transitions in UI components.",
      "Maintain a central state model so branching decisions can depend on user history, flags, fragments, globals, and prior progression.",
      "Keep responsibilities clearly separated: the runtime decides what page comes next, while the renderer decides how that page appears.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Decision Runtime Architecture",
      description:
        "The decision runtime sits between structured story definitions and the renderer, resolving the next page before UI rendering occurs.",
      data: {
        layout: {
          canvasHeight: 470,
          nodeWidth: "md",
          nodeHeight: "md",
          edgeStyle: "elbow",
          labelStyle: "badge",
        },
        nodes: [
          {
            id: "story-json",
            label: "Story JSON",
            x: 10,
            y: 12,
            width: "md",
          },
          {
            id: "runtime",
            label: "Decision Runtime\nEngine",
            x: 36,
            y: 28,
            width: "lg",
          },
          {
            id: "state",
            label: "Runtime State\n(flags / globals / history)",
            x: 66,
            y: 34,
            width: "lg",
          },
          {
            id: "resolution",
            label: "Next Page\nResolution",
            x: 46,
            y: 62,
            width: "md",
          },
          {
            id: "renderer",
            label: "Frontend Renderer",
            x: 78,
            y: 78,
            width: "md",
          },
        ],
        edges: [
          {
            from: "story-json",
            to: "runtime",
            label: "transition rules",
            route: "auto",
            labelOffsetX: 4.4,
            labelOffsetY: -0.4,
          },
          {
            from: "state",
            to: "runtime",
            label: "current runtime context",
            route: "auto",
            labelOffsetX: -4.2,
            labelOffsetY: -0.4,
          },
          {
            from: "runtime",
            to: "resolution",
            label: "evaluate destination",
            route: "auto",
            labelOffsetX: 2.4,
            labelOffsetY: -0.2,
          },
          {
            from: "resolution",
            to: "renderer",
            label: "resolved page",
            route: "auto",
            labelOffsetX: 3.8,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Decision Resolution Pipeline",
      description:
        "The runtime interprets current page rules and story state to determine the next destination during interaction.",
      data: {
        steps: [
          "Read current page",
          "Inspect available transitions",
          "Check runtime state",
          "Evaluate matching rule",
          "Resolve next page",
          "Pass page to renderer",
        ],
      },
    },
    {
      type: "sequence",
      title: "Choice / Evaluate / Resolve Sequence",
      description:
        "Message flow across user interaction, runtime evaluation, state inspection, and renderer update.",
      data: {
        columns: [
          { id: "user", label: "User" },
          { id: "renderer", label: "Frontend Renderer" },
          { id: "runtime", label: "Decision Runtime" },
          { id: "state", label: "Runtime State" },
          { id: "page", label: "Current Page Rules" },
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
            label: "Select choice",
            detail: "User interacts with the current page",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "renderer",
            colSpan: 2,
            variant: "forward",
            stepNumber: 2,
            label: "Send interaction context",
            detail: "Renderer forwards the action to the runtime layer",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "runtime",
            colSpan: 2,
            variant: "forward",
            stepNumber: 3,
            label: "Inspect page transitions",
            detail: "Runtime reads the available navigation rules on the active page",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "runtime",
            colSpan: 2,
            variant: "forward",
            stepNumber: 4,
            label: "Check runtime state",
            detail: "Flags, fragments, globals, and history are evaluated",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "state",
            colSpan: 2,
            variant: "backward",
            stepNumber: 5,
            label: "Return state values",
            detail: "Current story context is returned to the decision engine",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "page",
            colSpan: 2,
            variant: "backward",
            stepNumber: 6,
            label: "Matching rule resolved",
            detail: "The correct transition path is selected from page rules",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "runtime",
            colSpan: 2,
            variant: "backward",
            stepNumber: 7,
            label: "Return next page id",
            detail: "Runtime resolves which page should become active next",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "renderer",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Render resolved page",
            detail: "Frontend updates the UI with the newly active page",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Decision Contract",
    title: "Example page structure with branching and logic",
    language: "json",
    code: `{
  "id": "camp_decision",
  "type": "choice",
  "title": "Choose your next move",
  "choices": [
    {
      "label": "Explore the tower",
      "next": "tower_page"
    },
    {
      "label": "Return to camp",
      "next": "camp_page"
    }
  ],
  "logic": [
    {
      "if": ["frag:key_found"],
      "goto": "secret_door"
    },
    {
      "default": "locked_door"
    }
  ],
  "switch": {
    "by": "userSegment",
    "cases": {
      "beginner": "intro_path",
      "advanced": "fast_track"
    },
    "default": "standard_path"
  }
}`,
  },

  flow: {
    title: "Dynamic runtime navigation across branching pages",
    steps: [
      {
        title: "Current page becomes active",
        description:
          "The runtime receives the active page together with its transition rules and the latest story state.",
      },
      {
        title: "Interaction or logic triggers evaluation",
        description:
          "A user choice, direct next reference, or logic-only page initiates decision resolution.",
      },
      {
        title: "State-aware rule matching happens",
        description:
          "The engine checks flags, fragments, globals, and history to determine which transition rule applies.",
      },
      {
        title: "Next page id is resolved",
        description:
          "The runtime selects the correct destination page from direct, choice-based, conditional, or switch-based navigation.",
      },
      {
        title: "Renderer updates the experience",
        description:
          "The resolved page becomes active and the frontend displays the next step in the interactive flow.",
      },
      {
        title: "Flow continues through the graph",
        description:
          "This cycle repeats across the story graph so complex branching journeys remain centrally controlled by the runtime.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Transition evaluation",
      items: [
        "Interpret direct next references between pages.",
        "Resolve user-choice-based branching paths.",
        "Evaluate conditional logic rules stored in structured page definitions.",
      ],
    },
    {
      title: "State-driven navigation",
      items: [
        "Read runtime values such as flags, fragments, globals, and history.",
        "Allow navigation to depend on previous user actions and current progression state.",
        "Support variable-based switch resolution for campaign or segment-specific flow behavior.",
      ],
    },
    {
      title: "Graph orchestration",
      items: [
        "Treat the story as a directed decision graph instead of a flat page sequence.",
        "Centralize navigation logic independently from UI rendering.",
        "Keep branching flows understandable and reusable across multiple experience formats.",
      ],
    },
    {
      title: "Renderer separation",
      items: [
        "Resolve which page should be loaded next before rendering occurs.",
        "Keep UI components focused on presentation rather than navigation logic.",
        "Allow new interaction formats to reuse the same runtime decision engine.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime stability impact",
    paragraphs: [
      "The decision engine prevents navigation logic from being fragmented across multiple frontend components.",
      "Because transition evaluation is centralized, branching behavior becomes easier to debug, reason about, and extend over time.",
      "The renderer remains simpler and more stable because it only needs to display the currently resolved page instead of interpreting the full navigation model itself.",
      "This separation of decision logic and presentation makes large interactive systems more predictable as flows become deeper, more conditional, and more state-aware.",
    ],
  },

  outcome: [
    "Centralized branching logic instead of duplicated UI-level navigation handling.",
    "Flexible support for direct, choice-based, conditional, and switch-driven transitions.",
    "State-aware flow control based on flags, fragments, globals, and user history.",
    "A reusable runtime engine that can power quizzes, onboarding flows, narrative journeys, and marketing experiences.",
    "Cleaner separation between navigation logic and frontend rendering responsibilities.",
  ],

  takeaways: [
    "Interactive systems benefit from treating navigation as a runtime problem rather than a UI problem.",
    "Directed decision graphs are a scalable model for complex branching experiences.",
    "Centralized decision engines reduce duplication and improve maintainability.",
    "State-driven page resolution enables adaptive interactive flows without hardcoded component logic.",
    "Separating navigation from rendering creates a much cleaner runtime architecture for reusable story systems.",
  ],

  relatedModules: [
    {
      title: "Backend Story Resolution & Page API",
      href: "/freelance/backend-story-resolution-page-api",
    },
    {
      title: "Client Cache & Prefetch Layer",
      href: "/freelance/client-cache-prefetch-layer",
    },
    {
      title: "Dynamic Story Renderer",
      href: "/freelance/dynamic-story-renderer",
    },
  ],
};