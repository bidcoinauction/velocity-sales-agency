import { motion } from "framer-motion"

export default function Testimonial() {
  return (
    <section className="relative py-28 sm:py-32 md:py-40 bg-surface/20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
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

          <blockquote className="text-lg sm:text-xl md:text-2xl text-muted-light font-medium leading-relaxed mb-6 max-w-2xl mx-auto">
            "Revenue growth is rarely a lead problem. It's usually a follow-up
            problem, a process problem, or an execution problem. Velocity helps
            solve all three."
          </blockquote>

          <div className="text-muted text-sm font-medium">
            — Velocity Sales Agency
          </div>
        </motion.div>
      </div>
    </section>
  )
}
