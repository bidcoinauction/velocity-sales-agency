import { motion } from "framer-motion"
import { TrendingUp, CalendarCheck, LineChart, Target } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Sales Development",
    description:
      "Create a consistent flow of qualified conversations with prospects that match your ideal customer profile.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Setting",
    description:
      "Turn interest into booked meetings through disciplined outreach, qualification, and follow-up.",
  },
  {
    icon: LineChart,
    title: "Pipeline Management",
    description:
      "Improve deal visibility, follow-up consistency, and movement through every stage of the sales process.",
  },
  {
    icon: Target,
    title: "Revenue Optimization",
    description:
      "Identify bottlenecks, improve conversion efficiency, and create more predictable revenue performance.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-18"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
            Revenue Services
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto px-4">
            Built to create more conversations, better follow-up, and stronger
            revenue outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-surface border border-white/[0.06] rounded-2xl p-6 sm:p-8 card-hover hover:border-electric-border"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-electric-subtle flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-electric/[0.10] transition-colors">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-electric" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
