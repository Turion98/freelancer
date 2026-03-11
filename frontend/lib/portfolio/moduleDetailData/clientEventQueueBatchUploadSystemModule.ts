import type { ModuleDetailData } from "../moduleDetailTypes";

export const clientEventQueueBatchUploadSystemModule: ModuleDetailData = {
  id: "client-event-queue-batch-upload-system",
  category: "analytics-runtime",

  hero: {
    eyebrow: "Client Analytics Transport",
    title: "Client Event Queue & Batch Upload System",
    lead:
      "A client-side transport layer that buffers analytics events locally, persists them in story-scoped storage, and uploads them to the backend in controlled batches without blocking runtime interaction.",
    chips: [
      "Event Queue",
      "Batch Upload",
      "Local Persistence",
      "Retry Safety",
      "Questell Analytics",
    ],
    businessValue:
      "This module makes high-frequency interaction analytics practical in real usage. Instead of sending a network request for every click or page transition, the frontend can buffer, persist, and upload events reliably in batches, improving responsiveness and reducing data loss risk during rapid runtime activity.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Store runtime analytics events in a client-side queue and deliver them to the backend through deferred batch upload.",
    },
    {
      label: "Problem",
      value:
        "If every runtime interaction triggers its own immediate upload, the system creates too many requests, weaker failure tolerance, and unnecessary coupling between UI responsiveness and network delivery.",
    },
    {
      label: "Core Mechanism",
      value:
        "Events are appended into story-scoped local queue buckets, persisted through debounced local storage writes, filtered incrementally for unsent items, and uploaded in chunked backend batches.",
    },
    {
      label: "System Benefit",
      value:
        "Tracking remains durable and lightweight during rapid interaction flows while upload becomes a separate transport concern instead of part of event creation.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How queued analytics reach the backend",
    steps: [
      {
        title: "Runtime emits analytics event",
        description:
          "StoryPage lifecycle hooks and interaction handlers generate structured runtime analytics events during active user flow.",
      },
      {
        title: "Event enters story-scoped queue",
        description:
          "The shared analytics module appends the event into the current story bucket instead of uploading it immediately.",
      },
      {
        title: "Queue is persisted locally",
        description:
          "A debounced save process writes the analytics storage model to browser storage so unsent events survive refresh and short interruptions.",
      },
      {
        title: "Batch is prepared incrementally",
        description:
          "Only events newer than the last acknowledged upload timestamp are selected for the next transport payload.",
      },
      {
        title: "Upload happens in chunks",
        description:
          "Prepared events are sent to the backend in bounded chunk sizes so transport stays reliable under bursty interaction volume.",
      },
      {
        title: "Acknowledged events remain safely tracked",
        description:
          "After successful upload, the last upload marker advances; if upload fails, the same unsent events remain eligible for the next retry cycle.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Capturing analytics events in the browser is only the first half of a usable analytics pipeline.",
      "In a real interactive runtime, the frontend can emit many events in a short window through page transitions, choice selections, UI actions, puzzle states, media events, and completion markers.",
      "To keep this practical, Questell uses a client-side event queue and batch transport layer that stores events locally, persists them in browser storage, and uploads them later in controlled batches.",
      "This separates event production from network delivery, so the runtime remains responsive while analytics transport becomes more durable and tolerant of temporary upload failure.",
    ],
  },

  problem: {
    intro:
      "High-frequency interactive runtimes can produce analytics bursts that are not well served by immediate one-request-per-event transport.",
    points: [
      "Sending every interaction separately creates too many small HTTP requests.",
      "Rapid runtime bursts increase the chance of lost or delayed analytics delivery.",
      "Immediate upload couples runtime responsiveness to network round-trips.",
      "Temporary network failure becomes more disruptive when transport happens synchronously with event creation.",
      "Analytics transport needs to survive refreshes, visibility changes, and short browser interruptions.",
    ],
    examples: [
      "A page enter, choice click, and follow-up UI interaction happen within the same short runtime window.",
      "A completion event fires during a burst of recent page and media events.",
      "The user leaves the page before all immediately sent requests complete.",
      "Temporary backend or connectivity failure interrupts delivery even though the events were already produced correctly.",
    ],
  },

  solution: {
    intro:
      "The platform introduces a local event queue with deferred, incremental, and chunked batch upload.",
    points: [
      "Append runtime analytics into a story-scoped client queue rather than uploading at creation time.",
      "Persist queue state through debounced local storage writes so unsent events remain durable.",
      "Apply short-window deduplication before queue growth to suppress obvious rapid duplicates.",
      "Filter upload candidates incrementally using the last successful upload timestamp stored per story.",
      "Send events to the backend in bounded chunks instead of one unbounded request or one request per event.",
      "Keep failed events in queue by leaving the upload marker unchanged until the backend fully acknowledges the batch.",
      "Trigger upload through a dedicated sync layer using interval and page lifecycle events rather than manual StoryPage upload calls.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Client Queue Transport Architecture",
      description:
        "Analytics events flow from the runtime into a story-scoped client queue, persist locally, and are later uploaded in backend-facing batches.",
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
            id: "tracker",
            label: "Frontend Tracker",
            x: 10,
            y: 12,
            width: "md",
          },
          {
            id: "push",
            label: "pushEvent()",
            x: 28,
            y: 28,
            width: "md",
          },
          {
            id: "bucket",
            label: "storyBucket.events",
            x: 48,
            y: 44,
            width: "md",
          },
          {
            id: "persist",
            label: "saveSoon()\n(local persistence)",
            x: 24,
            y: 68,
            width: "lg",
          },
          {
            id: "prepare",
            label: "prepareBatch()",
            x: 64,
            y: 64,
            width: "md",
          },
          {
            id: "upload",
            label: "uploadBatch()",
            x: 52,
            y: 86,
            width: "md",
          },
          {
            id: "backend",
            label: "POST /api/analytics/batch",
            x: 78,
            y: 86,
            width: "lg",
          },
        ],
        edges: [
          {
            from: "tracker",
            to: "push",
            label: "runtime event",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "push",
            to: "bucket",
            label: "append event",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "bucket",
            to: "persist",
            label: "debounced save",
            route: "auto",
            labelOffsetX: -4.2,
            labelOffsetY: -0.2,
          },
          {
            from: "bucket",
            to: "prepare",
            label: "unsent queue state",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "prepare",
            to: "upload",
            label: "batched payload",
            route: "auto",
            labelOffsetX: -3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "upload",
            to: "backend",
            label: "chunked POST",
            route: "auto",
            labelOffsetX: 3.4,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Queue & Upload Pipeline",
      description:
        "Runtime events enter local queue storage first, then move through persistence, batch preparation, and chunked upload.",
      data: {
        steps: [
          "Runtime event emitted",
          "pushEvent()",
          "story-scoped queue updated",
          "debounced saveSoon()",
          "prepareBatch()",
          "uploadBatch()",
          "chunked backend POST",
        ],
      },
    },
    {
      type: "sequence",
      title: "Queue / Prepare / Upload Sequence",
      description:
        "Message flow across runtime event creation, queue persistence, batch preparation, and backend acknowledgment.",
      data: {
        columns: [
          { id: "runtime", label: "Story Runtime" },
          { id: "queue", label: "Client Queue" },
          { id: "storage", label: "Local Storage" },
          { id: "sync", label: "Analytics Sync" },
          { id: "backend", label: "Backend API" },
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
            label: "Emit event",
            detail: "Runtime interaction produces a structured analytics event",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "queue",
            variant: "self",
            stepNumber: 2,
            label: "Insert into queue",
            detail: "Event is appended into the story-scoped local event array",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "queue",
            colSpan: 2,
            variant: "forward",
            stepNumber: 3,
            label: "Persist soon",
            detail: "Debounced write stores the analytics structure in browser storage",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "storage",
            colSpan: 2,
            variant: "backward",
            stepNumber: 4,
            label: "Queue durably stored",
            detail: "Unsent analytics survive refresh and short interruptions",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "sync",
            colSpan: 2,
            variant: "forward",
            stepNumber: 5,
            label: "Prepare unsent batch",
            detail: "Only events newer than lastUploadTs are selected",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "sync",
            colSpan: 2,
            variant: "forward",
            stepNumber: 6,
            label: "Upload chunk(s)",
            detail: "Prepared events are sent in bounded backend chunks",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "backend",
            colSpan: 2,
            variant: "backward",
            stepNumber: 7,
            label: "Acknowledge upload",
            detail: "Backend accepts the uploaded event batch",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "sync",
            variant: "self",
            stepNumber: 8,
            label: "Advance upload marker",
            detail: "lastUploadTs updates only after successful upload cycle",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Transport Contract",
    title: "Example story-scoped queue and upload payload",
    language: "json",
    code: `{
  "stories": {
    "coffee_quiz_demo": {
      "events": [
        {
          "id": "evt_001",
          "t": "choice_select",
          "ts": 1731502845123,
          "storyId": "coffee_quiz_demo",
          "sessionId": "sess_8af21",
          "pageId": "start",
          "props": {
            "runId": "run_02",
            "choiceId": "espresso_path"
          }
        }
      ],
      "meta": {
        "lastUploadTs": 1731502800000
      }
    }
  }
}`,
  },

  flow: {
    title: "How the client queue makes analytics transport practical",
    steps: [
      {
        title: "Runtime tracking stays immediate",
        description:
          "The interactive runtime can record events as soon as they happen without waiting for a network round-trip to complete.",
      },
      {
        title: "Queue and upload are separated",
        description:
          "Event production happens at interaction time, while delivery happens later through a dedicated transport step.",
      },
      {
        title: "Story-scoped buckets isolate queue state",
        description:
          "Each story stores its own events, metadata, and upload progress so one experience does not mix transport state with another.",
      },
      {
        title: "Persistence protects unsent events",
        description:
          "Debounced local storage writes make queued analytics durable across refreshes, navigation, and short offline or failure windows.",
      },
      {
        title: "Incremental upload avoids full resend",
        description:
          "Only events newer than the last acknowledged upload marker are prepared for the next payload.",
      },
      {
        title: "Chunking improves delivery resilience",
        description:
          "Large pending payloads are split into smaller backend requests so upload remains safer under bursty runtime conditions.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Queue insertion and retention",
      items: [
        "Append accepted analytics events into story-scoped client queue buckets.",
        "Apply bounded retention so the queue acts as a transport buffer rather than a permanent warehouse.",
        "Trim the oldest queued items when per-story event storage exceeds the retention limit.",
      ],
    },
    {
      title: "Persistence and durability",
      items: [
        "Persist queue state into browser storage instead of relying only on in-memory tracking.",
        "Debounce writes so short event bursts do not trigger excessive serialization overhead.",
        "Restore queued analytics state when the story runtime initializes again.",
      ],
    },
    {
      title: "Incremental batch preparation",
      items: [
        "Filter queue contents using lastUploadTs so only unsent events enter the next payload.",
        "Transform internal client queue entries into a backend-facing transport shape.",
        "Keep upload progress scoped to each story bucket independently.",
      ],
    },
    {
      title: "Chunked upload and retry safety",
      items: [
        "Send prepared events to the backend in bounded chunk sizes.",
        "Try prioritized upload endpoints instead of relying on one hardcoded transport target.",
        "Retain unsent events when upload fails by leaving the last acknowledged upload marker unchanged.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime stability impact",
    paragraphs: [
      "The queue-based transport layer prevents analytics delivery from slowing down the interactive runtime during high-frequency event bursts.",
      "Because queue state is persisted locally, temporary failures or browser interruptions do not immediately destroy unsent analytics.",
      "Timestamp-based incremental batching avoids wasteful full re-uploads while still keeping retry behavior simple and predictable.",
      "Chunked upload and endpoint fallback make the analytics pipeline far more robust than immediate one-request-per-event transport.",
    ],
  },

  outcome: [
    "Lower analytics request overhead through grouped batch transport.",
    "Better frontend responsiveness because tracking is decoupled from immediate upload.",
    "More durable analytics delivery across refreshes and temporary network failure.",
    "Story-scoped buffering that keeps queue state isolated per experience.",
    "A practical transport layer between frontend tracking and backend ingestion.",
  ],

  takeaways: [
    "Client-side analytics transport needs its own architecture in high-frequency interactive systems.",
    "Queueing and upload should be treated as separate concerns from event creation.",
    "Debounced persistence is an effective balance between durability and client overhead.",
    "Timestamp-based incremental batching provides a clean resend model without a complex retry database.",
    "Chunked upload and retained unsent state make browser analytics delivery much more resilient in real usage.",
  ],

  relatedModules: [
    {
      title: "Frontend Event Tracking & Identity Layer",
      href: "/freelance/frontend-event-tracking-identity-layer",
    },
    {
      title: "Decision Flow Runtime Engine",
      href: "/freelance/decision-runtime-engine",
    },
    {
      title: "Runtime State Management System",
      href: "/freelance/runtime-state-management-system",
    },
  ],
};