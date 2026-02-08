import { useRef } from 'react'

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    location: 'Kyoto, Japan',
    title: 'Maple House',
    alt: 'Minimalist living room',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2074&auto=format&fit=crop',
    location: 'Copenhagen, DK',
    title: 'Nordic Light',
    alt: 'Modern bathroom',
  },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop',
    location: 'Berlin, DE',
    title: 'Concrete Atelier',
    alt: 'Dark interior',
  },
]

const GAP = 32

export default function Spaces() {
  const scrollRef = useRef(null)

  function scroll(direction) {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const cardWidth = el.clientWidth <= 768 ? el.clientWidth * 0.85 : 600
    const amount = (cardWidth + GAP) * (direction === 'left' ? -1 : 1)
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id="spaces" className="py-32 bg-base overflow-hidden">
      <div className="px-6 md:px-24 mb-16 flex flex-col md:flex-row justify-between items-end">
        <h2 className="font-display text-6xl text-txt-primary tracking-tight">Selected <span className="italic text-accent">Projects</span></h2>
        <div className="flex items-center gap-2 font-mono text-xs text-txt-muted uppercase mt-4 md:mt-0">
          <iconify-icon icon="solar:mouse-circle-linear" className="text-lg"></iconify-icon>
          Scroll horizontally
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-6 md:px-24 pb-12 snap-x snap-mandatory scrollbar-hide w-full"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projects.map((project) => (
          <div key={project.title} className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[70vh] relative group overflow-hidden cursor-pointer">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex justify-between items-end border-t border-white/30 pt-6">
                <div>
                  <span className="block font-mono text-[10px] text-white/80 uppercase mb-2">{project.location}</span>
                  <h3 className="font-display text-3xl text-white italic">{project.title}</h3>
                </div>
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 flex items-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[70vh] relative group overflow-hidden cursor-pointer bg-accent">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-9xl text-white opacity-20 italic">More</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white text-txt-primary px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest">
              View Archive
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 pt-4 pb-8 px-6 md:px-24">
        <button
          type="button"
          onClick={() => scroll('left')}
          className="w-12 h-12 flex items-center justify-center border border-line text-txt-primary hover:border-accent hover:text-accent transition-all duration-300"
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className="w-12 h-12 flex items-center justify-center border border-line text-txt-primary hover:border-accent hover:text-accent transition-all duration-300"
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
