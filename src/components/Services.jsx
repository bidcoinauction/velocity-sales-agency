import { motion } from "framer-motion"
import { UserCheck, BrainCircuit, Mic } from "lucide-react"

const services = [
  {
    icon: UserCheck,
    title: "1-on-1 Coaching",
    tagline: "Personal & Accountable",
    description:
      "Direct, tailored coaching and support that meets you exactly where you are and pushes you forward.",
  },
  {
    icon: BrainCircuit,
    title: "Psychology of Sales",
    tagline: "Sell the Way Brains Buy",
    description:
      "Understand the human decision process — trust, emotion, timing — so the close feels natural, never forced.",
  },
  {
    icon: Mic,
    title: "Confidence & Communication",
    tagline: "Own the Room",
    description:
      "Build the presence and command to lead any conversation. Speak with clarity, conviction, and control.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic uppercase text-white mb-3 sm:mb-4 tracking-tight">
            Coaching Programs
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto px-4">
            Built around how people actually think, decide, and buy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12 }}
              className="group relative bg-surface border border-white/[0.06] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-electric-border hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.12)]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-electric-subtle flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-electric/[0.12] transition-colors">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-electric" />
              </div>
              <div className="text-xs font-semibold text-electric/60 uppercase tracking-widest mb-1">
                {service.tagline}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
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
