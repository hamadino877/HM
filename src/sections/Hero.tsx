import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    const particles: HTMLDivElement[] = []
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div')
      const size = Math.random() * 4 + 2
      p.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: hsl(var(--gold));
        opacity: 0.12;
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        animation: float ${Math.random() * 15 + 10}s linear infinite;
        animation-delay: ${Math.random() * 10}s;
        pointer-events: none;
      `
      container.appendChild(p)
      particles.push(p)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(13,43,26,0.8) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.08) 0%, transparent 50%),
            linear-gradient(135deg, #050E08 0%, #0A0A0A 50%, #0D1A0A 100%)
          `,
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        }}
      />

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 border border-[hsl(var(--gold)/0.4)] px-5 py-2 rounded-full mb-10 animate-fadeInDown opacity-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))] animate-pulse" />
          <span className="text-xs tracking-[0.2em] text-[hsl(var(--gold))]">
            محمد محي الدين &bull; المحلة الكبرى &bull; مصر
          </span>
        </div>

        {/* Title */}
        <h1 className="font-['Playfair_Display'] font-black leading-[1.05] mb-8 animate-fadeInUp delay-200 opacity-0" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
          أبواب <span className="text-[hsl(var(--gold))]">تُجسّد</span>
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px hsl(var(--gold))' }}>الفخامة</span> والجمال
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[hsl(var(--cream-dim))] leading-relaxed max-w-xl mx-auto mb-12 animate-fadeInUp delay-400 opacity-0">
          متخصصون في الأبواب المصفحة وأبواب HPL والميلامين.
          جودة استثنائية، تصاميم عصرية، ومواد مقاومة للرطوبة والحرائق.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-5 justify-center flex-wrap animate-fadeInUp delay-600 opacity-0">
          <a
            href="#products"
            className="bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dark))] text-[hsl(var(--dark-1))] px-10 py-4 rounded-sm font-bold tracking-wide hover:-translate-y-1 hover:shadow-xl hover:shadow-[hsl(var(--gold)/0.3)] transition-all duration-300"
          >
            استكشف المنتجات
          </a>
          <a
            href="#contact"
            className="border border-[hsl(var(--cream)/0.3)] text-[hsl(var(--cream))] px-10 py-4 rounded-sm font-medium tracking-wide hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] transition-all duration-300"
          >
            اطلب عرض أسعار
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(var(--cream-dim))] text-xs tracking-widest animate-fadeIn delay-1000 opacity-0">
        <span>اسحب للأسفل</span>
        <ChevronDown size={20} className="text-[hsl(var(--gold))] animate-bounce" />
      </div>
    </section>
  )
}
