import styles from "./FreelanceHeader.module.scss";

export function FreelanceHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoBlock}>
          <span className={styles.logoMark}>AI</span>
          <span className={styles.logoText}>UX flow & automation</span>
        </div>

        <nav className={styles.nav}>
          <a href="#work" className={styles.navLink}>
            Munkák
          </a>
          <a href="#about" className={styles.navLink}>
            Rólam
          </a>
          <a href="#contact" className={styles.navLink}>
            Kapcsolat
          </a>
        </nav>
      </div>
    </header>
  );
}
