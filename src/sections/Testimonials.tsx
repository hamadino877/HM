import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'أبواب HM حوّلت مشروعي. الجودة تفوق الوصف — والخدمة كانت لا مثيل لها.',
    name: 'سارة العتيبي',
    role: 'مهندسة داخلية',
    initial: 'س',
  },
  {
    quote: 'منذ 10 سنوات وأنا أعمل معهم. الضمان ليس مجرد وعد — إنه التزام.',
    name: 'محمد القحطاني',
    role: 'مقاول',
    initial: 'م',
  },
  {
    quote: 'باب الحظيرة المخصص كان بالضبط كما تصورته. العملية كانت سلسة من البداية للنهاية.',
    name: 'نورة السبيعي',
    role: 'صاحبة منزل',
    initial: 'ن',
  },
  {
    quote: 'أرشحهم لكل عملائي. الاحترافية والحرفية في أعلى مستوياتها.',
    name: 'أحمد المالكي',
    role: 'مصمم داخلي',
    initial: 'أ',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      gsap.fromTo(
        cardsContainerRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: cardsContainerRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const visibleCards = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32"
      style={{ background: '#F4EDE4' }}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <span
            className="font-body text-sm font-medium"
            style={{ color: '#C4965A', letterSpacing: '2px' }}
          >
            آراء العملاء
          </span>
          <h2
            className="font-display mt-3"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              color: '#2A2927',
              letterSpacing: '-1.5px',
            }}
          >
            ثقة تُكتسب
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleCards.map((t, i) => (
            <div
              key={`${activeIndex}-${i}`}
              className="rounded-[20px] p-10 transition-all duration-500"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(42,41,39,0.08)',
              }}
            >
              {/* Quote mark */}
              <span
                className="font-display block leading-none"
                style={{ fontSize: '48px', color: '#D4A853', lineHeight: 0.5 }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className="font-body italic mt-4"
                style={{
                  fontSize: '18px',
                  color: '#2A2927',
                  lineHeight: 1.7,
                }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-8">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium"
                  style={{ background: '#F4EDE4', color: '#D4A853' }}
                >
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-body text-base font-semibold" style={{ color: '#2A2927' }}>
                    {t.name}
                  </h4>
                  <p className="font-body text-sm" style={{ color: '#999' }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: idx === activeIndex ? '#D4A853' : 'rgba(42,41,39,0.2)',
                transform: idx === activeIndex ? 'scale(1.2)' : 'scale(1)',
              }}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
