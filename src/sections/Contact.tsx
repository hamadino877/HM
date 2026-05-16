import { Phone, MapPin, Clock, Package } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'الهاتف / واتساب',
    content: (
      <>
        <a href="tel:01024209955" className="text-[hsl(var(--cream-dim))] hover:text-[hsl(var(--gold))] transition-colors block">01024209955</a>
        <a href="tel:01228066083" className="text-[hsl(var(--cream-dim))] hover:text-[hsl(var(--gold))] transition-colors block">01228066083</a>
      </>
    ),
  },
  {
    icon: MapPin,
    title: 'العنوان',
    content: (
      <p className="text-[hsl(var(--cream-dim))]">
        المحلة الكبرى - شارع التحرير<br />
        بجوار مسجد المتولي<br />
        عمارة محمد محي الدين
      </p>
    ),
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    content: (
      <p className="text-[hsl(var(--cream-dim))]">
        السبت - الخميس<br />
        9:00 صباحاً - 10:00 مساءً
      </p>
    ),
  },
  {
    icon: Package,
    title: 'خدماتنا',
    content: (
      <p className="text-[hsl(var(--cream-dim))]">
        أبواب HPL &bull; ألواح ميلامين<br />
        ألواح جدارية &bull; بنلات
      </p>
    ),
  },
]

const productOptions = [
  'اختر نوع الباب',
  'أبواب HPL عصرية (YX)',
  'أبواب HPL كلاسيكية (GT)',
  'أبواب HPL بإطار علوي (PTM)',
  'أبواب HPL بخطوط ذهبية',
  'أبواب ميلامين',
  'ألواح جدارية HPL',
  'كتالوج كامل',
]

const colorOptions = [
  'بني كلاسيكي',
  'بني داكن',
  'كرزي غامق',
  'أسود',
  'بيج فاتح',
  'رمادي',
  'أبيض',
  'لم أقرر بعد',
]

export default function Contact() {
  const handleSubmit = () => {
    const name = (document.querySelector('input[name="name"]') as HTMLInputElement)?.value || 'عميل كريم'
    const phone = (document.querySelector('input[name="phone"]') as HTMLInputElement)?.value || 'غير محدد'
    const product = (document.querySelector('select[name="product"]') as HTMLSelectElement)?.value || 'غير محدد'
    const msg = `مرحباً HM Doors 👋\nاسمي: ${name}\nهاتفي: ${phone}\nأحتاج: ${product}\nأرجو التواصل معي لعرض الأسعار.`
    window.open(`https://wa.me/201024209955?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left */}
      <div className="relative overflow-hidden bg-[hsl(var(--green-deep))] px-8 lg:px-20 py-20 lg:py-24">
        <div
          className="absolute -top-1/2 -right-1/2 w-full h-full"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10">
          <div className="section-label">تواصل معنا</div>
          <h2 className="section-title reveal mb-12" style={{ transitionDelay: '100ms' }}>
            نحن <span className="text-[hsl(var(--gold))]">هنا</span><br />لخدمتك
          </h2>

          <div className="space-y-8">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex gap-5 reveal" style={{ transitionDelay: `${200 + i * 100}ms` }}>
                <div className="w-12 h-12 flex-shrink-0 bg-[hsl(var(--gold)/0.1)] border border-[hsl(var(--gold)/0.4)] rounded-full flex items-center justify-center">
                  <item.icon size={20} className="text-[hsl(var(--gold))]" />
                </div>
                <div>
                  <h4 className="text-xs tracking-widest text-[hsl(var(--gold))] mb-1.5">{item.title}</h4>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="px-8 lg:px-20 py-20 lg:py-24 bg-[hsl(var(--dark-2))] reveal">
        <h3 className="font-['Playfair_Display'] text-2xl lg:text-3xl mb-10 text-[hsl(var(--gold))]">
          اطلب عرض أسعار
        </h3>

        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs tracking-wider text-[hsl(var(--gold))] mb-2">الاسم الكامل</label>
              <input
                type="text"
                name="name"
                placeholder="اسمك الكريم"
                className="w-full bg-white/[0.03] border border-[hsl(var(--gold)/0.2)] text-[hsl(var(--cream))] px-4 py-3 text-sm rounded-sm focus:border-[hsl(var(--gold))] focus:bg-[hsl(var(--gold)/0.05)] outline-none transition-all placeholder:text-[hsl(var(--cream-dim))]/50"
              />
            </div>
            <div>
              <label className="block text-xs tracking-wider text-[hsl(var(--gold))] mb-2">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                placeholder="رقم التواصل"
                className="w-full bg-white/[0.03] border border-[hsl(var(--gold)/0.2)] text-[hsl(var(--cream))] px-4 py-3 text-sm rounded-sm focus:border-[hsl(var(--gold))] focus:bg-[hsl(var(--gold)/0.05)] outline-none transition-all placeholder:text-[hsl(var(--cream-dim))]/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs tracking-wider text-[hsl(var(--gold))] mb-2">نوع المنتج المطلوب</label>
            <select
              name="product"
              className="w-full bg-white/[0.03] border border-[hsl(var(--gold)/0.2)] text-[hsl(var(--cream))] px-4 py-3 text-sm rounded-sm focus:border-[hsl(var(--gold))] focus:bg-[hsl(var(--gold)/0.05)] outline-none transition-all"
            >
              {productOptions.map((o) => (
                <option key={o} value={o} className="bg-[hsl(var(--dark-3))]">{o}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs tracking-wider text-[hsl(var(--gold))] mb-2">اللون المفضل</label>
              <select className="w-full bg-white/[0.03] border border-[hsl(var(--gold)/0.2)] text-[hsl(var(--cream))] px-4 py-3 text-sm rounded-sm focus:border-[hsl(var(--gold))] focus:bg-[hsl(var(--gold)/0.05)] outline-none transition-all">
                {colorOptions.map((o) => (
                  <option key={o} value={o} className="bg-[hsl(var(--dark-3))]">{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs tracking-wider text-[hsl(var(--gold))] mb-2">عدد الأبواب المطلوبة</label>
              <input
                type="number"
                min="1"
                placeholder="3"
                className="w-full bg-white/[0.03] border border-[hsl(var(--gold)/0.2)] text-[hsl(var(--cream))] px-4 py-3 text-sm rounded-sm focus:border-[hsl(var(--gold))] focus:bg-[hsl(var(--gold)/0.05)] outline-none transition-all placeholder:text-[hsl(var(--cream-dim))]/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs tracking-wider text-[hsl(var(--gold))] mb-2">ملاحظات إضافية</label>
            <textarea
              rows={4}
              placeholder="أي متطلبات خاصة أو أسئلة..."
              className="w-full bg-white/[0.03] border border-[hsl(var(--gold)/0.2)] text-[hsl(var(--cream))] px-4 py-3 text-sm rounded-sm focus:border-[hsl(var(--gold))] focus:bg-[hsl(var(--gold)/0.05)] outline-none transition-all resize-none placeholder:text-[hsl(var(--cream-dim))]/50"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dark))] text-[hsl(var(--dark-1))] py-4 rounded-sm font-bold text-base tracking-wide hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[hsl(var(--gold)/0.3)] transition-all duration-300"
          >
            إرسال الطلب عبر واتساب
          </button>
        </div>
      </div>
    </section>
  )
}
