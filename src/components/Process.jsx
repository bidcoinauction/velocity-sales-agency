import { motion } from "framer-motion"
import { Search, Building2, Play, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Audit",
    description:
      "We analyze your current sales process, pipeline health, and lead sources to identify gaps and opportunities.",
    number: "01",
  },
  {
    icon: Building2,
    title: "Build",
    description:
      "We design a custom sales infrastructure — CRM configuration, scripts, sequences, and SOPs tailored to your business.",
    number: "02",
  },
  {
    icon: Play,
    title: "Execute",
    description:
      "Our team takes the reins with disciplined outreach, qualification, follow-up, and closing execution.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description:
      "We measure every metric that matters, iterate relentlessly, and refine until your pipeline runs like a machine.",
    number: "04",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto px-4">
            A proven four-step system that turns your sales process from
            chaotic to predictable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="relative flex flex-col lg:items-center text-left lg:text-center"
            >
              <div className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-0">
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-surface border border-white/[0.06] flex items-center justify-center mb-0 lg:mb-4 sm:mb-5 shrink-0">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-electric" />
                </div>
                <div className="flex-1 lg:text-center">
                  <div className="flex items-center lg:justify-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-electric/50 tracking-wider uppercase">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-xs lg:mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-electric-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
