import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What services does VRV Group provide?',
    answer: 'VRV Group brings Tours & Travel, Car Rental and Real Estate services together under one roof, with a focus on customers looking for reliable local support in and around Vrindavan and Mathura.',
  },
  {
    question: 'Can I plan a Vrindavan or Braj trip with VRV Group?',
    answer: 'Yes. Our Tours & Travel service is designed for local sightseeing, pilgrimage and family travel. You can discuss your dates, group size and requirements with the team to build a suitable plan.',
  },
  {
    question: 'Can I book a car for local sightseeing or outstation travel?',
    answer: 'Yes. Our Car Rental service covers local sightseeing as well as outstation travel. Vehicle availability and the final booking depend on your dates, route and vehicle requirement.',
  },
  {
    question: 'Does VRV Group help with property requirements?',
    answer: 'Yes. Our Real Estate service supports residential and commercial property and plot requirements. Property details, availability and verification should be confirmed for each individual listing.',
  },
  {
    question: 'Why should I choose a local service provider?',
    answer: 'A local team can provide practical knowledge of the area, routes, neighbourhoods and customer requirements. Our goal is to combine that local understanding with clear communication and dependable service.',
  },
  {
    question: 'How can I enquire about a service?',
    answer: 'Use the Contact Us page from the navigation or footer. You can share what you need, your preferred dates or location, and any other relevant details so the team can respond with the appropriate options.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null) // Inactive by default

  return (
    <section className="bg-white px-5 sm:px-6 md:px-16 py-16 md:py-24 border-b border-slate-200 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-3">Frequently asked questions</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-3">
            Questions you may have
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
            A quick overview of the questions customers commonly ask before choosing a service.
          </p>
        </motion.div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div 
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-gold/60 shadow-md bg-slate-50/60' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 text-navy hover:text-gold transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base leading-snug">{faq.question}</span>
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`p-1.5 rounded-full transition-colors shrink-0 ${
                      isOpen ? 'bg-gold text-white' : 'bg-slate-100 text-navy'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
