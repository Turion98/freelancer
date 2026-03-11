import type { ModuleDetailData } from "../moduleDetailTypes";

export const reportingDecisionPathAnalyticsEngineModule: ModuleDetailData = {
  id: "reporting-decision-path-analytics-engine",
  category: "analytics-backend",

  hero: {
    eyebrow: "Behavior Analytics Reconstruction",
    title: "Reporting & Decision Path Analytics Engine",
    lead:
      "A backend reporting engine that processes append-only event logs, reconstructs sessions and runs, extracts decision paths, and generates behavioral metrics for branching interactive experiences.",
    chips: [
      "Reporting Engine",
      "Session Reconstruction",
      "Run Analytics",
      "Decision Paths",
      "Questell Analytics",
    ],
    businessValue:
      "This module turns raw interaction logs into real behavioral insight. Instead of only storing events, the platform can reconstruct how users actually moved through a branching experience, where they dropped off, how often they restarted, and which outcomes performed best.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Transform raw append-only analytics events into structured behavioral reporting such as sessions, runs, decision paths, completion metrics, and drop-off patterns.",
    },
    {
      label: "Problem",
      value:
        "Raw event streams contain detailed interaction records, but they do not directly reveal how users moved through a branching story or where important behavioral patterns occurred.",
    },
    {
      label: "Core Mechanism",
      value:
        "The reporting layer loads stored event logs, groups them by session and run identity, reconstructs ordered journey sequences, and aggregates decision outcomes into reporting metrics.",
    },
    {
      label: "System Benefit",
      value:
        "The platform can analyze branching behavior as real journeys instead of isolated events, making optimization and campaign evaluation far more meaningful.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How raw analytics become decision-path reporting",
    steps: [
      {
        title: "JSONL event logs are loaded",
        description:
          "The reporting engine reads append-only analytics logs from backend storage for the selected story and time range.",
      },
      {
        title: "Events are grouped into sessions",
        description:
          "Events sharing the same session id are grouped together to reconstruct one continuous visit to the experience.",
      },
      {
        title: "Runs are reconstructed inside sessions",
        description:
          "Within each session, events are split by run id so multiple playthroughs inside the same visit remain analytically distinct.",
      },
      {
        title: "Decision paths are extracted",
        description:
          "Ordered page transitions and choice outcomes are converted into path sequences that represent how users moved through the branching flow.",
      },
      {
        title: "Behavior metrics are aggregated",
        description:
          "The system calculates completion, restart, drop-off, and dominant path statistics from reconstructed journeys.",
      },
      {
        title: "Reporting API returns insights",
        description:
          "Backend endpoints expose the aggregated analytics so dashboards and analysis tools can query them on demand.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Collecting analytics events is only the first step in understanding user behavior inside a branching interactive experience.",
      "To answer meaningful behavioral questions, the system must reconstruct real journeys from raw event logs rather than analyze each event in isolation.",
      "In Questell, this is handled by a reporting and decision path analytics engine that processes append-only logs and rebuilds sessions, runs, navigation paths, completions, restarts, and drop-off patterns.",
      "This makes the analytics layer capable of describing how users actually moved through the story graph instead of only listing which events happened.",
    ],
  },

  problem: {
    intro:
      "Raw event logs preserve interaction history, but by themselves they do not directly explain how users behaved inside a branching flow.",
    points: [
      "Individual events do not automatically reveal the full decision journey that produced them.",
      "Traditional analytics patterns are not sufficient for reconstructing branching story traversal.",
      "Multiple playthroughs inside the same visit can be merged incorrectly without dedicated run grouping.",
      "Completion, restart, and abandonment behavior are difficult to interpret from isolated events alone.",
      "Optimization questions such as dominant paths or high-friction drop-off pages require reconstructed journey structure, not only raw event counts.",
    ],
    examples: [
      "A sequence like page_enter → choice_select → page_enter → game:complete is informative, but still does not directly show the aggregated path behavior across users.",
      "A single session may contain two different runs, one abandoned and one completed.",
      "A restart click can be mistaken for abandonment unless the reporting engine reconstructs run-level flow correctly.",
      "Drop-off analysis requires identifying the last meaningful page in incomplete runs, not just counting exit events.",
    ],
  },

  solution: {
    intro:
      "The platform introduces a reporting pipeline that reconstructs journey structure from raw event logs before computing analytics metrics.",
    points: [
      "Load append-only JSONL logs as the canonical analytics source.",
      "Group events first by session id to reconstruct one continuous story visit.",
      "Group events inside sessions by run id to distinguish separate playthroughs.",
      "Sort events chronologically within each run to rebuild the true interaction sequence.",
      "Extract page paths and branch sequences from reconstructed runs.",
      "Detect completions through completion events such as game:complete.",
      "Detect restarts through explicit restart UI actions and multiple runs inside the same session.",
      "Detect drop-offs by identifying incomplete runs and recording their last visited page.",
      "Expose aggregated metrics through reporting endpoints such as rollup and rollup-range APIs.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Reporting Engine Architecture",
      description:
        "The reporting layer reads append-only logs, reconstructs sessions and runs, extracts decision paths, and exposes aggregated behavior through backend reporting APIs.",
      data: {
        layout: {
          canvasHeight: 540,
          nodeWidth: "md",
          nodeHeight: "md",
          edgeStyle: "elbow",
          labelStyle: "badge",
        },
        nodes: [
          {
            id: "logs",
            label: "JSONL Event Logs",
            x: 10,
            y: 14,
            width: "md",
          },
          {
            id: "loader",
            label: "Event Loading",
            x: 28,
            y: 30,
            width: "md",
          },
          {
            id: "sessions",
            label: "Session\nGrouping",
            x: 48,
            y: 46,
            width: "md",
          },
          {
            id: "runs",
            label: "Run\nReconstruction",
            x: 68,
            y: 32,
            width: "md",
          },
          {
            id: "paths",
            label: "Decision Path\nAnalysis",
            x: 70,
            y: 62,
            width: "lg",
          },
          {
            id: "metrics",
            label: "Behavior\nMetrics",
            x: 46,
            y: 82,
            width: "md",
          },
          {
            id: "api",
            label: "Reporting API",
            x: 78,
            y: 84,
            width: "md",
          },
        ],
        edges: [
          {
            from: "logs",
            to: "loader",
            label: "raw events",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "loader",
            to: "sessions",
            label: "loaded range",
            route: "auto",
            labelOffsetX: 3.4,
            labelOffsetY: -0.2,
          },
          {
            from: "sessions",
            to: "runs",
            label: "group by runId",
            route: "auto",
            labelOffsetX: 2.8,
            labelOffsetY: -0.2,
          },
          {
            from: "runs",
            to: "paths",
            label: "ordered journeys",
            route: "auto",
            labelOffsetX: -3.8,
            labelOffsetY: -0.2,
          },
          {
            from: "paths",
            to: "metrics",
            label: "aggregated behavior",
            route: "auto",
            labelOffsetX: -5.2,
            labelOffsetY: -0.2,
          },
          {
            from: "metrics",
            to: "api",
            label: "report output",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Reporting Reconstruction Pipeline",
      description:
        "The reporting engine transforms raw logs into structured behavioral analytics through staged reconstruction.",
      data: {
        steps: [
          "Load event log range",
          "Group into sessions",
          "Reconstruct runs",
          "Sort run events",
          "Extract decision paths",
          "Compute completion / restart / drop-off metrics",
          "Return reporting response",
        ],
      },
    },
    {
      type: "sequence",
      title: "Load / Reconstruct / Report Sequence",
      description:
        "Message flow across log loading, session grouping, run reconstruction, path extraction, and reporting API output.",
      data: {
        columns: [
          { id: "api", label: "Reporting API" },
          { id: "loader", label: "Event Loader" },
          { id: "sessions", label: "Session Grouper" },
          { id: "runs", label: "Run Analyzer" },
          { id: "metrics", label: "Metrics Builder" },
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
            column: "api",
            colSpan: 2,
            variant: "forward",
            stepNumber: 1,
            label: "Request analytics range",
            detail: "Client requests behavioral reporting for a story and time range",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "loader",
            variant: "self",
            stepNumber: 2,
            label: "Load matching logs",
            detail: "Event log files are read from append-only backend storage",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "loader",
            colSpan: 2,
            variant: "forward",
            stepNumber: 3,
            label: "Build sessions",
            detail: "Events are grouped by session id into continuous visits",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "sessions",
            colSpan: 2,
            variant: "forward",
            stepNumber: 4,
            label: "Split into runs",
            detail: "Session events are separated into individual playthroughs by run id",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "runs",
            variant: "self",
            stepNumber: 5,
            label: "Reconstruct ordered paths",
            detail: "Events are sorted chronologically to rebuild actual story traversal",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "runs",
            colSpan: 2,
            variant: "forward",
            stepNumber: 6,
            label: "Compute behavior metrics",
            detail: "Paths, completions, restarts, and drop-offs are aggregated",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "metrics",
            colSpan: 2,
            variant: "backward",
            stepNumber: 7,
            label: "Return reporting dataset",
            detail: "Structured analytics output is prepared for the response",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "api",
            variant: "self",
            stepNumber: 8,
            label: "Send rollup response",
            detail: "Backend reporting endpoint returns behavioral analytics to the caller",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Reporting Contract",
    title: "Example reconstructed path analytics output",
    language: "json",
    code: `{
  "storyId": "coffee_quiz_demo",
  "range": {
    "from": "2026-03-01",
    "to": "2026-03-10"
  },
  "sessions": 148,
  "runs": 191,
  "completedRuns": 112,
  "completionRate": 0.586,
  "restarts": 37,
  "topPaths": [
    {
      "path": ["intro", "branch_A", "ending_A"],
      "count": 86,
      "share": 0.45
    },
    {
      "path": ["intro", "branch_B", "ending_B"],
      "count": 61,
      "share": 0.32
    }
  ],
  "dropOffPages": [
    {
      "pageId": "branch_A",
      "count": 19
    }
  ]
}`,
  },

  flow: {
    title: "How the engine converts logs into behavioral insight",
    steps: [
      {
        title: "Raw logs provide source history",
        description:
          "The reporting layer starts from append-only backend logs that preserve original runtime event order and identity metadata.",
      },
      {
        title: "Session grouping restores visit context",
        description:
          "Events sharing the same session id are grouped together so one continuous visit can be analyzed as a behavioral unit.",
      },
      {
        title: "Run grouping restores playthrough structure",
        description:
          "Within each session, separate run ids allow the engine to distinguish replays and restarts from one another.",
      },
      {
        title: "Chronological sorting rebuilds journeys",
        description:
          "Events inside each run are ordered by timestamp so the engine can reconstruct the actual page and decision sequence taken by the user.",
      },
      {
        title: "Path and outcome analysis extracts meaning",
        description:
          "Once journeys exist as ordered structures, the engine can calculate dominant paths, completion patterns, restart frequency, and drop-off points.",
      },
      {
        title: "Reporting APIs expose flexible rollups",
        description:
          "The metrics are returned through backend endpoints for selected time windows without changing ingestion or raw storage logic.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Event loading layer",
      items: [
        "Read append-only JSONL analytics logs for requested stories and time ranges.",
        "Provide raw event sequences to reconstruction logic without mutating source data.",
        "Act as the bridge between durable storage and reporting computation.",
      ],
    },
    {
      title: "Session and run reconstruction",
      items: [
        "Group events by session id to rebuild continuous visits.",
        "Group session events by run id to separate playthroughs within the same visit.",
        "Sort run events by timestamp to restore chronological interaction flow.",
      ],
    },
    {
      title: "Behavioral analysis layer",
      items: [
        "Extract decision paths from reconstructed run sequences.",
        "Detect completed runs through completion markers.",
        "Detect restart behavior through explicit restart actions and repeated runs inside one session.",
        "Detect drop-off points by identifying the last meaningful page in incomplete runs.",
      ],
    },
    {
      title: "Reporting API layer",
      items: [
        "Aggregate metrics for arbitrary reporting windows.",
        "Expose rollup endpoints such as range-based analytics responses.",
        "Return structured behavioral summaries instead of only raw event counts.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime stability impact",
    paragraphs: [
      "The reporting engine keeps analytics interpretation separate from ingestion, which makes the overall pipeline easier to trust and evolve.",
      "Because reporting is built on append-only source logs, bugs in aggregation logic can be investigated without losing the original behavioral record.",
      "Session and run reconstruction prevent different visits or repeated playthroughs from being merged incorrectly, which is essential for branching experiences.",
      "This architecture also keeps frontend tracking simpler because the browser only needs to emit consistent runtime events, while the backend handles deeper behavioral interpretation later.",
    ],
  },

  outcome: [
    "Structured behavioral reporting built from raw event logs.",
    "Accurate session and run reconstruction for branching interactive experiences.",
    "Decision path visibility across multiple playthroughs and outcomes.",
    "Reliable completion, restart, and drop-off metrics.",
    "Flexible reporting APIs that work across arbitrary time ranges.",
  ],

  takeaways: [
    "Raw event collection is not enough; branching systems need journey reconstruction.",
    "Session-level and run-level grouping solve different analytics problems and both are essential.",
    "Decision path aggregation reveals behavior patterns that isolated event counts cannot show.",
    "Append-only logs are especially valuable because reporting models can evolve later without losing source truth.",
    "Behavioral analytics for interactive systems should be built around journeys, not just page views.",
  ],

  relatedModules: [
    {
      title: "Backend Event Ingestion & Append-Only Storage",
      href: "/freelance/backend-event-ingestion-append-only-storage",
    },
    {
      title: "Client Event Queue & Batch Upload System",
      href: "/freelance/client-event-queue-batch-upload-system",
    },
    {
      title: "Frontend Event Tracking & Identity Layer",
      href: "/freelance/frontend-event-tracking-identity-layer",
    },
  ],
};