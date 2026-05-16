import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Category {
  id: string;
  name: string;
  images: string[];
}

const categories: Category[] = [
  {
    id: 'flush',
    name: 'الأبواب المصفحة',
    images: ['/images/flush-door-1.jpg', '/images/flush-door-2.jpg', '/images/flush-door-3.jpg', '/images/flush-door-4.jpg'],
  },
  {
    id: 'panel',
    name: 'أبواب الألواح',
    images: ['/images/panel-door-1.jpg'],
  },
  {
    id: 'louvered',
    name: 'أبواب ايطالي',
    images: ['/images/louvered-door-1.jpg', '/images/louvered-door-2.jpg'],
  },
  {
    id: 'barn',
    name: 'أبواب غرف',
    images: ['/images/barn-door-1.jpg'],
  },
  {
    id: 'glass',
    name: 'أبواب زجاجية',
    images: ['/images/glass-door-1.jpg'],
  },
  {
    id: 'pivot',
    name: 'أبواب دوارة',
    images: ['/images/pivot-door-1.jpg'],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Gallery entrance
      gsap.fromTo(
        galleryRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate image change
    imageRefs.current.forEach((el) => {
      if (el) gsap.to(el, { opacity: 0, scale: 1.05, duration: 0.4, ease: 'power2.inOut' });
    });
    const activeEl = imageRefs.current[activeImage];
    if (activeEl) {
      gsap.to(activeEl, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out', delay: 0.1 });
    }
  }, [activeImage, activeCategory]);

  const currentCategory = categories[activeCategory];

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative w-full py-20 lg:py-32"
      style={{ background: '#2A2927' }}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <span
            className="font-body text-sm font-medium"
            style={{ color: '#D4A853', letterSpacing: '2px' }}
          >
            مجموعتنا
          </span>
          <h2
            className="font-display mt-3"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              color: '#F4EDE4',
              letterSpacing: '-1.5px',
            }}
          >
            تشكيلة واسعة من الأبواب
          </h2>
          <p
            className="font-body mt-4 mx-auto max-w-xl"
            style={{ fontSize: '18px', color: 'rgba(244,237,228,0.7)', lineHeight: 1.7 }}
          >
            نقدم لك أحدث تشكيلات الأبواب الداخلية بأفضل الأسعار
          </p>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Category Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(42,41,39,0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(244,237,228,0.06)',
              }}
            >
              <h3 className="font-body text-lg font-medium mb-4" style={{ color: '#F4EDE4' }}>
                مجموعة أبوابنا
              </h3>
              <div className="flex flex-col gap-0">
                {categories.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(idx); setActiveImage(0); }}
                    className="font-body text-sm text-right py-2.5 px-3 rounded-lg transition-all duration-300 relative"
                    style={{
                      color: idx === activeCategory ? '#D4A853' : '#999',
                      borderRight: idx === activeCategory ? '3px solid #D4A853' : '3px solid transparent',
                      background: idx === activeCategory ? 'rgba(212,168,83,0.08)' : 'transparent',
                    }}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Image Viewer */}
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
              {currentCategory.images.map((img, idx) => (
                <div
                  key={`${activeCategory}-${idx}`}
                  ref={(el) => { imageRefs.current[idx] = el; }}
                  className="absolute inset-0"
                  style={{ opacity: idx === activeImage ? 1 : 0 }}
                >
                  <img
                    src={img}
                    alt={currentCategory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Overlay gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(42,41,39,0.6) 0%, transparent 40%)',
                }}
              />

              {/* Category label */}
              <div className="absolute bottom-6 right-6">
                <span
                  className="font-body text-sm px-4 py-2 rounded-full"
                  style={{
                    background: 'rgba(42,41,39,0.8)',
                    backdropFilter: 'blur(8px)',
                    color: '#D4A853',
                  }}
                >
                  {currentCategory.name}
                </span>
              </div>
            </div>

            {/* Thumbnail strip */}
            {currentCategory.images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {currentCategory.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className="relative w-14 h-14 rounded-lg overflow-hidden transition-all duration-300"
                    style={{
                      border: idx === activeImage ? '2px solid #D4A853' : '2px solid transparent',
                    }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
