import styles from './Pricing.module.css'
import ContactChoice from '../ContactChoice/ContactChoice'

const plans = [
  {
    name: 'Monthly',
    price: '$12',
    cadence: '/ month',
    description: 'For a card that changes whenever you do.',
    features: [
      'Your digital NFC card',
      'Unlimited contact updates',
      'No fees when details change',
      'Ongoing profile access',
    ],
    cta: 'Choose monthly',
    message:
      'Hello, I would like to order one of the NFC digital cards. I would like to do monthly.',
    featured: true,
  },
  {
    name: 'One time',
    price: '$49',
    cadence: ' once',
    description: 'Buy it once and keep your details exactly as they are.',
    features: [
      'Your digital NFC card',
      'One contact profile setup',
      '$9 per future update',
      'No recurring payment',
    ],
    cta: 'Pay once',
    message:
      'Hello, I would like to order one of the NFC digital cards. I would like to do one-time payment.',
    featured: false,
  },
]

function Pricing() {
  return (
    <section className={styles.pricing} id="order" aria-labelledby="pricing-title">
      <div className={styles.heading}>
        <p>Pricing</p>
        <h2 id="pricing-title">A card you'd love. A price you'd love.</h2>
      </div>

      <div className={styles.plans}>
        {plans.map((plan) => (
          <article
            className={`${styles.plan} ${plan.featured ? styles.featured : ''}`}
            key={plan.name}
          >
            <div className={styles.planHeader}>
              <p className={styles.planName}>{plan.name}</p>
              {plan.featured && <span className={styles.badge}>Most flexible</span>}
            </div>

            <p className={styles.price}>
              <strong>{plan.price}</strong>
              <span>{plan.cadence}</span>
            </p>
            <p className={styles.planDescription}>{plan.description}</p>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span aria-hidden="true">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <ContactChoice message={plan.message}>{plan.cta}</ContactChoice>
          </article>
        ))}
      </div>

      <p className={styles.note}>Placeholder pricing shown. Final pricing coming soon.</p>
    </section>
  )
}

export default Pricing
