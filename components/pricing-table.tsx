"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingTable() {
  const pricingPlans = [
    {
      name: "Condos / Apartments (1000 sq. ft or less)",
      lines: [
        "General Cleaning: $100 – $145",
        "Deep Cleaning (One-Time Visit): $150 – $180",
        "Weekly Service: $150",
        "Bi-Weekly Service: $175",
        "Monthly Service: $200",
      ],
    },
    {
      name: "Homes / Apartments (1001 – 1500 sq. ft)",
      lines: [
        "General Cleaning: $120 – $175",
        "Deep Cleaning: $180 – $225",
        "Weekly Service: $175",
        "Bi-Weekly Service: $225",
        "Monthly Service: $270",
      ],
    },
    {
      name: "Homes / Apartments (1501 – 2000 sq. ft)",
      lines: [
        "General Cleaning: $175 – $250",
        "Deep Cleaning: $225 – $265",
        "Weekly Service: $200",
        "Bi-Weekly Service: $245",
        "Monthly Service: $290",
      ],
    },
    {
      name: "Homes / Apartments (2001 – 2500 sq. ft)",
      lines: [
        "General Cleaning: $205 – $235",
        "Deep Cleaning: $265 – $310",
        "Weekly Service: $250",
        "Bi-Weekly Service: $295",
        "Monthly Service: $325",
      ],
    },
    {
      name: "Homes / Apartments (2501 – 3000 sq. ft)",
      lines: [
        "General Cleaning: $235 – $265",
        "Deep Cleaning: $325 – $375",
        "Weekly Service: $315",
        "Bi-Weekly Service: $375",
        "Monthly Service: $420",
      ],
    },
    {
      name: "Homes / Apartments (3001 – 4000 sq. ft)",
      lines: [
        "General Cleaning: $325 – $455",
        "Deep Cleaning: $425 – $485",
        "Weekly Service: $375",
        "Bi-Weekly Service: $420",
        "Monthly Service: $455",
      ],
    },
  ]

  const includedServices = [
    "Sweep / Dust",
    "Mop / Vacuum",
    "Kitchen Cleaning",
    "Bathrooms Cleaning",
    "Bedrooms Cleaning",
    "Living / Dining Rooms Cleaning",
    "Special Dusting",
    "Window Cleaning",
  ]

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-[var(--brand-gold)]">
        Service Pricing
      </h2>

      {/* Pricing Cards Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {pricingPlans.map((plan, idx) => (
          <Card
            key={plan.name}
            className="relative bg-[#0A0807]/90 backdrop-blur-md border border-[var(--brand-gold)]/30 
            shadow-[0_0_20px_rgba(255,215,0,0.15)] hover:shadow-[0_0_35px_rgba(255,215,0,0.45)] 
            transition-all duration-500 transform hover:-translate-y-2 rounded-2xl p-4 md:p-6"
          >
            <CardHeader className="text-center">
              <CardTitle className="text-lg md:text-xl font-semibold text-[var(--brand-gold)] tracking-wide">
                {plan.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-1 text-sm text-gray-300 text-center">
              {plan.lines.map((line) => (
                <div key={line}>{line}</div>
              ))}

              <div className="mt-6 flex justify-center">
                <Button className="relative overflow-hidden px-6 py-3 text-black bg-gradient-to-r from-[#FFD700]/70 to-[#F8F6F5]/70 rounded-full font-medium border border-[#FFD700]/40 backdrop-blur-md transition-all duration-300 hover:border-[#FFD700] hover:shadow-[0_0_15px_#FFD700] hover:bg-gradient-to-r hover:from-[#FFD700]/90 hover:to-[#F8F6F5]/90">
                  <span className="relative z-10">Get a Quote</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Included Services Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-[var(--brand-gold)] mb-6">
          Included Services
        </h3>
        <ul className="grid gap-2 text-gray-200 text-sm sm:grid-cols-2 md:grid-cols-4">
          {includedServices.map((service) => (
            <li
              key={service}
              className="flex items-center justify-center gap-2 bg-[#1a1816]/60 border border-[var(--brand-gold)]/20 rounded-md py-2 px-4 hover:bg-[var(--brand-gold)]/10 transition-colors duration-300"
            >
              ✨ {service}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-center text-gray-400 mt-8">
        Senior citizens receive a{" "}
        <span className="text-[var(--brand-gold)] font-semibold">
          15% discount
        </span>{" "}
        on all eligible services.
      </p>
    </section>
  )
}
