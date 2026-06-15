import { motion } from "framer-motion"
import { Check, Zap, Repeat, Users, BarChart3, Shield } from "lucide-react"

const reasons = [
  { icon: Zap, text: "Faster speed-to-lead — reach prospects while intent is fresh" },
  { icon: Repeat, text: "Cleaner follow-up systems — no lead left behind" },
  { icon: Users, text: "Better-qualified conversations — every meeting has purpose" },
  { icon: BarChart3, text: "More predictable pipeline visibility — know what's coming" },
  { icon: Shield, text: "Stronger close discipline — process over instinct" },
]

const metrics = [
  { value: "< 5 min", label: "Speed-to-lead" },
  { value: "95%", label: "Follow-up consistency" },
  { value: "3x", label: "Pipeline clarity" },
]

export default function WhyVelocity() {
  return (
    <section id="why-velocity" className="py-20 sm:py-24 md:py-32 bg-surface/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Disciplined revenue{" "}
              <span className="text-electric">execution</span>
            </h2>
            <p className="text-muted text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              We don't just generate activity. We engineer a repeatable sales
              system — built on speed, consistency, and full-funnel visibility.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {reasons.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-electric-subtle flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-electric" />
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-electric/70 shrink-0" />
                    <span className="text-sm sm:text-base text-muted-light font-medium">
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:bg-surface-light/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-electric mb-1 sm:mb-2">
                  {metric.value}
                </div>
                <div className="text-muted text-xs sm:text-sm font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
