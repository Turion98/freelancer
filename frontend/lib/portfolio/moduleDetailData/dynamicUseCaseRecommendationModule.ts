import type { ModuleDetailData } from "../moduleDetailTypes";

export const dynamicUseCaseRecommendationModule: ModuleDetailData = {
  id: "dynamic-use-case-recommendation",
  category: "ai-recommendation",

  hero: {
    eyebrow: "AI Recommendation Layer",
    title: "Dynamic Use Case Recommendation",
    lead:
      "An AI-assisted recommendation system that connects visitor intent signals with the most relevant portfolio use cases, helping visitors quickly discover examples that match their goals.",
    chips: [
      "AI Recommendation",
      "Intent Matching",
      "Use Case Ranking",
      "Metadata Mapping",
      "Adaptive Discovery",
    ],
    businessValue:
      "This module transforms the portfolio from a static content library into an adaptive recommendation system. Instead of forcing visitors to manually browse all available modules and case studies, the system highlights the most relevant examples based on detected intent, reducing friction and improving discovery quality.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Match visitor intent with the most relevant portfolio use cases during the discovery session.",
    },
    {
      label: "Problem",
      value:
        "Visitors often struggle to identify which case studies or modules are most relevant to their goals when browsing a complex portfolio manually.",
    },
    {
      label: "Core Mechanism",
      value:
        "The system compares structured visitor profile signals against use case metadata and ranks the best matching examples dynamically.",
    },
    {
      label: "System Benefit",
      value:
        "Visitors find relevant solutions faster, understand platform capabilities more clearly, and explore the portfolio through adaptive guidance instead of static navigation.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How visitor intent becomes recommended use cases",
    steps: [
      {
        title: "Visitor describes a goal",
        description:
          "The visitor explains a need, challenge, or project direction during the discovery conversation.",
      },
      {
        title: "Intent signals are extracted",
        description:
          "The AI identifies structured attributes such as campaign objective, interaction type, complexity, and desired outcome.",
      },
      {
        title: "Visitor profile is updated",
        description:
          "These attributes are stored inside the evolving profile that represents the visitor’s current intent.",
      },
      {
        title: "Recommendation engine evaluates matches",
        description:
          "The system compares the visitor profile against the metadata of available use cases and modules.",
      },
      {
        title: "Relevant examples are ranked",
        description:
          "The best matching use cases are prioritized based on relevance to the visitor’s detected goals.",
      },
      {
        title: "Recommended use cases are displayed",
        description:
          "The interface surfaces the most relevant examples in a dedicated recommendation panel.",
      },
      {
        title: "Recommendations refine over time",
        description:
          "As the conversation continues and the visitor profile changes, recommendations become more precise.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Technical portfolios that present multiple systems, modules, and case studies often contain a large amount of structured information.",
      "While this depth demonstrates technical capability, it can also make discovery more difficult for visitors who are trying to identify which examples are most relevant to their own needs.",
      "The Dynamic Use Case Recommendation system introduces an AI-assisted recommendation layer that connects visitor intent with relevant portfolio examples.",
      "Instead of requiring manual browsing across the entire portfolio, the system uses structured signals collected during discovery conversation to evaluate which use cases best match the visitor’s goals.",
      "This turns the portfolio into an adaptive recommendation environment that guides visitors toward the most relevant solutions more efficiently.",
    ],
  },

  problem: {
    intro:
      "Visitors often arrive with goals that do not map directly to the internal structure of a technical portfolio.",
    points: [
      "Portfolio content may be organized by internal categories rather than visitor goals.",
      "Static menus and category lists assume the visitor already understands the system structure.",
      "Relevant case studies can be overlooked when discovery depends only on manual browsing.",
      "Visitors may misunderstand what the platform is capable of if they do not see the right examples.",
      "Without guidance, exploration becomes slower and more cognitively demanding.",
    ],
    examples: [
      "A visitor wants a product selection experience but does not know which module best represents that solution.",
      "Someone is looking for an engagement-focused campaign flow but cannot identify the right case study category.",
      "A visitor interested in interactive storytelling misses the most relevant example because they browse the wrong section first.",
      "The right use case exists in the portfolio, but the visitor leaves before finding it.",
    ],
  },

  solution: {
    intro:
      "The Dynamic Use Case Recommendation system compares visitor intent signals with structured use case metadata to surface the most relevant examples during discovery.",
    points: [
      "Use structured visitor intent signals extracted during AI-assisted discovery.",
      "Maintain metadata for each portfolio use case describing interaction type, campaign goal, complexity, industry fit, and engagement pattern.",
      "Compare visitor profile attributes against available use case metadata.",
      "Calculate relative relevance and rank the strongest matches.",
      "Display recommended use cases in a dedicated interface panel.",
      "Explain why each recommendation matches the visitor’s detected intent.",
      "Continuously refine recommendations as the visitor profile evolves.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Recommendation System Architecture",
      description:
        "The recommendation engine sits between the visitor profile and the portfolio case library, ranking relevant use cases based on structured matching.",
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
            y: 18,
            width: "md",
          },
          {
            id: "intent",
            label: "Intent\nExtraction",
            x: 28,
            y: 34,
            width: "md",
          },
          {
            id: "profile",
            label: "Visitor\nProfile",
            x: 48,
            y: 50,
            width: "md",
          },
          {
            id: "engine",
            label: "Recommendation\nEngine",
            x: 70,
            y: 34,
            width: "lg",
          },
          {
            id: "library",
            label: "Use Case\nLibrary",
            x: 72,
            y: 68,
            width: "md",
          },
          {
            id: "panel",
            label: "Suggested Use Cases\nPanel",
            x: 46,
            y: 86,
            width: "lg",
          },
        ],
        edges: [
          {
            from: "conversation",
            to: "intent",
            label: "visitor input",
            route: "auto",
            labelOffsetX: 2.8,
            labelOffsetY: -0.2,
          },
          {
            from: "intent",
            to: "profile",
            label: "structured signals",
            route: "auto",
            labelOffsetX: 3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "profile",
            to: "engine",
            label: "intent profile",
            route: "auto",
            labelOffsetX: 2.8,
            labelOffsetY: -0.2,
          },
          {
            from: "library",
            to: "engine",
            label: "use case metadata",
            route: "auto",
            labelOffsetX: -3.2,
            labelOffsetY: -0.2,
          },
          {
            from: "engine",
            to: "panel",
            label: "ranked suggestions",
            route: "auto",
            labelOffsetX: -2.8,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Recommendation Pipeline",
      description:
        "Visitor intent moves through structured profiling and metadata comparison before the most relevant use cases are displayed.",
      data: {
        steps: [
          "Visitor describes goal",
          "Extract intent signals",
          "Update visitor profile",
          "Evaluate use case metadata",
          "Score relevance",
          "Rank suggestions",
          "Display recommended use cases",
        ],
      },
    },
    {
      type: "sequence",
      title: "Intent / Match / Recommendation Sequence",
      description:
        "Message flow across visitor input, profile updates, metadata matching, and recommendation output.",
      data: {
        columns: [
          { id: "visitor", label: "Visitor" },
          { id: "assistant", label: "AI Assistant" },
          { id: "profile", label: "Visitor Profile" },
          { id: "engine", label: "Recommendation Engine" },
          { id: "panel", label: "Recommendation Panel" },
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
            label: "Express goal",
            detail:
              "The visitor describes a need or desired interaction in natural language",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "assistant",
            variant: "self",
            stepNumber: 2,
            label: "Interpret intent",
            detail:
              "The assistant identifies project-relevant signals from the conversation",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "assistant",
            colSpan: 2,
            variant: "forward",
            stepNumber: 3,
            label: "Update profile",
            detail:
              "Structured intent attributes are passed into the visitor profile",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "profile",
            colSpan: 2,
            variant: "forward",
            stepNumber: 4,
            label: "Send profile state",
            detail:
              "The recommendation engine receives the latest profile attributes",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "engine",
            variant: "self",
            stepNumber: 5,
            label: "Evaluate relevance",
            detail:
              "Use case metadata is compared against the visitor’s detected goals and interaction patterns",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "engine",
            colSpan: 2,
            variant: "forward",
            stepNumber: 6,
            label: "Return ranked matches",
            detail:
              "The strongest use case candidates are selected and ordered by relevance",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "panel",
            variant: "self",
            stepNumber: 7,
            label: "Display suggestions",
            detail:
              "Recommended use cases appear with explanations and navigation links",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "panel",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Support deeper discovery",
            detail:
              "The visitor explores relevant examples and the profile can continue refining",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "Recommendation Model",
    title: "Example visitor-to-use-case matching structure",
    language: "json",
    code: `{
  "visitor_profile": {
    "campaign_objective": "product guidance",
    "interaction_type": "decision flow",
    "complexity_level": "medium",
    "expected_outcome": "engagement and conversion"
  },
  "recommended_use_case": {
    "title": "Product Selection Journey",
    "interaction_type": "decision flow",
    "campaign_goal": "product recommendation",
    "complexity_level": "medium",
    "industry_fit": "consumer brand",
    "engagement_pattern": "guided choice"
  },
  "relevance_reason": "You mentioned guided product choice and decision support."
}`,
  },

  flow: {
    title: "How adaptive recommendation improves portfolio discovery",
    steps: [
      {
        title: "Discovery signals provide structured context",
        description:
          "The recommendation layer does not rely on raw chat text alone; it works from a structured profile built during discovery.",
      },
      {
        title: "Metadata creates a shared comparison model",
        description:
          "Each use case contains attributes that let the system compare portfolio examples against visitor intent consistently.",
      },
      {
        title: "Ranking reduces cognitive load",
        description:
          "Instead of showing the full portfolio equally, the system prioritizes the most relevant examples first.",
      },
      {
        title: "Transparent explanations improve trust",
        description:
          "Visitors can see why a recommendation appeared, which makes the system feel more understandable and useful.",
      },
      {
        title: "Recommendations evolve during the session",
        description:
          "As the visitor clarifies their goals, the recommendation engine recalculates relevance and updates suggestions.",
      },
      {
        title: "Discovery becomes more outcome-oriented",
        description:
          "Visitors move more quickly from vague goals to concrete examples that demonstrate how the platform can help.",
      },
    ],
  },

  responsibilities: [
    {
      title: "Intent-driven matching",
      items: [
        "Consume structured visitor profile signals from the discovery system.",
        "Interpret attributes such as campaign objective, interaction type, complexity, and outcome.",
        "Use those signals as the basis of recommendation logic.",
      ],
    },
    {
      title: "Metadata comparison",
      items: [
        "Store structured metadata for each portfolio use case.",
        "Compare visitor profile attributes against use case characteristics.",
        "Support consistent and explainable relevance scoring.",
      ],
    },
    {
      title: "Recommendation delivery",
      items: [
        "Rank the most relevant use cases dynamically.",
        "Display suggested examples in a dedicated interface panel.",
        "Provide relevance explanations and links to deeper case study pages.",
      ],
    },
    {
      title: "Adaptive refinement",
      items: [
        "Recalculate recommendations whenever the visitor profile changes.",
        "Support progressive refinement throughout the discovery session.",
        "Encourage deeper exploration through related or follow-up recommendations.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime behavior",
    paragraphs: [
      "The recommendation engine operates continuously during the visitor session and reacts whenever the structured visitor profile changes.",
      "As new signals appear, the system recalculates relevance scores and updates recommended use cases in real time.",
      "Because recommendation logic is separated from the conversational interface, matching behavior can evolve independently without changing the discovery layer itself.",
      "The system can also support deeper exploration by suggesting related examples when the visitor opens or engages with a recommended case study.",
    ],
  },

  outcome: [
    "Faster discovery of relevant portfolio examples.",
    "Clearer mapping between visitor goals and system capabilities.",
    "Higher engagement with case studies and technical modules.",
    "Reduced friction in navigating complex portfolio content.",
    "Smoother transition from discovery toward project discussion.",
  ],

  takeaways: [
    "Intent-driven recommendation is a strong pattern for AI-assisted portfolio interfaces.",
    "Structured metadata makes use case matching more reliable and explainable.",
    "Adaptive recommendations reduce discovery friction in complex content systems.",
    "Transparent reasoning improves user trust in recommendation systems.",
    "Recommendation layers work best when integrated with conversational discovery.",
  ],

  relatedModules: [
    {
      title: "Conversational Visitor Discovery",
      href: "/freelance/conversational-visitor-discovery",
    },
    {
      title: "AI-Generated Client Profile",
      href: "/freelance/ai-generated-client-profile",
    },
    {
      title: "AI-Assisted Lead Qualification",
      href: "/freelance/ai-assisted-lead-qualification",
    },
  ],
};