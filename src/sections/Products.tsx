import { useState } from 'react'

interface Product {
  id: string
  name: string
  code: string
  category: string
  tags: string[]
  badge?: string
  image: string
  large?: boolean
}

const products: Product[] = [
  {
    id: '1',
    name: 'الباب العصري المميز',
    code: 'HPL-YX01',
    category: 'مصفحة',
    tags: ['HPL', 'مقاوم للماء', 'عازل للصوت'],
    badge: 'الأكثر مبيعاً',
    image: './images/door-hpl-1.jpg',
    large: true,
  },
  {
    id: '2',
    name: 'الباب الكلاسيكي الفاخر',
    code: 'HPL-GT01',
    category: 'غرف',
    tags: ['HPL', 'تخصيص'],
    image: './images/door-hpl-2.jpg',
  },
  {
    id: '3',
    name: 'باب بإطار علوي متكامل',
    code: 'HPL-PTM02',
    category: 'سادة',
    tags: ['HPL', 'مقاوم للحرارة'],
    badge: 'جديد',
    image: './images/door-hpl-3.jpg',
  },
  {
    id: '4',
    name: 'باب بنافذة زجاجية',
    code: 'HPL-PZL01',
    category: 'حفر',
    tags: ['زجاج مات', 'أنيق'],
    image: './images/door-modern-1.jpg',
  },
  {
    id: '5',
    name: 'باب بخطوط ذهبية',
    code: 'HPL-GT05',
    category: 'استانلس',
    tags: ['HPL', 'خط ذهبي'],
    image: './images/door-hpl-2.jpg',
  },
  {
    id: '6',
    name: 'باب بتصميم هندسي',
    code: 'HPL-XP01',
    category: 'لونين',
    tags: ['HPL', 'هندسي'],
    image: './images/door-hpl-1.jpg',
  },
]

const filters = [
  { key: 'all', label: 'الكل' },
  { key: 'مصفحة', label: 'أبواب مصفحة' },
  { key: 'غرف', label: 'أبواب الغرف' },
  { key: 'سادة', label: 'أبواب سادة' },
  { key: 'حفر', label: 'أبواب حفر' },
  { key: 'استانلس', label: 'أبواب أستانلس' },
  { key: 'لونين', label: 'أبواب 2 لون' },
  { key: 'باركز', label: 'أبواب باركز أكليرك' },
  { key: 'متداخلة', label: 'أبواب متداخلة' },
]

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter)

  return (
    <section id="products" className="py-28 lg:py-36 px-6 lg:px-16 bg-[hsl(var(--dark-2))]">

      {/* Video */}
      <div className="mb-16 reveal">
        <video
          src="./videos/menu.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-sm border border-[hsl(var(--gold)/0.2)]"
        />
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
        <div>
          <div className="section-label reveal">كتالوج المنتجات</div>
          <h2 className="section-title reveal" style={{ transitionDelay: '100ms' }}>
            تشكيلة <span className="text-[hsl(var(--gold))]">واسعة</span><br />لكل ذوق
          </h2>
        </div>
        <div className="flex gap-2 flex-wrap reveal" style={{ transitionDelay: '200ms' }}>
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                activeFilter === f.key
                  ? 'bg-[hsl(var(--gold)/0.15)] border-[hsl(var(--gold))] text-[hsl(var(--gold))]'
                  : 'border-[hsl(var(--gold)/0.3)] text-[hsl(var(--cream-dim))] hover:bg-[hsl(var(--gold)/0.1)] hover:border-[hsl(var(--gold)/0.5)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {filtered.map((product, idx) => (
          <div
            key={product.id}
            className={`group relative overflow-hidden bg-[hsl(var(--dark-3))] cursor-pointer transition-transform duration-500 ${
              product.large ? 'md:col-span-1 lg:row-span-2' : ''
            } reveal`}
            style={{
              aspectRatio: product.large ? 'auto' : '3/4',
              minHeight: product.large ? '600px' : undefined,
              transitionDelay: `${idx * 100}ms`,
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-700 brightness-[0.85] group-hover:brightness-100 group-hover:scale-105"
            />
            {product.badge && (
              <div className="absolute top-5 right-5 bg-[hsl(var(--gold))] text-[hsl(var(--dark-1))] text-xs font-bold tracking-wider px-3 py-1.5 rounded-sm z-10">
                {product.badge}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 lg:p-8 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="text-xs tracking-[0.2em] text-[hsl(var(--gold))] mb-2">{product.code}</div>
              <h3 className="font-['Playfair_Display'] text-xl lg:text-2xl font-bold mb-3 text-[hsl(var(--cream))]">{product.name}</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-[hsl(var(--gold)/0.2)] border border-[hsl(var(--gold)/0.4)] rounded-full text-[hsl(var(--gold))]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Catalog link */}
      <div className="mt-16 reveal">
        <div className="text-center mb-6">
          <div className="section-label justify-center">تحميل الكتالوج الرسمي</div>
          <p className="text-sm text-[hsl(var(--cream-dim))] mt-2">اضغط على الصورة لفتح كتالوج HM Doors الكامل</p>
        </div>
        <a
          href="https://drive.google.com/file/d/1K3A_bkl8cYjTRVzSTfJ0Rghk2GTWf7vZ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-6 bg-[hsl(var(--dark-3))] border border-[hsl(var(--gold)/0.25)] p-5 rounded max-w-lg mx-auto hover:border-[hsl(var(--gold))] hover:-translate-y-1 hover:shadow-2xl transition-all duration-400"
        >
          <div className="w-20 h-24 bg-gradient-to-br from-[hsl(var(--green-deep))] to-[#0A3020] border border-[hsl(var(--gold)/0.4)] flex flex-col items-center justify-center gap-1 flex-shrink-0 rounded-sm">
            <span className="font-['Playfair_Display'] text-base font-black text-[hsl(var(--gold))]">HM</span>
            <span className="text-[0.6rem] tracking-widest text-[hsl(var(--gold))]">DOORS</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4 mt-1 fill-[hsl(var(--gold))]">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 4h5v5h7v11H6V4z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-['Playfair_Display'] text-base font-bold text-[hsl(var(--gold))] mb-1">كتالوج HM Doors الكامل</h4>
            <p className="text-xs text-[hsl(var(--cream-dim))] leading-relaxed">
              21 صفحة &bull; أبواب HPL &bull; ميلامين &bull; GT &bull; PZ &bull; XP<br />
              + ألوان &bull; أبعاد &bull; تفاصيل تركيب
            </p>
            <div className="flex items-center gap-2 mt-3">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[hsl(var(--gold))]">
                <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 4h14v-2H5v2z" />
              </svg>
              <span className="text-xs text-[hsl(var(--gold))] tracking-wider">تحميل PDF مجاناً</span>
            </div>
          </div>
          <div className="w-11 h-11 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center flex-shrink-0 text-[hsl(var(--dark-1))] group-hover:-translate-x-1 group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 4h14v-2H5v2z" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  )
}
