import { Droplets, Leaf, Flame, Bug, VolumeX, Wrench, Shield, Palette } from 'lucide-react'

const features = [
  { icon: Droplets, title: 'مقاوم للماء 100%', desc: 'لا تتأثر بالرطوبة أو المياه، مثالية للمناطق الرطبة' },
  { icon: Leaf, title: 'صديق للبيئة', desc: 'مصنوع من مواد آمنة خالية من الفورمالدهايد الضار' },
  { icon: Flame, title: 'مضاد للاشتعال', desc: 'يلتزم بمعايير السلامة من الحرائق الدولية' },
  { icon: Bug, title: 'مقاوم للحشرات', desc: 'تركيبة خاصة تمنع النمل الأبيض والحشرات' },
  { icon: VolumeX, title: 'عازل للصوت', desc: 'يوفر خصوصية تامة وهدوءاً مميزاً' },
  { icon: Wrench, title: 'تركيب سهل وسريع', desc: 'نظام تجميع متطور يوفر الوقت والجهد' },
  { icon: Shield, title: 'متانة عالية', desc: 'يتحمل الاستخدام اليومي المكثف لسنوات طويلة' },
  { icon: Palette, title: 'قابل للتخصيص', desc: '14+ لوناً ومئات التصاميم لتناسب ذوقك' },
]

export default function HPLSection() {
  return (
    <section id="hpl" className="py-28 lg:py-36 px-6 lg:px-16 bg-[hsl(var(--dark-2))]">
      <div className="section-label reveal">تقنية HPL</div>
      <h2 className="section-title reveal" style={{ transitionDelay: '100ms' }}>
        لماذا تختار <span className="text-[hsl(var(--gold))]">أبواب HPL</span>؟
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 bg-[hsl(var(--dark-3))] border border-[hsl(var(--gold)/0.1)] rounded-sm relative overflow-hidden hover:border-[hsl(var(--gold)/0.4)] hover:-translate-y-1 transition-all duration-300 reveal"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--gold))] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              <f.icon size={28} className="text-[hsl(var(--gold))] mb-3" />
              <h4 className="text-sm font-bold text-[hsl(var(--gold))] mb-2">{f.title}</h4>
              <p className="text-xs text-[hsl(var(--cream-dim))] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="relative reveal">
          <img
            src="./images/hpl-material.jpg"
            alt="HPL Material"
            className="w-full object-cover border border-[hsl(var(--gold)/0.2)]"
          />
          <div className="absolute bottom-5 left-5 bg-black/90 border border-[hsl(var(--gold)/0.4)] px-5 py-3 text-xs text-[hsl(var(--gold))] tracking-widest">
            HIGH PRESSURE LAMINATE
          </div>
        </div>
      </div>
    </section>
  )
}
