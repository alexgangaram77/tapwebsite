import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import logo from '../../assets/logo.svg'
import ContactChoice from '../ContactChoice/ContactChoice'
import styles from './Hero.module.css'

function Hero() {
  const heroRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  })

  const copyOpacity = useTransform(progress, [0, 0.25, 0.48], [1, 1, 0.18])
  const copyY = useTransform(progress, [0, 0.48], [0, -48])
  const cardY = useTransform(progress, [0, 0.35, 1], [56, 8, -32])
  const cardRotateX = useTransform(progress, [0, 0.65, 1], [12, 2, -5])
  const cardRotateY = useTransform(progress, [0, 0.55, 1], [-18, -5, 8])
  const cardRotateZ = useTransform(progress, [0, 1], [-4, 2])
  const cardScale = useTransform(progress, [0, 0.65, 1], [0.92, 1.04, 0.98])
  const targetScale = useTransform(progress, [0.45, 0.72, 1], [0.75, 1.12, 1])
  const targetOpacity = useTransform(progress, [0.35, 0.65, 1], [0, 0.8, 0.3])

  const cardMotion = prefersReducedMotion
    ? undefined
    : {
        y: cardY,
        rotateX: cardRotateX,
        rotateY: cardRotateY,
        rotateZ: cardRotateZ,
        scale: cardScale,
      }

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      <div className={styles.stickyScene}>
        <motion.div
          className={styles.copy}
          style={prefersReducedMotion ? undefined : { opacity: copyOpacity, y: copyY }}
        >
          <h1>
            Tap once.<br />
            <span>Saved forever.</span>
          </h1>
          <p className={styles.intro}>
            Share who you are in an instant. No app, no paper, no friction—just
            one beautifully simple tap.
          </p>
          <div className={styles.actions}>
            <ContactChoice
              className={styles.primaryAction}
              message="Hello, I would like to order one of the NFC digital cards."
            >
              Order now
            </ContactChoice>
            <a className={styles.secondaryAction} href="#how">See how it works</a>
          </div>
        </motion.div>

        <div className={styles.visual} aria-label="Animated digital NFC card demonstration">
          <motion.div
            className={styles.tapTarget}
            style={
              prefersReducedMotion
                ? undefined
                : { opacity: targetOpacity, scale: targetScale }
            }
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </motion.div>

          <motion.article className={styles.card} style={cardMotion}>
            <img className={styles.cardLogo} src={logo} alt="Tap" />
            <svg className={styles.nfcIcon} viewBox="0 0 24 24" aria-label="Contactless enabled">
              <path d="M7.5 8.5a5 5 0 0 1 0 7M10.5 6a8.5 8.5 0 0 1 0 12M13.5 3.5a12 12 0 0 1 0 17" />
            </svg>
          </motion.article>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span>Scroll to tap</span>
          <i />
        </div>
      </div>
    </section>
  )
}

export default Hero
