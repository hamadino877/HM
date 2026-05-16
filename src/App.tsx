import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import FeaturesStrip from './sections/FeaturesStrip'
import Products from './sections/Products'
import HPLSection from './sections/HPLSection'
import MelamineSection from './sections/MelamineSection'
import About from './sections/About'
import Colors from './sections/Colors'
import SocialMedia from './sections/SocialMedia'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.1 })

    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(r => observer.observe(r))

    const handleScroll = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        if (window.scrollY > 80) {
          nav.classList.add('nav-scrolled')
        } else {
          nav.classList.remove('nav-scrolled')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="noise-overlay min-h-[100dvh] bg-[hsl(var(--dark-1))] text-[hsl(var(--cream))]">
      <Navbar />
      <Hero />
      <Marquee />
      <FeaturesStrip />
      <Products />
      <HPLSection />
      <MelamineSection />
      <About />
      <Colors />
      <SocialMedia />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
