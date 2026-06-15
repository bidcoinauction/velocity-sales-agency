import { motion } from "framer-motion"
import { TrendingUp, CalendarCheck, LineChart, Target } from "lucide-react"

const trustItems = [
  { icon: TrendingUp, label: "Sales Development" },
  { icon: CalendarCheck, label: "Appointment Setting" },
  { icon: LineChart, label: "Pipeline Management" },
  { icon: Target, label: "Revenue Optimization" },
]

export default function TrustStrip() {
  return (
    <section id="trust" className="py-10 sm:py-12 border-y border-electric-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, i) => (
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
