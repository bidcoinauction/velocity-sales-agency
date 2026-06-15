import { motion } from "framer-motion"

export default function Testimonial() {
  return (
    <section className="py-24 sm:py-28 md:py-36 bg-surface/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-electric/30 mx-auto mb-6 sm:mb-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="text-lg sm:text-xl md:text-2xl text-muted-light font-medium leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            "Revenue growth is rarely a lead problem. It's usually a follow-up
            problem, a process problem, or an execution problem. Velocity helps
            solve all three."
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-electric/20 flex items-center justify-center text-electric font-bold text-sm sm:text-base">
              TD
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-sm sm:text-base">
                Thomas DeStefano
              </div>
              <div className="text-muted text-xs sm:text-sm">
                Founder & Owner, Velocity Sales Agency
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
