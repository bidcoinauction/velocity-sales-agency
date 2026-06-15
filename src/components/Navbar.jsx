import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const LOGO_URL = "https://stadium-signal.standard.us-east-1.oortstorages.com/ChatGPT%20Image%20Jun%2015%2C%202026%2C%2001_58_20%20PM.png"
const FALLBACK_URL = "https://stadium-signal.standard.us-east-1.oortstorages.com/logo.png"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "What We Do", href: "#value-prop" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/80 backdrop-blur-xl border-b border-electric-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center shrink-0">
          <img
            src={LOGO_URL}
            alt="Velocity Sales Agency"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              if (e.target.src !== FALLBACK_URL) e.target.src = FALLBACK_URL
            }}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-electric/90 hover:bg-electric text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
          >
            Book a Strategy Call
          </a>
        </div>

        <button
          className="md:hidden text-white p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size="22" /> : <Menu size="22" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-electric-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-muted hover:text-white transition-colors text-sm font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="bg-electric/90 hover:bg-electric text-white px-5 py-3 rounded-full text-sm font-semibold text-center transition-all mt-2"
              >
                Book a Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
