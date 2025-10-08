"use client"

import pricing from "@/data/pricing.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingTable() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Pricing</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {pricing.plans.map((p) => (
          <Card key={p.name} className="glass">
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm">
              {p.lines.map((l) => (
                <div key={l}>{l}</div>
              ))}
              <Button className="mt-4 gold-gradient text-[color:var(--primary-foreground)]">Get a Quote</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-xs opacity-70 mt-3">Senior citizens receive a 15% discount on eligible services.</p>
    </div>
  )
}
