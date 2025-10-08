"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  service: z.string().min(2),
  date: z.string().min(1),
  message: z.string().min(5),
})

type FormValues = z.infer<typeof FormSchema>

export function ContactSection() {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = async (values: FormValues) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    if (res.ok) {
      toast({ title: "Request received", description: "We will contact you shortly." })
      reset()
    } else {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" })
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Contact</h2>
        <p className="opacity-85 mb-4">Tell us about your home and preferred date.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
          <Input placeholder="Name" {...register("name")} aria-invalid={!!errors.name} />
          <Input placeholder="Email" type="email" {...register("email")} aria-invalid={!!errors.email} />
          <Input placeholder="Phone" {...register("phone")} aria-invalid={!!errors.phone} />
          <Input placeholder="Service (e.g., 1BR 1BA, Deep Clean)" {...register("service")} />
          <Input placeholder="Preferred date" type="date" {...register("date")} />
          <Textarea placeholder="Message" rows={5} {...register("message")} />
          <Button disabled={isSubmitting} className="gold-gradient text-[color:var(--primary-foreground)]">
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
      <div className="space-y-4">
        <iframe
          title="Dallas, TX map"
          className="w-full h-72 rounded-lg border border-border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Dallas,TX&output=embed"
        />
        <div className="text-sm">
          <a className="hover:text-primary" href="https://instagram.com" aria-label="Instagram">
            Instagram
          </a>
          <span className="mx-2 opacity-50">•</span>
          <a className="hover:text-primary" href="https://facebook.com" aria-label="Facebook">
            Facebook
          </a>
        </div>
      </div>
    </div>
  )
}
