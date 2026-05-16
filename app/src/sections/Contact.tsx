import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = contentRef.current?.children;
      if (!els) return;
      gsap.fromTo(
        els,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-32 lg:py-40"
      style={{ background: '#2A2927' }}
    >
      <div className="max-w-[800px] mx-auto px-5 lg:px-12 text-center">
        <div ref={contentRef}>
          {/* Watermark */}
          <span
            className="font-display block mb-8"
            style={{
              fontSize: '14px',
              color: '#D4A853',
              letterSpacing: '6px',
              opacity: 0.4,
            }}
          >
            HM DOORS
          </span>

          {/* Headline */}
          <h2
            className="font-display leading-[0.95]"
            style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              color: '#F4EDE4',
              letterSpacing: '-2px',
            }}
          >
            ابدأ بابك التالي
          </h2>

          {/* Body */}
          <p
            className="font-body mt-6 mx-auto max-w-xl"
            style={{
              fontSize: '18px',
              color: 'rgba(244,237,228,0.7)',
              lineHeight: 1.7,
            }}
          >
            سواء كنت مهندسًا يخطط لمشروع ضخم أو صاحب منزل يجدد غرفة واحدة — فريقنا جاهز لمساعدتك
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-block font-body font-medium text-lg rounded-full px-12 py-4 mt-10 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: '#D4A853',
              color: '#2A2927',
              boxShadow: '0 12px 48px rgba(212,168,83,0.35)',
            }}
          >
            احصل على عرض
          </a>

          {/* Phone */}
          <p className="font-body text-sm mt-5" style={{ color: '#999' }}>
            أو اتصل بنا مباشرة:{' '}
            <a
              href="tel:0096650XXXXXX"
              className="transition-all duration-300 hover:underline"
              style={{ color: '#D4A853' }}
            >
              00966-50-XXX-XXXX
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
