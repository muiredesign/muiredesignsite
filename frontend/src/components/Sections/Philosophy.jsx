export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 md:px-24 bg-panel border-y border-line">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <div className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:ruler-pen-linear" className="text-accent text-2xl"></iconify-icon>
              <h2 className="font-mono text-xs text-accent tracking-widest uppercase">Our Approach</h2>
            </div>
            <p className="font-display text-4xl text-txt-primary leading-none">
              Why we design <br /> the way we do.
            </p>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="group border-b border-line pb-12 hover:pl-4 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl italic text-txt-primary">Sound & Silence</h3>
                <span className="font-mono text-xs text-txt-muted">01</span>
              </div>
              <p className="text-txt-secondary font-light leading-relaxed max-w-2xl">
                We treat acoustics as architecture. Through thoughtful placement of surfaces, textiles and volume, we shape how sound moves—so conversation and calm can coexist in the same space.
              </p>
            </div>
            <div className="group border-b border-line pb-12 hover:pl-4 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl italic text-txt-primary">Light as Structure</h3>
                <span className="font-mono text-xs text-txt-muted">02</span>
              </div>
              <p className="text-txt-secondary font-light leading-relaxed max-w-2xl">
                Rather than flooding rooms with uniform brightness, we layer light: ambient warmth, focused task lighting and sculptural accents. The result is depth, rhythm and a sense of time passing.
              </p>
            </div>
            <div className="group border-b border-line pb-12 hover:pl-4 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl italic text-txt-primary">Honest Materials</h3>
                <span className="font-mono text-xs text-txt-muted">03</span>
              </div>
              <p className="text-txt-secondary font-light leading-relaxed max-w-2xl">
                We specify materials that age with grace—real wood, stone, metal and fabric. No veneers pretending to be something else. Each choice tells the story of the people who live there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
