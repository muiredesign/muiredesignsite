export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 px-6 md:px-24 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        <div className="order-2 lg:order-1 space-y-8">
          <div className="font-mono text-xs text-accent flex items-center gap-3">
            <span className="w-8 h-px bg-accent"></span>
            INTERIOR / SPATIAL / CRAFT
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-txt-primary tracking-tight">
            Spaces <br />
            <span className="italic font-light text-txt-secondary">that</span> <br />
            breathe.
          </h1>
          <p className="text-lg md:text-xl text-txt-secondary font-light max-w-md leading-relaxed">
            Muire Design creates environments rooted in light, proportion and material truth. We believe the best interiors are felt, not just seen.
          </p>
          <div className="pt-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <a href="#spaces" className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center group-hover:bg-txt-primary group-hover:text-white transition-all duration-300">
                <iconify-icon icon="solar:arrow-right-down-linear" className="text-xl"></iconify-icon>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest">View Our Work</span>
            </a>
            <a href="#contact-form" className="font-mono text-xs uppercase tracking-widest border border-txt-primary px-6 py-3 hover:bg-txt-primary hover:text-base transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 perspective-container h-[50vh] md:h-[600px] w-full flex items-center justify-center relative">
          <div className="relative w-64 md:w-80 h-80 md:h-96 preserve-3d animate-float-slow">
            <div className="absolute inset-0 bg-white shadow-xl transform translate-z-[-50px] rotate-y-12 border border-line p-2 opacity-90 transition-transform duration-700 hover:translate-z-[-80px]">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80"></div>
            </div>
            <div className="absolute inset-0 bg-white shadow-2xl transform translate-x-8 translate-y-8 translate-z-[20px] rotate-y-[-5deg] overflow-hidden border-4 border-white transition-transform duration-700 hover:rotate-y-0 hover:scale-105">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-500"></div>
            </div>
            <div className="absolute -top-20 -right-20 w-64 h-64 border border-accent/20 rounded-full transform translate-z-[-100px] animate-spin-slow pointer-events-none"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
