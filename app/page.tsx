import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { PricingTable } from "@/components/pricing-table"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Gallery } from "@/components/gallery"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="services" className="py-16">
        <ServicesGrid />
      </section>
      <section id="pricing" className="py-16">
        <PricingTable />
      </section>
      <section id="gallery" className="py-16">
        <Gallery />
      </section>
      <section id="testimonials" className="py-16">
        <TestimonialsCarousel />
      </section>
      <section id="contact" className="py-16">
        <ContactSection />
      </section>
    </>
  )
}
