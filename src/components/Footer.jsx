const LOGO_URL = "https://stadium-signal.standard.us-east-1.oortstorages.com/ChatGPT%20Image%20Jun%2015%2C%202026%2C%2001_58_20%20PM.png"
const FALLBACK_URL = "https://stadium-signal.standard.us-east-1.oortstorages.com/logo.png"

const footerLinks = [
  { label: "Coaching", href: "#services" },
  { label: "What We Do", href: "#value-prop" },
  { label: "Contact", href: "#contact" },
  { label: "Free Consultation", href: "#cta" },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center shrink-0">
            <img
              src={LOGO_URL}
              alt="Velocity Sales Agency"
              className="h-7 sm:h-8 w-auto object-contain"
              onError={(e) => {
                if (e.target.src !== FALLBACK_URL) e.target.src = FALLBACK_URL
              }}
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
