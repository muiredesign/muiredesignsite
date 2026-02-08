import { useState } from 'react'

const services = [
  { icon: 'solar:sofa-2-linear', label: 'Residential Interiors' },
  { icon: 'solar:buildings-2-linear', label: 'Commercial & Workplace' },
  { icon: 'solar:chair-2-linear', label: 'Bespoke Furniture' },
]

export default function Services() {
  const [serviceModalOpen, setServiceModalOpen] = useState(false)

  function openServiceModal(e) {
    e.preventDefault()
    setServiceModalOpen(true)
  }

  return (
    <section className="py-24 px-6 md:px-24 border-t border-line bg-panel">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-4xl text-txt-primary mb-8">What We Offer</h2>
            <div className="flex flex-col gap-4">
              {services.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  onClick={openServiceModal}
                  className="flex items-center justify-between gap-4 py-4 border-b border-line group hover:pl-2 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <iconify-icon icon={item.icon} className="text-xl text-txt-muted group-hover:text-accent"></iconify-icon>
                    <span className="font-sans font-medium text-lg">{item.label}</span>
                  </div>
                  <span className="inline-flex items-center justify-center w-8 h-8 shrink-0 text-accent" aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 18L18 6M18 6l-4 4M18 6l-8 8" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center bg-base p-0 overflow-hidden relative min-h-[280px]">
            <img
              src={`${import.meta.env.BASE_URL}quote.avif`}
              alt=""
              className="w-full h-full object-cover min-h-[240px]"
            />
            <div className="absolute inset-0 bg-base/25" aria-hidden />
          </div>
        </div>
      </div>

      {serviceModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setServiceModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="bg-panel border border-line max-w-md w-full p-8 md:p-10 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:info-circle-linear" className="text-accent text-2xl"></iconify-icon>
              <h2 id="service-modal-title" className="font-mono text-xs text-accent tracking-widest uppercase">Demo site</h2>
            </div>
            <p className="font-display text-2xl text-txt-primary leading-tight mb-4">
              On your real site
            </p>
            <p className="text-txt-secondary font-light leading-relaxed mb-8">
              These links will go to dedicated service pages (e.g. Residential, Commercial, Bespoke) for SEO and clearer navigation. Each page can describe the offering in depth.
            </p>
            <button
              type="button"
              onClick={() => setServiceModalOpen(false)}
              className="font-mono text-xs uppercase tracking-widest text-txt-primary border border-txt-primary px-6 py-3 hover:bg-txt-primary hover:text-base transition-all duration-300"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
