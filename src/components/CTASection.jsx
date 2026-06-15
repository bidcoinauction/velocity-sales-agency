import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section id="cta" className="relative py-28 sm:py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] bg-electric rounded-full opacity-[0.025] blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
          Ready to Add Velocity
          <br />
          <span className="text-electric">to Your Sales Process?</span>
        </h2>
        <p className="text-muted text-base sm:text-lg md:text-xl mb-10 sm:mb-12 max-w-xl mx-auto px-4">
          Turn qualified leads into booked meetings, stronger follow-up, and
          predictable revenue.
        </p>
        <a
          href="#contact"
          className="inline-flex bg-electric/90 hover:bg-electric text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all duration-200 items-center gap-3 w-full sm:w-auto justify-center hover:scale-[1.02]"
        >
          Book a Strategy Call <ArrowRight size="20" />
        </a>
      </motion.div>
    </section>
  )
}
