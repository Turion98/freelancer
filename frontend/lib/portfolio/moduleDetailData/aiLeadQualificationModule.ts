import type { ModuleDetailData } from "../moduleDetailTypes";

export const aiLeadQualificationModule: ModuleDetailData = {
  id: "ai-assisted-lead-qualification",
  category: "ai-conversion",

  hero: {
    eyebrow: "AI Conversion System",
    title: "AI-Assisted Lead Qualification",
    lead:
      "An AI-driven system that converts discovery conversation signals into structured project inquiries, transforming exploratory portfolio interactions into meaningful collaboration opportunities.",
    chips: [
      "AI Discovery",
      "Intent Detection",
      "Lead Qualification",
      "Project Brief Generation",
      "Conversion Flow",
    ],
    businessValue:
      "This module connects exploration and project initiation by transforming conversation signals into structured inquiries. Instead of relying on traditional contact forms, the system generates meaningful project briefs from previously detected visitor intent.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Transform discovery interaction signals into structured project inquiries that enable meaningful project discussions.",
    },
    {
      label: "Problem",
      value:
        "Traditional contact forms often capture vague requests and lose important context from earlier interactions.",
    },
    {
      label: "Core Mechanism",
      value:
        "AI interprets conversation signals, constructs a client profile, and generates a structured project brief before inquiry submission.",
    },
    {
      label: "System Benefit",
      value:
        "Project discussions start with meaningful context instead of vague inquiries, improving communication efficiency.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How discovery conversations become structured project inquiries",
    steps: [
      {
        title: "Visitor explores portfolio",
        description:
          "The visitor begins exploring the portfolio and interacts with system explanations and use case demonstrations.",
      },
      {
        title: "AI discovery conversation begins",
        description:
          "The AI assistant collects signals about visitor goals, project interests, and interaction preferences.",
      },
      {
        title: "Client profile is constructed",
        description:
          "Signals detected during the conversation are combined into a structured client profile representing the visitor's potential project needs.",
      },
      {
        title: "Relevant use cases are recommended",
        description:
          "Based on the constructed profile, the system highlights the most relevant platform use cases or technical modules.",
      },
      {
        title: "Visitor shows project interest",
        description:
          "When signals indicate serious interest, the system prepares the transition from exploration to collaboration.",
      },
      {
        title: "Project brief is generated",
        description:
          "The AI converts the detected signals into a structured project summary that the visitor can review and confirm.",
      },
      {
        title: "Visitor submits inquiry",
        description:
          "The confirmed project brief becomes the foundation of the project inquiry sent to the developer.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Visitors exploring complex technical portfolios often reach a moment when they recognize that a system or solution may be relevant to their own project.",
      "At this point, the interaction shifts from exploration toward potential collaboration.",
      "The AI-Assisted Lead Qualification system supports this transition by converting signals collected during discovery conversations into a structured project inquiry.",
      "Instead of presenting a traditional contact form immediately, the system gradually prepares the visitor for project discussion by summarizing detected intent signals and presenting a generated project brief.",
      "This approach reduces friction in the contact process while preserving valuable context gathered during the discovery interaction.",
    ],
  },

  problem: {
    intro:
      "Traditional contact workflows often fail to capture the real project context behind visitor inquiries.",
    points: [
      "Visitors often do not know what information they should provide in a contact request.",
      "Contact forms require users to manually describe complex project ideas.",
      "Context from earlier exploration or conversation is typically lost.",
      "Requests frequently arrive with insufficient technical detail.",
      "Developers must spend additional time clarifying project requirements after the first contact.",
    ],
    examples: [
      "A visitor submits a message saying 'We need something interactive' without further explanation.",
      "Someone interested in a decision-flow system cannot easily describe the interaction model.",
      "A visitor explores several relevant case studies but the contact form contains no reference to them.",
      "An inquiry expresses interest in a project but lacks information about audience or goals.",
    ],
  },

  solution: {
    intro:
      "The AI-Assisted Lead Qualification system converts discovery signals into a structured project inquiry before the visitor initiates contact.",
    points: [
      "Collect intent signals during discovery conversation.",
      "Construct a structured client profile from conversation context.",
      "Detect when the visitor reaches the collaboration stage of exploration.",
      "Generate a preliminary project brief summarizing detected goals and solution types.",
      "Allow the visitor to review and edit the generated project information.",
      "Submit the structured project summary as a project inquiry.",
      "Use the structured inquiry as the starting point for project discussion.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Lead Qualification Architecture",
      description:
        "The lead qualification system sits at the final stage of the AI discovery pipeline and converts interaction signals into project inquiries.",
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
            label: "Visitor\nConversation",
            x: 10,
            y: 20,
          },
          {
            id: "intent",
            label: "Intent\nExtraction",
            x: 32,
            y: 36,
          },
          {
            id: "profile",
            label: "Client\nProfile",
            x: 54,
            y: 52,
          },
          {
            id: "recommendation",
            label: "Use Case\nRecommendation",
            x: 76,
            y: 36,
          },
          {
            id: "qualification",
            label: "Lead\nQualification",
            x: 70,
            y: 68,
            width: "lg",
          },
          {
            id: "inquiry",
            label: "Project\nInquiry",
            x: 46,
            y: 86,
            width: "lg",
          },
        ],
        edges: [
          {
            from: "conversation",
            to: "intent",
            label: "interaction signals",
            route: "auto",
          },
          {
            from: "intent",
            to: "profile",
            label: "structured attributes",
            route: "auto",
          },
          {
            from: "profile",
            to: "recommendation",
            label: "matching logic",
            route: "auto",
          },
          {
            from: "recommendation",
            to: "qualification",
            label: "interest signals",
            route: "auto",
          },
          {
            from: "qualification",
            to: "inquiry",
            label: "generated brief",
            route: "auto",
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Lead Qualification Pipeline",
      description:
        "Conversation signals move through intent detection and profile construction before becoming a project inquiry.",
      data: {
        steps: [
          "Visitor exploration",
          "AI discovery conversation",
          "Intent extraction",
          "Client profile construction",
          "Use case recommendation",
          "Lead qualification trigger",
          "Project brief generation",
          "Inquiry submission",
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Inquiry Structure",
    title: "Generated project inquiry structure",
    language: "json",
    code: `{
  "project_goal": "Interactive marketing experience",
  "recommended_solution": "Decision flow campaign",
  "interaction_type": "branching narrative",
  "audience": "consumer marketing audience",
  "desired_outcome": "engagement and conversion",
  "additional_notes": "visitor confirmed interest after exploring relevant use cases"
}`,
  },

  flow: {
    title: "How AI discovery becomes project qualification",
    steps: [
      {
        title: "Discovery interaction collects signals",
        description:
          "The AI assistant observes visitor interests, questions, and exploration patterns.",
      },
      {
        title: "Intent extraction interprets signals",
        description:
          "Detected signals are translated into structured attributes describing project intent.",
      },
      {
        title: "Client profile aggregates signals",
        description:
          "Collected attributes are stored as a profile representing the visitor's project context.",
      },
      {
        title: "Recommendation validates relevance",
        description:
          "Relevant system modules and use cases are presented based on the detected profile.",
      },
      {
        title: "Lead qualification evaluates readiness",
        description:
          "The system determines whether the visitor is ready to transition from exploration to collaboration.",
      },
      {
        title: "Project brief is generated",
        description:
          "The system summarizes the detected project attributes into a structured inquiry.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Intent interpretation",
      items: [
        "Interpret signals gathered during AI discovery conversation.",
        "Identify project objectives and relevant interaction types.",
        "Detect when visitors show serious collaboration interest.",
      ],
    },
    {
      title: "Profile construction",
      items: [
        "Aggregate detected signals into a structured client profile.",
        "Represent project attributes such as goals, audience, and interaction model.",
        "Provide the foundation for downstream recommendation and qualification.",
      ],
    },
    {
      title: "Lead qualification",
      items: [
        "Determine when visitors reach the collaboration stage of exploration.",
        "Generate structured project summaries from conversation signals.",
        "Prepare project inquiries that contain meaningful technical context.",
      ],
    },
    {
      title: "Conversion support",
      items: [
        "Reduce friction in the contact process.",
        "Ensure inquiries contain relevant project information.",
        "Bridge discovery interaction and project discussion.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime behavior",
    paragraphs: [
      "The lead qualification system continuously evaluates visitor signals during the discovery session.",
      "Signals such as explicit project interest, exploration of relevant modules, or completion of discovery questions may trigger the transition toward project inquiry.",
      "The system proposes this transition only when sufficient signals are present, ensuring that visitors remain in control of the interaction flow.",
      "This prevents premature conversion attempts while still supporting efficient project initiation when interest is clearly established.",
    ],
  },

  outcome: [
    "More informative project inquiries.",
    "Reduced friction in the contact workflow.",
    "Preserved context from earlier discovery interaction.",
    "Better understanding of visitor project intent.",
    "More efficient project discussions.",
  ],

  takeaways: [
    "AI discovery conversations can naturally evolve into conversion flows.",
    "Lead qualification can be driven by structured interaction signals.",
    "Generated project briefs reduce friction compared to traditional contact forms.",
    "Conversation data can provide valuable context for project discussions.",
    "Integrating discovery and contact flows improves user experience.",
  ],

  relatedModules: [
    {
      title: "Conversational Visitor Discovery",
      href: "/freelance/conversational-visitor-discovery",
    },
    {
      title: "Use Case Recommendation Engine",
      href: "/freelance/use-case-recommendation-engine",
    },
  ],
};