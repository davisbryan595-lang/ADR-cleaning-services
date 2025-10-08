export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-4 md:flex md:items-center md:justify-between">
        <p className="text-sm opacity-80">Serving Dallas, TX & surrounding areas — Mobile consultations available</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:text-primary" href="tel:+12148139919">
            Telephone: (214) 813-9919
          </a>
          <span aria-hidden="true">•</span>
          <a className="hover:text-primary" href="tel:+15167127244">
            Cellphone: (516) 712-7244
          </a>
        </div>
      </div>
    </footer>
  )
}
