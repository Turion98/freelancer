import type { ModuleDetailData } from "../moduleDetailTypes";

export const contentSchemaValidationModule: ModuleDetailData = {
  id: "content-schema-validation",
  category: "json-engine",

  hero: {
    eyebrow: "JSON Content Engine",
    title: "Content Schema & Validation System",
    lead:
      "A shared schema-driven validation layer that defines the structure of interactive story files and ensures that only structurally valid stories can enter the Questell platform.",
    chips: [
      "JSON Schema",
      "AJV",
      "Validation Pipeline",
      "Content Contract",
      "Questell Core",
    ],
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Define a formal and reliable structure for interactive story content before runtime execution.",
    },
    {
      label: "Core Responsibility",
      value:
        "Validate story files across frontend and backend layers so invalid content never reaches the runtime engine.",
    },
    {
      label: "System Position",
      value:
        "Content ingestion boundary between story authoring, backend story services, and the frontend runtime.",
    },
    {
      label: "Primary Benefit",
      value:
        "Prevents structural content errors, broken navigation, and incompatible page definitions before deployment.",
    },
  ],

  overview: {
    paragraphs: [
      "Interactive story experiences require a consistent and reliable way to describe content structure. In the Questell platform, entire interactive flows are defined as JSON story files. These files describe page content, branching decisions, and interaction types.",
      "Without a formal structure definition, even small inconsistencies in story files can lead to runtime errors, broken navigation paths, or incompatible page definitions.",
      "To address this challenge, the system introduces a shared JSON Schema validation layer that defines the complete structure of story files and validates them both client-side and server-side.",
      "This schema acts as a content contract between content authors, the backend story service, and the frontend runtime engine, ensuring that only structurally valid stories can enter the system.",
    ],
  },

  problem: {
    intro:
      "Content-driven interactive systems often suffer from structural inconsistencies when the content format is loosely defined.",
    points: [
      "Inconsistent JSON structure across different stories",
      "Missing required fields in page definitions",
      "Broken navigation references between pages",
      "Incompatible page types introduced by content authors",
      "Lack of validation before deployment",
    ],
    examples: [
      "A next reference pointing to a non-existent page",
      "A page missing required content fields",
      "Incompatible data structures for interactive elements",
      "Errors appearing only at runtime, making them difficult to detect and debug",
    ],
  },

  solution: {
    intro:
      "The system introduces a shared JSON Schema (CoreSchema.json) that formally defines the structure of all story files used by the platform.",
    points: [
      "Define the required root-level structure of every story file",
      "Enforce a predictable structure for every page within the story",
      "Support multiple interaction patterns through typed page definitions",
      "Validate story files both client-side and server-side",
      "Canonicalize story structure before storage",
      "Run semantic checks on story navigation and internal references",
      "Reject invalid stories before they can reach the runtime engine",
    ],
  },

  contentStructure: {
    title: "Content Structure Defined by the Schema",
    intro:
      "The shared schema formally defines both the root structure of a story and the expected shape of each individual page.",
    storyRootFields: ["schemaVersion", "storyId", "meta", "pages"],
    pageFields: ["id", "text", "choices", "next", "logic", "type"],
    supportedInteractions: [
      "Narrative pages",
      "Branching decision points",
      "Conditional logic pages",
      "Specialized interaction types",
    ],
  },

  diagrams: [
    {
      type: "pipeline",
      title: "Validation Pipeline",
      description:
        "Validation is part of the story upload workflow and is executed in two independent stages before a story is accepted.",
      data: {
        steps: [
          "Author uploads story JSON",
          "Client-side validation (AJV)",
          "Server-side validation",
          "Story accepted into storage",
        ],
      },
    },
    {
      type: "architecture",
      title: "Validation System Architecture",
      description:
        "The validation system is implemented across frontend and backend layers using the same shared schema contract.",
      data: {
        nodes: [
          { id: "author", label: "Content Author" },
          { id: "schema", label: "Shared Schema (CoreSchema.json)" },
          { id: "frontend", label: "Frontend Validation Layer" },
          { id: "backend", label: "Backend Validation Layer" },
          { id: "storage", label: "Story Storage" },
          { id: "runtime", label: "Runtime Engine" },
        ],
        edges: [
          { from: "author", to: "frontend", label: "uploads story JSON" },
          { from: "schema", to: "frontend", label: "shared contract" },
          { from: "schema", to: "backend", label: "shared contract" },
          { from: "frontend", to: "backend", label: "validated upload" },
          { from: "backend", to: "storage", label: "accepted story" },
          { from: "storage", to: "runtime", label: "runtime-safe content" },
        ],
      },
    },
  ],

  flow: {
    title: "Validation Workflow",
    steps: [
      {
        title: "Story Upload",
        description:
          "A content author uploads a JSON story file describing page content, branching decisions, and interaction types.",
      },
      {
        title: "Client-side Validation",
        description:
          "The frontend validates the uploaded JSON against the shared schema using AJV and provides immediate feedback such as schema validation errors, structural warnings, and invalid field references.",
      },
      {
        title: "Invalid Stories Rejected Early",
        description:
          "Stories that fail client-side validation are rejected before they are sent to the server.",
      },
      {
        title: "Server-side Validation",
        description:
          "The backend validates the same story again using the same CoreSchema.json to guarantee integrity even if client-side validation is bypassed.",
      },
      {
        title: "Canonicalization",
        description:
          "Before storage, the backend normalizes story structure into a consistent format, for example converting a pages dictionary into a normalized page array or standardizing nextPageId into a unified next field.",
      },
      {
        title: "Semantic Checks",
        description:
          "The backend validates internal story graph consistency by verifying that referenced pages exist, ensuring the start page is valid, and confirming that navigation targets are structurally correct.",
      },
      {
        title: "Story Accepted into Storage",
        description:
          "Only stories that pass both validation stages are accepted into the system.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Frontend Validation Layer",
      items: [
        "Validate uploaded story files before submission",
        "Provide detailed validation feedback to content authors",
        "Surface schema validation errors and structural warnings",
        "Prevent invalid content from reaching the backend",
        "Use AJV with the shared CoreSchema.json definition",
      ],
    },
    {
      title: "Backend Validation Layer",
      items: [
        "Enforce schema compliance at the API level",
        "Use the same CoreSchema.json as the final validation authority",
        "Perform canonicalization of story structure before storage",
        "Execute semantic checks on story navigation and references",
        "Guarantee that stored stories remain structurally valid",
      ],
    },
    {
      title: "Shared Contract Layer",
      items: [
        "Define the formal structure of story files",
        "Align frontend validation, backend validation, and runtime expectations",
        "Act as a content contract between authors, backend services, and the runtime engine",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime Safety",
    paragraphs: [
      "Because every story must pass schema validation before entering the system, the runtime engine can rely on a stable and predictable content structure.",
      "This allows the runtime layer to focus on story execution instead of defensive error handling for malformed content.",
      "By enforcing structural correctness at upload time, the platform significantly reduces the likelihood of runtime failures caused by invalid data.",
    ],
    preventedIssues: [
      "Invalid page navigation",
      "Incompatible page data structures",
      "Missing content fields",
    ],
  },

  outcome: [
    "Consistent story structure across campaigns",
    "Early detection of structural errors",
    "Safer deployment of new interactive experiences",
    "Clear separation between content authoring and runtime execution",
    "Improved reliability of interactive flows",
    "A stronger foundation for complex branching story systems defined entirely through structured content",
  ],

  takeaways: [
    "Schema-driven content systems",
    "Shared validation contracts across frontend and backend",
    "Client + server validation pipelines",
    "Structured content ingestion workflows",
    "Pre-runtime enforcement of structural integrity",
  ],

  relatedModules: [
    {
      title: "Backend Story Resolution & Page API",
      href: "/portfolio/json-engine/backend-story-resolution",
    },
  ],
};
