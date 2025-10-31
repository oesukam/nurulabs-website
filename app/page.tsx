import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { JamboSection } from "@/components/jambo-section"
import { Stats } from "@/components/stats"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nuru Labs Ltd",
    url: "https://nurulabs.rw",
    logo: "https://nurulabs.rw/logo.png",
    description:
      "Leading IT company in Rwanda building innovative software solutions including Jambo, the premier gym management platform.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "RW",
      addressLocality: "Kigali",
      addressRegion: "Kigali",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@nurulabs.rw",
    },
    sameAs: ["https://twitter.com/nurulabs", "https://linkedin.com/company/nurulabs", "https://github.com/nurulabs"],
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jambo",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "RWF",
    },
    description:
      "Comprehensive gym management platform for fitness centers in Rwanda. Manage memberships, track attendance, process payments, and grow your fitness business.",
    provider: {
      "@type": "Organization",
      name: "Nuru Labs Ltd",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nuru Labs Ltd",
    url: "https://nurulabs.rw",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://nurulabs.rw/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <main className="min-h-screen">
        <Header />
        <Hero />
        <Stats />
        <Services />
        <JamboSection />
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
