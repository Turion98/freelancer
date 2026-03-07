"use client";

import React from "react";
import s from "./AiIntakeFlowDetails.module.scss";

export function AiIntakeFlowDetails() {
  return (
    <section id="ai-intake-flow" className={s.wrapper}>
      {/* HERO */}
      <header className={s.hero}>
        <h2>AI Intake Flow</h2>
        <p className={s.subtitle}>
          Az ügyfél beszél – a rendszer pedig összerakja helyette a projekt alapjait.
        </p>
        <p className={s.lead}>
          Az AI-intake egy beszélgetés-szerű onboarding élmény, amely
          a nyers ügyfélinputból jól strukturált, érthető projektprofilt készít.
        </p>
      </header>

      {/* USE-CASE */}
      <section className={s.section}>
        <h3>Mire jó ez?</h3>
        <ul className={s.list}>
          <li>Ha az ügyfél nem tud briefet írni, csak mesél.</li>
          <li>Ha túl sok az érdeklődő és gyors kvalifikáció kell.</li>
          <li>Ha segíteni akarod megfogalmazni a problémát.</li>
          <li>Ha ki akarod váltani a klasszikus Google Form + e-mail köröket.</li>
        </ul>
      </section>

      {/* FLOW */}
      <section className={s.section}>
        <h3>Hogyan működik?</h3>

        <div className={s.step}>
          <h4>1. Problémakör meghatározása</h4>
          <p>
            A user kiválasztja, milyen típusú projektben gondolkodik (kampány,
            AI UX, discovery, app/web redesign stb.).
          </p>
        </div>

        <div className={s.step}>
          <h4>2. Soft discovery</h4>
          <p>
            Az AI kérdez, visszamond, tisztáz. Nem űrlap, hanem természetes
            beszélgetés-szerű kérdések: célok, célcsoport, időkeret,
            budget-sáv, KPI-k, korábbi próbálkozások.
          </p>
        </div>

        <div className={s.step}>
          <h4>3. Projektprofil generálása</h4>
          <p>
            A rendszer a nyers szövegből strukturált projektprofilt készít:
            projekt típus, célok, kockázatok, ajánlott modulok, effort-szint,
            idősáv, következő lépés.
          </p>
        </div>
      </section>

      {/* AI BEHIND */}
      <section className={s.section}>
        <h3>Mi történik a háttérben?</h3>

        <ul className={s.list}>
          <li>NLP elemzi a szöveget, felismeri a kulcspontokat és a hiányosságokat.</li>
          <li>A rendszer struktúrált mezőket generál ajánlathoz és későbbi modulokhoz.</li>
          <li>Megbecsüli a munka nagyságrendjét és az effort-kategóriát.</li>
          <li>Javasolja a releváns portfóliómodulokat (Recommendation, Discovery, Offer Gen).</li>
        </ul>
      </section>

      {/* VALUE */}
      <section className={s.section}>
        <h3>Mit kap az ügyfél?</h3>

        <ul className={s.list}>
          <li>Nem kell briefet írnia: az AI elvégzi helyette.</li>
          <li>Már az első percekben kap egy érthető projektprofilt.</li>
          <li>Tisztán látja a célokat és a következő lépéseket.</li>
          <li>Minden későbbi beszélgetés strukturált alapra épül.</li>
        </ul>

        <h3>Mit bizonyít ez rólad?</h3>
        <ul className={s.list}>
          <li>Értesz az AI-guided onboarding tervezéséhez.</li>
          <li>Komplex döntési logikákat és UX flow-kat tudsz építeni.</li>
          <li>Rendszerben gondolkodsz, nem csak UI-ban.</li>
          <li>Modern, AI-vezérelt megközelítést alkalmazol.</li>
        </ul>
      </section>

      {/* CTA */}
      <footer className={s.cta}>
        <a href="#contact" className={s.ctaBtn}>
          Próbáld ki, hogyan térképezné fel az AI a te projektedet →
        </a>
      </footer>
    </section>
  );
}
