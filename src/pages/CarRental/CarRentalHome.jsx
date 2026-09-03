import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Car, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Fuel, 
  Users, 
  Settings, 
  Star, 
  Clock, 
  FileText, 
  ChevronDown, 
  X,
  Search,
  Check,
  Zap
} from 'lucide-react'
import { SITE_CONFIG } from '../../constants/siteConfig'
import SEOHead from '../../components/common/SEOHead'
import { CAR_FLEET, CAR_TERMS } from './data/cars'

export default function CarRentalHome() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [openFaq, setOpenFaq] = useState(null) // Inactive by default
  const [selectedDuration, setSelectedDuration] = useState('12h') // '12h' or '24h'

  // Booking / Search Form State
  const [pickupLoc, setPickupLoc] = useState('Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan')
  const [dropLoc, setDropLoc] = useState('Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan')
  const todayStr = new Date().toISOString().split('T')[0]
  const [startDate, setStartDate] = useState(todayStr)
  const [endDate, setEndDate] = useState(todayStr)

  // Quick Enquiry Form State
  const [inquiryName, setInquiryName] = useState('')
  const [inquiryPhone, setInquiryPhone] = useState('')
  const [inquiryCar, setInquiryCar] = useState('Baleno / Standard Car')
  const [inquiryDuration, setInquiryDuration] = useState('12 Hours (200 KM)')
  const [inquirySubmitted, setInquirySubmitted] = useState(false)
  const [inquiryError, setInquiryError] = useState('')

  // Modal State
  const [selectedCar, setSelectedCar] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [modalError, setModalError] = useState('')

  // Filtered fleet (featured 6 vehicles on home page)
  const featuredFleet = useMemo(() => {
    let list = CAR_FLEET
    if (activeFilter !== 'all') {
      list = list.filter((car) => car.category === activeFilter || car.type === activeFilter)
    }
    return list.slice(0, 6)
  }, [activeFilter])

  // Calculate rental duration in days
  const rentalDays = useMemo(() => {
    if (!startDate || !endDate) return 1
    const s = new Date(startDate)
    const e = new Date(endDate)
    const diffTime = e.getTime() - s.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 1
  }, [startDate, endDate])

  const openBookingModal = (car) => {
    setSelectedCar(car)
    setCustomerName('')
    setCustomerPhone('')
    setModalError('')
    setModalOpen(true)
  }

  const handleModalSubmit = (e) => {
    e.preventDefault()
    setModalError('')

    const cleanPhone = customerPhone.replace(/\D/g, '')
    if (!customerName.trim()) {
      setModalError('Please enter your full name.')
      return
    }
    if (cleanPhone.length < 10) {
      setModalError('Please enter a valid 10-digit mobile number.')
      return
    }

    const durationLabel = selectedDuration === '6h' ? '6 Hours (120 KM Limit)' : selectedDuration === '12h' ? '12 Hours (200 KM Limit)' : '24 Hours (350 KM Limit)'

    const msg = `*SELF-DRIVE BOOKING REQUEST*
━━━━━━━━━━━━━━━━━━━━━
*Vehicle:* ${selectedCar.name} (${selectedCar.categoryBadge})
*Duration:* ${durationLabel} (${rentalDays} day${rentalDays > 1 ? 's' : ''})
*Pickup Location:* ${pickupLoc}
*Drop Location:* ${dropLoc}
*Dates:* ${startDate} to ${endDate}
*Name:* ${customerName.trim()}
*Phone:* ${customerPhone.trim()}`

    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank')
    setModalOpen(false)
  }

  const handleQuickInquiry = (e) => {
    e.preventDefault()
    setInquiryError('')

    const cleanPhone = inquiryPhone.replace(/\D/g, '')
    if (!inquiryName.trim()) {
      setInquiryError('Please enter your full name.')
      return
    }
    if (cleanPhone.length < 10) {
      setInquiryError('Please enter a valid 10-digit mobile number.')
      return
    }

    const msg = `*QUICK CAR RENTAL INQUIRY*
━━━━━━━━━━━━━━━━━━━━━
*Name:* ${inquiryName.trim()}
*Phone:* ${inquiryPhone.trim()}
*Preferred Vehicle:* ${inquiryCar}
*Duration:* ${inquiryDuration}
*Pickup Location:* Flat 104 Krishna 2C, Omaxe Eternity, Vrindavan`

    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank')
    setInquirySubmitted(true)
  }

  const faqs = [
    {
      q: 'Are these cars strictly self-drive?',
      a: 'Yes, VRV Car Rental provides 100% dedicated self-drive vehicles. Enjoy complete privacy and freedom for your family darshan without driver interference.'
    },
    {
      q: 'Where is the vehicle pickup and drop location in Vrindavan?',
      a: 'Vehicle handover takes place at Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan (281121). We can also provide delivery across major Mathura-Vrindavan locations upon prior request.'
    },
    {
      q: 'What are the kilometer limits and extra charges?',
      a: 'For 6-Hour rentals, 120 KM is included. For 12-Hour rentals, 200 KM is included. For 24-Hour rentals, 350 KM is included. Standard kilometer limits apply for each vehicle slab.'
    },
    {
      q: 'What documents are required to rent a self-drive car or Activa?',
      a: 'You only need an original valid Indian Driving Licence (LMV or 2-Wheeler) and a Government Photo ID (Aadhaar Card or Passport).'
    },
    {
      q: 'Do you offer two-wheelers like Honda Activa?',
      a: 'Yes! Honda Activa is available for 6-Hour, 12-Hour, and 24-Hour rentals, making it ideal for navigating through narrow temple lanes.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <SEOHead
        title="Self-Drive Car & Scooter Rental in Vrindavan | VRV Group"
        description="Rent self-drive cars in Mathura & Vrindavan. Baleno, i20, Scorpio S11, Thar 4x4, Creta, Verna & Activa. Handover at Omaxe Eternity."
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0a1226] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background glow & subtle patterns */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} /> Self-Drive Vehicle Fleet &bull; Vrindavan
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Explore Braj at Your <br />
                <span className="text-gold">Own Peaceful Pace</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Reliable self-drive cars and Activa scooters in Mathura–Vrindavan. Clean, sanitized vehicles with handover at <strong>Omaxe Eternity</strong>.
              </p>

              {/* Feature Summary Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl text-xs text-slate-200 font-medium">
                  <strong className="text-white">Standard Cars:</strong> Baleno, i20, Swift, Dzire
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl text-xs text-slate-200 font-medium">
                  <strong className="text-white">Premium SUVs:</strong> Scorpio, Thar 4x4, Creta
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl text-xs text-slate-200 font-medium">
                  <strong className="text-white">Scooter:</strong> Honda Activa 6G / 125
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/car-rental/cars"
                  className="bg-gold hover:bg-[#e0b428] text-navy font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <Car size={16} />
                  <span>Explore All 17+ Cars</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20VRV%20Group%2C%20I%20want%20to%20inquire%20about%20self-drive%20car%20rental%20in%20Vrindavan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Booking</span>
                </a>
              </div>

            </div>

            {/* Right Column: Fleet Options Spotlight */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/20 text-navy">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold bg-navy px-2.5 py-0.5 rounded">
                      Available Options
                    </span>
                    <h3 className="font-display text-lg font-bold text-navy mt-1">
                      Self-Drive Rental Fleet
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Omaxe Eternity
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-navy">Standard Cars (Baleno, i20, Swift, Venue)</div>
                      <div className="text-[11px] text-slate-500">120 KM / 200 KM / 350 KM Limit &bull; Clean &amp; Sanitized</div>
                    </div>
                    <div className="text-right font-extrabold text-navy text-xs bg-gold/20 text-navy px-2.5 py-1 rounded-lg">
                      6h / 12h / 24h
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-navy">Premium (Scorpio S11, Thar 4x4, Creta, Verna)</div>
                      <div className="text-[11px] text-slate-500">120 KM / 200 KM / 350 KM Limit &bull; Luxury &amp; 4x4</div>
                    </div>
                    <div className="text-right font-extrabold text-navy text-xs bg-gold/20 text-navy px-2.5 py-1 rounded-lg">
                      6h / 12h / 24h
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-navy">Honda Activa (Two-Wheeler)</div>
                      <div className="text-[11px] text-slate-500">Temple Darshan &bull; Narrow Lanes</div>
                    </div>
                    <div className="text-right font-extrabold text-navy text-xs bg-gold/20 text-navy px-2.5 py-1 rounded-lg">
                      6h / 12h / 24h
                    </div>
                  </div>
                </div>

                <Link
                  to="/car-rental/cars"
                  className="mt-4 w-full bg-navy hover:bg-[#131f40] text-gold font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-gold/30"
                >
                  <span>View All 17 Vehicles &amp; Book</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>

          {/* ===================== QUICK SEARCH / DURATION SELECTOR ===================== */}
          <div className="mt-12 bg-white text-navy rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Pickup &amp; Handover Location:
                </span>
                <div className="text-sm font-extrabold text-navy flex items-center gap-1.5 mt-0.5">
                  <MapPin size={15} className="text-gold shrink-0" />
                  Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan (281121)
                </div>
              </div>

              {/* Duration Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Rental Duration:</span>
                <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setSelectedDuration('6h')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedDuration === '6h'
                        ? 'bg-navy text-gold shadow-sm'
                        : 'text-slate-600 hover:text-navy'
                    }`}
                  >
                    6 Hours (120 KM)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDuration('12h')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedDuration === '12h'
                        ? 'bg-navy text-gold shadow-sm'
                        : 'text-slate-600 hover:text-navy'
                    }`}
                  >
                    12 Hours (200 KM)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDuration('24h')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedDuration === '24h'
                        ? 'bg-navy text-gold shadow-sm'
                        : 'text-slate-600 hover:text-navy'
                    }`}
                  >
                    24 Hours (350 KM)
                  </button>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); const el = document.getElementById('fleet'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end mt-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Pickup Point
                </label>
                <select 
                  value={pickupLoc} 
                  onChange={(e) => setPickupLoc(e.target.value)}
                  className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 text-xs font-semibold text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  <option value="Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan">
                    Flat 104, Krishna 2C, Omaxe Eternity (Main Office)
                  </option>
                  <option value="Omaxe Krishna Heights, Vrindavan">Omaxe Krishna Heights</option>
                  <option value="Mathura Junction Station">Mathura Junction</option>
                  <option value="Custom Vrindavan Hotel">Custom Vrindavan Hotel / Ashram</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Rental Date
                </label>
                <input 
                  type="date" 
                  value={startDate}
                  min={todayStr}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 text-xs font-semibold text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  End Date ({rentalDays} Day{rentalDays > 1 ? 's' : ''})
                </label>
                <input 
                  type="date" 
                  value={endDate}
                  min={startDate || todayStr}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 text-xs font-semibold text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <Link 
                  to="/car-rental/cars"
                  className="w-full h-11 bg-navy hover:bg-gold hover:text-navy text-gold font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-gold/30"
                >
                  <Search size={15} />
                  <span>Browse Available Fleet</span>
                </Link>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* ===================== VALUE PROPS / ADVANTAGES ===================== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                <Car size={22} />
              </div>
              <h3 className="text-base font-bold text-navy mb-1.5">Strictly Self-Drive</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Zero chauffeur interference. Complete privacy and flexibility for your sacred family pilgrimage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                <MapPin size={22} />
              </div>
              <h3 className="text-base font-bold text-navy mb-1.5">Omaxe Eternity Handover</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Pickup directly from Flat 104, Krishna 2C, Omaxe Eternity, or convenient doorstep ashram delivery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                <Clock size={22} />
              </div>
              <h3 className="text-base font-bold text-navy mb-1.5">6h, 12h &amp; 24h Slabs</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Generous 120 KM (6h), 200 KM (12h) and 350 KM (24h) allowances with zero hassle.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-base font-bold text-navy mb-1.5">Deep Sanitized Fleet</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Every vehicle undergoes full mechanical checkup and interior sanitization before every trip.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== FEATURED FLEET HIGHLIGHT ===================== */}
      <section id="fleet" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow inline-block mb-2 font-bold text-xs uppercase tracking-widest text-gold border-b-2 border-gold pb-1">
              FEATURED VEHICLES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight mt-2">
              Popular Self-Drive Choices
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-md">
              Showing top choices. Browse the complete 17-vehicle fleet including SUVs, Sedans, Hatchbacks &amp; Scooters.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/car-rental/cars"
              className="px-5 py-2.5 bg-navy hover:bg-gold hover:text-navy text-gold text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 border border-gold/30"
            >
              <span>Explore All 17+ Cars</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Featured 6 Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {featuredFleet.map((car) => {
            const limit = selectedDuration === '6h' ? (car.kmLimit6h ?? 120) : selectedDuration === '12h' ? (car.kmLimit12h ?? 200) : (car.kmLimit24h ?? 350)

            return (
              <div
                key={car.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo & Badges */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg bg-navy/90 text-gold text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border border-gold/30">
                        {car.categoryBadge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold flex items-center gap-1">
                        <Users size={13} className="text-gold" /> {car.seats}
                      </span>
                      <span className="font-semibold flex items-center gap-1">
                        <Fuel size={13} className="text-gold" /> {car.fuel}
                      </span>
                      <span className="font-semibold flex items-center gap-1">
                        <Settings size={13} className="text-gold" /> {car.transmission}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">
                      {car.name}
                    </h3>

                    {/* Duration Allowance Badge */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 mb-3 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {selectedDuration === '6h' ? '6-Hour Slab' : selectedDuration === '12h' ? '12-Hour Slab' : '24-Hour Slab'}
                        </span>
                        <div className="text-xs font-bold text-navy">
                          Self-Drive Rental
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200 inline-block">
                          {limit} KM Included
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1 text-xs text-slate-600 mb-2">
                      {car.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check size={12} className="text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => openBookingModal(car)}
                    className="w-full bg-navy hover:bg-[#131f40] text-gold font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer border border-gold/30"
                  >
                    <span>Book Now</span>
                  </button>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hello VRV Group, I want to book the self-drive ${car.name} (${selectedDuration === '6h' ? '6h Slab' : selectedDuration === '12h' ? '12h Slab' : '24h Slab'}). Handover at Omaxe Eternity, Vrindavan.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-navy to-[#1a2c5a] rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-gold/30">
          <div>
            <h3 className="font-display text-2xl font-bold text-gold">Want to see all 17 vehicles?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Explore Thar 4x4, Scorpio N, Glanza, Fronx, Dzire, Aura, XUV 300, Creta, Seltos, MG Hector &amp; Honda Activa.
            </p>
          </div>
          <Link
            to="/car-rental/cars"
            className="shrink-0 bg-gold hover:bg-[#e0b428] text-navy font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
          >
            <Car size={16} />
            <span>Explore All 17+ Cars &amp; Scooters</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </section>

      {/* ===================== QUICK INQUIRY LEAD FORM (Item 7) ===================== */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
            <div className="text-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-navy px-3 py-1 rounded-full inline-block mb-2">
                Quick Rental Inquiry
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                Need a Custom Car or Immediate Booking?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill this quick form and our fleet manager at Omaxe Eternity will confirm availability immediately.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">Inquiry Prepared!</h3>
                <p className="text-xs text-slate-600 mt-1">WhatsApp has been opened to finalize your booking with our team.</p>
                <button
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-4 px-5 py-2 bg-navy text-gold text-xs font-bold rounded-xl"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickInquiry} className="space-y-4 text-xs">
                {inquiryError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {inquiryError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Mobile / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Select Vehicle of Interest
                    </label>
                    <select
                      value={inquiryCar}
                      onChange={(e) => setInquiryCar(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs bg-white"
                    >
                      <option value="Baleno / i20 / Swift (Standard Car)">
                        Standard Car (Baleno / i20 / Swift / Dzire)
                      </option>
                      <option value="Scorpio S11 / Scorpio N (Premium SUV)">
                        Premium SUV (Scorpio Classic / Scorpio N)
                      </option>
                      <option value="Mahindra Thar 4x4 (Off-Roader)">
                        Mahindra Thar 4x4
                      </option>
                      <option value="Hyundai Creta / Kia Seltos (Executive SUV)">
                        Hyundai Creta / Kia Seltos
                      </option>
                      <option value="Honda Activa 6G / 125 (Scooter)">
                        Honda Activa (Scooter)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Rental Duration
                    </label>
                    <select
                      value={inquiryDuration}
                      onChange={(e) => setInquiryDuration(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none text-xs bg-white"
                    >
                      <option value="6 Hours (120 KM Limit)">6 Hours (120 KM Limit)</option>
                      <option value="12 Hours (200 KM Limit)">12 Hours (200 KM Limit)</option>
                      <option value="24 Hours (350 KM Limit)">24 Hours (350 KM Limit)</option>
                      <option value="Multiple Days (Custom Outstation)">Multiple Days / Outstation</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-navy hover:bg-[#131f40] text-gold font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer border border-gold/30 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Submit Inquiry to Fleet Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS (NO DEPOSIT STEP) ===================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow inline-block mb-2 font-bold text-xs uppercase tracking-widest text-gold border-b-2 border-gold pb-1">
              EFFORTLESS PROCESS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight mt-2">
              How Self-Drive Rental Works
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Drive out within minutes with our straightforward 3-step rental handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-navy text-gold flex items-center justify-center font-display text-2xl font-bold shadow-md ring-2 ring-gold/40 mb-5">
                1
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-dark block mb-1">Step 01</span>
              <h3 className="font-display text-xl font-bold text-navy mb-2">Choose Your Vehicle</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Browse our 17+ fleet of Standard Cars, Premium SUVs, or Activa and select 6h, 12h or 24h duration.
              </p>
            </div>

            <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-navy text-gold flex items-center justify-center font-display text-2xl font-bold shadow-md ring-2 ring-gold/40 mb-5">
                2
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-dark block mb-1">Step 02</span>
              <h3 className="font-display text-xl font-bold text-navy mb-2">Quick ID Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Show your valid Indian Driving Licence and Aadhaar/Govt ID for rapid 2-minute verification.
              </p>
            </div>

            <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-navy text-gold flex items-center justify-center font-display text-2xl font-bold shadow-md ring-2 ring-gold/40 mb-5">
                3
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-dark block mb-1">Step 03</span>
              <h3 className="font-display text-xl font-bold text-navy mb-2">Handover at Omaxe</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collect sanitized vehicle keys at Flat 104, Krishna 2C, Omaxe Eternity and enjoy your pilgrimage!
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ===================== FAQ SECTION (Inactive by default) ===================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="eyebrow inline-block mb-2 font-bold text-xs uppercase tracking-widest text-gold">
              FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-gold/60 shadow-md bg-white' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 text-navy hover:text-gold-dark transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base leading-snug">{faq.q}</span>
                    <div className={`p-1.5 rounded-full bg-slate-100 text-navy transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-gold text-white' : ''
                    }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ===================== DIRECT BOOKING CTA DESK ===================== */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block eyebrow text-gold font-bold text-xs uppercase tracking-widest">
            VRV Reservation Desk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to Hit the Road in Vrindavan?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-sans">
            Need a self-drive car for an upcoming weekend, festival, or family pilgrimage? Connect directly with our fleet manager at Omaxe Eternity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`tel:${SITE_CONFIG.phone1}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-navy transition hover:bg-slate-100 shadow-md"
            >
              <Phone size={16} /> Call {SITE_CONFIG.phone1Formatted}
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20VRV%20Group%2C%20I%20want%20to%20enquire%20about%20self-drive%20car%20rental%20in%20Mathura%E2%80%93Vrindavan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg"
            >
              <MessageCircle size={17} /> WhatsApp Reservation
            </a>
          </div>
        </div>
      </section>

      {/* ===================== INTERACTIVE BOOKING MODAL ===================== */}
      {modalOpen && selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>

            <div className="text-left mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-gold/15 text-[#b88e16] px-2.5 py-1 rounded-md">
                {selectedCar.categoryBadge} Self-Drive
              </span>
              <h3 className="font-display text-2xl font-bold text-navy mt-2">
                Reserve {selectedCar.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {selectedDuration === '6h' ? '6 Hours (120 KM Included)' : selectedDuration === '12h' ? '12 Hours (200 KM Included)' : '24 Hours (350 KM Included)'} &bull; {selectedCar.seats} &bull; {selectedCar.fuel}
              </p>
            </div>

            {modalError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {modalError}
              </div>
            )}

            <form onSubmit={handleModalSubmit} className="space-y-3.5 text-left text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3.5 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Mobile / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3.5 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Pickup Location</label>
                  <select
                    value={pickupLoc}
                    onChange={(e) => setPickupLoc(e.target.value)}
                    className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan">
                      Flat 104 Krishna 2C, Omaxe Eternity (Main Office)
                    </option>
                    <option value="Omaxe Krishna Heights, Vrindavan">Omaxe Krishna Heights</option>
                    <option value="Mathura Junction Station">Mathura Junction</option>
                    <option value="Custom Vrindavan Spot">Custom Vrindavan Spot</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Drop Location</label>
                  <select
                    value={dropLoc}
                    onChange={(e) => setDropLoc(e.target.value)}
                    className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="Flat No. 104, Krishna 2C, Omaxe Eternity, Vrindavan">
                      Flat 104 Krishna 2C, Omaxe Eternity (Main Office)
                    </option>
                    <option value="Omaxe Krishna Heights, Vrindavan">Omaxe Krishna Heights</option>
                    <option value="Mathura Junction Station">Mathura Junction</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    min={todayStr}
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">End Date</label>
                  <input
                    type="date"
                    min={startDate || todayStr}
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-3 text-xs text-navy focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Booking Details Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-600 block">Duration &amp; Slab</span>
                  <strong className="text-xs text-navy">
                    {rentalDays} Day{rentalDays > 1 ? 's' : ''} &bull; {selectedDuration === '6h' ? '6h (120 KM)' : selectedDuration === '12h' ? '12h (200 KM)' : '24h (350 KM)'}
                  </strong>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-slate-600 block">Included Distance</span>
                  <strong className="text-sm font-bold text-emerald-700">
                    {(selectedDuration === '6h' ? (selectedCar.kmLimit6h ?? 120) : selectedDuration === '12h' ? (selectedCar.kmLimit12h ?? 200) : (selectedCar.kmLimit24h ?? 350)) * rentalDays} KM
                  </strong>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-navy hover:bg-[#131f40] text-gold font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2 border border-gold/30"
              >
                <MessageCircle size={17} />
                <span>Confirm &amp; Send to WhatsApp Desk</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}
