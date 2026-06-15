import { motion } from "framer-motion"
import { Building2, Target, BarChart3, TrendingUp } from "lucide-react"

const groups = [
  {
    icon: Building2,
    title: "B2B Sales Teams",
    description:
      "Companies with lead flow that needs consistent follow-up, better qualification, and disciplined pipeline management.",
  },
  {
    icon: Target,
    title: "Revenue Operations",
    description:
      "Organizations looking to build repeatable sales systems, improve conversion efficiency, and reduce revenue unpredictability.",
  },
  {
    icon: BarChart3,
    title: "Growing Companies",
    description:
      "Businesses that have outgrown founder-led sales and need structured processes to scale without losing deal velocity.",
  },
  {
    icon: TrendingUp,
    title: "Sales Leadership",
    description:
      "Leaders who want clearer pipeline visibility, stronger team execution, and data-driven decisions that drive revenue.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="relative py-28 sm:py-32 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-18"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
            Who We Help
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto px-4">
            We work with organizations that are ready to turn opportunity into
            predictable revenue.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-white/[0.06] rounded-2xl p-6 sm:p-8 card-hover hover:border-electric-border hover:shadow-[0_0_40px_-12px_rgba(74,133,240,0.15)]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-electric-subtle flex items-center justify-center mb-4 sm:mb-5">
                <group.icon className="w-5 h-5 sm:w-6 sm:h-6 text-electric" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                {group.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
