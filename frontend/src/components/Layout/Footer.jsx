export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 md:px-24 bg-txt-primary text-base relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-tight">
              Let&apos;s <br /> <span className="italic text-white/50">Connect.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 pt-4">
              <div className="space-y-1">
                <p className="font-mono text-xs text-white/40 uppercase">Inquiries</p>
                <a href="mailto:hello@muiredesign.com" className="font-sans text-xl text-white hover:text-accent transition-colors">hello@muiredesign.com</a>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs text-white/40 uppercase">Studio</p>
                <p className="font-sans text-xl text-white">London, UK</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs text-white/40 uppercase">Phone</p>
                <a href="tel:+442071234567" className="font-sans text-xl text-white hover:text-accent transition-colors">+44 20 7123 4567</a>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-6">
              © {new Date().getFullYear()} Muire Design <br />
              Crafted with intention.
            </p>
            <nav className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1 font-mono text-xs text-white/50 uppercase tracking-widest" aria-label="Footer">
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mr-2">Navigate</span>
              <a href="#philosophy" className="hover:text-white hover:underline underline-offset-4 transition-colors">Approach</a>
              <span className="text-white/30 px-1" aria-hidden>·</span>
              <a href="#spaces" className="hover:text-white hover:underline underline-offset-4 transition-colors">Work</a>
              <span className="text-white/30 px-1" aria-hidden>·</span>
              <a href="#contact-form" className="hover:text-white hover:underline underline-offset-4 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-sans text-sm text-white/40 max-w-md">
            Muire Design creates interiors rooted in light, proportion and material honesty. Residential, commercial and bespoke projects worldwide.
          </p>
          <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
            Residential · Commercial · Bespoke
          </p>
        </div>
      </div>
    </footer>
  )
}
