import type { ModuleDetailData } from "../moduleDetailTypes";

export const clientCachePrefetchLayerModule: ModuleDetailData = {
  id: "client-cache-prefetch-layer",
  category: "json-engine",

  hero: {
    eyebrow: "Runtime Performance Layer",
    title: "Client Cache & Prefetch Layer",
    lead:
      "A frontend performance layer that caches resolved story pages locally, restores them instantly during repeat navigation, and prefetches likely next pages to reduce interaction latency.",
    chips: [
      "Client Cache",
      "Prefetch",
      "Memory + LocalStorage",
      "TTL Strategy",
      "Questell Runtime",
    ],
   businessValue:
  "This module improves the perceived speed of interactive experiences by restoring previously loaded pages instantly and preparing likely next steps in advance. It reduces repeated backend requests and makes navigation feel significantly more responsive."
},

  snapshot: [
    {
      label: "Purpose",
      value:
        "Reduce navigation latency in page-based interactive flows by reusing previously loaded page responses locally.",
    },
    {
      label: "Problem",
      value:
        "A page-level API improves payload efficiency, but repeated page requests can still create latency, extra backend load, and weaker navigation responsiveness.",
    },
    {
      label: "Core Mechanism",
      value:
        "The runtime checks a two-layer client cache before making network requests, then prefetches likely next pages after rendering the current one.",
    },
    {
      label: "System Benefit",
      value:
        "Interactive navigation feels faster and smoother while backend traffic is reduced through local page reuse.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How cached page delivery works in the runtime",
    steps: [
      {
        title: "User navigates to a page",
        description:
          "The runtime receives a target pageId during branching navigation or back-navigation.",
      },
      {
        title: "Client cache checked first",
        description:
          "The system looks in memory cache first, then in LocalStorage, before requesting the backend.",
      },
      {
        title: "Missing pages fetched once",
        description:
          "If the page is not available locally, the runtime loads it through the page-level API and stores the result in cache.",
      },
      {
        title: "Likely next pages prefetched",
        description:
          "After render, the runtime can request a small number of probable next pages in advance and place them into cache.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Interactive story runtimes often execute many small page transitions during a single user session.",
      "Because Questell uses a page-level API instead of downloading the full story graph upfront, each navigation step can potentially trigger a backend request.",
      "While this architecture improves payload efficiency and keeps initial loading smaller, it introduces a new performance concern: repeated page retrieval during active interaction.",
      "To solve this, the frontend runtime includes a dedicated cache and prefetch layer that stores resolved pages locally, restores them instantly on revisit, and anticipates likely next steps before the user requests them.",
    ],
  },

  problem: {
    intro:
      "Incremental page delivery improves scalability, but without local reuse it can create too many repeated backend round-trips during navigation.",
    points: [
      "Previously visited pages may be requested repeatedly during branching flows.",
      "Back-navigation becomes slower if every page revisit requires a fresh API call.",
      "Frequent small requests increase interaction latency during active usage.",
      "The backend serves more repeated lookups than necessary when page responses are not reused locally.",
      "A generic data-loading strategy is not sufficient because story navigation has predictable page reuse patterns.",
    ],
    examples: [
      "A user returns to an earlier decision page and waits for the same page to load again.",
      "Multiple nearby nodes in the story graph are requested repeatedly during exploration.",
      "A browser reload causes recently seen pages to be requested again despite being unchanged.",
      "Likely next pages are only loaded after the user clicks, creating avoidable perceived delay.",
    ],
  },

  solution: {
    intro:
      "The solution introduces a hybrid client cache combined with bounded prefetching for page-based navigation.",
    points: [
      "Use an L1 memory cache for immediate access during active runtime navigation.",
      "Use an L2 LocalStorage layer to persist resolved page responses across reloads and short-term revisits.",
      "Store page responses under a composite cache identifier so entries remain isolated across different stories and contexts.",
      "Attach TTL-based expiration metadata to each cache entry so outdated content can be invalidated automatically.",
      "Prefetch a small set of likely next pages after rendering the current page to improve perceived responsiveness.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Client Cache Architecture",
      description:
        "The frontend runtime checks two local cache layers before requesting the backend and stores resolved pages for reuse.",
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
            id: "runtime",
            label: "Frontend Runtime",
            x: 18,
            y: 18,
            width: "md",
          },
          {
            id: "memory",
            label: "L1 Memory Cache",
            x: 46,
            y: 28,
            width: "md",
          },
          {
            id: "storage",
            label: "L2 LocalStorage Cache",
            x: 74,
            y: 38,
            width: "lg",
          },
          {
            id: "prefetch",
            label: "Prefetch Logic",
            x: 36,
            y: 62,
            width: "md",
          },
          {
            id: "api",
            label: "Page-Level API",
            x: 74,
            y: 72,
            width: "md",
          },
        ],
        edges: [
          {
            from: "runtime",
            to: "memory",
            label: "read / restore",
            route: "horizontal",
            sourceAnchor: "right",
            targetAnchor: "left",
            labelOffsetX: 4.8,
            labelOffsetY: -0.2,
          },
          {
            from: "memory",
            to: "storage",
            label: "sync persisted entries",
            route: "horizontal",
            sourceAnchor: "right",
            targetAnchor: "left",
            labelOffsetX: 7.8,
            labelOffsetY: -0.2,
          },
          {
            from: "runtime",
            to: "prefetch",
            label: "extract likely next pages",
            route: "vertical",
            sourceAnchor: "bottom",
            targetAnchor: "top",
            labelOffsetX: 0.2,
            labelOffsetY: 0.4,
          },
          {
            from: "prefetch",
            to: "api",
            label: "background requests",
            route: "diagonal",
            labelOffsetX: 5.2,
            labelOffsetY: -0.4,
          },
          
        ],
      },
    },
    {
      type: "pipeline",
      title: "Cache Resolution Pipeline",
      description:
        "The runtime resolves pages locally first and only falls back to the backend when no fresh cache entry is available.",
      data: {
        steps: [
          "Check L1 memory cache",
          "Check L2 LocalStorage cache",
          "Request page from backend API",
          "Store page in cache",
          "Render current page",
          "Prefetch likely next pages",
        ],
      },
    },
    {
      type: "sequence",
      title: "Navigation / Cache / Prefetch Sequence",
      description:
        "Message flow across runtime, cache layers, and backend during page navigation.",
      data: {
        columns: [
          { id: "user", label: "User" },
          { id: "runtime", label: "Frontend Runtime" },
          { id: "memory", label: "Memory Cache" },
          { id: "storage", label: "LocalStorage" },
          { id: "api", label: "Page API" },
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
            label: "Navigate to next page",
            detail: "User action triggers a new target page in the runtime",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "runtime",
            colSpan: 2,
            variant: "forward",
            stepNumber: 2,
            label: "Check L1 cache",
            detail: "Runtime looks for a fresh page entry in memory first",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "memory",
            colSpan: 2,
            variant: "forward",
            stepNumber: 3,
            label: "Fallback to L2 cache",
            detail: "If missing in memory, the system checks LocalStorage",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "storage",
            colSpan: 2,
            variant: "forward",
            stepNumber: 4,
            label: "Request backend page",
            detail: "Only cache misses trigger a page-level API request",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "api",
            colSpan: 2,
            variant: "backward",
            stepNumber: 5,
            label: "Return page JSON",
            detail: "Backend sends the normalized page response",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "storage",
            colSpan: 2,
            variant: "backward",
            stepNumber: 6,
            label: "Persist cache entry",
            detail: "Page is stored with TTL and composite cache key metadata",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "runtime",
            variant: "self",
            stepNumber: 7,
            label: "Render and prefetch",
            detail: "Runtime displays the page and starts bounded next-page prefetching",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "runtime",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Instant repeat navigation",
            detail: "Subsequent revisits can resolve locally without waiting for the backend",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Cache Contract",
    title: "Example cache key and cached page entry",
    language: "json",
    code: `{
  "key": "mt:v1:page:coffee_quiz_demo:start:default",
  "entry": {
    "exp": 1760000000000,
    "val": {
      "id": "start",
      "type": "choice",
      "title": "Choose your path",
      "body": "Select how you want to continue.",
      "choices": [
        { "label": "Explore products", "next": "product-path" },
        { "label": "Learn more", "next": "education-path" }
      ],
      "meta": {
        "storyId": "coffee_quiz_demo",
        "normalized": true,
        "prefetched": false
      }
    }
  }
}`,
  },

  flow: {
    title: "Runtime navigation with local reuse",
    steps: [
      {
        title: "Page requested during navigation",
        description:
          "The runtime receives a target pageId from a user choice, resume flow, or browser back action.",
      },
      {
        title: "Fresh local cache checked first",
        description:
          "The system tries to resolve the page from L1 memory, then from L2 LocalStorage, before touching the network.",
      },
      {
        title: "Misses resolved through backend API",
        description:
          "Only pages that are unavailable or expired are requested from the page-level backend service.",
      },
      {
        title: "Resolved page stored with TTL",
        description:
          "The response is written back into local cache layers so repeat navigation can reuse it immediately.",
      },
      {
        title: "Likely next targets prefetched",
        description:
          "After the current page is shown, the runtime can load a small number of probable next pages in the background.",
      },
      {
        title: "Later navigation feels immediate",
        description:
          "When the user continues or returns, pages can often be served locally without a visible loading delay.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Cache storage layer",
      items: [
        "Store resolved page responses in memory for fastest active-session access.",
        "Persist selected cache entries in LocalStorage for reload and revisit scenarios.",
        "Apply TTL metadata so stale entries expire automatically.",
      ],
    },
    {
      title: "Cache lookup layer",
      items: [
        "Check for fresh entries before each backend page request.",
        "Restore LocalStorage hits back into memory for faster subsequent reuse.",
        "Avoid repeated API requests for pages that already exist locally.",
      ],
    },
    {
      title: "Cache key isolation",
      items: [
        "Compose cache identifiers from storyId, pageId, and source context.",
        "Prevent collisions between different stories or embed configurations.",
        "Support versioned namespacing so cache formats can evolve safely.",
      ],
    },
    {
      title: "Prefetch optimization layer",
      items: [
        "Extract likely next targets from the current page.",
        "Request a small bounded set of probable future pages in advance.",
        "Improve perceived responsiveness without recursively loading large story branches.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime stability impact",
    paragraphs: [
      "The cache layer improves performance without changing the normalized page contract already used by the renderer.",
      "Because cached entries are keyed by story and page context, the runtime avoids accidental cross-story content reuse.",
      "TTL-based expiration reduces the risk of outdated story content remaining in circulation after content changes.",
      "Bounded prefetching keeps the optimization controlled so the runtime does not over-fetch large parts of the story graph.",
    ],
  },

  outcome: [
    "Faster navigation because revisited pages can be served locally.",
    "Reduced backend traffic because repeated page requests are avoided.",
    "Better perceived performance because likely next pages may already be cached.",
    "Improved back-navigation experience across interactive flows.",
    "A frontend performance layer tailored specifically to incremental story delivery.",
  ],

  takeaways: [
    "Hybrid L1/L2 client caching is highly effective for page-based runtimes.",
    "TTL-based invalidation helps balance speed with content freshness.",
    "Composite cache keys are essential when the same runtime can load multiple stories and contexts.",
    "Bounded prefetching improves responsiveness without turning incremental delivery back into full-graph loading.",
    "Performance architecture can be treated as a first-class runtime module, not just an implementation detail.",
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
    title: "Dynamic Story Renderer",
    href: "/freelance/dynamic-story-renderer",
  },
],
};