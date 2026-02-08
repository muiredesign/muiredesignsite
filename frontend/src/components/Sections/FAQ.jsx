import { useState } from 'react'

const faqItems = [
  {
    question: 'What does a typical project timeline look like?',
    answer: 'From first consultation to final install, residential projects usually run 6–18 months depending on scope. We’ll outline a clear phased timeline after the initial audit.',
  },
  {
    question: 'Do you work outside London?',
    answer: 'Yes. We take on projects across the UK and internationally. Remote collaboration and site visits are built into our process so distance isn’t a barrier.',
  },
  {
    question: 'What’s included in the design audit?',
    answer: 'The audit covers spatial flow, acoustics, lighting, and material honesty. We deliver a written report with recommendations and a scope proposal if you’d like to move forward.',
  },
  {
    question: 'Can you work with existing furniture and finishes?',
    answer: 'Absolutely. We often integrate existing pieces and finishes into a new scheme. The audit helps us identify what to keep, refine, or replace.',
  },
  {
    question: 'How do you charge?',
    answer: 'We work on a fee structure tailored to each project—fixed phases or percentage of build. We’re transparent about costs from the outset and will outline options in our proposal.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-32 px-6 md:px-24 bg-panel border-y border-line">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:question-circle-linear" className="text-accent text-2xl"></iconify-icon>
              <h2 className="font-mono text-xs text-accent tracking-widest uppercase">FAQ</h2>
            </div>
            <h3 className="font-display text-4xl text-txt-primary leading-tight">
              Common <span className="italic text-txt-secondary">questions.</span>
            </h3>
          </div>
          <div className="md:col-span-8 space-y-0">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-line last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-display text-xl md:text-2xl italic text-txt-primary group-hover:text-accent transition-colors">
                    {item.question}
                  </span>
                  <span className="shrink-0 w-8 h-8 flex items-center justify-center border border-line group-hover:border-accent transition-colors text-txt-secondary group-hover:text-accent">
                    {openIndex === index ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-6 text-txt-secondary font-light leading-relaxed pr-12">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
