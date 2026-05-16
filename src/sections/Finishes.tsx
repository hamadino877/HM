import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const finishes = [
  { id: 'oak', name: 'باب إيطالي', image: '/images/finish-oak.jpg', desc: 'خشب أصيل بملمس طبيعي' },
  { id: 'walnut', name: 'جوزي داكن', image: '/images/finish-walnut.jpg', desc: 'أناقة الجوز العميق' },
  { id: 'painted', name: 'أبيض لؤلؤي', image: '/images/finish-painted.jpg', desc: 'تشطيب دهاني ناصع' },
  { id: 'stained', name: 'لون مخصص', image: '/images/finish-stained.jpg', desc: 'صبغة حسب ذوقك' },
];

export default function Finishes() {
  const [activeFinish, setActiveFinish] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        galleryRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: galleryRef.current, start: 'top 75%' },
        }
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.finish-card');
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 75%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="finishes"
      className="relative w-full py-24 lg:py-32"
      style={{ background: '#2A2927' }}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <span
            className="font-body text-sm font-medium"
            style={{ color: '#D4A853', letterSpacing: '2px' }}
          >
            التشطيبات
          </span>
          <h2
            className="font-display mt-3"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              color: '#F4EDE4',
              letterSpacing: '-1.5px',
            }}
          >
            ثروة من الخيارات
          </h2>
          <p
            className="font-body mt-4 mx-auto max-w-xl"
            style={{ fontSize: '18px', color: 'rgba(244,237,228,0.7)', lineHeight: 1.7 }}
          >
            نحن نحول من خشب بجودة عالية حتي الدهانات الفاخرة لتستمتع بأفضل تجربة — اختم بابك بلمسة تكمّل تصميمك
          </p>
        </div>

        {/* Main Gallery */}
        <div ref={galleryRef} className="relative mb-12">
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '21/9' }}>
            {finishes.map((finish, idx) => (
              <div
                key={finish.id}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: idx === activeFinish ? 1 : 0 }}
              >
                <img
                  src={finish.image}
                  alt={finish.name}
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.7)' }}
                />
              </div>
            ))}

            {/* Overlay gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(42,41,39,0.8) 0%, transparent 50%)',
              }}
            />

            {/* Floating label */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#D4A853' }} />
              <span
                className="font-body text-sm px-4 py-2 rounded-lg"
                style={{
                  background: 'rgba(42,41,39,0.8)',
                  backdropFilter: 'blur(8px)',
                  color: '#D4A853',
                }}
              >
                {finishes[activeFinish].name}
              </span>
            </div>
          </div>
        </div>

        {/* Finish Cards */}
        <div ref={cardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {finishes.map((finish, idx) => (
            <button
              key={finish.id}
              onClick={() => setActiveFinish(idx)}
              className="finish-card rounded-xl overflow-hidden transition-all duration-300 text-right"
              style={{
                border: idx === activeFinish ? '2px solid #D4A853' : '2px solid rgba(244,237,228,0.06)',
                background: '#3D3B38',
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={finish.image}
                  alt={finish.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="font-body text-base font-medium" style={{ color: '#F4EDE4' }}>
                  {finish.name}
                </h4>
                <p className="font-body text-sm mt-1" style={{ color: '#999' }}>
                  {finish.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
