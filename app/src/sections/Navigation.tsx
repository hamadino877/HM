import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const links = [
    { label: 'الأبواب', href: '#products' },
    { label: 'الأنواع', href: '#showcase' },
    { label: 'المميزات', href: '#features' },
    { label: 'التشطيبات', href: '#finishes' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: '-100%' },
        { y: '0%', duration: 0.5, ease: 'power3.inOut' }
      );
      const items = mobileMenuRef.current.querySelectorAll('.mobile-link');
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, delay: 0.2, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [mobileOpen]);

  const handleCloseMobile = () => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        y: '-100%',
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => setMobileOpen(false),
      });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? 'rgba(42,41,39,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
          {/* Logo */}
          <a href="#" className="font-display text-lg tracking-wide" style={{ color: '#D4A853' }}>
            HM DOORS
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium transition-colors duration-300 hover:text-[#D4A853]"
                style={{ color: '#F4EDE4', letterSpacing: '0.5px' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-block font-body text-sm font-medium rounded-full px-6 py-2.5 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: '#D4A853',
              color: '#2A2927',
            }}
          >
            احصل على عرض
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5" style={{ background: '#F4EDE4' }} />
            <span className="block w-6 h-0.5" style={{ background: '#F4EDE4' }} />
            <span className="block w-4 h-0.5" style={{ background: '#F4EDE4' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
          style={{ background: '#2A2927' }}
        >
          <button
            className="absolute top-6 left-6 p-2"
            onClick={handleCloseMobile}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4EDE4" strokeWidth="2">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>

          <div className="flex flex-col items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-link font-heading text-4xl transition-colors duration-300 hover:text-[#D4A853]"
                style={{ color: '#F4EDE4' }}
                onClick={handleCloseMobile}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mobile-link font-body text-lg font-medium rounded-full px-8 py-3 mt-4"
              style={{ background: '#D4A853', color: '#2A2927' }}
              onClick={handleCloseMobile}
            >
              احصل على عرض
            </a>
          </div>
        </div>
      )}
    </>
  );
}
