
import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import FunctionalPractices from './components/FunctionalPractices'
import Homepage from './components/HomePage'
import Navbar from './components/Navbar'
import Services from './components/Service'
import TrustedBy from './components/TrustedBY'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main className="min-h-screen bg-white">
        <Navbar />
        <Homepage />
        <About />
        <Services />
        <FunctionalPractices />
        <TrustedBy />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
