import type { ModuleDetailData } from "../moduleDetailTypes";

export const backendEventIngestionAppendOnlyStorageModule: ModuleDetailData = {
  id: "backend-event-ingestion-append-only-storage",
  category: "analytics-backend",

  hero: {
    eyebrow: "Backend Analytics Intake",
    title: "Backend Event Ingestion & Append-Only Storage",
    lead:
      "A backend ingestion layer that receives batched frontend analytics events, normalizes their runtime identity fields, and stores them in append-only JSONL logs as the canonical source of truth for later reporting.",
    chips: [
      "FastAPI Ingestion",
      "Append-Only Logs",
      "JSONL Storage",
      "Batch Processing",
      "Questell Analytics",
    ],
    businessValue:
      "This module makes analytics trustworthy by preserving every runtime interaction exactly as it happened before any reporting logic transforms it. Instead of calculating metrics during intake, the backend stores a durable chronological event log that can later support debugging, path reconstruction, and evolving analytics models.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Receive frontend analytics batches and persist each event in chronological append-only storage before any downstream aggregation occurs.",
    },
    {
      label: "Problem",
      value:
        "If analytics are aggregated or transformed too early during ingestion, raw journey structure can be lost and partial failures can corrupt reporting accuracy.",
    },
    {
      label: "Core Mechanism",
      value:
        "The backend accepts batched event payloads through a dedicated API, performs light normalization, groups records by story and day, and appends them sequentially into JSONL log files.",
    },
    {
      label: "System Benefit",
      value:
        "The platform preserves a durable raw event history that supports later session reconstruction, run reconstruction, decision path analysis, and analytics debugging.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How uploaded analytics become backend source-of-truth logs",
    steps: [
      {
        title: "Client uploads batched events",
        description:
          "The frontend event queue sends multiple runtime analytics events together through the dedicated analytics batch endpoint.",
      },
      {
        title: "Backend ingestion endpoint receives payload",
        description:
          "FastAPI accepts the incoming batch and validates the high-level request structure before event-level normalization begins.",
      },
      {
        title: "Events are normalized lightly",
        description:
          "Missing identity fields such as storyId, runId, timestamp, or event id are repaired or promoted so the stored records remain structurally consistent.",
      },
      {
        title: "Events are grouped into daily story logs",
        description:
          "The ingestion service resolves the target JSONL file path using story scope and calendar day segmentation.",
      },
      {
        title: "Batch header and events are appended",
        description:
          "A batch metadata header is written first, then each event is appended in order so the raw interaction chronology is preserved.",
      },
      {
        title: "Reporting reads logs later",
        description:
          "Downstream rollup and reconstruction systems consume the append-only logs later without affecting ingestion speed or durability.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Once analytics events leave the browser, the backend must preserve them reliably before any reporting logic attempts to interpret them.",
      "In Questell, this is handled through a backend ingestion service combined with append-only JSONL event storage.",
      "Instead of calculating metrics inline during intake, the backend stores each event chronologically as part of a raw event log that becomes the canonical dataset for later analytics operations.",
      "This architecture allows the system to preserve original runtime structure, keep ingestion predictable, and support later reconstruction of sessions, runs, outcomes, and decision paths from source data.",
    ],
  },

  problem: {
    intro:
      "Interactive applications produce high-volume behavioral events that must remain durable, ordered, and identity-rich from the moment they reach the backend.",
    points: [
      "Event bursts from the frontend can create fragile ingestion behavior if the backend tries to aggregate too much during intake.",
      "Partial failures during inline computation can corrupt metrics before the raw data is safely preserved.",
      "Without storing original runtime identifiers, downstream systems lose the ability to reconstruct real user journeys accurately.",
      "Debugging becomes difficult when only transformed or aggregated data exists instead of the original event stream.",
      "Behavioral analytics needs chronological raw storage because later session and run reconstruction depends on event order.",
    ],
    examples: [
      "A page_enter, choice_select, and completion burst arrives together from one user interaction sequence.",
      "An incoming event is missing runId at the top level but still contains it inside props.",
      "A backend failure during immediate aggregation would lose part of the batch even though the original events were valid.",
      "A reporting bug cannot be diagnosed if the original raw event sequence was never preserved.",
    ],
  },

  solution: {
    intro:
      "The platform introduces a dedicated batched ingestion API with append-only JSONL storage as the first durable backend step in the analytics pipeline.",
    points: [
      "Receive analytics through a dedicated POST /api/analytics/batch ingestion endpoint.",
      "Accept multiple events per request so frontend transport stays efficient and backend intake remains predictable.",
      "Apply only light normalization during ingestion rather than complex transformation or reporting computation.",
      "Ensure important identity fields such as storyId, sessionId, runId, pageId, timestamp, and event id are preserved consistently.",
      "Group stored records by story and calendar day to keep files manageable and time-range queries practical.",
      "Write a batch header followed by ordered event lines into append-only JSONL logs.",
      "Treat the raw append-only log as the canonical source of truth for all later rollups and analytics reconstruction.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Backend Ingestion Architecture",
      description:
        "The ingestion layer sits between client-side analytics transport and backend reporting, preserving raw events in append-only logs before any rollup logic runs.",
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
            id: "client-queue",
            label: "Client Event Queue",
            x: 10,
            y: 14,
            width: "md",
          },
          {
            id: "batch-upload",
            label: "Batch Upload\nPayload",
            x: 28,
            y: 30,
            width: "md",
          },
          {
            id: "endpoint",
            label: "FastAPI Ingestion\nEndpoint",
            x: 48,
            y: 46,
            width: "lg",
          },
          {
            id: "normalize",
            label: "Event\nNormalization",
            x: 72,
            y: 30,
            width: "md",
          },
          {
            id: "jsonl",
            label: "Append-Only JSONL\nEvent Log",
            x: 68,
            y: 66,
            width: "lg",
          },
          {
            id: "rollup",
            label: "Analytics Rollup\nEndpoints",
            x: 46,
            y: 86,
            width: "lg",
          },
        ],
        edges: [
          {
            from: "client-queue",
            to: "batch-upload",
            label: "queued events",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "batch-upload",
            to: "endpoint",
            label: "POST /api/analytics/batch",
            route: "auto",
            labelOffsetX: 2.8,
            labelOffsetY: -0.2,
          },
          {
            from: "endpoint",
            to: "normalize",
            label: "ingestion payload",
            route: "auto",
            labelOffsetX: 3.8,
            labelOffsetY: -0.2,
          },
          {
            from: "normalize",
            to: "jsonl",
            label: "append ordered events",
            route: "auto",
            labelOffsetX: -3.6,
            labelOffsetY: -0.2,
          },
          {
            from: "jsonl",
            to: "rollup",
            label: "source-of-truth log",
            route: "auto",
            labelOffsetX: -4.2,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Ingestion & Storage Pipeline",
      description:
        "Frontend analytics batches move through intake, light normalization, day grouping, and append-only storage before later reporting reads them.",
      data: {
        steps: [
          "Receive batch upload",
          "Validate request shape",
          "Normalize event fields",
          "Resolve story/day log path",
          "Write batch header",
          "Append ordered events",
          "Use logs for later rollups",
        ],
      },
    },
    {
      type: "sequence",
      title: "Upload / Normalize / Append Sequence",
      description:
        "Message flow across frontend batch upload, FastAPI ingestion, event normalization, and append-only log persistence.",
      data: {
        columns: [
          { id: "client", label: "Client Upload" },
          { id: "endpoint", label: "Ingestion Endpoint" },
          { id: "normalizer", label: "Normalizer" },
          { id: "storage", label: "JSONL Storage" },
          { id: "analytics", label: "Rollup Layer" },
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
            column: "client",
            colSpan: 2,
            variant: "forward",
            stepNumber: 1,
            label: "Send batch payload",
            detail: "Frontend uploads multiple analytics events together",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "endpoint",
            variant: "self",
            stepNumber: 2,
            label: "Accept request",
            detail: "FastAPI validates the high-level ingestion request shape",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "endpoint",
            colSpan: 2,
            variant: "forward",
            stepNumber: 3,
            label: "Pass events for normalization",
            detail: "Each incoming event enters the light normalization step",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "normalizer",
            variant: "self",
            stepNumber: 4,
            label: "Repair missing fields",
            detail: "storyId, timestamp, runId, and fallback id are ensured consistently",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "normalizer",
            colSpan: 2,
            variant: "forward",
            stepNumber: 5,
            label: "Append header and events",
            detail: "Batch metadata and ordered event lines are written to the daily story log",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "storage",
            variant: "self",
            stepNumber: 6,
            label: "Persist append-only log",
            detail: "Historical events are stored without overwrite or inline aggregation",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "storage",
            colSpan: 2,
            variant: "forward",
            stepNumber: 7,
            label: "Expose raw event history",
            detail: "Rollup systems can later read the canonical raw log",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "analytics",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Compute analytics later",
            detail: "Sessions, runs, paths, and outcomes are reconstructed from stored events",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Ingestion Contract",
    title: "Example batch payload and append-only header pattern",
    language: "json",
    code: `{
  "storyId": "coffee_quiz_demo",
  "userId": "usr_f91b7",
  "device": {
    "kind": "desktop",
    "lang": "en"
  },
  "events": [
    {
      "id": "evt_001",
      "t": "page_enter",
      "ts": 1731502845123,
      "storyId": "coffee_quiz_demo",
      "sessionId": "sess_8af21",
      "runId": "run_02",
      "pageId": "intro",
      "props": {}
    }
  ],
  "_storedHeaderExample": {
    "_type": "batch_header",
    "ts": "2026-03-11T08:00:00Z",
    "storyId": "coffee_quiz_demo",
    "count": 1
  }
}`,
  },

  flow: {
    title: "How append-only ingestion protects analytics integrity",
    steps: [
      {
        title: "Frontend transport sends grouped runtime events",
        description:
          "The client upload layer packages multiple interaction events together so backend intake receives a coherent batch instead of isolated single-event requests.",
      },
      {
        title: "Ingestion focuses on durability first",
        description:
          "The backend does not try to compute sessions, metrics, or outcomes during intake; it first ensures the raw event data is safely stored.",
      },
      {
        title: "Normalization keeps the stored contract stable",
        description:
          "Light repair steps ensure important identity and timestamp fields remain present even when parts of the frontend payload are incomplete.",
      },
      {
        title: "Storage is grouped by story and day",
        description:
          "Daily story-level JSONL files keep logs manageable, support time-range access, and isolate campaigns analytically from each other.",
      },
      {
        title: "Chronological append preserves journey order",
        description:
          "Events are written in the same order they arrive in the batch so later session and run reconstruction can rebuild the true interaction sequence.",
      },
      {
        title: "Analytics computation happens later",
        description:
          "Rollup endpoints read the raw append-only logs after ingestion, which keeps the intake path fast and lets reporting evolve independently over time.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Batch intake",
      items: [
        "Receive batched analytics uploads from the frontend transport layer.",
        "Accept grouped event payloads through a dedicated ingestion endpoint.",
        "Keep ingestion lightweight and predictable even during event bursts.",
      ],
    },
    {
      title: "Event normalization",
      items: [
        "Ensure storyId exists consistently across stored events.",
        "Assign timestamps when missing and promote important identifiers from nested props when needed.",
        "Generate fallback event ids so every stored record remains addressable and structurally valid.",
      ],
    },
    {
      title: "Append-only storage",
      items: [
        "Write a batch header followed by sequential event lines into JSONL logs.",
        "Preserve historical records without overwrite or destructive mutation.",
        "Store events by story and calendar day to keep the log structure query-friendly and manageable.",
      ],
    },
    {
      title: "Separation from reporting",
      items: [
        "Avoid inline aggregation during ingestion.",
        "Let rollup and reconstruction endpoints consume raw logs later as source data.",
        "Keep data collection independent from evolving analytics interpretation logic.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime stability impact",
    paragraphs: [
      "By treating ingestion as a durability problem rather than an immediate analytics-computation problem, the backend remains fast and much easier to reason about under bursty event traffic.",
      "Append-only storage protects the historical event record from accidental overwrite and makes debugging far easier because the original event sequence always remains available.",
      "Light normalization improves data quality without turning intake into a fragile transformation pipeline.",
      "Separating ingestion from reporting also means analytics models can evolve later without risking the reliability of the intake path.",
    ],
  },

  outcome: [
    "Reliable backend capture of batched frontend analytics events.",
    "Append-only source-of-truth storage for raw behavioral history.",
    "Preserved chronological event order for session and run reconstruction.",
    "Improved debug visibility through human-inspectable JSONL logs.",
    "Cleaner separation between analytics collection and analytics computation.",
  ],

  takeaways: [
    "Behavioral analytics pipelines should preserve raw events before computing metrics.",
    "Append-only logs are a strong fit for interactive event ingestion systems.",
    "Light normalization during intake improves consistency without overcomplicating the pipeline.",
    "Chronological raw storage is essential for reconstructing branching journeys accurately.",
    "Separating ingestion from reporting makes analytics architecture more durable and easier to evolve.",
  ],

  relatedModules: [
    {
      title: "Client Event Queue & Batch Upload System",
      href: "/freelance/client-event-queue-batch-upload-system",
    },
    {
      title: "Frontend Event Tracking & Identity Layer",
      href: "/freelance/frontend-event-tracking-identity-layer",
    },
    {
      title: "Decision Flow Runtime Engine",
      href: "/freelance/decision-runtime-engine",
    },
  ],
};