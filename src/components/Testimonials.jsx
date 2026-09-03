import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import testimonials from '../data/testimonials.js'

function Stars({ rating }) {
  return (
    <div className="flex gap-1 mb-3" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < rating ? 'text-gold fill-gold' : 'text-slate-300'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const marqueeItems = [...testimonials, ...testimonials]

  return (
    <section className="section-bg py-16 md:py-24 border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 mb-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow mb-3">What people say</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-3">
            Trusted by Our Community
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Real stories and experiences from families, pilgrims, and investors who trusted VRV Group in Mathura–Vrindavan.
          </p>
        </motion.div>
      </div>

      {/* Marquee Track with Left & Right Gradient Shadows */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F5F5F3] to-transparent z-10" />
        
        {/* Right Fade Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F5F5F3] to-transparent z-10" />

        <div className="animate-marquee gap-6 py-4">
          {marqueeItems.map((t, idx) => (
            <div 
              key={`${t.id}-${idx}`}
              className="w-[320px] sm:w-[380px] shrink-0 group relative bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:border-gold/40 flex flex-col justify-between select-none"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-gold/15 group-hover:text-gold/30 transition-colors pointer-events-none" />
              
              <div>
                <Stars rating={t.rating} />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-serif italic line-clamp-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
              
                <div>
                  <p className="font-bold text-xs sm:text-sm text-navy group-hover:text-gold transition-colors">{t.name}</p>
                  <p className="text-[11px] text-slate-400 font-sans">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
