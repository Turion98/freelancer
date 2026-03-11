import type { ModuleDetailData } from "../moduleDetailTypes";

export const fragmentFlagStateSystemModule: ModuleDetailData = {
  id: "fragment-flag-state-system",
  category: "runtime-engine",

  hero: {
    eyebrow: "Lightweight Runtime Markers",
    title: "Fragment & Flag State System",
    lead:
      "A lightweight state marker system that tracks unlocked fragments and boolean flags across the user journey so interactive experiences can adapt dynamically based on earlier actions.",
    chips: [
      "Fragments",
      "Flags",
      "State Markers",
      "Progress Tracking",
      "Questell Runtime",
    ],
    businessValue:
      "This module makes interactive flows more adaptive without introducing heavy state complexity. By using lightweight fragments and flags, the platform can remember user progress, unlock new paths, and personalize content in a scalable and maintainable way.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Track persistent runtime markers that represent user progress and influence future navigation and content behavior.",
    },
    {
      label: "Problem",
      value:
        "When past decisions are stored only inside UI or local component logic, conditional branching becomes inconsistent and difficult to maintain across larger interactive flows.",
    },
    {
      label: "Core Mechanism",
      value:
        "Fragments store unlocked content states or discoveries, while flags store boolean progress markers that can be evaluated by the decision runtime and rule engine.",
    },
    {
      label: "System Benefit",
      value:
        "Interactive experiences can react to earlier user actions through a simple, extensible, and persistent marker model shared across the runtime.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How fragments and flags influence runtime behavior",
    steps: [
      {
        title: "User triggers an event",
        description:
          "A puzzle is solved, an item is found, or a meaningful choice updates the user's progression state inside the experience.",
      },
      {
        title: "State markers are updated",
        description:
          "The runtime stores a new fragment unlock or updates one or more flags inside the shared session state.",
      },
      {
        title: "Rule engine reads the markers",
        description:
          "Conditional logic checks the current fragments and flags to determine what content or navigation path should become available.",
      },
      {
        title: "Experience adapts dynamically",
        description:
          "The system can unlock new pages, reveal hidden content, or redirect navigation based on the stored markers.",
      },
      {
        title: "Progress persists across the session",
        description:
          "Markers remain available through shared runtime state and browser persistence so progress can survive reloads and revisit flows.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Interactive decision-based systems often require persistent markers that track user progress and influence future outcomes.",
      "To support this behavior, Questell implements a fragment and flag state system that stores lightweight runtime signals throughout the user journey.",
      "Fragments and flags allow the decision runtime to react to earlier user actions without depending on complex component-level state logic.",
      "This makes dynamic story progression, conditional branching, and personalized outcomes possible while keeping the runtime model simple and extensible.",
    ],
  },

  problem: {
    intro:
      "Decision-based experiences often need to remember what happened earlier, but traditional UI state is not a reliable way to manage that across complex interactive flows.",
    points: [
      "State becomes scattered across components when past actions are tracked locally.",
      "Navigation logic becomes harder to maintain when earlier decisions are not represented in one shared runtime model.",
      "Conditional branching becomes inconsistent if markers are not globally accessible.",
      "Previous discoveries, solved events, and visited states are difficult to evaluate reliably across the whole experience.",
      "Interactive systems need persistent progress tracking without forcing a heavy or overly complex data model.",
    ],
    examples: [
      "Unlocking a hidden path after the user discovers a key.",
      "Showing different narrative content depending on previous decisions.",
      "Enabling an alternative ending after certain conditions have been met.",
      "Remembering whether a user already solved a puzzle or visited a location.",
    ],
  },

  solution: {
    intro:
      "The platform introduces two complementary runtime state markers that persist across the experience and can be evaluated by the navigation system.",
    points: [
      "Use fragments to represent unlocked content, items, discoveries, or persistent story artifacts.",
      "Use flags to represent boolean progress markers such as visited states, solved events, or completed actions.",
      "Store both marker types inside shared runtime state so they remain accessible to all runtime layers.",
      "Allow the rule engine to evaluate fragments and flags directly inside structured conditional logic blocks.",
      "Support dynamic content unlocking as well as state-driven navigation branching through the same marker model.",
      "Persist marker values in local storage so runtime state can be rehydrated after reload or revisit.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Fragment & Flag State Architecture",
      description:
        "Fragments and flags live inside the shared runtime state and are consumed by the decision runtime and rule engine during navigation evaluation.",
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
            id: "interaction",
            label: "User Interaction",
            x: 12,
            y: 12,
            width: "md",
          },
          {
            id: "state",
            label: "Runtime State\nManager",
            x: 38,
            y: 28,
            width: "lg",
          },
          {
            id: "markers",
            label: "Fragments & Flags",
            x: 66,
            y: 26,
            width: "lg",
          },
          {
            id: "rules",
            label: "Rule Engine",
            x: 42,
            y: 58,
            width: "md",
          },
          {
            id: "navigation",
            label: "Navigation\nDecision",
            x: 72,
            y: 58,
            width: "md",
          },
          {
            id: "storage",
            label: "Local Storage\nPersistence",
            x: 18,
            y: 78,
            width: "lg",
          },
        ],
        edges: [
          {
            from: "interaction",
            to: "state",
            label: "user event",
            route: "auto",
            labelOffsetX: 3.8,
            labelOffsetY: -0.2,
          },
          {
            from: "state",
            to: "markers",
            label: "update markers",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "markers",
            to: "rules",
            label: "state inputs",
            route: "auto",
            labelOffsetX: -3.6,
            labelOffsetY: -0.2,
          },
          {
            from: "rules",
            to: "navigation",
            label: "matched condition",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "state",
            to: "storage",
            label: "persist session state",
            route: "auto",
            labelOffsetX: -4,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Marker Update Pipeline",
      description:
        "User actions update fragments and flags, which are then evaluated to influence future flow behavior.",
      data: {
        steps: [
          "User action occurs",
          "Update fragment or flag",
          "Store in shared runtime state",
          "Persist to local storage",
          "Rule engine evaluates markers",
          "New path or content becomes available",
        ],
      },
    },
    {
      type: "sequence",
      title: "Unlock / Evaluate / Navigate Sequence",
      description:
        "Message flow across interaction, state update, marker evaluation, and navigation outcome.",
      data: {
        columns: [
          { id: "user", label: "User" },
          { id: "runtime", label: "Runtime State" },
          { id: "markers", label: "Fragments / Flags" },
          { id: "engine", label: "Rule Engine" },
          { id: "nav", label: "Navigation" },
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
            label: "Trigger progress event",
            detail: "User solves a puzzle, finds an item, or visits a location",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "runtime",
            variant: "self",
            stepNumber: 2,
            label: "Update runtime state",
            detail: "Shared session state receives the new progression event",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "runtime",
            colSpan: 2,
            variant: "forward",
            stepNumber: 3,
            label: "Write fragment / flag",
            detail: "A fragment is unlocked or a flag value is updated",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "markers",
            colSpan: 2,
            variant: "forward",
            stepNumber: 4,
            label: "Expose marker state",
            detail: "Markers become available for conditional evaluation",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "engine",
            variant: "self",
            stepNumber: 5,
            label: "Evaluate conditions",
            detail: "Rule engine checks fragment and flag requirements",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "engine",
            colSpan: 2,
            variant: "forward",
            stepNumber: 6,
            label: "Resolve outcome",
            detail: "Matching conditions determine the next valid path",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "nav",
            variant: "self",
            stepNumber: 7,
            label: "Activate destination",
            detail: "Navigation applies the resolved branch or unlocked route",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "nav",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Continue adapted flow",
            detail: "The experience now reflects the updated user progress",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Marker Contract",
    title: "Example fragment and flag state snapshot",
    language: "json",
    code: `{
  "unlockedFragments": [
    "key_found",
    "tower_entered",
    "riddle_reward"
  ],
  "flags": {
    "visited_cave": true,
    "solved_riddle": true,
    "spoke_to_guard": false
  },
  "logic": [
    {
      "if": ["frag:key_found"],
      "goto": "secret_door"
    },
    {
      "if": ["flag:visited_cave"],
      "goto": "hidden_tunnel"
    },
    {
      "default": "locked_door"
    }
  ]
}`,
  },

  flow: {
    title: "How marker-based progression shapes the experience",
    steps: [
      {
        title: "A user action creates a meaningful state change",
        description:
          "Solving a puzzle, discovering an object, or reaching a milestone produces a runtime marker update.",
      },
      {
        title: "Fragments track unlocked story artifacts",
        description:
          "Fragments represent discoveries, items, unlocked content states, or achievements that should influence future content and flow.",
      },
      {
        title: "Flags track boolean progress conditions",
        description:
          "Flags record general progression states such as visited locations, solved events, or interaction milestones.",
      },
      {
        title: "Rules evaluate marker presence",
        description:
          "The conditional logic engine reads the current marker set and determines which navigation path or content block is valid.",
      },
      {
        title: "Narrative and navigation adapt dynamically",
        description:
          "Pages can reveal hidden text, unlock new branches, or redirect users to alternative outcomes based on stored markers.",
      },
      {
        title: "Persistence keeps progress stable",
        description:
          "Marker values survive runtime transitions and can be restored after reload, making the experience feel continuous and stateful.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Fragment management",
      items: [
        "Store unlocked content states, discoveries, items, or achievements as lightweight identifiers.",
        "Expose fragment presence to rule evaluation and dynamic content rendering.",
        "Allow narrative content and navigation paths to react to unlocked story artifacts.",
      ],
    },
    {
      title: "Flag management",
      items: [
        "Track boolean progress markers such as visited states and solved events.",
        "Represent general-purpose runtime conditions in a simple key-value structure.",
        "Allow the decision system to evaluate progression without heavy state objects.",
      ],
    },
    {
      title: "State persistence",
      items: [
        "Keep fragments and flags inside shared runtime state across the session.",
        "Persist marker values through local storage for rehydration after reload.",
        "Ensure that user progress remains available to all runtime layers.",
      ],
    },
    {
      title: "Rule engine integration",
      items: [
        "Provide the primary state inputs for conditional navigation evaluation.",
        "Support marker-driven branching and dynamic content unlocking.",
        "Keep progression logic independent from UI components and rendering logic.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime stability impact",
    paragraphs: [
      "Fragments and flags provide a predictable and lightweight way to represent progression state across complex interactive flows.",
      "Because these markers live in shared runtime state instead of scattered UI logic, branching behavior becomes easier to debug and much more consistent.",
      "The rule engine can evaluate simple marker identifiers instead of relying on fragile component memory or ad hoc conditions.",
      "Persistence and rehydration also reduce the risk of losing meaningful user progress during refreshes or return visits.",
    ],
  },

  outcome: [
    "Persistent user progress represented through lightweight runtime markers.",
    "Dynamic navigation and content unlocking based on earlier actions.",
    "Simpler and more scalable conditional logic inputs for the rule engine.",
    "Cleaner separation between progression tracking and UI implementation.",
    "A flexible foundation for adaptive interactive journeys and branching story systems.",
  ],

  takeaways: [
    "Lightweight marker systems are highly effective for interactive runtime progression.",
    "Fragments and flags solve different but complementary state-tracking needs.",
    "Persistent runtime markers enable both dynamic content adaptation and conditional navigation.",
    "Shared state markers scale better than scattered component-based progress logic.",
    "Simple identifiers can power surprisingly rich branching behavior in structured interactive systems.",
  ],

  relatedModules: [
    {
      title: "Runtime State Management System",
      href: "/freelance/runtime-state-management-system",
    },
    {
      title: "Conditional Logic & Rule Engine",
      href: "/freelance/conditional-logic-rule-engine",
    },
    {
      title: "Decision Flow Runtime Engine",
      href: "/freelance/decision-runtime-engine",
    },
  ],
};