import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styles from './HomeSite.module.css'

function HomeSite() {
  useEffect(() => {
    document.title = 'Project Xela — Coming Soon'
  }, [])

  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />

      <section className={styles.content} aria-labelledby="coming-soon-title">
        <img className={styles.logo} src={logo} alt="Project Xela" />
        <p className={styles.eyebrow}>Project Xela</p>
        <h1 id="coming-soon-title">Coming soon.</h1>
        <p className={styles.description}>
          We’re building something thoughtful. In the meantime, discover our
          digital NFC cards.
        </p>
        <Link className={styles.cta} to="/tap">
          Explore Tap
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <p className={styles.footer}>Trinidad &amp; Tobago · Tampa, Florida</p>
    </main>
  )
}

export default HomeSite
