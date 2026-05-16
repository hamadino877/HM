const productLinks = [
  'أبواب مصفحة',
  'أبواب ألواح',
  'أبواب غرف',
  'أبواب حمام',
  'أبواب فاخرة',
  'أبواب تناسب جميع الاذواق',
];

const companyLinks = ['عنّا', 'المدونة', 'الوظائف', 'سياسة الخصوصية'];
const contactLinks = ['طلب عرض', 'متابعة طلبك', 'الأسئلة الشائعة', 'WhatsApp'];

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
    linkedin: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    pinterest: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.5 12.5c0-2 1.5-4 3.5-4s3.5 2 3.5 4c0 2-1.5 3-3 3s-2-1-2-1" />
        <path d="M11 17l-1 5" />
      </svg>
    ),
    youtube: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </svg>
    ),
  };
  return icons[type] || null;
};

const Footer = () => {
  return (
    <footer
      className="w-full pt-16 pb-8 px-6 lg:px-12"
      style={{
        background: '#1E1D1B',
        borderTop: '1px solid rgba(244,237,228,0.06)',
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl" style={{ color: '#F4EDE4' }}>
              HM DOORS
            </h3>
            <p className="font-body text-sm mt-3" style={{ color: '#666' }}>
              أبواب إيطالية بمعايير عالمية — منذ 1998.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4
              className="font-body text-sm font-medium mb-4"
              style={{ color: '#D4A853' }}
            >
              المنتجات
            </h4>
            <ul className="space-y-0">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm transition-colors duration-300 hover:text-[#F4EDE4] block py-1.5"
                    style={{ color: '#999' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="font-body text-sm font-medium mb-4"
              style={{ color: '#D4A853' }}
            >
              الشركة
            </h4>
            <ul className="space-y-0">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm transition-colors duration-300 hover:text-[#F4EDE4] block py-1.5"
                    style={{ color: '#999' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-body text-sm font-medium mb-4"
              style={{ color: '#D4A853' }}
            >
              تواصل
            </h4>
            <ul className="space-y-0">
              {contactLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm transition-colors duration-300 hover:text-[#F4EDE4] block py-1.5"
                    style={{ color: '#999' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(244,237,228,0.06)' }}
        >
          <p className="font-body text-[13px]" style={{ color: '#555' }}>
            © 2025 HM Doors. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-5">
            {['instagram', 'linkedin', 'pinterest', 'youtube'].map((social) => (
              <a
                key={social}
                href="#"
                className="transition-colors duration-300 hover:text-[#D4A853]"
                style={{ color: '#555' }}
                aria-label={social}
              >
                <SocialIcon type={social} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
