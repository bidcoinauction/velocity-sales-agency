import { motion } from "framer-motion"
import { Mail, Phone, MapPin, FileText, Gift, Building } from "lucide-react"

const benefits = [
  { icon: FileText, text: "No contracts to start" },
  { icon: Gift, text: "Complimentary strategy session" },
  { icon: Building, text: "Based in Boston, MA" },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-32 md:py-40 bg-surface/20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-electric rounded-full opacity-[0.02] blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-18"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto px-4">
            Ready to improve sales execution and revenue performance?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {benefits.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-electric-subtle flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-electric" />
                </div>
                <span className="text-sm sm:text-base text-muted-light font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <a
              href="mailto:velocitysalesagency@gmail.com"
              className="flex items-center gap-3 sm:gap-4 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-electric-subtle flex items-center justify-center shrink-0 group-hover:bg-electric/[0.12] transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-electric" />
              </div>
              <div>
                <div className="text-xs text-muted font-medium">Email</div>
                <div className="text-sm sm:text-base text-white group-hover:text-electric transition-colors">
                  velocitysalesagency@gmail.com
                </div>
              </div>
            </a>

            <a
              href="tel:617-678-5443"
              className="flex items-center gap-3 sm:gap-4 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-electric-subtle flex items-center justify-center shrink-0 group-hover:bg-electric/[0.12] transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-electric" />
              </div>
              <div>
                <div className="text-xs text-muted font-medium">Phone</div>
                <div className="text-sm sm:text-base text-white group-hover:text-electric transition-colors">
                  617-678-5443
                </div>
              </div>
            </a>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-electric-subtle flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-electric" />
              </div>
              <div>
                <div className="text-xs text-muted font-medium">Location</div>
                <div className="text-sm sm:text-base text-white">Boston, MA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
