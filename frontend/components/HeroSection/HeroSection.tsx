import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.inner}>
        <p className={styles.kicker}>Intro — What problems interest me</p>

        <h1 className={styles.title}>
          I’m primarily interested in architecture problems.
        </h1>

        <p className={styles.subtitle}>
          If a system isn’t properly structured, it quickly becomes difficult to
          understand and almost impossible to use effectively.
        </p>

        <p className={styles.subtitle}>
          One of the biggest challenges I see in many digital products is
          information discovery. Traditional interfaces assume the user already
          knows what they are looking for, but in reality that’s often not the
          case.
        </p>

        <p className={styles.subtitle}>
          I’m particularly interested in systems that help users navigate
          complex information spaces — especially when interaction, decision
          flows, or AI-assisted discovery can guide the process.
        </p>

        <h2 className={styles.sectionTitle}>How I think as a developer</h2>

        <p className={styles.subtitle}>
          When I approach a problem, my first instinct is to break it down into
          modules. Separating content, logic, and presentation is essential to
          keep systems understandable and extensible.
        </p>

        <p className={styles.subtitle}>
          I’m less interested in tweaking visual solutions to achieve a specific
          UI result. What I enjoy much more is designing the architecture behind
          the experience — the system that makes the interface work in a
          reliable and scalable way.
        </p>

        <p className={styles.subtitle}>
          I also value systems that are measurable, where user interaction can
          generate meaningful insights about how the product is actually used.
        </p>

        <h2 className={styles.sectionTitle}>What I like building</h2>

        <p className={styles.subtitle}>
          I enjoy building interactive systems where user decisions shape the
          experience.
        </p>

        <p className={styles.subtitle}>
          The systems that interest me most tend to combine three elements:
        </p>

        <ul className={styles.bulletList}>
          <li>
            content-driven structures where the behavior of the application is
            defined by structured data
          </li>
          <li>
            runtime decision logic where the experience adapts to user choices
          </li>
          <li>
            reusable engines that can power multiple experiences instead of a
            single static product
          </li>
        </ul>

        <p className={styles.subtitle}>
          These kinds of architectures make it possible to build products that
          are flexible, extensible, and capable of evolving over time.
        </p>

        <h2 className={styles.sectionTitle}>Direction</h2>

        <p className={styles.subtitle}>
          Currently I’m exploring the intersection of interactive systems,
          decision-driven UX, and AI-assisted interfaces.
        </p>

        <p className={styles.subtitle}>
          I’m particularly interested in systems where technology doesn’t just
          present information, but actively helps users navigate complex choices
          and discover relevant paths.
        </p>
      </div>
    </section>
  );
}
