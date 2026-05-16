import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" />
        <path d="M24 24l8-4.5" />
        <path d="M16 19.5L24 24" />
        <path d="M24 24V34" />
        <circle cx="24" cy="24" r="3" fill="#D4A853" fillOpacity="0.2" />
      </svg>
    ),
    title: '25 سنة ضمان',
    body: 'كل باب يُصنع ليدوم. نضمن ذلك بضمان شامل لربع قرن — أطول فترة في القطاع.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="36" height="28" rx="4" />
        <path d="M6 18h36" />
        <circle cx="16" cy="14" r="1.5" fill="#D4A853" />
        <circle cx="22" cy="14" r="1.5" fill="#D4A853" />
        <path d="M14 28l4 4 8-8" />
      </svg>
    ),
    title: 'متابعة طلبك',
    body: 'ادخل رقم طلبك واحصل على تحديثات فورية عن كل مرحلة من الإنتاج حتى التوصيل.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="8" />
        <path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" />
        <path d="M30 16l2-2" />
        <path d="M16 16l-2-2" />
      </svg>
    ),
    title: 'خدمة الصانعين',
    body: 'مهندسونا الداخليون وخبراءنا الفنيون يقفون بجانبك من المفهوم الأول إلى التركيب النهائي.',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bannerRef = useRef<HTMLDivElement>(null);

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

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 75%' },
            delay: i * 0.15,
          }
        );
      });

      gsap.fromTo(
        bannerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: bannerRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative w-full py-24 lg:py-32"
      style={{ background: '#2A2927' }}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div ref={headerRef}>
          <span
            className="font-body text-sm font-medium"
            style={{ color: '#D4A853', letterSpacing: '2px' }}
          >
            لماذا نحن
          </span>
          <h2
            className="font-display mt-3"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              color: '#F4EDE4',
              letterSpacing: '-1.5px',
            }}
          >
            صناعة تتجاوز التوقعات
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="rounded-[20px] p-10 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#3D3B38',
                border: '1px solid rgba(244,237,228,0.06)',
              }}
            >
              <div>{feature.icon}</div>
              <h3
                className="font-body text-[22px] font-semibold mt-6"
                style={{ color: '#F4EDE4' }}
              >
                {feature.title}
              </h3>
              <p
                className="font-body text-base mt-3"
                style={{ color: 'rgba(244,237,228,0.7)', lineHeight: 1.6 }}
              >
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          ref={bannerRef}
          className="mt-20 rounded-2xl p-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6"
          style={{ background: '#3D3B38' }}
        >
          <p
            className="font-heading italic text-center lg:text-right"
            style={{ fontSize: 'clamp(24px, 3vw, 32px)', color: '#F4EDE4' }}
          >
            جاهز لتحويل مساحتك؟
          </p>
          <a
            href="#contact"
            className="font-body font-medium text-base rounded-full px-9 py-3.5 transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
            style={{ background: '#D4A853', color: '#2A2927' }}
          >
            احصل على عرض
          </a>
        </div>
      </div>
    </section>
  );
}
