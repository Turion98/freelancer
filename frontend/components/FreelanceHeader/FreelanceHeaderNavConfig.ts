/**
 * Shared nav config for the freelance header.
 * Landing: section anchors. Subpages: back to home + in-document section navigation.
 */

export type FreelanceNavItem = {
  href: string;
  label: string;
};

export const landingNavItems: FreelanceNavItem[] = [
  { href: "#work", label: "Munkák" },
  { href: "#about", label: "Rólam" },
  { href: "#contact", label: "Kapcsolat" },
];

/** Subpage: reduced in-document section anchors. Back to home is on the header logo (left side). */
export const subpageNavItems: FreelanceNavItem[] = [
  { href: "#module-hero", label: "Top" },
  { href: "#section-overview", label: "Overview" },
  { href: "#section-diagrams", label: "Architecture" },
  { href: "#section-flow", label: "Flow" },
  { href: "#section-outcome", label: "Outcome" },
  { href: "#section-related", label: "Related" },
];

const FREELANCE_LANDING_PATH = "/freelance";

/**
 * Returns the nav items to show based on the current pathname.
 * - Exactly the freelance landing route → landing nav (Munkák, Rólam, Kapcsolat).
 * - Any other /freelance/... route (subpage) → subpage nav (document section anchors). Logo links to landing.
 * Scalable: any future subpage under /freelance/ automatically gets the same subpage nav.
 */
export function getFreelanceNavItems(pathname: string | null): FreelanceNavItem[] {
  if (!pathname) return landingNavItems;
  const normalized = pathname.replace(/\/$/, "") || "/";
  if (normalized === FREELANCE_LANDING_PATH) return landingNavItems;
  if (pathname.startsWith(`${FREELANCE_LANDING_PATH}/`)) return subpageNavItems;
  return landingNavItems;
}

/** True when on a /freelance/... subpage (not the landing). Use to make header logo link to landing. */
export function isFreelanceSubpage(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname.startsWith(`${FREELANCE_LANDING_PATH}/`);
}
