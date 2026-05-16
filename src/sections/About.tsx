export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 px-6 lg:px-16 bg-[hsl(var(--dark-1))]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Visual */}
        <div className="relative reveal">
          <img
            src="/images/door-hpl-2.jpg"
            alt="HM Doors Workshop"
            className="w-full aspect-[4/5] object-cover border-2 border-[hsl(var(--gold)/0.2)]"
          />
          <img
            src="/images/door-arch.jpg"
            alt="Door Detail"
            className="absolute -bottom-10 -left-10 w-[55%] aspect-square object-cover border-4 border-[hsl(var(--dark-1))] shadow-2xl"
          />
          <div className="absolute top-10 -right-10 bg-[hsl(var(--gold))] px-8 py-6 text-center text-[hsl(var(--dark-1))]">
            <span className="font-['Playfair_Display'] text-4xl font-black block">+500</span>
            <span className="text-xs font-bold tracking-wider">تصميم متاح</span>
          </div>
        </div>

        {/* Content */}
        <div className="pb-10">
          <div className="section-label reveal">من نحن</div>
          <h2 className="section-title reveal" style={{ transitionDelay: '100ms' }}>
            <span className="text-[hsl(var(--gold))]">محمد محي الدين</span><br />للأبواب المصفحة
          </h2>

          <p className="reveal text-[hsl(var(--cream-dim))] leading-[2] text-base mt-8" style={{ transitionDelay: '200ms' }}>
            نحن متخصصون في توفير أرقى أنواع الأبواب المصفحة وأبواب HPL وأدوات الديكور المنزلي بأعلى معايير الجودة.
            تجدنا في قلب المحلة الكبرى لخدمة عملائنا الكرام.
          </p>
          <p className="reveal text-[hsl(var(--cream-dim))] leading-[2] text-base mt-5" style={{ transitionDelay: '300ms' }}>
            نقدم تشكيلة واسعة تشمل الأبواب العصرية، الكلاسيكية، الزجاجية، والمنزلقة.
            كل باب يُصنع بعناية فائقة باستخدام أفضل المواد وأحدث التقنيات.
          </p>

          <ul className="mt-8 space-y-0">
            {[
              'أبواب HPL مقاومة للماء والرطوبة بالكامل',
              'ألواح HPL للجدران والأرضيات',
              'أبواب منزلقة بأنظمة داخلية وخارجية',
              'أبواب بأشكال مميزة: قوس مستدير، أم وابن، فوليو',
              'تركيب احترافي بفريق متخصص',
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 py-3 border-b border-[hsl(var(--gold)/0.1)] text-[hsl(var(--cream-dim))] reveal"
                style={{ transitionDelay: `${350 + i * 50}ms` }}
              >
                <span className="text-[hsl(var(--gold))] flex-shrink-0">&#10022;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
