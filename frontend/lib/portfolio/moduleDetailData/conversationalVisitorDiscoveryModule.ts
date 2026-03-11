import type { ModuleDetailData } from "../moduleDetailTypes";

export const conversationalVisitorDiscoveryModule: ModuleDetailData = {
  id: "conversational-visitor-discovery",
  category: "ai-discovery",

  hero: {
    eyebrow: "AI Discovery Layer",
    title: "Conversational Visitor Discovery",
    lead:
      "An AI-assisted interaction layer that helps visitors articulate their goals through natural conversation and discover the most relevant solutions, use cases, and technical modules across the portfolio.",
    chips: [
      "AI Discovery",
      "Intent Extraction",
      "Guided Navigation",
      "Visitor Profiling",
      "Use Case Matching",
    ],
    businessValue:
      "This module reduces the friction of exploring a complex portfolio by helping visitors describe what they need in their own words. Instead of relying on manual navigation alone, the system translates vague project ideas into structured intent signals that can drive relevant recommendations and move the visitor toward meaningful discovery.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Help visitors discover relevant solutions through AI-assisted conversation instead of relying only on manual portfolio navigation.",
    },
    {
      label: "Problem",
      value:
        "Visitors often arrive with vague goals and struggle to map their needs to the right case studies, modules, or platform capabilities.",
    },
    {
      label: "Core Mechanism",
      value:
        "The system uses a conversational loop to collect natural language inputs, extract structured intent signals, and build an evolving visitor profile.",
    },
    {
      label: "System Benefit",
      value:
        "The portfolio becomes easier to explore, more relevant recommendations can be made, and visitors can transition more naturally toward deeper solution discovery.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How natural conversation becomes guided portfolio discovery",
    steps: [
      {
        title: "Visitor opens the portfolio",
        description:
          "A visitor arrives at the platform without necessarily understanding its structure, categories, or available solution types.",
      },
      {
        title: "AI chat widget appears",
        description:
          "The conversational layer presents an accessible entry point that invites the visitor to describe goals in natural language.",
      },
      {
        title: "Visitor describes an objective",
        description:
          "The visitor explains a need, challenge, or idea using informal language rather than technical terms.",
      },
      {
        title: "AI asks clarifying questions",
        description:
          "The system reduces ambiguity by asking follow-up questions about goals, interaction style, complexity, or expected outcomes.",
      },
      {
        title: "Intent signals are extracted",
        description:
          "Relevant attributes from the conversation are translated into structured signals that represent visitor intent.",
      },
      {
        title: "Visitor profile is updated",
        description:
          "The platform builds an evolving understanding of the visitor’s needs that can support recommendation logic.",
      },
      {
        title: "Relevant modules are surfaced",
        description:
          "The system can guide the visitor toward the most relevant use cases, case studies, or technical modules in the portfolio.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Modern portfolio and product showcase websites often present many features, technical concepts, and solution modules at once.",
      "Visitors arriving at such platforms may struggle to identify which parts are actually relevant to their needs.",
      "The Conversational Visitor Discovery system addresses this by introducing an AI-assisted interaction layer that helps visitors articulate their goals through natural conversation.",
      "Instead of expecting the visitor to manually browse the portfolio structure, the system interprets their inputs, reduces ambiguity, and gradually constructs a structured understanding of intent.",
      "This turns passive browsing into a guided exploration experience and creates the foundation for recommendation, profiling, and later conversion workflows.",
    ],
  },

  problem: {
    intro:
      "Complex portfolio environments create a discovery challenge because visitors often do not know how to map their vague goals to specific solutions.",
    points: [
      "Visitors may not understand how the platform is structured.",
      "They may struggle to connect their problem to a relevant module or use case.",
      "Relevant case studies can be overlooked when discovery depends only on static navigation.",
      "Some visitors abandon the page before finding something that matches their needs.",
      "Traditional menus assume the visitor already knows what they are looking for.",
    ],
    examples: [
      "A visitor wants something interactive for marketing but cannot identify the right module category.",
      "Someone needs a guided decision experience but does not know which use case best represents that solution.",
      "A visitor is interested in insight collection yet misses the most relevant case study while browsing manually.",
      "The platform contains the right solution, but the visitor never reaches it because their goal was too vague at the entry point.",
    ],
  },

  solution: {
    intro:
      "Conversational Visitor Discovery introduces a guided chat-based entry flow that helps visitors describe goals in natural language and translates those descriptions into structured discovery signals.",
    points: [
      "Provide a conversational entry point on top of the portfolio interface.",
      "Allow visitors to describe goals without needing to know the portfolio structure in advance.",
      "Ask clarifying questions that reduce ambiguity around the visitor’s needs.",
      "Extract attributes such as goal, interaction style, audience, desired outcome, and complexity.",
      "Maintain an evolving visitor intent profile throughout the session.",
      "Use structured discovery signals to support recommendation and navigation logic.",
      "Guide the visitor toward relevant modules, case studies, or project discussion paths.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Conversational Discovery Architecture",
      description:
        "The conversational discovery layer sits on top of the portfolio and translates visitor messages into structured intent that can drive recommendation logic.",
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
            id: "visitor",
            label: "Visitor\nMessage",
            x: 12,
            y: 18,
            width: "md",
          },
          {
            id: "conversation",
            label: "AI Conversation\nLayer",
            x: 30,
            y: 34,
            width: "lg",
          },
          {
            id: "intent",
            label: "Intent\nExtraction",
            x: 52,
            y: 50,
            width: "md",
          },
          {
            id: "profile",
            label: "Visitor Profile\nUpdate",
            x: 74,
            y: 34,
            width: "md",
          },
          {
            id: "recommendation",
            label: "Recommendation\nSystem",
            x: 68,
            y: 70,
            width: "lg",
          },
          {
            id: "portfolio",
            label: "Portfolio\nNavigation",
            x: 42,
            y: 86,
            width: "md",
          },
        ],
        edges: [
          {
            from: "visitor",
            to: "conversation",
            label: "natural language",
            route: "auto",
            labelOffsetX: 2.8,
            labelOffsetY: -0.2,
          },
          {
            from: "conversation",
            to: "intent",
            label: "interpreted input",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "intent",
            to: "profile",
            label: "structured signals",
            route: "auto",
            labelOffsetX: 2.8,
            labelOffsetY: -0.2,
          },
          {
            from: "profile",
            to: "recommendation",
            label: "intent profile",
            route: "auto",
            labelOffsetX: -2.2,
            labelOffsetY: -0.2,
          },
          {
            from: "recommendation",
            to: "portfolio",
            label: "guided navigation",
            route: "auto",
            labelOffsetX: -2.6,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Conversational Discovery Pipeline",
      description:
        "Visitor input moves through conversational clarification and intent extraction before supporting profile updates and portfolio guidance.",
      data: {
        steps: [
          "Visitor opens portfolio",
          "AI chat appears",
          "Visitor describes goal",
          "AI asks clarifying question",
          "Extract structured signals",
          "Update visitor profile",
          "Recommend relevant modules",
        ],
      },
    },
    {
      type: "sequence",
      title: "Conversation / Clarification / Discovery Sequence",
      description:
        "Message flow across visitor input, AI clarification, structured intent extraction, profile updates, and recommendation support.",
      data: {
        columns: [
          { id: "visitor", label: "Visitor" },
          { id: "chat", label: "AI Chat Layer" },
          { id: "intent", label: "Intent Extractor" },
          { id: "profile", label: "Visitor Profile" },
          { id: "recommendation", label: "Recommendation Layer" },
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
            label: "Describe goal",
            detail:
              "The visitor explains a need or idea in informal natural language",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "chat",
            variant: "self",
            stepNumber: 2,
            label: "Interpret message",
            detail:
              "The AI identifies ambiguity and decides whether clarification is needed",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "chat",
            colSpan: 2,
            variant: "forward",
            stepNumber: 3,
            label: "Send for extraction",
            detail:
              "Relevant parts of the conversation are passed into the structured intent layer",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "intent",
            variant: "self",
            stepNumber: 4,
            label: "Extract signals",
            detail:
              "Goal, interaction type, audience, and expected outcome are interpreted as structured attributes",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "intent",
            colSpan: 2,
            variant: "forward",
            stepNumber: 5,
            label: "Update profile",
            detail:
              "The evolving visitor intent model is refined with the latest detected signals",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "profile",
            variant: "self",
            stepNumber: 6,
            label: "Maintain state",
            detail:
              "The current understanding of the visitor’s needs is preserved for downstream logic",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "profile",
            colSpan: 2,
            variant: "forward",
            stepNumber: 7,
            label: "Provide structured input",
            detail:
              "Recommendation logic consumes the visitor profile rather than raw chat text",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "recommendation",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Guide discovery",
            detail:
              "The system highlights relevant modules or use cases and helps the visitor continue exploration",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Intent Structure",
    title: "Example visitor intent profile produced during discovery",
    language: "json",
    code: `{
  "goal": "interactive marketing experience",
  "industry": "consumer brand",
  "interaction_type": "guided decision flow",
  "audience": "campaign visitors",
  "desired_outcome": "engagement and insight collection",
  "complexity_level": "medium"
}`,
  },

  flow: {
    title: "How AI conversation improves portfolio discovery",
    steps: [
      {
        title: "The visitor enters through conversation instead of manual browsing",
        description:
          "The system provides a more accessible entry point for users who do not yet understand the structure of the portfolio.",
      },
      {
        title: "Clarifying questions reduce ambiguity",
        description:
          "Rather than expecting precise terminology from the visitor, the AI helps refine vague ideas into clearer intent.",
      },
      {
        title: "Intent signals become structured inputs",
        description:
          "The system extracts reusable attributes from the conversation so discovery logic can work with consistent structured data.",
      },
      {
        title: "The profile evolves during the session",
        description:
          "Each interaction can refine assumptions, update priorities, and improve the system’s understanding of the visitor.",
      },
      {
        title: "Recommendation logic gains better context",
        description:
          "Relevant modules and case studies can be surfaced more accurately because the system operates on structured visitor intent.",
      },
      {
        title: "Discovery becomes guided exploration",
        description:
          "The AI assistant acts as a navigation layer that helps the visitor move from vague goals toward relevant technical solutions.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Conversation handling",
      items: [
        "Receive visitor messages through the AI chat interface.",
        "Generate clarification questions that reduce ambiguity.",
        "Keep discovery focused on understanding visitor intent rather than completing a separate task.",
      ],
    },
    {
      title: "Intent extraction",
      items: [
        "Interpret natural language messages for project-relevant signals.",
        "Identify structured attributes such as goal, audience, interaction style, and expected outcome.",
        "Translate informal exploration language into reusable system inputs.",
      ],
    },
    {
      title: "Profile-driven discovery",
      items: [
        "Maintain an evolving visitor intent profile during the session.",
        "Refine or replace assumptions as new information appears.",
        "Provide structured context for downstream recommendation systems.",
      ],
    },
    {
      title: "Guided navigation",
      items: [
        "Surface relevant use cases, solutions, or technical modules.",
        "Help visitors navigate complex portfolio content more efficiently.",
        "Support transitions from exploration toward deeper case study review or project inquiry.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime behavior",
    paragraphs: [
      "The conversational discovery layer operates continuously while the visitor interacts with the page.",
      "Each new message may trigger clarification, intent extraction, profile updates, and refinement of recommendation logic.",
      "The system acts as a guided navigation layer rather than a standalone chatbot, which keeps the interaction aligned with portfolio exploration instead of open-ended conversation.",
      "The discovery session can conclude naturally when the visitor reaches a relevant use case, opens a detailed module page, or transitions toward project discussion.",
    ],
  },

  outcome: [
    "Improved discovery of relevant case studies and technical modules.",
    "Better understanding of platform capabilities through guided interaction.",
    "Higher engagement with complex portfolio content.",
    "Structured visitor intent that can support downstream recommendation systems.",
    "Smoother transition from exploration to project discussion.",
  ],

  takeaways: [
    "Natural language can be used as an effective entry point for complex portfolio discovery.",
    "Intent extraction is most useful when paired with an evolving structured visitor profile.",
    "AI-guided clarification reduces friction between vague goals and relevant solutions.",
    "Discovery systems should function as navigation layers, not only as chat interfaces.",
    "Structured discovery signals create strong foundations for recommendation and conversion flows.",
  ],

  relatedModules: [
    {
      title: "AI-Generated Client Profile",
      href: "/freelance/ai-generated-client-profile",
    },
    {
      title: "Dynamic Use Case Recommendation",
      href: "/freelance/dynamic-use-case-recommendation",
    },
    {
      title: "AI-Assisted Lead Qualification",
      href: "/freelance/ai-assisted-lead-qualification",
    },
  ],
};