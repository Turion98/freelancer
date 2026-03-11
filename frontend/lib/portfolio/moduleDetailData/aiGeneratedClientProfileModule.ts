import type { ModuleDetailData } from "../moduleDetailTypes";

export const aiGeneratedClientProfileModule: ModuleDetailData = {
  id: "ai-generated-client-profile",
  category: "ai-discovery",

  hero: {
    eyebrow: "AI Discovery Layer",
    title: "AI-Generated Client Profile",
    lead:
      "A structured profiling system that converts discovery conversation signals into an evolving client profile, helping the platform understand visitor goals and support recommendations, qualification, and project inquiry workflows.",
    chips: [
      "AI Discovery",
      "Intent Extraction",
      "Client Profiling",
      "Structured Signals",
      "Shared Data Layer",
    ],
    businessValue:
      "This module turns vague visitor conversations into usable project intelligence. Instead of letting important context disappear inside chat messages, the system continuously builds a structured client profile that can support recommendations, improve discovery quality, and reduce friction in later project discussions.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Convert conversational discovery signals into a structured client profile that represents the visitor’s project needs.",
    },
    {
      label: "Problem",
      value:
        "Useful project information often remains buried inside unstructured conversation text and cannot reliably support downstream systems.",
    },
    {
      label: "Core Mechanism",
      value:
        "The AI extracts intent signals from visitor messages, maps them to project attributes, and continuously updates a structured client profile during the session.",
    },
    {
      label: "System Benefit",
      value:
        "Recommendation, qualification, and inquiry systems can operate on a shared structured profile instead of vague or incomplete chat history.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How conversation signals become a structured client profile",
    steps: [
      {
        title: "Visitor starts discovery conversation",
        description:
          "The visitor explores the portfolio through an AI-assisted interaction and describes goals, ideas, or project intentions in natural language.",
      },
      {
        title: "Intent signals are analyzed",
        description:
          "The AI interprets incoming messages to identify meaningful project signals such as goals, interaction type, campaign style, or audience.",
      },
      {
        title: "Relevant attributes are detected",
        description:
          "Useful information is translated into structured attributes that represent the visitor’s possible project needs.",
      },
      {
        title: "Client profile is updated",
        description:
          "Detected attributes are added to the evolving client profile, replacing earlier assumptions or increasing confidence where needed.",
      },
      {
        title: "Profile becomes visible in the interface",
        description:
          "The visitor can see the collected profile information in a dedicated panel and understand how the system interprets the conversation.",
      },
      {
        title: "Downstream systems consume the profile",
        description:
          "Recommendation engines, case study suggestions, and lead qualification workflows use the profile as a shared data source.",
      },
      {
        title: "Profile supports project transition",
        description:
          "By the end of the session, the profile may contain enough structured information to support a recommendation or project inquiry summary.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Visitors exploring technical portfolios or product platforms often begin with vague or incomplete ideas about their actual project needs.",
      "During conversation with an AI assistant, these ideas gradually become more concrete as the visitor describes objectives, constraints, and expectations.",
      "The AI-Generated Client Profile system captures these signals and converts them into a structured representation of the visitor’s project context.",
      "Instead of treating the conversation as temporary chat content, the platform continuously builds an evolving client profile that summarizes detected intent in a reusable structured form.",
      "This profile acts as a bridge between conversational discovery and later actions such as recommendations, solution exploration, or project inquiry generation.",
    ],
  },

  problem: {
    intro:
      "Conversational interfaces are effective at collecting qualitative information, but the information often remains too unstructured to drive system behavior reliably.",
    points: [
      "Valuable project information is often hidden inside freeform conversation text.",
      "Informal visitor language is difficult to transform into structured project requirements without an intermediate profiling layer.",
      "Without structured profiling, downstream systems cannot reliably personalize recommendations or support follow-up workflows.",
      "Important context may be lost between discovery, recommendation, and lead generation stages.",
      "Users may be asked to repeat information later because earlier conversational signals were never formalized.",
    ],
    examples: [
      "A visitor says they want something interactive for a product launch, but the system cannot yet classify the most relevant campaign type.",
      "Someone describes a guided choice-based experience, but the interaction model remains hidden inside chat text.",
      "The conversation contains enough detail for a recommendation, yet no shared profile exists for downstream systems to use.",
      "A later project inquiry repeats questions that were already answered during discovery because the earlier context was not structured.",
    ],
  },

  solution: {
    intro:
      "The AI-Generated Client Profile system turns discovery conversation into structured project data that can evolve throughout the session.",
    points: [
      "Capture project-relevant signals from visitor messages during discovery conversation.",
      "Translate natural language into structured attributes such as project goal, interaction type, campaign style, audience, complexity, and desired outcome.",
      "Continuously update the client profile as new information becomes available.",
      "Refine earlier assumptions when stronger or more explicit signals appear later in the conversation.",
      "Distinguish between uncertain, inferred, and confirmed profile attributes.",
      "Expose the evolving profile in the interface so the visitor can review and correct it.",
      "Use the structured client profile as a shared input layer for recommendations, qualification, and project inquiry generation.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Client Profile Architecture",
      description:
        "The client profile layer sits between conversation analysis and downstream recommendation or lead workflows, acting as a shared structured data layer.",
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
            id: "conversation",
            label: "Conversation\nInput",
            x: 12,
            y: 18,
            width: "md",
          },
          {
            id: "intent",
            label: "Intent\nExtraction",
            x: 30,
            y: 34,
            width: "md",
          },
          {
            id: "profile",
            label: "Client Profile\nUpdate",
            x: 50,
            y: 50,
            width: "lg",
          },
          {
            id: "recommendation",
            label: "Recommendation\nEngine",
            x: 72,
            y: 34,
            width: "md",
          },
          {
            id: "lead",
            label: "Lead Generation\nSystem",
            x: 68,
            y: 70,
            width: "lg",
          },
          {
            id: "ui",
            label: "Profile Panel\nUI",
            x: 34,
            y: 84,
            width: "md",
          },
        ],
        edges: [
          {
            from: "conversation",
            to: "intent",
            label: "visitor messages",
            route: "auto",
            labelOffsetX: 2.8,
            labelOffsetY: -0.2,
          },
          {
            from: "intent",
            to: "profile",
            label: "detected attributes",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "profile",
            to: "recommendation",
            label: "structured profile",
            route: "auto",
            labelOffsetX: 2.8,
            labelOffsetY: -0.2,
          },
          {
            from: "profile",
            to: "lead",
            label: "project context",
            route: "auto",
            labelOffsetX: 2.2,
            labelOffsetY: -0.2,
          },
          {
            from: "profile",
            to: "ui",
            label: "visible profile state",
            route: "auto",
            labelOffsetX: -2.4,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Profile Construction Pipeline",
      description:
        "Visitor conversation moves through signal extraction and structured profile updates before feeding recommendation and qualification systems.",
      data: {
        steps: [
          "Receive visitor message",
          "Analyze intent signals",
          "Detect relevant attributes",
          "Update client profile",
          "Expose profile state in UI",
          "Feed downstream systems",
          "Refine profile continuously",
        ],
      },
    },
    {
      type: "sequence",
      title: "Conversation / Extraction / Profile Update Sequence",
      description:
        "Message flow across visitor input, intent analysis, client profile updates, interface visibility, and downstream system usage.",
      data: {
        columns: [
          { id: "visitor", label: "Visitor" },
          { id: "assistant", label: "AI Assistant" },
          { id: "extractor", label: "Intent Extractor" },
          { id: "profile", label: "Client Profile" },
          { id: "downstream", label: "Downstream Systems" },
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
            column: "visitor",
            colSpan: 2,
            variant: "forward",
            stepNumber: 1,
            label: "Describe project idea",
            detail:
              "The visitor shares a goal, challenge, or campaign idea in natural language",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "assistant",
            variant: "self",
            stepNumber: 2,
            label: "Interpret message",
            detail:
              "The assistant identifies that the message may contain project-relevant signals",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "assistant",
            colSpan: 2,
            variant: "forward",
            stepNumber: 3,
            label: "Send signals for extraction",
            detail:
              "Relevant phrases and intent patterns are passed into the extraction layer",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "extractor",
            variant: "self",
            stepNumber: 4,
            label: "Map to attributes",
            detail:
              "Detected signals are converted into profile attributes such as goal or interaction type",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "extractor",
            colSpan: 2,
            variant: "forward",
            stepNumber: 5,
            label: "Update client profile",
            detail:
              "The structured profile is updated with inferred or confirmed project signals",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "profile",
            variant: "self",
            stepNumber: 6,
            label: "Store evolving state",
            detail:
              "The profile maintains the latest structured understanding of the visitor’s needs",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "profile",
            colSpan: 2,
            variant: "forward",
            stepNumber: 7,
            label: "Expose shared profile",
            detail:
              "Recommendation, case selection, and lead flows can consume the current profile state",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "downstream",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Trigger relevant actions",
            detail:
              "Recommendations refine, conversation adapts, or inquiry preparation becomes possible",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Profile Structure",
    title: "Example evolving client profile object",
    language: "json",
    code: `{
  "project_goal": {
    "value": "personalized recommendation experience",
    "state": "confirmed"
  },
  "interaction_type": {
    "value": "decision flow",
    "state": "inferred"
  },
  "campaign_type": {
    "value": "interactive experience",
    "state": "inferred"
  },
  "audience": {
    "value": "consumer audience",
    "state": "unknown"
  },
  "complexity_level": {
    "value": "medium",
    "state": "inferred"
  },
  "desired_outcome": {
    "value": "engagement and preference capture",
    "state": "confirmed"
  }
}`,
  },

  flow: {
    title: "How structured profiling supports the AI discovery journey",
    steps: [
      {
        title: "Natural language is captured as discovery input",
        description:
          "The visitor does not need to describe the project in rigid technical terms for the system to begin understanding intent.",
      },
      {
        title: "Signals are translated into structured meaning",
        description:
          "The AI interprets phrases, goals, and preferences as profile attributes that can be reused by the system.",
      },
      {
        title: "The profile evolves progressively",
        description:
          "As more information appears, uncertain assumptions can be refined, replaced, or confirmed.",
      },
      {
        title: "The interface makes profiling visible",
        description:
          "A dedicated panel can show what the system currently believes about the visitor’s needs, improving transparency and trust.",
      },
      {
        title: "The profile becomes a shared system layer",
        description:
          "Recommendation engines, case study suggestions, and lead qualification systems all use the same structured profile instead of isolated chat fragments.",
      },
      {
        title: "Discovery can transition into action",
        description:
          "Once the profile becomes rich enough, the platform can recommend solutions or prepare a structured project inquiry.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Signal extraction",
      items: [
        "Analyze visitor messages for project-relevant intent signals.",
        "Identify attributes such as goal, interaction type, audience, and expected outcome.",
        "Translate informal language into reusable structured meaning.",
      ],
    },
    {
      title: "Profile construction",
      items: [
        "Maintain an evolving structured representation of the visitor’s project needs.",
        "Update, refine, or replace attributes as the conversation progresses.",
        "Track whether profile attributes are unknown, inferred, or confirmed.",
      ],
    },
    {
      title: "Interface transparency",
      items: [
        "Expose the evolving client profile in a dedicated interface panel.",
        "Let visitors review the collected project understanding.",
        "Support correction when the system misinterprets intent.",
      ],
    },
    {
      title: "Shared system support",
      items: [
        "Provide a common structured input for recommendation and qualification systems.",
        "Preserve discovery context beyond temporary chat text.",
        "Support smoother transitions from exploration to inquiry.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime behavior",
    paragraphs: [
      "The client profile evolves throughout the full discovery session rather than being generated only once at the end.",
      "Whenever new signals are detected, the system updates relevant attributes and may revise earlier assumptions if stronger evidence appears.",
      "Because the profile is visible and explainable, visitors can better understand how the AI is interpreting their needs and correct the system when necessary.",
      "This continuous structured profiling makes later recommendations and inquiry workflows more reliable without forcing the user into a rigid form too early.",
    ],
  },

  outcome: [
    "Structured representation of visitor project needs.",
    "More accurate recommendations during discovery.",
    "Better continuity between conversation and project inquiry.",
    "Reduced friction in later qualification and contact workflows.",
    "Improved understanding of visitor intent across the platform.",
  ],

  takeaways: [
    "Natural language discovery becomes more useful when converted into structured attributes.",
    "Progressive profiling is a strong pattern for AI-assisted product interfaces.",
    "Explainable profile panels improve trust and usability.",
    "A shared client profile can power multiple downstream systems.",
    "Structured discovery reduces repetition and improves project clarity.",
  ],

  relatedModules: [
    {
      title: "Conversational Visitor Discovery",
      href: "/freelance/conversational-visitor-discovery",
    },
    {
      title: "AI-Assisted Lead Qualification",
      href: "/freelance/ai-assisted-lead-qualification",
    },
    {
      title: "Use Case Recommendation Engine",
      href: "/freelance/use-case-recommendation-engine",
    },
  ],
};