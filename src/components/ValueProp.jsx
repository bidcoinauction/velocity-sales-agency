import { motion } from "framer-motion"
import { Shield, Target, Heart, Zap, BarChart3 } from "lucide-react"

const items = [
  {
    icon: Shield,
    text: "Owner-led, never outsourced — you work directly with Thomas",
  },
  {
    icon: Target,
    text: "Tailored to your goals — no cookie-cutter programs",
  },
  {
    icon: Heart,
    text: "Built to stick — psychology, systems, and habits that move deals forward",
  },
]

export default function ValueProp() {
  return (
    <section id="value-prop" className="py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Coaching that actually{" "}
              <span className="text-electric">sticks</span>
            </h2>
            <p className="text-muted text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              Most sales training is a two-day hype cycle. We build skills that
              stay with you — through psychology, accountability, and real
              practice.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {items.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-electric-subtle flex items-center justify-center shrink-0 mt-0.5">
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
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-electric" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                What sets us apart
              </h3>
            </div>
            <div className="space-y-4">
              {[
                "Direct access to the founder — no account managers",
                "No contracts. Start when you're ready.",
                "First consultation is completely free",
                "Based in Boston, MA — serving clients nationwide",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <BarChart3 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
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
