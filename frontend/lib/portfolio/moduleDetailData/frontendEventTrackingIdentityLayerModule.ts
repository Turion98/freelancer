import type { ModuleDetailData } from "../moduleDetailTypes";

export const frontendEventTrackingIdentityLayerModule: ModuleDetailData = {
  id: "frontend-event-tracking-identity-layer",
  category: "analytics-runtime",

  hero: {
    eyebrow: "Runtime Analytics Foundation",
    title: "Frontend Event Tracking & Identity Layer",
    lead:
      "A centralized frontend analytics layer that captures runtime interactions, enriches them with consistent identity context, and stores them in a structured event stream for journey reconstruction.",
    chips: [
      "Frontend Analytics",
      "Identity Model",
      "Run Tracking",
      "Event Queue",
      "Questell Runtime",
    ],
    businessValue:
      "This module turns interactive behavior into structured analytics data. Instead of collecting isolated click events, the platform can reconstruct real user journeys, separate individual playthroughs, and analyze how decisions influence outcomes across complex story experiences.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Capture runtime interactions as structured analytics events enriched with user, session, run, and page identity context.",
    },
    {
      label: "Problem",
      value:
        "If components emit analytics independently, event formats become inconsistent and decision paths cannot be reconstructed reliably.",
    },
    {
      label: "Core Mechanism",
      value:
        "A shared analytics module normalizes events through a common event builder, attaches identity metadata, deduplicates rapid duplicates, and stores events in a local client-side queue.",
    },
    {
      label: "System Benefit",
      value:
        "Interactive journeys become measurable at path level, run level, and session level instead of only through generic pageview-style analytics.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How runtime interactions become analytics events",
    steps: [
      {
        title: "User interacts with the experience",
        description:
          "Page transitions, choices, UI controls, puzzle actions, and media events are triggered from within the story runtime.",
      },
      {
        title: "Runtime calls tracking helper",
        description:
          "Story components invoke centralized track functions such as page enter, choice select, game complete, media start, or UI click tracking.",
      },
      {
        title: "Event is enriched with identity context",
        description:
          "A shared base event builder attaches story id, session id, run id, page id, timestamp, and other metadata before the event is accepted.",
      },
      {
        title: "Event enters the local queue",
        description:
          "The normalized event is pushed into a browser-side queue instead of triggering a network request immediately.",
      },
      {
        title: "Journey data becomes reconstructable",
        description:
          "Because every event shares a stable identity contract, the system can later rebuild decision paths, restarts, completions, and abandonment patterns.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Interactive story experiences generate a much richer set of user actions than traditional page-based websites.",
      "Instead of only measuring page visits, the Questell frontend analytics layer captures runtime events such as page transitions, branching decisions, UI interactions, puzzle states, media playback, and completion milestones.",
      "To make these interactions analytically useful, the system attaches them to a consistent identity hierarchy that distinguishes users, sessions, and individual runs inside the same visit.",
      "This allows the platform to reconstruct complete decision journeys and analyze behavior at the same granularity as the interactive runtime itself.",
    ],
  },

  problem: {
    intro:
      "Interactive narratives produce many different event types, but traditional frontend analytics patterns are not designed to preserve journey structure across branching playthroughs.",
    points: [
      "Different components can emit analytics in inconsistent payload formats.",
      "Important runtime identifiers such as run id or page id can be missing from some events.",
      "Duplicate events can appear during rapid UI updates or repeated render cycles.",
      "Multiple playthroughs inside the same visit are difficult to separate without a dedicated run-level identity model.",
      "Traditional page analytics cannot answer branch-specific questions such as which choices led to a particular ending or where users abandoned the story.",
    ],
    examples: [
      "A choice click is tracked without the current run id, making that branch impossible to group correctly.",
      "A completion event fires twice during a fast rerender and inflates outcome analytics.",
      "Two separate restarts inside one session are merged together because there is no run-level separation.",
      "Media and UI interactions are logged as isolated clicks instead of part of one continuous journey.",
    ],
  },

  solution: {
    intro:
      "The platform introduces a centralized frontend event layer that all interactive runtime analytics pass through before entering storage or upload pipelines.",
    points: [
      "Use shared track helper functions so every interaction follows the same event contract.",
      "Construct events through a common base event builder that attaches identity and metadata consistently.",
      "Represent analytics identity as a hierarchy of user, session, run, and event.",
      "Generate a persistent browser-level user id and story-scoped session identifiers for visit grouping.",
      "Create a new run id whenever the story restarts so multiple playthroughs inside one visit remain analytically distinct.",
      "Store events in a local queue with deduplication and bounded retention instead of sending a network request for every interaction.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Frontend Analytics Architecture",
      description:
        "Runtime interactions pass through a centralized analytics layer where identity enrichment, normalization, deduplication, and local queue storage occur before upload.",
      data: {
        layout: {
          canvasHeight: 520,
          nodeWidth: "md",
          nodeHeight: "md",
          edgeStyle: "elbow",
          labelStyle: "badge",
        },
        nodes: [
          {
            id: "interaction",
            label: "User Interaction",
            x: 10,
            y: 12,
            width: "md",
          },
          {
            id: "storypage",
            label: "StoryPage\nRuntime",
            x: 30,
            y: 26,
            width: "md",
          },
          {
            id: "track",
            label: "track* Helpers",
            x: 50,
            y: 40,
            width: "md",
          },
          {
            id: "base",
            label: "baseEvent\nEnrichment",
            x: 72,
            y: 28,
            width: "md",
          },
          {
            id: "identity",
            label: "Identity Model\n(user / session / run)",
            x: 72,
            y: 56,
            width: "lg",
          },
          {
            id: "queue",
            label: "Local Event Queue",
            x: 46,
            y: 74,
            width: "md",
          },
          {
            id: "storage",
            label: "Browser Storage",
            x: 20,
            y: 88,
            width: "md",
          },
        ],
        edges: [
          {
            from: "interaction",
            to: "storypage",
            label: "runtime actions",
            route: "auto",
            labelOffsetX: 3.4,
            labelOffsetY: -0.2,
          },
          {
            from: "storypage",
            to: "track",
            label: "track call",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "track",
            to: "base",
            label: "normalized payload",
            route: "auto",
            labelOffsetX: 2.8,
            labelOffsetY: -0.2,
          },
          {
            from: "identity",
            to: "base",
            label: "attach ids",
            route: "auto",
            labelOffsetX: -3.4,
            labelOffsetY: -0.2,
          },
          {
            from: "base",
            to: "queue",
            label: "push event",
            route: "auto",
            labelOffsetX: -5.2,
            labelOffsetY: -0.2,
          },
          {
            from: "queue",
            to: "storage",
            label: "persist queue",
            route: "auto",
            labelOffsetX: -2.8,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Event Tracking Pipeline",
      description:
        "Every tracked interaction follows the same normalization and queueing pipeline before it becomes part of the behavioral event stream.",
      data: {
        steps: [
          "Runtime interaction",
          "track* helper called",
          "base event built",
          "identity attached",
          "deduplicate if needed",
          "push into local queue",
        ],
      },
    },
    {
      type: "sequence",
      title: "Track / Enrich / Queue Sequence",
      description:
        "Message flow across runtime interaction, analytics helpers, identity enrichment, and queue persistence.",
      data: {
        columns: [
          { id: "user", label: "User" },
          { id: "runtime", label: "Story Runtime" },
          { id: "analytics", label: "Analytics Layer" },
          { id: "identity", label: "Identity Context" },
          { id: "queue", label: "Event Queue" },
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
            detail: "User selects a choice or triggers another runtime action",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "runtime",
            colSpan: 2,
            variant: "forward",
            stepNumber: 2,
            label: "Call track helper",
            detail: "Runtime invokes the relevant tracking function",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "analytics",
            variant: "self",
            stepNumber: 3,
            label: "Build base event",
            detail: "Shared helper normalizes event name and payload shape",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "analytics",
            colSpan: 2,
            variant: "forward",
            stepNumber: 4,
            label: "Request identity values",
            detail: "Story, session, run, page, and runtime metadata are attached",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "identity",
            colSpan: 2,
            variant: "backward",
            stepNumber: 5,
            label: "Return identifiers",
            detail: "Analytics layer receives the current identity context",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "analytics",
            variant: "self",
            stepNumber: 6,
            label: "Deduplicate window check",
            detail: "Rapid duplicate events inside the merge window are ignored",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "analytics",
            colSpan: 2,
            variant: "forward",
            stepNumber: 7,
            label: "Push to queue",
            detail: "Accepted event is added to the local client-side queue",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "queue",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Persist event stream",
            detail: "Behavioral event data is stored for later upload and analysis",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Event Contract",
    title: "Example normalized analytics event",
    language: "json",
    code: `{
  "storyId": "coffee_quiz_demo",
  "sessionId": "sess_8af21",
  "pageId": "start",
  "eventType": "choice_select",
  "timestamp": 1731502845123,
  "props": {
    "runId": "run_02",
    "userId": "usr_f91b7",
    "domain": "questell.app",
    "choiceId": "espresso_path"
  }
}`,
  },

  flow: {
    title: "How structured event tracking supports journey analytics",
    steps: [
      {
        title: "Runtime emits real behavioral signals",
        description:
          "Events are triggered directly from page lifecycle, choice handlers, media controls, puzzle interactions, and completion logic inside the experience runtime.",
      },
      {
        title: "Normalization enforces one analytics contract",
        description:
          "Every event passes through a shared builder so naming, timestamps, identifiers, and metadata stay consistent across the frontend.",
      },
      {
        title: "Identity hierarchy separates behavior levels",
        description:
          "User id groups activity over time, session id groups a visit, and run id separates multiple playthroughs within the same session.",
      },
      {
        title: "Deduplication protects data quality",
        description:
          "A short merge window reduces duplicate event noise caused by rapid UI updates or repeated handler execution.",
      },
      {
        title: "Queueing avoids chatty network behavior",
        description:
          "Events are temporarily stored on the client in memory and browser storage, which reduces the need for immediate network requests.",
      },
      {
        title: "Journey reconstruction becomes possible",
        description:
          "Because every event carries consistent runtime context, analysts can rebuild paths, endings, restarts, and abandonment patterns from the event stream.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Centralized event emission",
      items: [
        "Provide shared track helper functions for all important runtime interaction types.",
        "Keep event creation consistent across StoryPage and related frontend runtime components.",
        "Prevent analytics logic from being duplicated inside individual UI elements.",
      ],
    },
    {
      title: "Identity attachment",
      items: [
        "Generate and persist a browser-level user id.",
        "Create story-scoped session ids with inactivity-based grouping behavior.",
        "Create run ids for individual playthroughs so restarts stay analytically separate.",
      ],
    },
    {
      title: "Event normalization",
      items: [
        "Attach timestamps, page context, and runtime metadata in a consistent format.",
        "Standardize event names and payload structure before queue insertion.",
        "Apply a merge window to suppress near-identical duplicates.",
      ],
    },
    {
      title: "Local queue management",
      items: [
        "Store events temporarily in browser memory and local storage.",
        "Keep a bounded queue size per story to avoid unbounded client growth.",
        "Debounce persistence so analytics storage does not cause excessive write activity.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime stability impact",
    paragraphs: [
      "Because analytics tracking is centralized, runtime components do not need to implement their own inconsistent event payload logic.",
      "The identity hierarchy prevents different visits and playthroughs from being merged together, which significantly improves behavioral data quality.",
      "Deduplication reduces noisy analytics inflation caused by rapid rerenders or repeated interaction triggers.",
      "Queue-based client storage also keeps runtime interaction handling lightweight by avoiding a network request on every single event.",
    ],
  },

  outcome: [
    "A consistent frontend analytics contract for all runtime interaction types.",
    "Reliable journey reconstruction across pages, choices, completions, and restarts.",
    "Run-level analytics that separate multiple playthroughs inside one visit.",
    "Improved data quality through normalization and duplicate suppression.",
    "A reusable tracking layer that can be applied across multiple interactive campaigns.",
  ],

  takeaways: [
    "Interactive experiences require runtime-aware analytics, not only generic page tracking.",
    "Identity should distinguish users, sessions, and playthrough runs separately.",
    "Centralized event normalization greatly improves data consistency and analysis quality.",
    "Client-side queues are effective for high-frequency interaction systems.",
    "Deduplication is essential when analytics events are triggered from reactive frontend runtimes.",
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
      title: "Fragment & Flag State System",
      href: "/freelance/fragment-flag-state-system",
    },
  ],
};