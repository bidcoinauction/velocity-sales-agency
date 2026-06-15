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
    <section id="stats" className="py-12 sm:py-14 border-y border-electric-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-electric-subtle flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-electric" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-muted-light whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
