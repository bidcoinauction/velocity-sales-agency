import { motion } from "framer-motion"
import { Zap, Eye, Repeat, BarChart3 } from "lucide-react"

const stats = [
  { icon: Zap, label: "Faster Speed-to-Lead" },
  { icon: Eye, label: "Pipeline Visibility" },
  { icon: Repeat, label: "Follow-Up Consistency" },
  { icon: BarChart3, label: "Revenue Discipline" },
]

export default function StatsStrip() {
  return (
    <section id="stats" className="py-10 sm:py-14 border-y border-electric-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-electric-subtle flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-electric" />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-muted-light leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
