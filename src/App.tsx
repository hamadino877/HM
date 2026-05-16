import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Showcase from './sections/Showcase';
import Features from './sections/Features';
import Finishes from './sections/Finishes';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    let lenis: any = null;
    let rafId: number;

    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          lerp: 0.1,
          duration: 1.2,
          smoothWheel: true,
          syncTouch: true,
        });

        lenis.on('scroll', () => {
          ScrollTrigger.update();
        });

        const raf = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch (e) {
        console.warn('Lenis not available, using native scroll');
      }
    };

    initLenis();

    // Refresh ScrollTrigger on load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      if (lenis) lenis.destroy();
      if (rafId) cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative" style={{ background: '#2A2927' }}>
      <Navigation />
      <Hero />
      <Products />
      <Showcase />
      <Features />
      <Finishes />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
