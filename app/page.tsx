import Hero from "./components/Hero"
import Services from "./components/Services"
import TechStack from "./components/TechStack"
import CaseStudies from "./components/CaseStudies"
import AboutUs from "./components/AboutUs"
import ContactForm from "./components/ContactForm"
import FloatingActionButton from "./components/FloatingActionButton"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TechStack />
      <CaseStudies />
      <AboutUs />
      <ContactForm />
      <FloatingActionButton />
    </>
  )
}
