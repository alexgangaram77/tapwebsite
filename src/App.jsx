import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Why from './components/Why/Why'
import Pricing from './components/Pricing/Pricing'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
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

export default App
