// app/components/Portfolio/ProjectDetailsSection.tsx

import React from "react";
import s from "./ProjectDetailsSection.module.scss";

export const ProjectDetailsSection: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div id="project-ai-project-scoper" className={s.block}>
          <h3>AI-Driven Project Scoper</h3>
          <p>
            Rövid UX discovery modul, ahol a user kaotikus ötleteből néhány
            lépésben strukturált, menthető projekt scope készül.
          </p>
        </div>

        <div id="project-ai-flow-visualizer" className={s.block}>
          <h3>AI Flow Visualizer</h3>
          <p>
            A Scoper outputja alapján automatikusan készül egy UX flow / journey
            ábra, amit később akár tényleges projektekhez is használhatsz.
          </p>
        </div>

        <div id="project-service-fit-analyzer" className={s.block}>
          <h3>Personalized Service-Fit Analyzer</h3>
          <p>
            A rendszer megmutatja, mennyire illeszkedik a projekt a szolgáltatásaidhoz,
            és melyik „track”-re, csomagra érdemes továbbterelni.
          </p>
        </div>

        <div id="project-proposal-draft-generator" className={s.block}>
          <h3>AI-Driven Proposal Draft Generator</h3>
          <p>
            Mini ajánlat-váz, ami scope-ot, workflow lépéseket és next step
            javaslatot tartalmaz – anélkül, hogy árazásba mennénk.
          </p>
        </div>

        <div id="project-ai-insights-feed" className={s.block}>
          <h3>Real-Time AI Insights Feed</h3>
          <p>
            Könnyű „wow”-elem: mini dashboard, ami élőben mutatja, mire figyel az AI,
            milyen kulcsszavak és minták alapján építkezik.
          </p>
        </div>
      </div>
    </section>
  );
};
