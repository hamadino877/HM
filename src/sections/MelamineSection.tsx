import { Check, Palette, Layers, Sparkles } from 'lucide-react'

const advantages = [
  'مقاومة عالية للخدوش والاحتكاك',
  'أسعار اقتصادية مناسبة للجميع',
  'تنوع كبير في الألوان والتصاميم',
  'سهل التنظيف والصيانة',
  'مقاوم للرطوبة والحرارة',
  'مثالي للمطابخ والخزائن',
]

const applications = [
  { icon: Layers, title: 'مطابخ', desc: 'أبواب خزائن مطبخ بمقاومة عالية' },
  { icon: Palette, title: 'خزائن ملابس', desc: 'تصاميم عصرية وأنيقة' },
  { icon: Sparkles, title: 'غرف نوم', desc: 'ديكورات داخلية فاخرة' },
]

export default function MelamineSection() {
  return (
    <section id="melamine" className="py-28 lg:py-36 px-6 lg:px-16 bg-[hsl(var(--dark-1))]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative reveal order-2 lg:order-1">
          <img
            src="/images/melamine-kitchen.jpg"
            alt="Melamine Kitchen"
            className="w-full object-cover border border-[hsl(var(--gold)/0.2)]"
          />
          <div className="absolute bottom-5 left-5 bg-black/90 border border-[hsl(var(--gold)/0.4)] px-5 py-3 text-xs text-[hsl(var(--gold))] tracking-widest">
            ميلامين - Melamine
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <div className="section-label reveal">ألواح الميلامين</div>
          <h2 className="section-title reveal" style={{ transitionDelay: '100ms' }}>
            جودة <span className="text-[hsl(var(--gold))]">ممتازة</span> بسعر <span className="text-[hsl(var(--gold))]">منافس</span>
          </h2>
          <p className="text-[hsl(var(--cream-dim))] leading-loose mt-6 mb-8 reveal" style={{ transitionDelay: '200ms' }}>
            ألواح الميلامين هي الخيار الأمثل لمن يبحث عن جودة عالية بتكلفة اقتصادية.
            توفر تشكيلة واسعة من الألوان والأخشاب المضغوطة بضغط عالي لضمان المتانة والقوة،
            مع مقاومة ممتازة للخدوش والحرارة والرطوبة.
          </p>

          {/* Advantages */}
          <ul className="space-y-3 mb-10">
            {advantages.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[hsl(var(--cream-dim))] text-sm reveal" style={{ transitionDelay: `${250 + i * 50}ms` }}>
                <span className="w-5 h-5 rounded-full bg-[hsl(var(--gold)/0.2)] flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-[hsl(var(--gold))]" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Applications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 reveal" style={{ transitionDelay: '500ms' }}>
            {applications.map((app, i) => (
              <div
                key={i}
                className="text-center p-5 bg-[hsl(var(--dark-3))] border border-[hsl(var(--gold)/0.15)] rounded-sm hover:border-[hsl(var(--gold)/0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                <app.icon size={24} className="mx-auto text-[hsl(var(--gold))] mb-3" />
                <h4 className="text-sm font-bold text-[hsl(var(--gold))] mb-1">{app.title}</h4>
                <p className="text-xs text-[hsl(var(--cream-dim))]">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
