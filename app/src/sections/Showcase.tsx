import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    title: 'الأناقة البسيطة',
    body: 'سطح مستوٍ نظيف — يبرز جمال الخشب الطبيعي. خيارك الأمثل للتصميم المعاصر.',
    specs: 'باب خشب | حشوة صلبة | سماكة 44 ملم',
    align: 'right',
  },
  {
    title: 'جمال كل حبة',
    body: 'خطوط قطريّة رشيقة على سطح خشبيّ نقيّ. يجمع بين الحداثة والدفء.',
    specs: 'تشطيب نفق UV | مقاوم للخدش | 5 سنوات ضمان',
    align: 'left',
  },
  {
    title: 'تصميم مخصص',
    body: 'أخبرنا بالحجم والتصميم واللون. نحول رؤيتك إلى باب يدوم أجيالًا.',
    specs: '',
    align: 'right',
  },
];

const images = [
  '/images/flush-door-1.jpg',
  '/images/flush-door-2.jpg',
  '/images/flush-door-3.jpg',
];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the sticky container
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: containerRef.current,
        pinSpacing: false,
      });

      // Scroll-driven image morph and content
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;

          // Update progress indicator
          if (progressRef.current && dotRef.current) {
            gsap.set(dotRef.current, { y: progress * 40 });
          }

          // Determine phase
          let phase = 0;
          if (progress > 0.66) phase = 2;
          else if (progress > 0.33) phase = 1;

          // Show/hide cards
          cardRefs.current.forEach((card, i) => {
            if (!card) return;
            if (i === phase) {
              gsap.to(card, { opacity: 1, y: 0, duration: 0.3 });
            } else {
              gsap.to(card, { opacity: 0, y: 20, duration: 0.3 });
            }
          });

          // Crossfade images
          imageRefs.current.forEach((img, i) => {
            if (!img) return;
            const imgProgress = progress * 2; // 0-2 range
            let opacity = 0;
            if (i === 0) opacity = 1 - Math.min(imgProgress, 1);
            else if (i === 1) opacity = Math.max(0, Math.min(imgProgress, 1)) - Math.max(0, imgProgress - 1);
            else if (i === 2) opacity = Math.max(0, imgProgress - 1);
            gsap.to(img, { opacity: Math.max(0, Math.min(1, opacity)), duration: 0.3 });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative"
      style={{ minHeight: '300vh', background: '#2A2927' }}
    >
      {/* Sticky container */}
      <div
        ref={containerRef}
        className="w-full h-screen relative overflow-hidden"
      >
        {/* Background images */}
        {images.map((img, idx) => (
          <div
            key={idx}
            ref={(el) => { imageRefs.current[idx] = el; }}
            className="absolute inset-0"
            style={{ opacity: idx === 0 ? 1 : 0 }}
          >
            <img
              src={img}
              alt={`Door showcase ${idx + 1}`}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.45) saturate(1.05)' }}
            />
          </div>
        ))}

        {/* Gradient overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(42,41,39,0.7) 0%, rgba(42,41,39,0.3) 50%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgba(42,41,39,0.5) 0%, transparent 50%)',
          }}
        />

        {/* Phase cards */}
        {phases.map((phase, idx) => (
          <div
            key={idx}
            ref={(el) => { cardRefs.current[idx] = el; }}
            className="absolute top-[15%] z-10 max-w-[400px] lg:max-w-[480px]"
            style={{
              opacity: idx === 0 ? 1 : 0,
              [phase.align === 'left' ? 'left' : 'right']: '48px',
            }}
          >
            <h2
              className="font-display leading-[0.95]"
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                color: '#F4EDE4',
                letterSpacing: '-1.5px',
              }}
            >
              {phase.title}
            </h2>
            <p
              className="font-body mt-5"
              style={{
                fontSize: '18px',
                color: 'rgba(244,237,228,0.85)',
                lineHeight: 1.7,
              }}
            >
              {phase.body}
            </p>
            {phase.specs && (
              <p className="font-body text-sm mt-4" style={{ color: '#D4A853' }}>
                {phase.specs}
              </p>
            )}
            {idx === 2 && (
              <a
                href="#contact"
                className="inline-block font-body font-medium rounded-full px-9 py-3.5 mt-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#D4A853', color: '#2A2927' }}
              >
                ابدأ مشروعك
              </a>
            )}
          </div>
        ))}

        {/* Scroll indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          <div
            ref={progressRef}
            className="relative w-0.5 h-[60px] rounded-full"
            style={{ background: 'rgba(212,168,83,0.4)' }}
          >
            <div
              ref={dotRef}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
              style={{ background: '#D4A853' }}
            />
          </div>
          <span
            className="font-body text-[11px] whitespace-nowrap"
            style={{
              color: 'rgba(212,168,83,0.6)',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            مرر للاستكشاف
          </span>
        </div>
      </div>
    </section>
  );
}
