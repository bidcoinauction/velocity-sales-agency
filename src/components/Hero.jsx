import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

const LOGO_URL = "https://stadium-signal.standard.us-east-1.oortstorages.com/ChatGPT%20Image%20Jun%2015%2C%202026%2C%2001_58_20%20PM.png"
const FALLBACK_URL = "https://stadium-signal.standard.us-east-1.oortstorages.com/logo.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric rounded-full opacity-[0.025] blur-[160px] pointer-events-none"
      />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-electric rounded-full opacity-[0.015] blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div variants={logoVariants} className="mb-6 sm:mb-8">
          <img
            src={LOGO_URL}
            alt="Velocity Sales Agency"
            className="h-20 sm:h-24 md:h-28 w-auto object-contain mx-auto drop-shadow-[0_0_50px_rgba(59,130,246,0.15)]"
            onError={(e) => {
              if (e.target.src !== FALLBACK_URL) e.target.src = FALLBACK_URL
            }}
          />
        </motion.div>

        <motion.h1 className="mb-5 sm:mb-6">
          <motion.span variants={lineVariants} className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold italic uppercase leading-[1.05] tracking-tight text-white">
            Sales Skills.
          </motion.span>
          <motion.span variants={lineVariants} className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold italic uppercase leading-[1.05] tracking-tight">
            <span className="text-electric">More Confidence.</span>
          </motion.span>
          <motion.span variants={lineVariants} className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold italic uppercase leading-[1.05] tracking-tight text-white">
            Bigger Results.
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-4 sm:mb-5 leading-relaxed px-4"
        >
          We help individuals and teams develop real sales skills that produce
          results.
        </motion.p>

        <motion.p
          variants={fadeUpVariants}
          className="text-electric text-sm sm:text-base font-semibold tracking-wide mb-8 sm:mb-10"
        >
          Don't refrain your brain — train your brain.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#cta"
            className="bg-electric/90 hover:bg-electric text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-[1.02]"
          >
            Book Free Consultation <ArrowRight size="20" />
          </a>
          <a
            href="#services"
            className="border border-white/20 hover:border-white/40 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 w-full sm:w-auto justify-center flex hover:bg-white/5"
          >
            See What We Do
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-center"
      >
        <a
          href="#stats"
          className="text-muted/60 hover:text-muted transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size="24" />
        </a>
      </motion.div>
    </section>
  )
}
