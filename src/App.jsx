import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import StatsStrip from "./components/StatsStrip"
import WhoWeHelp from "./components/WhoWeHelp"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"
import ValueProp from "./components/ValueProp"
import CTASection from "./components/CTASection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <WhoWeHelp />
        <Services />
        <Testimonial />
        <ValueProp />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
