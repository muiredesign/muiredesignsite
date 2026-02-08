import { useState } from 'react'

export default function ContactForm() {
  const [successModalOpen, setSuccessModalOpen] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSuccessModalOpen(true)
  }

  return (
    <section id="contact-form" className="py-32 px-6 md:px-24 bg-base border-y border-line">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:letter-linear" className="text-accent text-2xl"></iconify-icon>
              <h2 className="font-mono text-xs text-accent tracking-widest uppercase">Get in Touch</h2>
            </div>
            <h3 className="font-display text-4xl text-txt-primary leading-tight mb-6">
              Start the <span className="italic text-txt-secondary">conversation.</span>
            </h3>
            <p className="text-txt-secondary font-light leading-relaxed max-w-md">
              Tell us about your project, timeline, and vision. We&apos;ll respond within a few business days.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="lg:col-span-8 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="font-mono text-xs text-txt-muted uppercase tracking-widest block">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-line text-txt-primary font-sans placeholder:text-txt-muted/60 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="font-mono text-xs text-txt-muted uppercase tracking-widest block">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-line text-txt-primary font-sans placeholder:text-txt-muted/60 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2 mb-8">
              <label htmlFor="contact-subject" className="font-mono text-xs text-txt-muted uppercase tracking-widest block">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Project type or inquiry"
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-line text-txt-primary font-sans placeholder:text-txt-muted/60 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="space-y-2 mb-10">
              <label htmlFor="contact-message" className="font-mono text-xs text-txt-muted uppercase tracking-widest block">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your space and what you have in mind..."
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-line text-txt-primary font-sans placeholder:text-txt-muted/60 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-txt-primary border border-txt-primary px-6 py-4 hover:bg-txt-primary hover:text-base transition-all duration-300"
            >
              Send message
              <iconify-icon icon="solar:arrow-right-linear" className="text-lg"></iconify-icon>
            </button>
          </form>
        </div>
      </div>

      {successModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSuccessModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          <div
            className="bg-panel border border-line max-w-md w-full p-8 md:p-10 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6 mx-auto">
              <iconify-icon icon="solar:check-circle-linear" className="text-3xl"></iconify-icon>
            </div>
            <h2 id="success-modal-title" className="font-display text-2xl text-txt-primary text-center leading-tight mb-3">
              Message sent
            </h2>
            <p className="text-txt-secondary font-light text-center leading-relaxed mb-8">
              On a live site, this would confirm delivery to your inbox. Thanks for trying the demo.
            </p>
            <button
              type="button"
              onClick={() => setSuccessModalOpen(false)}
              className="block mx-auto font-mono text-xs uppercase tracking-widest text-txt-primary border border-txt-primary px-6 py-3 hover:bg-txt-primary hover:text-base transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
