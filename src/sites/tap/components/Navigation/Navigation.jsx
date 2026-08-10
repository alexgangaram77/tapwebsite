import { useEffect, useRef, useState } from 'react'
import logo from '../../../../assets/logo.svg'
import ContactChoice from '../ContactChoice/ContactChoice'
import styles from './Navigation.module.css'

function Navigation() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const isMenuOpenRef = useRef(false)
  const hideTimeoutRef = useRef(null)
  const scrollDirectionRef = useRef(null)
  const scrollDistanceRef = useRef(0)

  const closeMenu = () => {
    isMenuOpenRef.current = false
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => {
      isMenuOpenRef.current = !isOpen
      return !isOpen
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY.current
      const direction = scrollDelta < 0 ? 'up' : 'down'

      if (direction !== scrollDirectionRef.current) {
        scrollDirectionRef.current = direction
        scrollDistanceRef.current = Math.abs(scrollDelta)
      } else {
        scrollDistanceRef.current += Math.abs(scrollDelta)
      }

      if (currentScrollY < 24) {
        window.clearTimeout(hideTimeoutRef.current)
        hideTimeoutRef.current = null
        setIsVisible(true)
        scrollDistanceRef.current = 0
      } else if (direction === 'up' && scrollDistanceRef.current >= 40) {
        window.clearTimeout(hideTimeoutRef.current)
        hideTimeoutRef.current = null
        setIsVisible(true)
        scrollDistanceRef.current = 0
      } else if (
        direction === 'down' &&
        scrollDistanceRef.current >= 12 &&
        isMenuOpenRef.current
      ) {
        closeMenu()
        hideTimeoutRef.current = window.setTimeout(() => {
          setIsVisible(false)
          hideTimeoutRef.current = null
        }, 550)
        scrollDistanceRef.current = 0
      } else if (
        direction === 'down' &&
        scrollDistanceRef.current >= 12 &&
        !hideTimeoutRef.current
      ) {
        setIsVisible(false)
        scrollDistanceRef.current = 0
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.clearTimeout(hideTimeoutRef.current)
    }
  }, [])

  const navigationClassName = [
    styles.navigation,
    isVisible ? '' : styles.hidden,
    isMenuOpen ? styles.open : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <nav className={navigationClassName} aria-label="Primary navigation">
      <a className={styles.logoLink} href="#home" aria-label="Home">
        <img className={styles.logo} src={logo} alt="" />
      </a>

      <button
        className={styles.menuButton}
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="navigation-links"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={toggleMenu}
      >
        <span />
        <span />
      </button>

      <div className={styles.links} id="navigation-links">
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#why" onClick={closeMenu}>
          Why
        </a>
        <a href="#faq" onClick={closeMenu}>
          FAQs
        </a>
        <ContactChoice
          className={styles.cta}
          message="Hello, I would like to order one of the NFC digital cards."
          onClick={closeMenu}
        >
          Order now
        </ContactChoice>
      </div>
    </nav>
  )
}

export default Navigation
