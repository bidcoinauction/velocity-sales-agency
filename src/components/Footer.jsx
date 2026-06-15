const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "What We Do", href: "#value-prop" },
  { label: "Contact", href: "#contact" },
  { label: "Strategy Call", href: "#cta" },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Velocity Sales Agency"
              width="96"
              height="96"
              loading="lazy"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </a>

          <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-muted/60 text-xs sm:text-sm text-center">
            Don't refrain your brain — train your brain.
          </p>
        </div>
      </div>
    </footer>
  )
}
