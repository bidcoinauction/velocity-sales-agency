import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-28">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric rounded-full opacity-[0.02] blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={childVariants} className="mb-6 sm:mb-8">
          <img
            src="/logo.png"
            alt="Velocity Sales Agency"
            width="200"
            height="200"
            loading="eager"
            className="h-[120px] sm:h-[200px] w-auto object-contain mx-auto drop-shadow-[0_0_40px_rgba(74,133,240,0.1)]"
          />
        </motion.div>

        <motion.h1 variants={childVariants} className="mb-5 sm:mb-6">
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-white break-normal">
            Scale Faster.
          </div>
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight break-normal">
            <span className="text-electric">Close Better.</span>
          </div>
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-4"
        >
          Velocity helps businesses transform qualified leads into booked
          meetings, stronger pipelines, and predictable revenue.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#cta"
            className="bg-electric/90 hover:bg-electric text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Book a Strategy Call <ArrowRight size="20" />
          </a>
          <a
            href="#services"
            className="border border-white/20 hover:border-white/40 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 w-full sm:w-auto justify-center flex"
          >
            View Services
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-center pointer-events-none">
        <a
          href="#stats"
          className="text-muted/60 hover:text-muted transition-colors animate-bounce pointer-events-auto"
          aria-label="Scroll down"
        >
          <ChevronDown size="24" />
        </a>
      </div>
    </section>
  )
}
