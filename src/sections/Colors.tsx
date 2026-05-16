const colors = [
  { name: 'بني كلاسيكي', bg: 'linear-gradient(135deg, #8B5E3C, #6B4423)' },
  { name: 'بني داكن', bg: 'linear-gradient(135deg, #6B3A2A, #4A2010)' },
  { name: 'كرزي غامق', bg: 'linear-gradient(135deg, #5C1A0A, #3D1A0F)' },
  { name: 'وينج دارك', bg: 'linear-gradient(135deg, #3D2A10, #1A1005)' },
  { name: 'أسود كامل', bg: 'linear-gradient(135deg, #2A2A2A, #0A0A0A)' },
  { name: 'بيج فاتح', bg: 'linear-gradient(135deg, #D4B890, #B08850)' },
  { name: 'بيج محايد', bg: 'linear-gradient(135deg, #E0D8CC, #C8BFB0)' },
  { name: 'رمادي بيج', bg: 'linear-gradient(135deg, #AAA29C, #8E8680)' },
  { name: 'رمادي', bg: 'linear-gradient(135deg, #8A8580, #6A6560)' },
  { name: 'رمادي داكن', bg: 'linear-gradient(135deg, #4D4840, #2D2820)' },
  { name: 'أبيض كلاسيكي', bg: 'linear-gradient(135deg, #F8F5F0, #E8E4DC)' },
  { name: 'رمادي فاتح', bg: 'linear-gradient(135deg, #D4CBC4, #BEB5AE)' },
  { name: 'كابتشينو', bg: 'linear-gradient(135deg, #BCB4A4, #A09888)' },
  { name: 'أبيض مائل', bg: 'linear-gradient(135deg, #F0ECE7, #E0DCD7)' },
]

export default function Colors() {
  return (
    <section id="colors" className="py-28 lg:py-36 px-6 lg:px-16 bg-[hsl(var(--dark-1))]">
      <div className="section-label reveal">الألوان المتاحة</div>
      <h2 className="section-title reveal" style={{ transitionDelay: '100ms' }}>
        14 لوناً <span className="text-[hsl(var(--gold))]">راقياً</span> لكل ذوق
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-1 mt-14">
        {colors.map((c, i) => (
          <div
            key={i}
            className="group aspect-[2/3] relative overflow-hidden cursor-pointer rounded-sm hover:-translate-y-2 hover:z-10 transition-transform duration-300 reveal"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="w-full h-full" style={{ background: c.bg }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-center w-full text-[hsl(var(--gold))] tracking-wide">{c.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
