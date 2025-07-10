"use client";
import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import FunctionalPractices from './components/FunctionalPractices'
import Homepage from './components/HomePage'
import Navbar from './components/Navbar'
import Services from './components/Service'
import TrustedBy from './components/TrustedBY'

export default function Home() {

    const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NR Workforce",
    "url": "https://www.nrworkforce.com", // Replace with your actual domain
    "logo": "https://www.nrworkforce.com/logo.png", // Replace with your logo URL
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX", // Your contact number
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/nrworkforce", // Your LinkedIn profile
      // Add other social media profiles
    ]
  };

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
