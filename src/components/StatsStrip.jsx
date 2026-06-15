import { motion, useMotionValue, useTransform, animate } from "framer-motion"

const stats = [
  { value: "6", label: "Core training programs", prefix: "", suffix: "" },
  { value: "500", label: "Referral bonus per deal", prefix: "$", suffix: "" },
  { value: "1-on-1", label: "Personal coaching focus", prefix: "", suffix: "" },
  { value: "100", label: "Free first consultation", prefix: "", suffix: "%" },
]

function CountUp({ to }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.floor(v))

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        animate(count, to, { duration: 1.5, ease: "easeOut" })
      }}
    >
      <motion.span>{rounded}</motion.span>
    </motion.span>
  )
}

function StatCard({ stat, i }) {
  const { value, label, prefix, suffix } = stat
  const isNumeric = !isNaN(parseInt(value))

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      className="flex flex-col items-center text-center gap-2"
    >
      <div className="text-lg sm:text-xl font-extrabold text-white tabular-nums">
        {prefix}
        {isNumeric ? <CountUp to={parseInt(value)} /> : value}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-muted font-medium">{label}</div>
    </motion.div>
  )
}

export default function StatsStrip() {
  return (
    <section id="stats" className="py-10 sm:py-12 border-y border-electric-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
