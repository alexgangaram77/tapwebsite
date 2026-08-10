import logo from '../../assets/logo.svg'
import styles from './Footer.module.css'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Why', href: '#why' },
  { label: 'Pricing', href: '#order' },
  { label: 'FAQs', href: '#faq' },
]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="#home" aria-label="Tap home">
            <img src={logo} alt="Tap" />
          </a>
          <p>A better way to introduce yourself.</p>
        </div>

        <div className={styles.column}>
          <h2>Explore</h2>
          <nav aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.column}>
          <h2>Find us</h2>
          <address>
            <span>Trinidad &amp; Tobago</span>
            <span>Tampa, Florida</span>
          </address>
        </div>

        <div className={styles.column}>
          <h2>Follow</h2>
          <div className={styles.socials}>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Tap. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
