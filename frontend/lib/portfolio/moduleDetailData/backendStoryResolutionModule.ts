import type { ModuleDetailData } from "../moduleDetailTypes";

export const backendStoryResolutionModule: ModuleDetailData = {
  id: "backend-story-resolution-page-api",
  category: "runtime-backend",

  hero: {
    eyebrow: "Runtime Content Delivery",
    title: "Backend Story Resolution & Page API",
    lead:
      "A backend resolution layer that loads structured story JSON files, resolves individual pages on demand, normalizes the response shape, and delivers a stable page contract to the frontend runtime.",
    chips: [
      "Page API",
      "Story Resolution",
      "JSON Content Storage",
      "Incremental Delivery",
      "Questell Runtime",
    ],
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Serve only the currently requested page from large interactive story files instead of transferring the full story graph to the client.",
    },
    {
      label: "Problem",
      value:
        "Full-story loading creates large payloads, slower startup, unnecessary branch transfer, higher browser memory usage, and weaker scalability.",
    },
    {
      label: "Core Mechanism",
      value:
        "The backend loads the story file, resolves the requested page, normalizes the page structure, and returns a stable page JSON object via API.",
    },
    {
      label: "System Benefit",
      value:
        "The runtime stays lightweight while stories can grow in complexity without forcing full graph delivery on every session.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How page delivery works at runtime",
    steps: [
      {
        title: "Story stored as structured JSON",
        description:
          "Each experience exists as a JSON story file containing pages, branching paths, and page-level content blocks.",
      },
      {
        title: "Frontend requests one page",
        description:
          "The runtime calls a page-level API with a pageId and story source instead of downloading the full story graph.",
      },
      {
        title: "Backend resolves page",
        description:
          "The service loads the story, locates the requested page across flat or nested structures, and prepares it for delivery.",
      },
      {
        title: "Normalized page returned",
        description:
          "The API responds with a consistent page object that the renderer can display immediately and reliably.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Interactive experiences defined as JSON require a backend layer that can retrieve and serve content efficiently.",
      "In Questell, each experience is stored as a structured story file that contains page definitions, branching logic, and content blocks.",
      "Instead of embedding navigation and resolution logic directly into frontend components, the runtime relies on a backend story service that dynamically loads story files and resolves only the requested page.",
      "This page-based delivery model keeps the frontend runtime lighter, reduces transferred data, and allows larger story graphs to remain manageable.",
    ],
  },

  problem: {
    intro:
      "Interactive experiences defined as JSON require efficient retrieval and delivery; loading full story graphs creates unnecessary cost.",
    points: [
      "Loading a full story graph upfront creates large JSON payloads when experiences contain many pages.",
      "Initial load becomes slower because unused branches are transferred before they are needed.",
      "Browser memory usage increases when the entire story structure is kept client-side.",
      "Large story objects are harder to cache and less efficient to transport repeatedly.",
      "The backend must still solve page lookup, support multiple story structures, normalize outputs, and maintain a stable runtime contract.",
    ],
  },

  solution: {
    intro:
      "The system introduces a backend story resolution layer combined with a page-level API (e.g. GET /page/{pageId}?src={storyId}).",
    points: [
      "Backend story resolution layer plus page-level API: load story file, locate requested page, normalize page structure, return page JSON response.",
      "Runtime retrieves only the content required for the current step; the backend owns page lookup and structural normalization.",
    ],
  },

  diagrams: [
  {
  type: "architecture",
  title: "Resolution Architecture",
  description:
    "Story content is resolved on the backend and delivered through a page-level API before reaching the runtime.",

  data: {
    layout: {
      canvasHeight: 440,
      nodeWidth: "md",
      nodeHeight: "md",
      edgeStyle: "elbow",
      labelStyle: "badge",
    },

    nodes: [
      {
        id: "story-json",
        label: "Story JSON Files",
        x: 10,
        y: 11,
        width: "md",
      },

      {
        id: "resolver",
        label: "Backend Story\nResolution",
        x: 36,
        y: 30,
        width: "lg",
      },

      {
        id: "page-api",
        label: "Page-Level API",
        x: 62,
        y: 50,
        width: "lg",
      },

      {
        id: "runtime",
        label: "Frontend Runtime",
        x: 80,
        y: 80,
        width: "md",
      },
    ],

    edges: [
      {
        from: "story-json",
        to: "resolver",
        label: "load story",
        route: "auto",
        labelOffsetY: -0.4,
        labelOffsetX: 4.2,
      },

      {
        from: "resolver",
        to: "page-api",
        label: "resolved page",
        route: "auto",
        labelOffsetY: -0.4,
        labelOffsetX: 4.2,
      },

      {
        from: "page-api",
        to: "runtime",
        label: "normalized page JSON",
        route: "auto",
        labelOffsetY: -0.4,
      },
    ],
  },
},
    {
      type: "pipeline",
      title: "Page Resolution Pipeline",
      data: {
      steps: [
        "Load story file",
        "Locate requested page",
        "Normalize page structure",
        "Return stable page response",
      ],
    },
  },
    {
      type: "sequence",
      title: "Request / Resolve / Render Sequence",
      data: {
      actors: ["User", "Frontend Runtime", "Page API", "Story Resolver", "Story File"],
      steps: [
        {
          from: "User",
          to: "Frontend Runtime",
          label: "Open experience",
        },
        {
          from: "Frontend Runtime",
          to: "Page API",
          label: "GET /page/start?src=storyId",
        },
        {
          from: "Page API",
          to: "Story Resolver",
          label: "Resolve requested page",
        },
        {
          from: "Story Resolver",
          to: "Story File",
          label: "Load and inspect story JSON",
        },
        {
          from: "Story File",
          to: "Story Resolver",
          label: "Return story data",
        },
        {
          from: "Story Resolver",
          to: "Page API",
          label: "Normalized page object",
        },
        {
          from: "Page API",
          to: "Frontend Runtime",
          label: "Return page JSON",
        },
        {
          from: "Frontend Runtime",
          to: "User",
          label: "Render current page",
        },
      ],
    },
  },
  ],

  jsonPreview: {
    eyebrow: "API Contract",
    title: "Example page request and normalized response",
    language: "json",
    code: `{
  "request": "GET /page/start?src=coffee_quiz_demo",
  "response": {
    "id": "start",
    "type": "choice",
    "title": "Choose your path",
    "body": "Select how you want to continue.",
    "choices": [
      {
        "label": "Explore products",
        "next": "product-path"
      },
      {
        "label": "Learn more",
        "next": "education-path"
      }
    ],
    "meta": {
      "storyId": "coffee_quiz_demo",
      "normalized": true
    }
  }
}`,
  },

  flow: {
    title: "Dynamic page delivery during navigation",
    steps: [
      {
        title: "Experience starts",
        description:
          "The frontend requests the entry page instead of downloading the full story graph.",
      },
      {
        title: "Backend resolves page",
        description:
          "The service loads the story, finds the requested node, and prepares a normalized response object.",
      },
      {
        title: "Renderer displays current state",
        description:
          "The runtime receives a stable page contract and renders the page without needing story-wide parsing logic.",
      },
      {
        title: "Next navigation triggers next request",
        description:
          "Each user choice can result in a new page request unless the page has already been cached client-side.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Story loading",
      items: [
        "Load JSON story files from persistent storage.",
        "Parse story structure before resolution begins.",
        "Prepare story objects for page-level lookup.",
      ],
    },
    {
      title: "Page resolution",
      items: [
        "Locate pages inside flat page lists or nested chapter structures.",
        "Resolve the correct page node regardless of internal authoring format.",
        "Support flexible content organization while exposing one stable runtime API.",
      ],
    },
    {
      title: "Response normalization",
      items: [
        "Ensure required fields exist before sending the page to the client.",
        "Standardize navigation and metadata fields.",
        "Return a predictable page structure for the frontend renderer.",
      ],
    },
    {
      title: "Optional optimization",
      items: [
        "Cache frequently resolved pages in memory.",
        "Reduce repeated file parsing and lookup cost.",
        "Lower latency for repeated page requests under load.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime stability impact",
    paragraphs: [
      "The frontend renderer works against a stable page contract instead of raw, potentially inconsistent story structures.",
      "Resolution complexity stays on the backend rather than being distributed across UI components.",
      "The runtime avoids unnecessary initialization cost because only one page is delivered at a time.",
      "The system remains compatible with multiple story storage shapes without changing the frontend renderer.",
    ],
  },

  outcome: [
    "Reduced payload size because only the active page is transferred.",
    "Faster initial load because the client does not fetch the full story graph upfront.",
    "Centralized resolution logic on the backend instead of scattered frontend page lookup.",
    "Flexible support for flat and nested story formats.",
    "Stable normalized page objects for the frontend runtime.",
  ],

  takeaways: [
    "Backend content resolution services are essential in content-driven interactive systems.",
    "Page-level APIs enable incremental delivery without forcing full graph transfer.",
    "Response normalization creates a clean contract between storage format and runtime renderer.",
    "Structured JSON storage becomes far more scalable when combined with deterministic backend resolution.",
    "This pattern cleanly separates content storage, backend logic, and frontend runtime execution.",
  ],

  relatedModules: [
    { title: "Content Schema & Validation System", href: "/freelance/content-schema-validation" },
    { title: "Decision Flow Runtime Engine", href: "#portfolio" },
    { title: "Client Page Cache Layer", href: "#portfolio" },
    { title: "Analytics Event Pipeline", href: "#portfolio" },
  ],
};