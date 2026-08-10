import tapImage from "../../../../assets/about/tap.jpg";
import openImage from "../../../../assets/about/open.jpg";
import connectImage from "../../../../assets/about/connect.jpg";
import saveImage from "../../../../assets/about/save.jpg";
import Card from "../Card/Card";
import styles from "./About.module.css";

const steps = [
  {
    image: tapImage,
    title: "Tap.",
    description: "On the back or front. No pun intended.",
  },
  {
    image: openImage,
    title: "Open.",
    description: "The notification appears on your home screen.",
  },
  {
    image: connectImage,
    title: "Connect.",
    description: "Anywhere, anytime. Even when you are in a hurry.",
  },
  {
    image: saveImage,
    title: "Save.",
    description: "Forever. On any modern device. No app required.",
  },
];

function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Simple by design</p>
        <h2 id="about-title">Introduce yourself</h2>
      </div>

      <div
        className={styles.scroller}
        id="how"
        aria-label="How the Tap card works"
      >
        <div className={styles.track}>
          {steps.map((step) => (
            <Card
              key={step.title}
              className={styles.desktopCard}
              image={step.image}
              title={step.title}
              description={step.description}
            />
          ))}
          <div className={styles.endSpace} aria-hidden="true" />
        </div>
      </div>

      <div className={styles.hint} aria-hidden="true">
        <span>Swipe to explore</span>
        <i>→</i>
      </div>
    </section>
  );
}

export default About;
