import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import Hero from '../components/Sections/Hero'
import Philosophy from '../components/Sections/Philosophy'
import Spaces from '../components/Sections/Spaces'
import Services from '../components/Sections/Services'
import ContactForm from '../components/Sections/ContactForm'
import FAQ from '../components/Sections/FAQ'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Spaces />
        <Services />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
