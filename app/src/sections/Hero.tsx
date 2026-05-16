import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page load animation sequence
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        overlayRef.current,
        { opacity: 1 },
        { opacity: 0, duration: 0.8, ease: 'power2.inOut' }
      );

      // Hero image scale
      tl.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
        '-=0.6'
      );

      // Headline words animation
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        );
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );

      // Trust bar
      tl.fromTo(
        trustRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      );

      // Scroll parallax for the image
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          if (imageRef.current) {
            gsap.set(imageRef.current, {
              y: self.progress * 150,
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineText = 'أبواب تصنع الفرق';
  const words = headlineText.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', background: '#2A2927' }}
    >
      {/* Loading overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none"
        style={{ background: '#2A2927', opacity: 0 }}
      >
        <span className="font-display text-2xl" style={{ color: '#D4A853' }}>
          HM DOORS
        </span>
      </div>

      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0 }}
      >
        <img
          src="/images/hero-doors-panorama.jpg"
          alt="Luxury Italian Doors"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5) saturate(1.1)' }}
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(42,41,39,0.95) 0%, rgba(42,41,39,0.6) 40%, rgba(42,41,39,0.2) 70%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to left, rgba(42,41,39,0.7) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div
          className="mx-6 lg:mr-12 lg:ml-auto mb-16 lg:mb-20 p-8 lg:p-12 rounded-3xl max-w-[560px]"
          style={{
            background: 'rgba(42,41,39,0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-display leading-[0.95]"
            style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              color: '#F4EDE4',
              letterSpacing: '-2px',
            }}
          >
            {words.map((word, i) => (
              <span key={i} className="word inline-block mr-3">
                {word}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-heading italic mt-5"
            style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#D4A853' }}
          >
            صناعة إيطالية. خشب عتيق. تصميم يدوم جيلًا.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 mt-8">
            <a
              href="#products"
              className="font-body font-medium text-base rounded-full px-9 py-3.5 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: '#D4A853',
                color: '#2A2927',
              }}
            >
              تصفح المجموعة
            </a>
            <a
              href="#features"
              className="font-body font-medium text-base rounded-full px-9 py-3.5 border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: 'rgba(244,237,228,0.3)',
                color: '#F4EDE4',
                background: 'transparent',
              }}
            >
              شاهد العملية
            </a>
          </div>

          {/* Trust bar */}
          <div ref={trustRef} className="flex flex-wrap gap-6 mt-8">
            {[
              'متابعة طلبك',
              'ضمان 25 سنة',
              'خدمة صانعي الأبواب',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7.5" stroke="#D4A853" strokeWidth="1" />
                  <path d="M4.5 8.5L7 11L11.5 5.5" stroke="#D4A853" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-body text-sm" style={{ color: '#999' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
