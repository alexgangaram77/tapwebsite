import { useState } from "react";
import styles from "./FAQ.module.css";

const questions = [
  {
    question: "How does the Tap card work?",
    answer:
      "Hold the card near a compatible smartphone. A notification appears and opens your digital contact profile—no app required.",
  },
  {
    question: "Which phones are compatible?",
    answer:
      "Tap works with most modern iPhone and Android devices that support NFC. Older devices can still access your profile through a QR code.",
  },
  {
    question: "Does the other person need an app?",
    answer:
      "No. Your profile opens directly in their browser, so anyone can view and save your information without downloading anything.",
  },
  {
    question: "Can I change my information later?",
    answer:
      "Yes. Monthly members can make unlimited changes. One-time customers can request an update for the listed per-change fee.",
  },
  {
    question: "What can I share on my profile?",
    answer:
      "You can share contact details, social links, websites, and the other information you want people to remember.",
  },
  {
    question: "Does the card need to be charged?",
    answer:
      "Never. The NFC chip is passive, has no battery, and is ready to share whenever you are.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <section className={styles.faq} id="faq" aria-labelledby="faq-title">
      <div className={styles.heading}>
        <p>FAQs</p>
        <h2 id="faq-title">Questions, answered.</h2>
      </div>

      <div className={styles.list}>
        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <article className={styles.item} key={item.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleQuestion(index)}
                >
                  <span>{item.question}</span>
                  <i aria-hidden="true" />
                </button>
              </h3>

              <div
                className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                id={answerId}
                aria-hidden={!isOpen}
              >
                <div>
                  <p>{item.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
