import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'المنتجات', href: '#products' },
  { label: 'HPL', href: '#hpl' },
  { label: 'ميلامين', href: '#melamine' },
  { label: 'من نحن', href: '#about' },
  { label: 'الألوان', href: '#colors' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/17jwTDgDP6/?mibextid=wwXIfr',
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 12.073C24 5.404 18.629 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hm.doors?igsh=YnJjeGFleHMwcTE1',
    color: '#E1306C',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@hamadamohy1410',
    color: '#69C9D0',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-5 transition-all duration-300 bg-gradient-to-b from-black/95 to-transparent backdrop-blur-md border-b border-[hsl(var(--gold)/0.1)]">
      <a href="#" className="font-['Playfair_Display'] text-2xl font-black text-[hsl(var(--gold))] tracking-wider z-10">
        HM<span className="text-[hsl(var(--cream))]"> DOORS</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative text-[hsl(var(--cream-dim))] hover:text-[hsl(var(--gold))] text-sm font-medium tracking-wide transition-colors duration-300 py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 right-0 h-px bg-[hsl(var(--gold))] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dark))] text-[hsl(var(--dark-1))] px-7 py-2.5 rounded-sm font-bold text-sm tracking-wide hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[hsl(var(--gold)/0.3)] transition-all duration-300"
          >
            تواصل معنا
          </a>
        </li>
      </ul>

      {/* Social icons desktop */}
      <div className="hidden lg:flex items-center gap-3">
        {socialLinks.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg flex items-center justify-center border border-[hsl(var(--gold)/0.2)] bg-[hsl(var(--gold)/0.05)] text-[hsl(var(--gold))] hover:border-transparent hover:text-white transition-all duration-300 relative overflow-hidden group"
            title={s.name}
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              style={{ background: s.color }}
            />
            <span className="relative z-10">{s.icon}</span>
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        className="lg:hidden z-10 text-[hsl(var(--gold))]"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/98 z-40 flex flex-col items-center justify-center gap-8 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[hsl(var(--cream))] hover:text-[hsl(var(--gold))] text-xl font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dark))] text-[hsl(var(--dark-1))] px-8 py-3 rounded-sm font-bold"
          >
            <Phone size={18} />
            تواصل معنا
          </a>
          <div className="flex items-center gap-4 mt-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--gold))] hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
