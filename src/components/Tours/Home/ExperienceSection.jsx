import { Accessibility, Landmark, Utensils, Headphones } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fbfbfe] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#a8821f] text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-2 block font-sans">
            THE VRV EXPERIENCE
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13264f] tracking-tight mb-4">
            A Sanctuary in Motion
          </h2>

          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans">
            Discover a seamless spiritual journey where ancient traditions meet modern executive comfort.
          </p>
        </div>

        {/* 4 Feature Cards Grid with Staggered Height Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: Accessible for All */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card hover:shadow-soft transition-all duration-300 flex flex-col text-center group hover:-translate-y-1 lg:mt-0">
            <div className="w-16 h-16 rounded-2xl bg-[#eef3fb] text-[#13264f] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#13264f] group-hover:text-amber-300 transition-colors duration-300">
              <Accessibility className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#13264f] mb-3">
              Accessible for All
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
              Designed with dignity, ensuring every pilgrim travels with grace and ease, regardless of mobility.
            </p>
          </div>

          {/* Card 2: Hassle-Free Darshan (Offset Down) */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card hover:shadow-soft transition-all duration-300 flex flex-col text-center group hover:-translate-y-1 lg:mt-6">
            <div className="w-16 h-16 rounded-2xl bg-[#eef3fb] text-[#13264f] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#13264f] group-hover:text-amber-300 transition-colors duration-300">
              <Landmark className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#13264f] mb-3">
              Hassle-Free Darshan
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
              Skip the queues. We orchestrate privileged access for a quiet, undisturbed connection with the divine.
            </p>
          </div>

          {/* Card 3: Sattvik Dining (Slightly Elevated) */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card hover:shadow-soft transition-all duration-300 flex flex-col text-center group hover:-translate-y-1 lg:-mt-3">
            <div className="w-16 h-16 rounded-2xl bg-[#eef3fb] text-[#13264f] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#13264f] group-hover:text-amber-300 transition-colors duration-300">
              <Utensils className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#13264f] mb-3">
              Sattvik Dining
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
              Curated, pure vegetarian meals prepared with mindfulness, sustaining your physical and spiritual well-being.
            </p>
          </div>

          {/* Card 4: 24/7 Concierge (Offset Down) */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card hover:shadow-soft transition-all duration-300 flex flex-col text-center group hover:-translate-y-1 lg:mt-6">
            <div className="w-16 h-16 rounded-2xl bg-[#eef3fb] text-[#13264f] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#13264f] group-hover:text-amber-300 transition-colors duration-300">
              <Headphones className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#13264f] mb-3">
              24/7 Concierge
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
              A dedicated team anticipating your needs around the clock, offering unparalleled peace of mind throughout your journey.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
