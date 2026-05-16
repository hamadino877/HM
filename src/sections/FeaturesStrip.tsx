import { Droplets, Flame, Leaf, Wrench } from 'lucide-react'

const features = [
  { icon: Droplets, title: 'مقاوم للماء 100%', desc: 'مثالي للحمامات والمطابخ' },
  { icon: Flame, title: 'مضاد للاشتعال', desc: 'معايير سلامة دولية' },
  { icon: Leaf, title: 'صديق للبيئة', desc: 'خالٍ من المواد الضارة' },
  { icon: Wrench, title: 'تركيب احترافي', desc: 'فريق متخصص وسريع' },
]

export default function FeaturesStrip() {
  return (
    <div className="bg-[hsl(var(--dark-3))] border-y border-[hsl(var(--gold)/0.2)] px-6 lg:px-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {features.map((f, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 px-8 py-4 ${i < features.length - 1 ? 'lg:border-l border-[hsl(var(--gold)/0.15)]' : ''} reveal`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="w-12 h-12 flex-shrink-0 bg-[hsl(var(--gold)/0.1)] border border-[hsl(var(--gold)/0.3)] rounded flex items-center justify-center">
              <f.icon size={22} className="text-[hsl(var(--gold))]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[hsl(var(--gold))] mb-0.5">{f.title}</h4>
              <p className="text-xs text-[hsl(var(--cream-dim))]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
