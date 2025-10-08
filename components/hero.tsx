"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-[72px] md:pt-[80px] overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/modern-clean-home-interior-dark-background.jpg"
        alt="Professional cleaning service background"
        fill
        priority
        className="object-cover object-center brightness-75"
      />

      {/* Overlay content */}
      <div className="relative z-10 max-w-4xl text-center text-white px-6 sm:px-8 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold mb-4 leading-tight text-[clamp(2rem,5vw,4.5rem)]"
        >
          Experience the <span className="text-primary">Sparkle</span> of Clean Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[clamp(1rem,2.5vw,1.5rem)] text-gray-200 mb-8 leading-relaxed"
        >
          Professional, reliable, and eco-friendly cleaning services for homes and businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Button
            asChild
            className="gold-gradient text-[color:var(--primary-foreground)] text-base sm:text-lg px-5 sm:px-6 py-3 sm:py-4 rounded-xl"
          >
            <a href="#contact">Get a Free Quote</a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-primary/60 text-primary hover:bg-primary/10 text-base sm:text-lg px-5 sm:px-6 py-3 sm:py-4 rounded-xl"
          >
            <a href="#services">Our Services</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
