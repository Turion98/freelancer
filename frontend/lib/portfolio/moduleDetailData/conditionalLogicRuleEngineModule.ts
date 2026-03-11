import type { ModuleDetailData } from "../moduleDetailTypes";

export const conditionalLogicRuleEngineModule: ModuleDetailData = {
  id: "conditional-logic-rule-engine",
  category: "runtime-engine",

  hero: {
    eyebrow: "Runtime Rule Evaluation",
    title: "Conditional Logic & Rule Engine",
    lead:
      "A rule-based evaluation layer that interprets conditional logic defined inside story JSON and resolves navigation outcomes dynamically from runtime state.",
    chips: [
      "Rule Engine",
      "Conditional Logic",
      "State Evaluation",
      "Declarative Branching",
      "Questell Runtime",
    ],
    businessValue:
      "This module makes complex branching behavior scalable by moving conditional navigation rules out of UI components and into structured story data. That allows content-driven flows to become more flexible, easier to maintain, and far simpler to extend without rewriting application logic.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Evaluate conditional navigation rules at runtime and determine the correct next page based on user state and story logic.",
    },
    {
      label: "Problem",
      value:
        "When conditional branching is implemented directly in UI components, navigation logic becomes scattered, harder to maintain, and difficult for content authors to control.",
    },
    {
      label: "Core Mechanism",
      value:
        "Pages can define logic rules inside structured JSON, and the rule engine evaluates them sequentially against fragments, flags, and runtime variables.",
    },
    {
      label: "System Benefit",
      value:
        "Branching behavior becomes centralized, deterministic, and content-driven, while the renderer remains focused on presentation.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How conditional navigation works at runtime",
    steps: [
      {
        title: "Page with logic becomes active",
        description:
          "The runtime loads a page that contains structured conditional rules instead of a simple direct next reference.",
      },
      {
        title: "Rule engine inspects logic block",
        description:
          "The engine checks whether the page contains rule definitions and prepares them for deterministic evaluation.",
      },
      {
        title: "Runtime state is evaluated",
        description:
          "Fragments, flags, and other state markers are checked against the conditions defined in the current rule set.",
      },
      {
        title: "First matching rule is selected",
        description:
          "Rules are evaluated in order, and the first rule whose conditions are fully satisfied determines the navigation result.",
      },
      {
        title: "Destination page is resolved",
        description:
          "The resolved target page is returned to the navigation layer and passed to the renderer.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Interactive decision systems often require navigation paths that depend on the user's previous actions or on the current runtime state.",
      "To support this behavior, the platform implements a conditional logic and rule evaluation engine that determines navigation outcomes through structured rule definitions stored directly in story JSON.",
      "Instead of embedding conditional branching inside UI components, the engine interprets rules dynamically during runtime execution.",
      "This approach allows complex branching behavior to remain centralized, predictable, and content-driven while keeping the rendering layer independent from decision logic.",
    ],
  },

  problem: {
    intro:
      "Conditional navigation becomes difficult to scale when rule logic is embedded directly inside frontend components.",
    points: [
      "Navigation rules become scattered across the interface instead of living in one runtime-controlled layer.",
      "Conditional logic becomes harder to maintain as story complexity and branching depth increase.",
      "Content creators cannot easily define new branching behaviors without engineering changes.",
      "UI code becomes tightly coupled to story logic and user history evaluation.",
      "Large rule sets become harder to reason about when branching behavior is spread across multiple components.",
    ],
    examples: [
      "Unlocking a hidden path after the user previously found a required fragment.",
      "Redirecting users to different outcomes depending on prior decisions.",
      "Automatically routing the user when certain runtime conditions are met.",
      "Using separate endings that depend on accumulated story state rather than only the current choice.",
    ],
  },

  solution: {
    intro:
      "The platform introduces a dedicated rule evaluation engine that processes conditional navigation rules defined declaratively inside the page structure.",
    points: [
      "Allow pages to contain logic blocks that define conditions and their navigation targets.",
      "Evaluate rules sequentially and resolve the first rule whose full condition set is satisfied.",
      "Support default routes when no conditional rule matches the current runtime state.",
      "Interpret fragments, flags, and combined conditions through one centralized runtime engine.",
      "Keep branching logic declarative inside story JSON instead of procedural inside UI code.",
      "Enable logic-only pages that exist purely to evaluate conditions and redirect automatically.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Rule Engine Architecture",
      description:
        "The rule engine operates inside the runtime decision layer and evaluates page-level logic against the current runtime state before navigation continues.",
      data: {
        layout: {
          canvasHeight: 480,
          nodeWidth: "md",
          nodeHeight: "md",
          edgeStyle: "elbow",
          labelStyle: "badge",
        },
        nodes: [
          {
            id: "page-json",
            label: "Page JSON\n(with logic block)",
            x: 10,
            y: 14,
            width: "lg",
          },
          {
            id: "rule-engine",
            label: "Conditional Rule\nEngine",
            x: 38,
            y: 30,
            width: "lg",
          },
          {
            id: "runtime-state",
            label: "Runtime State\n(fragments / flags / globals)",
            x: 70,
            y: 24,
            width: "lg",
          },
          {
            id: "resolution",
            label: "Navigation\nResolution",
            x: 44,
            y: 62,
            width: "md",
          },
          {
            id: "renderer",
            label: "Frontend Renderer",
            x: 78,
            y: 80,
            width: "md",
          },
        ],
        edges: [
          {
            from: "page-json",
            to: "rule-engine",
            label: "logic rules",
            route: "auto",
            labelOffsetX: 4.2,
            labelOffsetY: -0.2,
          },
          {
            from: "runtime-state",
            to: "rule-engine",
            label: "state values",
            route: "auto",
            labelOffsetX: -3.8,
            labelOffsetY: -0.2,
          },
          {
            from: "rule-engine",
            to: "resolution",
            label: "matched target",
            route: "auto",
            labelOffsetX: 2.4,
            labelOffsetY: -0.2,
          },
          {
            from: "resolution",
            to: "renderer",
            label: "resolved page",
            route: "auto",
            labelOffsetX: 3.6,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Rule Evaluation Pipeline",
      description:
        "The engine follows a deterministic sequence from logic inspection to target resolution.",
      data: {
        steps: [
          "Load page",
          "Check for logic rules",
          "Evaluate rule conditions",
          "Select first matching rule",
          "Resolve target page",
          "Continue navigation",
        ],
      },
    },
    {
      type: "sequence",
      title: "Load / Evaluate / Redirect Sequence",
      description:
        "Message flow across page load, rule evaluation, runtime state inspection, and destination resolution.",
      data: {
        columns: [
          { id: "runtime", label: "Decision Runtime" },
          { id: "page", label: "Current Page" },
          { id: "engine", label: "Rule Engine" },
          { id: "state", label: "Runtime State" },
          { id: "renderer", label: "Renderer" },
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
            column: "runtime",
            colSpan: 2,
            variant: "forward",
            stepNumber: 1,
            label: "Load active page",
            detail: "Runtime receives the current page definition",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "page",
            colSpan: 2,
            variant: "forward",
            stepNumber: 2,
            label: "Expose logic block",
            detail: "Current page provides conditional rule definitions",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "engine",
            variant: "self",
            stepNumber: 3,
            label: "Check rules in order",
            detail: "Engine starts deterministic sequential evaluation",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "engine",
            colSpan: 2,
            variant: "forward",
            stepNumber: 4,
            label: "Read runtime state",
            detail: "Fragments, flags, and globals are requested for evaluation",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "state",
            colSpan: 2,
            variant: "backward",
            stepNumber: 5,
            label: "Return state values",
            detail: "Rule engine receives the current navigation context",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "engine",
            variant: "self",
            stepNumber: 6,
            label: "Resolve first match",
            detail: "First fully satisfied rule determines the destination",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "engine",
            colSpan: 2,
            variant: "forward",
            stepNumber: 7,
            label: "Return target page",
            detail: "Resolved page id is returned to navigation",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "renderer",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Render destination",
            detail: "Renderer loads the resolved page instead of the logic page",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Rule Contract",
    title: "Example conditional logic block",
    language: "json",
    code: `{
  "id": "logic_gate",
  "type": "logic",
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
      "if": ["frag:key_found", "flag:solved_riddle"],
      "goto": "treasure_room"
    },
    {
      "default": "locked_door"
    }
  ]
}`,
  },

  flow: {
    title: "How conditional rules drive runtime navigation",
    steps: [
      {
        title: "A page introduces logic-based branching",
        description:
          "Instead of using only a direct next field, the current page provides declarative conditions that define multiple possible outcomes.",
      },
      {
        title: "The rule engine evaluates conditions in order",
        description:
          "Each rule is processed sequentially so navigation remains deterministic and consistent across sessions.",
      },
      {
        title: "Conditions read from runtime state",
        description:
          "Fragments, flags, and combined conditions are checked against the current user progression and story context.",
      },
      {
        title: "The first valid rule wins",
        description:
          "Once a fully satisfied rule is found, its target page becomes the resolved navigation destination.",
      },
      {
        title: "Default fallback keeps navigation safe",
        description:
          "If no conditional rule matches, the engine uses the default route to prevent unresolved branching.",
      },
      {
        title: "Logic-only pages redirect without UI overhead",
        description:
          "Pages that exist only for evaluation can resolve and redirect immediately without presenting unnecessary interface content.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Rule interpretation",
      items: [
        "Read logic blocks embedded directly in structured page JSON.",
        "Process rule definitions declaratively rather than through hardcoded UI conditions.",
        "Support deterministic sequential evaluation of rule sets.",
      ],
    },
    {
      title: "Condition evaluation",
      items: [
        "Check fragment-based conditions against unlocked runtime content.",
        "Check flag-based conditions against boolean progress markers.",
        "Support combined conditions where all listed requirements must evaluate to true.",
      ],
    },
    {
      title: "Navigation resolution",
      items: [
        "Return the first matching target page from the evaluated rule set.",
        "Fall back to a default target when no rule matches.",
        "Integrate rule outcomes directly into runtime navigation flow.",
      ],
    },
    {
      title: "Content-driven branching",
      items: [
        "Allow content authors to define branching outcomes without modifying application code.",
        "Keep story logic inside the content model rather than scattering it across UI components.",
        "Support logic-only pages that resolve outcomes before rendering completes.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime stability impact",
    paragraphs: [
      "Because conditional branching is evaluated through one centralized rule engine, navigation behavior becomes far more predictable than when logic is spread across frontend components.",
      "Deterministic rule ordering ensures the same runtime state always produces the same navigation result, which makes debugging and testing much easier.",
      "Default fallbacks reduce the risk of broken flow resolution when no condition matches.",
      "This architecture also protects the renderer from having to interpret business logic itself, keeping presentation simpler and more stable as branching behavior grows.",
    ],
  },

  outcome: [
    "Flexible branching logic expressed directly inside structured story definitions.",
    "Deterministic rule evaluation based on runtime state.",
    "Cleaner separation between conditional logic and UI rendering.",
    "Support for logic-only pages and automatic redirects.",
    "A more scalable foundation for large decision trees and adaptive story outcomes.",
  ],

  takeaways: [
    "Rule-based navigation systems scale better than UI-embedded conditional branching.",
    "Declarative logic makes branching behavior easier to maintain and easier for content authors to influence.",
    "State-driven evaluation enables dynamic outcomes without procedural UI code.",
    "Deterministic rule order is essential for predictable runtime behavior.",
    "Separating rule evaluation from rendering produces a cleaner and more modular interactive architecture.",
  ],

  relatedModules: [
    {
      title: "Decision Flow Runtime Engine",
      href: "/freelance/decision-runtime-engine",
    },
    {
      title: "Runtime State Management System",
      href: "/freelance/runtime-state-management-system",
    },
    {
      title: "Dynamic Story Renderer",
      href: "/freelance/dynamic-story-renderer",
    },
  ],
};