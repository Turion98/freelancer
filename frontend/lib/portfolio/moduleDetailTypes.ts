export type ModuleJsonPreview = {
  eyebrow?: string;
  title: string;
  lead?: string;
  code: string;
  language?: "json" | "ts";
};

export type ModuleDetailData = {
  id: string;
  category: string;

  hero: {
    eyebrow?: string;
    title: string;
    lead: string;
    chips?: string[];
    businessValue?: string;
  };

  entryFlow?: {
    eyebrow?: string;
    title: string;
    lead?: string;
    steps: {
      title: string;
      description?: string;
    }[];
  };
  
  jsonPreview?: ModuleJsonPreview;

  snapshot: {
    label: string;
    value: string;
  }[];

  overview?: {
    paragraphs: string[];
  };

  problem: {
    intro: string;
    points: string[];
    examples?: string[];
  };

  solution: {
    intro: string;
    points: string[];
  };

  contentStructure?: {
    title: string;
    intro?: string;
    storyRootFields?: string[];
    pageFields?: string[];
    supportedInteractions?: string[];
  };

  diagrams?: {
    type: "pipeline" | "architecture" | "sequence";
    title: string;
    description?: string;
    data: unknown;
  }[];

  flow?: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };

  responsibilities?: {
    title: string;
    items: string[];
  }[];

  runtimeSafety?: {
    title: string;
    paragraphs: string[];
    preventedIssues?: string[];
  };

  outcome: string[];

  takeaways: string[];

  relatedModules?: {
    title: string;
    href: string;
  }[];
};
