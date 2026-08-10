import Card from "../Card/Card";
import styles from "./Why.module.css";
import instantImage from "../../assets/why/instant.jpg";
import noAppImage from "../../assets/why/noapp.jpg";
import alwaysCurrentImage from "../../assets/why/alwayscurrent.jpg";
import lessWasteImage from "../../assets/why/lesswaste.jpg";

const reasons = [
  {
    image: instantImage,
    title: "Instant.",
    description: "Hassle-free. Quick. No delay.",
  },
  {
    image: alwaysCurrentImage,
    title: "Always current.",
    description:
      "Your information will change as you go along. So will your card.",
  },
  {
    image: noAppImage,
    title: "No app.",
    description: "Running out of storage? Worry not.",
  },
  {
    image: lessWasteImage,
    title: "Less waste.",
    description: "You know they will toss that paper card anyway.",
  },
];

function Why() {
  return (
    <section className={styles.why} id="why" aria-labelledby="why-title">
      <div className={styles.heading}>
        <p>Why?</p>
        <h2 id="why-title">
          Why digital is the best way to share your contact.
        </h2>
      </div>

      <div className={styles.scroller} aria-label="Why choose a digital card">
        <div className={styles.track}>
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className={styles.desktopCard}
              image={reason.image}
              title={reason.title}
              description={reason.description}
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

export default Why;
