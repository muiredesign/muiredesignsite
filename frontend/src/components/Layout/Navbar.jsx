import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = (
    <>
      <a href="#philosophy" className="text-txt-secondary hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>Approach</a>
      <a href="#spaces" className="text-txt-secondary hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>Work</a>
      <a href="#contact" className="hidden md:block px-4 py-2 border border-txt-primary hover:bg-txt-primary hover:text-white transition-all duration-300">
        Get in Touch
      </a>
    </>
  )

  return (
    <nav className="fixed top-0 w-full z-40 bg-base/80 backdrop-blur-md border-b border-line h-20 flex items-center justify-between px-6 md:px-24 transition-all duration-500">
      <div className="flex items-center gap-4">
        <a href="#" className="text-txt-primary hover:opacity-70 transition-opacity text-2xl italic tracking-tighter font-display">
          Muire Design
        </a>
      </div>
      <div className="hidden md:flex items-center gap-8 md:gap-16 font-mono text-[10px] tracking-widest uppercase">
        {navLinks}
      </div>
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 font-mono text-txt-primary"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <span className={`w-5 h-px bg-current transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
        <span className={`w-5 h-px bg-current transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`w-5 h-px bg-current transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
      </button>
      {mobileOpen && (
        <div className="absolute top-20 left-0 right-0 bg-base/95 backdrop-blur-md border-b border-line md:hidden z-30">
          <div className="flex flex-col px-6 py-6 gap-6 font-mono text-[10px] tracking-widest uppercase">
            <a href="#philosophy" className="text-txt-secondary hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>Approach</a>
            <a href="#spaces" className="text-txt-secondary hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>Work</a>
            <a href="#contact" className="px-4 py-2 border border-txt-primary w-fit hover:bg-txt-primary hover:text-base transition-all duration-300" onClick={() => setMobileOpen(false)}>
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
