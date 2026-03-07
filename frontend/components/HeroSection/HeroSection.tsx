import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.inner}>
        <p className={styles.kicker}>Freelance · AI UX flow integráció</p>

        <h1 className={styles.title}>
          AI-alapú UX folyamatok,
          <br />
          amik tényleg dolgoznak helyetted.
        </h1>

        <p className={styles.subtitle}>
          Olyan AI widgeteket és UX flow-kat tervezek, amelyek felmérik az
          ügyfeleid igényeit, ajánlatot adnak, és elkísérik a felhasználót a
          döntésig. Nem “még egy chatbot”, hanem konkrét folyamat, ami mérhető.
        </p>

        <p className={styles.howTo}>
          Használat: beszélj majd a chat asszisztenssel, nézd végig a munkákat,
          és ha érzed, hogy passzolunk, kérj egy projekt-briefet.
        </p>
      </div>
    </section>
  );
}
