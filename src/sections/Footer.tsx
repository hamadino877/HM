export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--dark-1))] border-t border-[hsl(var(--gold)/0.2)] px-6 lg:px-16 pt-12 pb-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pb-8 border-b border-[hsl(var(--gold)/0.1)]">
        <div className="font-['Playfair_Display'] text-2xl font-black text-[hsl(var(--gold))]">
          HM DOORS
        </div>
        <div className="flex gap-8">
          {[
            { label: 'المنتجات', href: '#products' },
            { label: 'HPL', href: '#hpl' },
            { label: 'ميلامين', href: '#melamine' },
            { label: 'من نحن', href: '#about' },
            { label: 'الألوان', href: '#colors' },
            { label: 'تواصل معنا', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[hsl(var(--cream-dim))] hover:text-[hsl(var(--gold))] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          {[
            {
              href: 'https://www.facebook.com/share/17jwTDgDP6/?mibextid=wwXIfr',
              icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M24 12.073C24 5.404 18.629 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              ),
            },
            {
              href: 'https://www.instagram.com/hm.doors?igsh=YnJjeGFleHMwcTE1',
              icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              ),
            },
            {
              href: 'https://www.tiktok.com/@hamadamohy1410',
              icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              ),
            },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl flex items-center justify-center border border-[hsl(var(--gold)/0.25)] bg-[hsl(var(--gold)/0.06)] text-[hsl(var(--gold))] hover:border-transparent hover:text-white transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-[hsl(var(--gold))] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">{s.icon}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pt-6">
        <div className="text-xs text-[hsl(var(--cream-dim))]">
          &copy; 2025 HM Doors - محمد محي الدين. جميع الحقوق محفوظة
        </div>
        <a
          href="https://drive.google.com/file/d/1K3A_bkl8cYjTRVzSTfJ0Rghk2GTWf7vZ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[hsl(var(--gold))] text-sm border border-[hsl(var(--gold)/0.3)] px-4 py-2 rounded-full hover:bg-[hsl(var(--gold)/0.1)] transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
            <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 4h14v-2H5v2z" />
          </svg>
          تحميل الكتالوج PDF
        </a>
      </div>
    </footer>
  )
}
