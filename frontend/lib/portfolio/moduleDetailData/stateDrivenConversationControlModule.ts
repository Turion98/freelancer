import type { ModuleDetailData } from "../moduleDetailTypes";

export const stateDrivenConversationControlModule: ModuleDetailData = {
  id: "state-driven-conversation-control",
  category: "ai-orchestration",

  hero: {
    eyebrow: "AI Orchestration Layer",
    title: "State-Driven Conversation Control",
    lead:
      "A structured conversation control system that organizes AI-assisted discovery into defined states, keeping the interaction purposeful, coordinated, and aligned with recommendation and qualification workflows.",
    chips: [
      "State Machine",
      "AI Orchestration",
      "Conversation Control",
      "Guided Discovery",
      "Interaction Logic",
    ],
    businessValue:
      "This module prevents AI discovery from becoming a loose chat experience. By organizing conversation into explicit stages, the system keeps the interaction focused, reduces redundant questioning, and ensures that discovery, profiling, recommendations, and project-readiness signals stay synchronized.",
  },

  snapshot: [
    {
      label: "Purpose",
      value:
        "Control AI-assisted discovery through explicit conversation states that guide interaction toward meaningful outcomes.",
    },
    {
      label: "Problem",
      value:
        "Free-form conversational interfaces can become repetitive, reactive, and poorly coordinated with the rest of the system.",
    },
    {
      label: "Core Mechanism",
      value:
        "A lightweight state machine determines the current discovery stage, the type of questions the AI should ask, and which downstream features should activate.",
    },
    {
      label: "System Benefit",
      value:
        "Conversation remains structured, adaptive, and synchronized with profile construction, recommendation logic, and conversion readiness.",
    },
  ],

  entryFlow: {
    eyebrow: "System Flow",
    title: "How structured states guide the discovery conversation",
    steps: [
      {
        title: "Visitor opens the portfolio",
        description:
          "The user enters the portfolio and the AI-assisted discovery flow begins in an initial exploration state.",
      },
      {
        title: "Exploration state begins",
        description:
          "The AI asks broader questions to understand the visitor’s goals without assuming a clear project direction too early.",
      },
      {
        title: "Clarification state refines intent",
        description:
          "Once an initial goal appears, the system moves into clarification and asks for the missing details needed to reduce ambiguity.",
      },
      {
        title: "Matching state activates",
        description:
          "When enough structured signals are present, the system begins evaluating which use cases or modules are most relevant.",
      },
      {
        title: "Recommendation state surfaces examples",
        description:
          "Relevant portfolio examples are presented as the conversation becomes more concrete and solution-oriented.",
      },
      {
        title: "Project readiness is evaluated",
        description:
          "If the interaction shows collaboration intent, the system prepares for a transition toward inquiry or qualification.",
      },
      {
        title: "State updates remain adaptive",
        description:
          "If new information changes the context, the system can move backward or sideways between states without losing overall structure.",
      },
    ],
  },

  overview: {
    paragraphs: [
      "Conversational interfaces can become unstructured when they rely only on free-form dialogue and reactive message handling.",
      "In goal-oriented systems such as AI-assisted portfolio discovery, this creates problems because the interaction must do more than simply respond to messages.",
      "The system must understand visitor intent, collect useful project signals, activate relevant interface components, and eventually support recommendation or project inquiry workflows.",
      "The State-Driven Conversation Control module addresses this by organizing the interaction into defined states that represent stages of the discovery journey.",
      "This preserves natural language flexibility while ensuring the conversation remains purposeful, coherent, and aligned with the wider system.",
    ],
  },

  problem: {
    intro:
      "Without explicit conversation control, AI-assisted discovery can become reactive, repetitive, and disconnected from the rest of the interface.",
    points: [
      "The AI may ask redundant or irrelevant questions when no structured stage logic exists.",
      "Conversation can drift between topics without a clear sense of progression.",
      "The system may not know when enough information has been collected to move forward.",
      "Recommendation, profiling, and inquiry features can become unsynchronized with the conversation.",
      "Visitors may experience the AI as a generic chatbot rather than a guided discovery tool.",
    ],
    examples: [
      "The AI keeps asking broad exploratory questions even after the visitor already described a specific goal.",
      "Recommendations appear too early before enough intent signals have been collected.",
      "The profile panel updates inconsistently because conversation logic and system logic are not coordinated.",
      "A visitor shows strong project interest, but the system fails to transition toward qualification because no readiness state exists.",
    ],
  },

  solution: {
    intro:
      "The State-Driven Conversation Control system uses a lightweight state machine to coordinate AI behavior across the discovery journey.",
    points: [
      "Define explicit conversation stages such as exploration, clarification, matching, recommendation, and conversion readiness.",
      "Use the active state to determine what kind of questions the AI should ask.",
      "Control which signals should be collected at each stage.",
      "Coordinate when interface panels or downstream features should activate.",
      "Trigger state transitions when enough information has been collected.",
      "Allow flexible backward or lateral transitions when new user input changes the context.",
      "Keep conversation, profiling, recommendation, and qualification systems synchronized through a shared orchestration layer.",
    ],
  },

  diagrams: [
    {
      type: "architecture",
      title: "Conversation Control Architecture",
      description:
        "The state controller acts as an orchestration layer between the conversational interface and downstream discovery systems.",
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
            x: 10,
            y: 18,
            width: "md",
          },
          {
            id: "engine",
            label: "Conversation\nEngine",
            x: 28,
            y: 34,
            width: "lg",
          },
          {
            id: "state",
            label: "State\nController",
            x: 50,
            y: 50,
            width: "md",
          },
          {
            id: "intent",
            label: "Intent\nExtraction",
            x: 74,
            y: 34,
            width: "md",
          },
          {
            id: "systems",
            label: "Profile + Recommendation\nSystems",
            x: 70,
            y: 70,
            width: "lg",
          },
          {
            id: "ui",
            label: "Adaptive Interface\nComponents",
            x: 42,
            y: 86,
            width: "lg",
          },
        ],
        edges: [
          {
            from: "visitor",
            to: "engine",
            label: "incoming message",
            route: "auto",
            labelOffsetX: 2.6,
            labelOffsetY: -0.2,
          },
          {
            from: "engine",
            to: "state",
            label: "interaction context",
            route: "auto",
            labelOffsetX: 3.0,
            labelOffsetY: -0.2,
          },
          {
            from: "state",
            to: "intent",
            label: "stage-aware processing",
            route: "auto",
            labelOffsetX: 2.4,
            labelOffsetY: -0.2,
          },
          {
            from: "state",
            to: "systems",
            label: "feature activation",
            route: "auto",
            labelOffsetX: -2.8,
            labelOffsetY: -0.2,
          },
          {
            from: "state",
            to: "ui",
            label: "visible stage updates",
            route: "auto",
            labelOffsetX: -2.2,
            labelOffsetY: -0.2,
          },
        ],
      },
    },
    {
      type: "pipeline",
      title: "Conversation State Pipeline",
      description:
        "The AI discovery flow moves through explicit conversation stages that progressively narrow intent and activate downstream systems.",
      data: {
        steps: [
          "Exploration",
          "Clarification",
          "Matching",
          "Recommendation",
          "Project readiness",
          "Inquiry transition",
        ],
      },
    },
    {
      type: "sequence",
      title: "Message / State / Action Sequence",
      description:
        "Message flow across visitor input, state evaluation, structured interpretation, and coordinated feature activation.",
      data: {
        columns: [
          { id: "visitor", label: "Visitor" },
          { id: "engine", label: "Conversation Engine" },
          { id: "state", label: "State Controller" },
          { id: "systems", label: "Downstream Systems" },
          { id: "ui", label: "UI Layer" },
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
            label: "Send message",
            detail:
              "The visitor provides a new input during the discovery conversation",
          },
          {
            id: "step-2",
            row: "step-2",
            column: "engine",
            variant: "self",
            stepNumber: 2,
            label: "Interpret interaction",
            detail:
              "The conversation layer evaluates the message within the current discovery context",
          },
          {
            id: "step-3",
            row: "step-3",
            column: "engine",
            colSpan: 2,
            variant: "forward",
            stepNumber: 3,
            label: "Request state evaluation",
            detail:
              "The current message and session context are passed into the state controller",
          },
          {
            id: "step-4",
            row: "step-4",
            column: "state",
            variant: "self",
            stepNumber: 4,
            label: "Determine active stage",
            detail:
              "The controller decides whether to stay in the current state or transition to another one",
          },
          {
            id: "step-5",
            row: "step-5",
            column: "state",
            colSpan: 2,
            variant: "forward",
            stepNumber: 5,
            label: "Trigger system actions",
            detail:
              "Intent extraction, recommendation logic, or readiness evaluation may be activated based on state",
          },
          {
            id: "step-6",
            row: "step-6",
            column: "systems",
            variant: "self",
            stepNumber: 6,
            label: "Update coordinated features",
            detail:
              "Profile panels, recommendation modules, or inquiry preparation update in sync with the conversation",
          },
          {
            id: "step-7",
            row: "step-7",
            column: "state",
            colSpan: 2,
            variant: "forward",
            stepNumber: 7,
            label: "Send UI guidance",
            detail:
              "The interface may expose the current stage or activate relevant components",
          },
          {
            id: "step-8",
            row: "step-8",
            column: "ui",
            colSpan: 2,
            variant: "backward",
            stepNumber: 8,
            label: "Support next step",
            detail:
              "The visitor experiences a guided flow rather than disconnected chatbot replies",
          },
        ],
      },
    },
  ],

  jsonPreview: {
    eyebrow: "State Model",
    title: "Example lightweight conversation state machine",
    language: "json",
    code: `{
  "session": {
    "current_state": "clarification",
    "available_states": [
      "exploration",
      "clarification",
      "matching",
      "recommendation",
      "conversion"
    ],
    "signals_collected": [
      "project_goal",
      "interaction_type",
      "desired_outcome"
    ],
    "next_action": "ask_followup_question"
  }
}`,
  },

  flow: {
    title: "How explicit states make AI discovery more reliable",
    steps: [
      {
        title: "The system defines where the visitor is in the journey",
        description:
          "Instead of handling each message independently, the AI interprets input within a known discovery stage.",
      },
      {
        title: "Each state has a clear interaction purpose",
        description:
          "Exploration gathers broad intent, clarification reduces ambiguity, matching evaluates relevance, and recommendation presents examples.",
      },
      {
        title: "Transitions depend on collected signals",
        description:
          "The system moves forward only when enough useful information is available for the next stage.",
      },
      {
        title: "Coordination keeps the interface synchronized",
        description:
          "Profile panels, recommendation components, and next-step prompts update according to the active state.",
      },
      {
        title: "Adaptation remains possible",
        description:
          "If the visitor introduces new information, the conversation can move backward or shift state without losing structure.",
      },
      {
        title: "The result is guided discovery, not open-ended chat",
        description:
          "The AI behaves like a purposeful navigation and discovery layer that supports concrete outcomes.",
      },
    ],
  },

  responsibilities: [
    {
      title: "State orchestration",
      items: [
        "Define the active stage of the discovery conversation.",
        "Control the progression between exploration, clarification, matching, recommendation, and conversion readiness.",
        "Maintain structured conversation direction across the session.",
      ],
    },
    {
      title: "AI behavior control",
      items: [
        "Determine what kind of question or response is appropriate in the current state.",
        "Reduce redundant questioning and off-topic responses.",
        "Keep the assistant aligned with goal-oriented discovery behavior.",
      ],
    },
    {
      title: "System coordination",
      items: [
        "Synchronize conversation logic with profiling and recommendation systems.",
        "Control when downstream features should activate.",
        "Ensure interface components respond coherently to the current stage.",
      ],
    },
    {
      title: "Adaptive transitions",
      items: [
        "Evaluate whether enough signals exist to move forward.",
        "Support backward or lateral transitions when context changes.",
        "Preserve flexibility without sacrificing structure.",
      ],
    },
  ],

  runtimeSafety: {
    title: "Runtime behavior",
    paragraphs: [
      "The state controller evaluates each new interaction in the context of the full session rather than treating messages as isolated prompts.",
      "This allows the system to decide whether the conversation should remain in the current stage, advance to a more specific phase, or step back when the context changes.",
      "Because the orchestration layer coordinates multiple features at once, the visitor experiences a synchronized discovery flow rather than separate disconnected interface reactions.",
      "The result is a conversation system that remains adaptive in language but structured in progression and outcome.",
    ],
  },

  outcome: [
    "More coherent AI-assisted discovery sessions.",
    "Reduced redundancy and better conversational direction.",
    "Stronger synchronization between conversation and interface behavior.",
    "Clearer transitions from exploration to recommendation or inquiry.",
    "A more guided and purposeful visitor experience.",
  ],

  takeaways: [
    "State machines are a strong foundation for goal-oriented conversational systems.",
    "AI discovery becomes more reliable when the interaction is stage-aware.",
    "Conversation control should coordinate downstream systems, not only message generation.",
    "Adaptive transitions matter as much as fixed progression.",
    "Guided discovery is more useful than open-ended chatbot behavior in portfolio environments.",
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
      title: "Dynamic Use Case Recommendation",
      href: "/freelance/dynamic-use-case-recommendation",
    },
  ],
};