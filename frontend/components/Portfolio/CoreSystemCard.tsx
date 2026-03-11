import React from "react";
import type { CoreSystem } from "../../lib/portfolio/coreSystems";
import {
  portfolioCategories,
  type PortfolioCategoryId,
} from "../../lib/portfolio/portfolioCategories";
import s from "./CoreSystemCard.module.scss";

type Props = {
  system: CoreSystem;
  onCategorySelect?: (id: PortfolioCategoryId) => void;
};

export const CoreSystemCard: React.FC<Props> = ({
  system,
  onCategorySelect,
}) => {
  const categories = system.portfolioCategoryIds
    .map((id) => portfolioCategories.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <article className={s.card}>
      <div className={s.row1}>
        <div className={s.eyebrow}>Core system</div>
        <h3 className={s.title}>{system.title}</h3>
        <p className={s.description}>{system.shortDescription}</p>
      </div>

      <div className={s.detailsGrid}>
        {system.whatItEnables.length > 0 && (
          <div className={s.leftCol}>
            <div>
              <div className={s.sectionLabel}>What it enables</div>
              <ul className={s.list}>
                {system.whatItEnables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {system.systemHighlights && system.systemHighlights.length > 0 && (
              <div>
                <div className={s.sectionLabel}>Highlights</div>
                <ul className={s.list}>
                  {system.systemHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {categories.length > 0 && (
          <div>
            <div className={s.sectionLabel}>Underlying module categories</div>
            <div className={s.pillRow}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={s.categoryPill}
                  onClick={() => onCategorySelect?.(cat.id)}
                >
                  <span className={s.categoryDot} />
                  {cat.shortLabel}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {system.aiFacets && system.aiFacets.length > 0 && (
        <div className={s.twoColRow}>
          <div className={s.block}>
            <div className={s.sectionLabel}>AI modules</div>
            <div className={s.pillCol}>
              {system.aiFacets.map((facet) => (
                <span key={facet} className={s.facetPill}>
                  {facet}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

