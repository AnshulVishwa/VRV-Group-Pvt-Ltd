import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Building2, 
  Car, 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  Phone,
  Star
} from 'lucide-react'
import { SITE_CONFIG } from '../constants/siteConfig'

const HERO_IMAGE = '/images/hero/vrindavan-hero.jpg'

export default function Hero() {
  const [activeVertical, setActiveVertical] = useState('tours')

  const verticals = [
    {
      id: 'tours',
      label: 'Tours & Yatra',
      icon: Compass,
      badge: 'Most Popular',
      title: 'Sacred Mathura-Vrindavan Darshan',
      desc: 'Curated pilgrimage itineraries, Braj 84 Kos Yatra, VIP temple access, and certified local guides.',
      price: 'Starting from ₹15,000',
      image: '/images/services/tours.png',
      link: '/tours',
      cta: 'Explore Tour Packages',
      features: ['Priority Temple Darshan', 'AC Sightseeing Cabs', 'Pure Vegetarian Meals']
    },
    {
      id: 'real-estate',
      label: 'Real Estate',
      icon: Building2,
      badge: '100% Legally Verified',
      title: 'Prime Plots, Flats & Villas in Vrindavan',
      desc: 'Legally vetted residential and commercial plots near Omaxe Eternity, Chhatikara Road & NH-19.',
      price: 'Plots & Flats from ₹6,500/mo',
      image: '/images/services/real-estate.png',
      link: '/real-estate',
      cta: 'Browse Verified Properties',
      features: ['Clear Legal Title & Registry', 'Gated Societies', 'Zero Hidden Brokerage']
    },
    {
      id: 'car-rental',
      label: 'Car Rental',
      icon: Car,
      badge: '24/7 Available',
      title: 'Self-Drive Cars & Luxury Outstation Cabs',
      desc: 'Top-condition Hyundai i20, Scorpio Classic, and Verna for seamless local sightseeing & airport transfers.',
      price: 'Starting from ₹1,200/day',
      image: '/images/services/car-rental.jpg',
      link: '/car-rental',
      cta: 'Book Your Ride',
      features: ['Sanitized Well-Maintained Cars', 'With or Without Driver', 'Instant WhatsApp Booking']
    }
  ]

  const activeData = verticals.find((v) => v.id === activeVertical) || verticals[0]

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello VRV Group, I want to inquire about your services in Mathura-Vrindavan."
  )}`

  return (
    <section
      id="hero"
      className="relative min-h-[640px] lg:min-h-[700px] flex items-center bg-navy text-white overflow-hidden py-14 lg:py-20"
    >
      {/* Background Photography with Atmospheric Gradients */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#070e20]/95 via-[#0b1633]/90 to-[#070e20]/80" />
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-[#070e20]/40 to-[#070e20]/95 pointer-events-none" />

      {/* Heavenly Golden Aura Blobs */}
      <div className="absolute top-10 left-10 w-[480px] h-[480px] rounded-full bg-gold/15 blur-[120px] pointer-events-none heavenly-aura" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none divine-float" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Brand, Headline, Subtext & Trust Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-6"
          >
            
            {/* Pill Tag */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light shadow-sm backdrop-blur-md"
            >
              <Sparkles size={14} className="text-gold shrink-0 animate-pulse" />
              <span>Mathura &bull; Vrindavan &bull; Braj Dham</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] drop-shadow-md"
            >
              Your Trusted Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-[#f5d77f]">
                Tours, Land &amp; Mobility
              </span>
            </motion.h1>

            {/* Refined Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-sans max-w-2xl"
            >
              Experience the divine spirit of Vrindavan with complete peace of mind. VRV Group combines guided pilgrimages, certified properties, and reliable car rentals under one dependable roof.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a 
                href="#services" 
                className="btn-gold shimmer-btn text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/15 hover:bg-emerald-500 hover:text-white px-5 py-3.5 text-xs sm:text-sm font-bold text-emerald-300 backdrop-blur-md transition-all duration-300 hover:shadow-lg shadow-sm cursor-pointer"
              >
                <MessageCircle size={17} className="text-emerald-400" />
                <span>Instant WhatsApp Enquiry</span>
              </a>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span className="font-medium">100% Legally Vetted</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span className="font-medium">VIP Temple Access</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span className="font-medium">24/7 Car Fleet</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Star size={15} className="text-gold fill-gold shrink-0" />
                <span className="font-medium">5,000+ Happy Yatris</span>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Interactive Vertical Switcher Card with Smooth Motion */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-7 shadow-2xl overflow-hidden hover:border-gold/30 transition-all duration-500">
              
              {/* Tab Selector Buttons */}
              <div className="flex items-center rounded-xl bg-navy/60 p-1 border border-white/10 mb-6">
                {verticals.map((v) => {
                  const IconComp = v.icon
                  const isActive = activeVertical === v.id
                  return (
                    <button
                      key={v.id}
                      onClick={() => setActiveVertical(v.id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-gold text-[#13264f] shadow-md scale-[1.02]'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <IconComp size={14} className={isActive ? 'text-[#13264f]' : 'text-gold'} />
                      <span className="truncate">{v.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Active Tab Preview Box with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeData.id}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-4"
                >
                  {/* Image Preview with Badge */}
                  <div className="relative h-44 rounded-2xl overflow-hidden border border-white/15 group shadow-inner">
                    <img
                      src={activeData.image}
                      alt={activeData.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-navy/80 backdrop-blur-md text-gold text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border border-gold/30">
                        {activeData.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <span className="text-xs font-bold text-white/90 drop-shadow">
                        {activeData.price}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5 line-clamp-1">
                      {activeData.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {activeData.desc}
                    </p>
                  </div>

                  {/* Feature Bullet Points */}
                  <div className="space-y-1.5 pt-1">
                    {activeData.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-200">
                        <CheckCircle2 size={13} className="text-gold shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* 1-Click Action Link */}
                  <div className="pt-2">
                    <Link
                      to={activeData.link}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-[#d4af37] hover:from-[#b88e16] hover:to-gold text-[#13264f] font-extrabold text-xs py-3.5 px-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-gold/30 active:scale-95 cursor-pointer"
                    >
                      <span>{activeData.cta}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
