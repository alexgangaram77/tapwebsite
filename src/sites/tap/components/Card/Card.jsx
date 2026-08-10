import styles from "./Card.module.css";

function Card({ image, title, description, className = "" }) {
  return (
    <article
      className={`${styles.card} ${className}`.trim()}
      style={{ "--card-background-image": `url(${image})` }}
    >
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default Card;
