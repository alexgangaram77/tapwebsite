import { useEffect } from 'react'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Why from './components/Why/Why'
import Pricing from './components/Pricing/Pricing'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import styles from './TapSite.module.css'

function TapSite() {
  useEffect(() => {
    document.title = 'Tap — Digital NFC Cards'
  }, [])

  return (
    <main className={styles.app}>
      <Navigation />
      <Hero />
      <About />
      <Why />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

export default TapSite
