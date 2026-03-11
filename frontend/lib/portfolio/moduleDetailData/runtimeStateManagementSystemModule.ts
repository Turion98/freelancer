import type { ModuleDetailData } from "../moduleDetailTypes";

export const runtimeStateManagementSystemModule: ModuleDetailData = {
  id: "runtime-state-management-system",
  category: "runtime-engine",

  hero: {
    eyebrow: "Shared Runtime State",
    title: "Runtime State Management System",
    lead:
      "A centralized runtime state layer that stores current page data, unlocked fragments, flags, global variables, and history so every interactive system component can operate from the same consistent session state.",
    chips: [
      "Shared State",
      "GameState Context",
      "Fragments & Flags",
      "Persistence",
      "Questell Runtime",
    ],
    businessValue:
      "This module makes interactive experiences reliable and scalable by turning runtime state into a single source of truth. Instead of scattering session logic across UI components, the platform can manage progress, conditional behavior, and persistence through one central state system.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Maintain a centralized runtime state model that stores current session progress and synchronizes it across navigation, rendering, and interaction layers.",
    },
    {
      label: "Problem",
      value:
        "If page progress, flags, fragments, and runtime variables are spread across multiple components, navigation becomes inconsistent and conditional flow logic becomes difficult to maintain.",
    },
    {
      label: "Core Mechanism",
      value:
        "A shared runtime state manager stores currentPageId, currentPageData, unlockedFragments, flags, globals, and history, then exposes them to the runtime engine and renderer.",
    },
    {
      label: "System Benefit",
      value:
        "All runtime components operate from the same state model, enabling reliable navigation, persistent progress, and cleaner separation between UI and logic.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How runtime state drives the experience",
    steps: [
      {
        title: "Backend returns page data",
        description:
          "The current page is resolved through the page API and arrives in the frontend runtime as structured page JSON.",
      },
      {
        title: "State manager stores active session data",
        description:
          "The runtime state layer records the current page, resolved content, flags, fragments, globals, and history in one shared state model.",
      },
      {
        title: "Decision runtime reads shared context",
        description:
          "Navigation logic evaluates the latest state values when determining which page or branch should be activated next.",
      },
      {
        title: "Renderer reacts to state updates",
        description:
          "Whenever the state changes, the renderer receives the new current page data and updates the UI automatically.",
      },
      {
        title: "Progress persists across reloads",
        description:
          "Important session values are stored in browser persistence so the experience can be restored after refresh or return visits.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Decision-based interactive experiences involve much more than loading and rendering individual pages.",
      "The system must continuously track which page is active, which fragments or rewards have been unlocked, which flags have been triggered, which decisions have already been made, and which global variables influence the flow.",
      "In Questell, these runtime concerns are centralized inside a shared runtime state manager instead of being distributed across multiple UI components.",
      "This state layer acts as the single source of truth for the current session and synchronizes the decision engine, the renderer, and the interaction components around one consistent runtime model.",
    ],
  },

  problem: {
    intro:
      "When runtime state is fragmented across separate components, the frontend becomes harder to reason about and interactive flow behavior becomes inconsistent.",
    points: [
      "Navigation behavior can become inconsistent because multiple components try to manage flow state independently.",
      "Conditional rule evaluation becomes unreliable when fragments, flags, and globals are stored in different places.",
      "State logic gets duplicated across renderer, interaction components, and runtime helpers.",
      "User progress can be lost during reloads or navigation if there is no centralized persistence strategy.",
      "Debugging becomes significantly harder because the full runtime picture is spread across multiple parts of the application.",
    ],
    examples: [
      "The active page id is updated in one component while page data is still stored elsewhere.",
      "A fragment unlock is recorded locally, but the decision runtime cannot evaluate it consistently.",
      "Flags used for conditional logic are stored in component state and disappear after reload.",
      "A returning user loses progress because current page and unlocked state were never hydrated from storage.",
    ],
  },

  solution: {
    intro:
      "The platform introduces a shared runtime state manager that stores the current experience state in one centralized context and exposes it to all runtime layers.",
    points: [
      "Keep currentPageId and currentPageData in shared state so page navigation and rendering stay synchronized.",
      "Track unlocked fragments and flags inside the same runtime model used by the decision engine.",
      "Store globals and history so conditional flows can evaluate current context and past progression reliably.",
      "Expose shared navigation helpers through the state layer so runtime components operate on one consistent state contract.",
      "Persist important state fields in browser storage and hydrate them when the application initializes.",
      "Make the renderer reactive to state changes instead of forcing UI components to own runtime logic themselves.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Runtime State Architecture",
      description:
        "The runtime state manager sits at the center of the frontend runtime and coordinates page data, decision evaluation, and rendering updates.",
      data: {
        layout: {
          canvasHeight: 500,
          nodeWidth: "md",
          nodeHeight: "md",
          edgeStyle: "elbow",
          labelStyle: "badge",
        },
        nodes: [
          {
            id: "api",
            label: "Backend Page API",
            x: 16,
            y: 14,
            width: "md",
          },
          {
            id: "state",
            label: "Runtime State\nManager",
            x: 44,
            y: 28,
            width: "lg",
          },
          {
            id: "runtime",
            label: "Decision Runtime",
            x: 74,
            y: 22,
            width: "md",
          },
          {
            id: "renderer",
            label: "Frontend Renderer",
            x: 72,
            y: 56,
            width: "md",
          },
          {
            id: "storage",
            label: "Browser Storage\n(Local Persistence)",
            x: 20,
            y: 66,
            width: "lg",
          },
          {
            id: "ui",
            label: "UI Components",
            x: 76,
            y: 84,
            width: "md",
          },
        ],
        edges: [
          {
            from: "api",
            to: "state",
            label: "page JSON",
            route: "auto",
            labelOffsetX: 3.8,
            labelOffsetY: -0.2,
          },
          {
            from: "state",
            to: "runtime",
            label: "shared session state",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "state",
            to: "renderer",
            label: "current page data",
            route: "auto",
            labelOffsetX: 4.2,
            labelOffsetY: -0.2,
          },
          {
            from: "storage",
            to: "state",
            label: "hydrate / persist",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "renderer",
            to: "ui",
            label: "rendered interface",
            route: "auto",
            labelOffsetX: 2.8,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "State Update Pipeline",
      description:
        "A user interaction updates shared state, which then drives decision evaluation and renderer updates.",
      data: {
        steps: [
          "User interaction",
          "Update shared runtime state",
          "Evaluate decision rules",
          "Resolve next page",
          "Store page data",
          "Re-render interface",
        ],
      },
    },
    {
      type: "sequence",
      title: "State / Resolve / Render Sequence",
      description:
        "Message flow across interaction, shared state, decision runtime, persistence, and renderer update.",
      data: {
        columns: [
          { id: "user", label: "User" },
          { id: "renderer", label: "Frontend Renderer" },
          { id: "state", label: "Runtime State" },
          { id: "runtime", label: "Decision Runtime" },
          { id: "storage", label: "Browser Storage" },
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
            label: "Trigger interaction",
            detail: "User selects a choice or advances the experience",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "renderer",
            colSpan: 2,
            variant: "forward",
            stepNumber: 2,
            label: "Send action to state layer",
            detail: "Renderer forwards the interaction to the shared runtime state",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "state",
            variant: "self",
            stepNumber: 3,
            label: "Update session values",
            detail: "State updates page id, fragments, flags, globals, or history",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "state",
            colSpan: 2,
            variant: "forward",
            stepNumber: 4,
            label: "Expose updated state",
            detail: "Decision runtime receives the latest shared context",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "runtime",
            colSpan: 2,
            variant: "backward",
            stepNumber: 5,
            label: "Return resolved destination",
            detail: "Next page is selected from the new runtime context",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "state",
            colSpan: 2,
            variant: "forward",
            stepNumber: 6,
            label: "Persist progress",
            detail: "Important session data is written to browser storage",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "storage",
            colSpan: 2,
            variant: "backward",
            stepNumber: 7,
            label: "Stored values available",
            detail: "Progress is available for reload and hydration",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "renderer",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Render updated page",
            detail: "UI re-renders from the latest shared runtime state",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "State Contract",
    title: "Example runtime state snapshot",
    language: "json",
    code: `{
  "currentPageId": "tower_entry",
  "currentPageData": {
    "id": "tower_entry",
    "type": "choice",
    "title": "Enter the tower?",
    "choices": [
      { "label": "Go inside", "next": "tower_hall" },
      { "label": "Return to camp", "next": "camp_page" }
    ]
  },
  "unlockedFragments": [
    "key_found",
    "tower_entered"
  ],
  "flags": {
    "visited_cave": true,
    "solved_riddle": false
  },
  "globals": {
    "campaignId": "softdrink_quiz",
    "lang": "en"
  },
  "history": [
    "start",
    "forest_path",
    "tower_entry"
  ]
}`,
  },

  flow: {
    title: "How shared runtime state controls the session",
    steps: [
      {
        title: "Page becomes active",
        description:
          "The state manager stores the current page id together with its resolved page data so the runtime and renderer remain synchronized.",
      },
      {
        title: "Fragments and flags evolve over time",
        description:
          "As the user interacts with the experience, unlocked fragments and boolean progress flags are added to the shared state.",
      },
      {
        title: "Decision runtime reads current context",
        description:
          "Conditional navigation logic evaluates the latest state values rather than relying on isolated component-level memory.",
      },
      {
        title: "Globals influence flow behavior",
        description:
          "Campaign settings, language, and other runtime variables allow the same story definition to behave differently across contexts.",
      },
      {
        title: "Progress is persisted locally",
        description:
          "Important session values are stored in browser persistence so progress can survive refreshes and return visits.",
      },
      {
        title: "Renderer updates reactively",
        description:
          "Whenever the state changes, the renderer receives the latest current page data and updates the interface automatically.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Current page management",
      items: [
        "Store the active page id for the current session.",
        "Keep resolved page data synchronized with current navigation state.",
        "Trigger runtime and renderer updates when page state changes.",
      ],
    },
    {
      title: "Session progression tracking",
      items: [
        "Track unlocked fragments that influence future narrative or logic outcomes.",
        "Maintain flags representing boolean progress markers and user actions.",
        "Store navigation history so prior decisions remain available for evaluation.",
      ],
    },
    {
      title: "Runtime context management",
      items: [
        "Maintain global variables that influence navigation behavior and configuration.",
        "Expose shared navigation helpers to runtime layers and renderer components.",
        "Ensure all runtime systems consume the same consistent session state.",
      ],
    },
    {
      title: "Persistence and hydration",
      items: [
        "Persist important session values to browser storage.",
        "Hydrate the runtime state during application initialization.",
        "Allow users to continue an experience after reload or return without losing progress.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime stability impact",
    paragraphs: [
      "The shared state manager prevents critical runtime information from being fragmented across multiple frontend components.",
      "Because the runtime engine, renderer, and interaction layer all read from the same state model, conditional behavior becomes more predictable and significantly easier to debug.",
      "Persistence reduces the risk of accidental progress loss and helps maintain continuity across reloads and revisit sessions.",
      "This architecture also keeps UI components simpler because presentation stays separate from session logic, navigation memory, and persistence concerns.",
    ],
  },

  outcome: [
    "A single source of truth for page state, fragments, flags, globals, and history.",
    "More reliable conditional evaluation because all runtime systems consume the same shared context.",
    "Cleaner frontend architecture with less duplicated state logic across UI components.",
    "Persistent user progress across reloads and returning sessions.",
    "A stronger foundation for complex state-driven interactive experiences.",
  ],

  takeaways: [
    "Interactive runtimes need centralized state models, not scattered component memory.",
    "State-driven navigation becomes far more reliable when page progress, flags, and fragments live in one shared context.",
    "Persistence and hydration are core parts of runtime continuity, not optional extras.",
    "Separating UI rendering from runtime session logic creates a more maintainable frontend architecture.",
    "A shared runtime state layer is a foundational building block for scalable branching systems.",
  ],

  relatedModules: [
    {
      title: "Decision Flow Runtime Engine",
      href: "/freelance/decision-runtime-engine",
    },
    {
      title: "Backend Story Resolution & Page API",
      href: "/freelance/backend-story-resolution-page-api",
    },
    {
      title: "Dynamic Story Renderer",
      href: "/freelance/dynamic-story-renderer",
    },
  ],
};