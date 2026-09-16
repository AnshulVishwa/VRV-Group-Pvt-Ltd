
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, ChevronDown, ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection({
  destination,
  setDestination,
  travelDate,
  setTravelDate,
  yatris,
  setYatris,
  groupCount,
  setGroupCount,
  onPlanVisit
}) {
  const isGroup = yatris === 'Group (5+)'

  return (
    <section className="relative min-h-[640px] lg:min-h-[700px] flex items-center bg-navy text-white overflow-hidden py-14 lg:py-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/services/tours.png"
          alt="VRV Tours pilgrimage experience"
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000"
        />

        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#070e20]/95 via-[#0b1633]/90 to-[#070e20]/80" />
        <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-[#070e20]/40 to-[#070e20]/95 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Heading & Concise Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} /> Sacred Braj Pilgrimage &bull; VRV Tours
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] drop-shadow-md">
              Sacred Darshan Yatras in <br />
              <span className="text-[#F7D070] font-display">
                Vrindavan &amp; Mathura
              </span>
            </h1>

            <p className="text-slate-200/90 text-xs sm:text-sm leading-relaxed max-w-lg font-sans">
              Personalized darshan itineraries, hassle-free temple passes, and
              experienced local Brajwasi guides for peaceful family yatras.
            </p>

            {/* Concise Trust Highlights */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/15 text-sm text-slate-300">
              <div>
                <span className="font-bold text-[#F7D070] text-sm block">
                  100% Sattvik
                </span>
                <span>Pure Meals &amp; Stays</span>
              </div>

              <div className="w-px h-7 bg-white/20" />

              <div>
                <span className="font-bold text-[#F7D070] text-sm block">
                  VIP Support
                </span>
                <span>Senior Citizen Friendly</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: "Plan Your Path" Vertical Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-7 sm:p-8 shadow-2xl border border-slate-100 max-w-md w-full">
              <h3 className="font-display text-2xl font-bold text-center text-[#13264f] mb-6">
                Plan Your Sacred Yatra
              </h3>

              <form
                onSubmit={onPlanVisit}
                className="space-y-3.5 font-sans text-xs"
              >

                {/* DESTINATION FIELD */}
                <div>
                  <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1">
                    DESTINATION / TEMPLE ROUTE
                  </label>

                  <div className="relative flex items-center border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/30 transition-all">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mr-2" />

                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-transparent text-xs font-medium text-slate-700 outline-none cursor-pointer"
                    >
                      <option value="Vrindavan & Mathura">
                        Vrindavan &amp; Mathura Darshan
                      </option>

                      <option value="Goverdhan & Barsana">
                        Goverdhan &amp; Barsana Special
                      </option>

                      <option value="Gokul & Nandgaon">
                        Gokul, Nandgaon &amp; Raman Reti
                      </option>

                      <option value="Braj 84 Kos">
                        Complete Braj 84 Kos Yatra
                      </option>

                      <option value="Agra & Taj Mahal">
                        Agra &amp; Taj Mahal Extension
                      </option>
                    </select>
                  </div>
                </div>

                {/* DATE & TRAVELERS 2-COLUMN ROW */}
                <div className="grid grid-cols-2 gap-3">

                  {/* DATE FIELD */}
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1">
                      TRAVEL DATE
                    </label>

                    <div className="relative flex items-center border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/30 transition-all">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0 mr-1.5" />

                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full bg-transparent text-xs font-medium text-slate-700 outline-none cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* TRAVELERS FIELD */}
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1">
                      PILGRIMS
                    </label>

                    <div className="relative flex items-center border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/30 transition-all">
                      <Users className="w-4 h-4 text-slate-400 shrink-0 mr-1.5" />

                      <select
                        value={yatris}
                        onChange={(e) => setYatris(e.target.value)}
                        className="w-full bg-transparent text-xs font-medium text-slate-700 outline-none cursor-pointer pr-3"
                      >
                        <option value="1 Pilgrim">1 Pilgrim</option>
                        <option value="2-4 Pilgrims">
                          2-4 Pilgrims
                        </option>
                        <option value="Group (5+)">
                          Group (5+)
                        </option>
                      </select>

                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 pointer-events-none absolute right-2" />
                    </div>
                  </div>
                </div>

                {/* DYNAMIC GROUP SIZE INPUT */}
                {isGroup && (
                  <div className="animate-fade-in">
                    <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1">
                      NUMBER OF PILGRIMS IN GROUP{' '}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="number"
                      min="5"
                      max="150"
                      required
                      placeholder="e.g. 8, 15, 25 members"
                      value={groupCount || ''}
                      onChange={(e) =>
                        setGroupCount && setGroupCount(e.target.value)
                      }
                      className="w-full px-3 py-2 rounded-xl border border-gold bg-amber-50/30 text-xs font-semibold text-slate-800 outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                )}

                {/* BEGIN JOURNEY SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-[#F7D070] hover:bg-[#ebd05d] text-[#13264f] font-bold text-xs py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95 cursor-pointer uppercase tracking-wider"
                >
                  <span>Request Custom Itinerary</span>
                  <ArrowRight className="w-4 h-4 text-[#13264f]" />
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
