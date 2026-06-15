import { motion } from "framer-motion"
import { Zap, Users, Repeat, BarChart3, Shield } from "lucide-react"

const leftBullets = [
  { icon: Zap, text: "Faster speed-to-lead" },
  { icon: Users, text: "Better-qualified conversations" },
  { icon: Repeat, text: "Consistent follow-up systems" },
  { icon: BarChart3, text: "Improved pipeline visibility" },
  { icon: Shield, text: "Stronger close discipline" },
]

const rightBullets = [
  "Structured revenue systems",
  "Consistent sales execution",
  "Clear pipeline visibility",
  "Faster lead response",
  "Revenue-focused strategy",
]

export default function ValueProp() {
  return (
    <section id="value-prop" className="relative py-28 sm:py-32 md:py-40 bg-surface/20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-electric rounded-full opacity-[0.02] blur-[130px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Revenue Systems{" "}
              <span className="text-electric">That Scale</span>
            </h2>
            <p className="text-muted text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              Most businesses don't have a lead problem. They have a follow-up
              problem, a process problem, or an execution problem. Velocity
              helps build the systems and discipline required to turn
              opportunity into predictable revenue.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {leftBullets.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-electric-subtle flex items-center justify-center shrink-0">
                    <item.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-electric" />
                  </div>
                  <span className="text-sm sm:text-base text-muted-light font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-2xl p-6 sm:p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-electric" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Why Clients Choose Velocity
              </h3>
            </div>
            <div className="space-y-3.5 sm:space-y-4">
              {rightBullets.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric shrink-0 mt-2" />
                  <span className="text-muted text-sm sm:text-base">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
