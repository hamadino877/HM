const items = [
  'مقاوم للماء 100%',
  'صديق للبيئة',
  'مقاوم للحشرات',
  'عازل للصوت',
  'مضاد للاشتعال',
  'خالٍ من الفورمالدهايد',
  'مقاوم للرطوبة 100%',
  'تركيب سهل وسريع',
  'تصاميم قابلة للتخصيص',
]

export default function Marquee() {
  const allItems = [...items, ...items]

  return (
    <div className="bg-[hsl(var(--gold))] py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center gap-5 px-8 flex-shrink-0">
            <span className="text-sm font-bold tracking-wider text-[hsl(var(--dark-1))]">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--dark-3))]" />
          </div>
        ))}
      </div>
    </div>
  )
}
