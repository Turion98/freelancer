"use client";

import { usePathname } from "next/navigation";
import { getFreelanceNavItems, isFreelanceSubpage } from "./FreelanceHeaderNavConfig";
import styles from "./FreelanceHeader.module.scss";

export function FreelanceHeader() {
  const pathname = usePathname();
  const navItems = getFreelanceNavItems(pathname);
  const isSubpage = isFreelanceSubpage(pathname);

  const logoContent = (
    <>
      <span className={styles.logoMark}>AI</span>
      <span className={styles.logoText}>UX flow & automation</span>
    </>
  );

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoBlock}>
          {isSubpage ? (
            <a href="/freelance" className={styles.logoLink}>
              {logoContent}
            </a>
          ) : (
            logoContent
          )}
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
