import { ArrowLeftRight, Vault, LayoutGrid, Split } from 'lucide-react'

const types = [
  {
    icon: ArrowLeftRight,
    title: 'باب منزلق',
    desc: 'مثبت على الحائط الخارجي أو داخل الجدار بتقنية اختفاء كاملة',
  },
  {
    icon: Vault,
    title: 'باب بقوس',
    desc: 'قوس مستدير أو مؤسس للمداخل الرئيسية بطابع كلاسيكي راقٍ',
  },
  {
    icon: LayoutGrid,
    title: 'أم وابن',
    desc: 'باب مزدوج بجانبين بأحجام مختلفة لأبواب الصالات والمداخل الكبيرة',
  },
  {
    icon: Split,
    title: 'فوليو',
    desc: 'باب مزدوج متماثل يُفتح للجانبين لإطلالة ملكية فارهة',
  },
]

export default function DoorTypes() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-[hsl(var(--dark-3))]">
      <div className="section-label reveal">أشكال الأبواب</div>
      <h2 className="section-title reveal mb-12" style={{ transitionDelay: '100ms' }}>
        تصاميم <span className="text-[hsl(var(--gold))]">استثنائية</span> لكل مكان
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal" style={{ transitionDelay: '200ms' }}>
        {types.map((t, i) => (
          <div
            key={i}
            className="group text-center p-8 bg-[hsl(var(--dark-4))] border border-[hsl(var(--gold)/0.15)] hover:border-[hsl(var(--gold)/0.5)] hover:-translate-y-2 transition-all duration-400 cursor-pointer rounded-sm"
          >
            <t.icon size={48} className="mx-auto text-[hsl(var(--gold))] mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="text-[hsl(var(--gold))] mb-3 font-['Playfair_Display'] text-lg font-bold">{t.title}</h3>
            <p className="text-sm text-[hsl(var(--cream-dim))] leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
