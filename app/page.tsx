'use client';

import { useEffect, useCallback, useState } from 'react';
import {
  FaWrench,
  FaPhone,
  FaBolt,
  FaShieldAlt,
  FaMobileAlt,
  FaDollarSign,
  FaSearchLocation,
  FaMousePointer,
  FaFileSignature,
  FaCheckCircle,
  FaTruckPickup,
  FaPaperPlane,
  FaWhatsapp,
  FaBars,
  FaCar,
  FaTools,
  FaSnowflake,
  FaHandPaper,
  FaCog,
  FaOilCan,
  FaExchangeAlt,
} from 'react-icons/fa';
// import emailjs from '@emailjs/browser';
import InstallButton from './components/InstallButton';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string; desc: string } | null>(null);

  // Smooth scroll handler
  const handleAnchorClick = useCallback((event: MouseEvent) => {
    const target = event.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');

    if (!href || !href.startsWith('#')) return;

    event.preventDefault();

    const targetId = href.substring(1);
    if (!targetId) return;

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Close mobile menu after click
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    // Add smooth scroll listeners to all internal links
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Header scroll effect
    const header = document.querySelector('header') as HTMLElement | null;
    const handleScroll = () => {
      if (!header) return;
      header.style.background =
        window.scrollY > 100
          ? 'rgba(10, 10, 10, 0.95)'
          : 'linear-gradient(135deg, var(--dark-bg), #1a1a2e)';
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleAnchorClick]);

  // Form submission with EmailJS → WhatsApp
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Build WhatsApp message
    const message =
      `*New Service Request from The Garage Auto website*\n\n` +
      `Name: ${data.name || '—'}\n` +
      `Phone: ${data.phone || '—'}\n` +
      `Email: ${data.email || '—'}\n` +
      `Service: ${data.service || '—'}\n` +
      `Location: ${data.location || '—'}\n` +
      `Vehicle & Issue:\n${data.message || '—'}\n\n` +
      `Sent from website form • ${new Date().toLocaleString('en-KE')}`;

    // The Garage Auto WhatsApp number (without + or 00)
    const phoneNumber = "254726938838"; // ← Your real number

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    // Success feedback
    alert("Redirecting to WhatsApp... Please press SEND in the chat.");

    form.reset();
  };

  return (
    <>

      <header>
        <nav>
          <div className="logo">
            <img
              src="/logo.png"
              alt="The Garage Auto Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain"
            />
          </div>
          {/* Hamburger button - visible only on mobile */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>

          {/* Navigation links - hidden on mobile until toggled */}
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#pain-points">Why Choose Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#booking">Book Now</a></li>
            <li><a href="#map-section">Location</a></li>
          </ul>

          {/* Desktop call button */}
          <a href="tel:+254726938838" className="cta-btn cta-btn-desktop">
            <FaPhone /> Call Now
          </a>

          {/* Mobile-only simple call button */}
          <a href="tel:+254726938838" className="cta-btn-mobile">
            <FaPhone />
          </a>
        </nav>
      </header>

      <section id="hero" className="relative min-h-screen flex flex-col justify-center">
        {/* Hero main content – always on top */}
        <div className="hero-content relative z-10 px-4 md:px-8 py-12 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            Your Car in Good Hands – Professional Auto Services in Mirema
          </h1>

          <div className="hero-badges flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="hero-badge bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-full px-5 py-3 flex items-center gap-3 shadow-lg">
              <span className="text-xl md:text-2xl font-bold text-[#00ff88]">5.0</span>
              <span className="text-gray-200">Google Reviews</span>
            </div>
            <div className="hero-badge bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-full px-5 py-3 flex items-center gap-3 shadow-lg">
              <span className="text-xl md:text-2xl font-bold text-[#00aaff]">Expert</span>
              <span className="text-gray-200">Team – All Makes & Models</span>
            </div>
            <div className="hero-badge bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-full px-5 py-3 flex items-center gap-3 shadow-lg">
              <span className="text-xl md:text-2xl font-bold text-[#ff6b00]">Honest</span>
              <span className="text-gray-200">Prices • Fast Turnaround</span>
            </div>
          </div>

          <p className="hero-subtitle max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-8 md:mb-10">
            At The Garage Auto, we keep your car running right. From oil changes to engine repairs and full restorations, our skilled team handles everything with care, precision, and modern tools. Honest work, fair prices, great service – your car is in good hands.
          </p>

          <a
            href="tel:+254726938838"
            className="breakdown-btn inline-flex items-center gap-3 bg-[#00aaff] hover:bg-[#0090d9] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <FaPhone className="text-xl" /> Call or WhatsApp Us Now
          </a>
        </div>
       {/* Brands bar – always below, full width */}
<div className="brands-bar py-8 md:py-12 bg-gradient-to-b from-gray-950/80 to-transparent border-t border-gray-800/50">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="max-w-3xl mx-auto mb-8 md:mb-12 px-6 py-5 md:py-7 rounded-2xl bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-gray-900/50 border border-[#00aaff]/40 backdrop-blur-xl shadow-2xl shadow-[#00aaff]/20">
      <p className="text-center text-gray-100 font-bold text-sm md:text-base tracking-widest uppercase animate-pulse-slow">
        <span className="bg-gradient-to-r from-[#00ff88] via-[#00aaff] to-[#00ff88] bg-clip-text text-transparent">We proudly service and repair these leading brands</span>
      </p>
    </div>
    {/* Auto-scrolling brands carousel */}
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
      
      {/* Scrolling container */}
      <div className="brands-scroll-container relative w-full overflow-hidden">
        <style jsx>{`
          @keyframes scrollBrands {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-250px * 4 - 2rem * 4)); }
          }
          .brands-track {
            animation: scrollBrands 25s linear infinite;
            width: fit-content;
            display: flex;
            gap: 2rem;
          }
          .brands-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="brands-track">
          {/* Double the items for seamless loop */}
          {[
            ...Array(2)].flatMap((_, setIdx) => 
              [
                { src: "/brands/Audi-logo.png", alt: "Audi" },
                { src: "/brands/toyota-logo.jpeg", alt: "Toyota" },
                { src: "/brands/landrover-logo.jpeg", alt: "Land Rover" },
                { src: "/brands/mazda-logo.jpeg", alt: "Mazda" },
                { src: "/brands/porsche-logo.jpeg", alt: "Porsche" },
                { src: "/brands/mercedes-benz-logo.png", alt: "Mercedes-Benz" },
                { src: "/brands/bmw-log.png", alt: "BMW" },
                { src: "/brands/volks-wagen.jpeg", alt: "Volkswagen" },
              ].map((brand, idx) => (
                <div
                  key={`${setIdx}-${idx}`}
                  className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36 aspect-square bg-gray-800/50 rounded-xl border border-gray-700/50 flex items-center justify-center p-3 md:p-4 transition-all duration-300 hover:bg-gray-700/70 hover:scale-105 hover:shadow-xl hover:shadow-[#00aaff]/25"
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="max-h-[82%] max-w-[82%] object-contain grayscale transition-all duration-400 hover:grayscale-0 hover:brightness-110 hover:contrast-125"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/100x100/333/white?text=${brand.alt.charAt(0)}`;
                    }}
                  />
                </div>
              ))
            )}
          
        </div>
      </div>
    </div>
  </div>
</div>
      </section>
      <section id="pain-points" className="pain-points">
        <h2>Why Drivers in Nairobi Trust The Garage Auto</h2>
        <div className="pain-grid">
          <div className="pain-item">
            <FaShieldAlt />
            <h3>Honest & Transparent</h3>
            <p>
              No hidden fees. Clear quotes upfront. We explain every repair in plain language so you know exactly what you're paying for.
            </p>
          </div>
          <div className="pain-item">
            <FaBolt />
            <h3>Expert Mechanics</h3>
            <p>
              Certified team with years of experience on all makes and models – from everyday sedans to premium vehicles.
            </p>
          </div>
          <div className="pain-item">
            <FaTools />
            <h3>Modern Diagnostics</h3>
            <p>
              AI-assisted tools and state-of-the-art equipment for fast, accurate diagnosis – saving you time and money.
            </p>
          </div>
          <div className="pain-item">
            <FaMobileAlt />
            <h3>Convenient & Reliable</h3>
            <p>
              Located in Mirema, easy access, same-day service on most jobs, and full car rescue when you need it most.
            </p>
          </div>
        </div>
      </section>
      <section id="workmanship" className="relative py-20 md:py-32 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,170,255,0.07),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,255,136,0.05),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-[#00aaff]/15 to-[#00ff88]/10 border border-[#00aaff]/30 backdrop-blur-md shadow-lg shadow-[#00aaff]/5">
              <span className="text-xs md:text-sm font-bold tracking-widest text-[#00aaff] uppercase">Excellence in Motion</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#00aaff] via-[#00ff88] to-[#00aaff] bg-clip-text text-transparent drop-shadow-lg">
                Our Workmanship
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Precision engineering in action — real repairs, real results, real expertise in Mirema.
            </p>
          </div>
          {/* Horizontal Video Carousel - Auto Scrolling */}
          <div className="relative">
            {/* Fade edges for premium look */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

            {/* Auto-scrolling video container */}
            <div className="relative w-full overflow-hidden">
              <style jsx>{`
                @keyframes scrollVideos {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-420px * 3 - 2rem * 3)); }
                }
                .videos-track {
                  animation: scrollVideos 25s linear infinite;
                  width: fit-content;
                  display: flex;
                  gap: 2rem;
                  padding: 1rem 0;
                }
                .videos-track:hover {
                  animation-play-state: paused;
                }
                @media (max-width: 1024px) {
                  @keyframes scrollVideos {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-360px * 3 - 1.5rem * 3)); }
                  }
                }
                @media (max-width: 768px) {
                  @keyframes scrollVideos {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-320px * 3 - 1.5rem * 3)); }
                  }
                }
              `}</style>
              
              <div className="videos-track">
                {/* Triple the items for seamless loop */}
                {[
                  ...Array(3)].flatMap((_, setIdx) => 
                    [
                      {
                        src: "/images/our-technical-team.mp4",
                        title: "Technical Precision",
                        desc: "Real-time diagnostics & expert execution",
                      },
                      {
                        src: "/images/engine-testing.mp4",
                        title: "Engine Optimization",
                        desc: "Performance testing & tuning",
                      },
                      {
                        src: "/images/bmw-engine.mp4",
                        title: "Premium Overhaul",
                        desc: "High-end vehicle specialists",
                      },
                    ].map((item, idx) => (
                      <div
                        key={`${setIdx}-${idx}`}
                        className="video-card group snap-start"
                        onClick={() => setSelectedVideo(item)}
                      >
                        <div className="relative aspect-video">
                          <video
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          >
                            <source src={item.src} type="video/mp4" />
                          </video>

                          {/* Dark overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                          {/* Text */}
                          <div className="absolute bottom-0 p-4 w-full">
                            <h4 className="text-white font-semibold text-lg">
                              {item.title}
                            </h4>
                            <p className="text-gray-300 text-sm">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>

          {/* Video Modal */}
          {selectedVideo && (
            <div className="video-modal" onClick={() => setSelectedVideo(null)}>
              <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                  className="video-modal-close"
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Close video"
                >
                  ✕
                </button>
                <video
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full"
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                </video>
                <div className="video-modal-info">
                  <h3>{selectedVideo.title}</h3>
                  <p>{selectedVideo.desc}</p>
                </div>
              </div>
            </div>
          )}
          {/* CTA */}
          <div className="text-center mt-16 md:mt-24">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-3 px-10 md:px-12 py-6 md:py-7 bg-gradient-to-r from-[#00aaff] via-[#0090d9] to-[#00aaff] hover:from-[#0090d9] hover:via-[#00aaff] hover:to-[#0090d9] text-white font-extrabold text-lg md:text-xl rounded-full shadow-2xl shadow-[#00aaff]/50 hover:shadow-[0_0_40px_rgba(0,170,255,0.8)] transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 border border-[#00aaff]/40 hover:border-[#00ff88]/60 group backdrop-blur-sm"
            >
              <FaTools className="text-2xl md:text-3xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span>Experience the Difference – Book Now</span>
            </a>
          </div>
        </div>
      </section>
      <section className="testimonials-section py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00aaff] to-[#00ff88] mb-16">
            What Our Customers Say
          </h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Fixed my transmission in 2 days at a fair price. Very professional team in Mirema!"
              </p>
              <p className="testimonial-author">— John M., Kasarani</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "AC was dead for weeks. They sorted it same day and explained everything clearly."
              </p>
              <p className="testimonial-author">— Mary W., Roysambu</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Car rescue at night was fast and affordable. Best garage in Nairobi hands down."
              </p>
              <p className="testimonial-author">— Peter O., Thika Road</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sales-flow" className="sales-flow">
        <h2>Your Smooth Journey with The Garage Auto</h2>
        <div className="flow-steps">
          <div className="step">
            <FaSearchLocation />
            <h3>1. Tell Us the Problem</h3>
            <p>Call, WhatsApp, or use our quick form – we respond fast.</p>
          </div>
          <div className="step">
            <FaMousePointer />
            <h3>2. Get a Clear Quote</h3>
            <p>Honest pricing with no surprises. Book at your convenience.</p>
          </div>
          <div className="step">
            <FaFileSignature />
            <h3>3. Drop Off or We Come to You</h3>
            <p>Car rescue available. Full service in our well-equipped Mirema workshop.</p>
          </div>
          <div className="step">
            <FaCheckCircle />
            <h3>4. Drive Away Happy</h3>
            <p>Quality work, warranty on parts & labour, and a car that feels brand new.</p>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <h2>Our Services – Professional, Reliable, Complete</h2>
        <p className="services-intro">From routine maintenance to major repairs and restorations, we do it all in one trusted location in Mirema.</p>

        <div className="service-grid">
          {/* Service 1 */}
          <div className="service-card">
            <img
              src="/images/towing.webp"
              alt="Car Rescue & Breakdown Recovery - Tow truck assisting a vehicle in Nairobi"
              loading="lazy"
            />
            <div className="service-icon"><FaTruckPickup /></div>
            <h3>Car Rescue & Towing</h3>
            <p>Rapid 24/7 roadside assistance and towing across Nairobi and surrounding areas.</p>
            <div className="price">From Ksh 2,500</div>
            <a href="#booking" className="cta-btn">Book Rescue</a>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <img
              src="/images/full-engine-view.jpeg"
              alt="Engine Repairs - Mechanic working on car engine"
              loading="lazy"
            />
            <div className="service-icon"><FaTools /></div>
            <h3>Engine Repairs</h3>
            <p>Full engine diagnostics, rebuilds, timing belts, and performance tuning for all makes.</p>
            <div className="price">Quote on Request</div>
            <a href="#booking" className="cta-btn">Get Quote</a>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <img
              src="/images/gear-box-repair.jpeg"
              alt="Transmission Repair - Gearbox service"
              loading="lazy"
            />
            <div className="service-icon"><FaExchangeAlt /></div>
            <h3>Transmission Repair</h3>
            <p>Automatic & manual gearbox repairs, fluid changes, and complete overhauls.</p>
            <div className="price">Quote on Request</div>
            <a href="#booking" className="cta-btn">Get Quote</a>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <img
              src="/images/the-engine-view.jpeg"
              alt="Brake Services - Brake pads and discs replacement"
              loading="lazy"
            />
            <div className="service-icon"><FaHandPaper /></div>
            <h3>Brake Services</h3>
            <p>Brake pads, discs, ABS repairs, and full brake system diagnostics.</p>
            <div className="price">From Ksh 4,500</div>
            <a href="#booking" className="cta-btn">Book Service</a>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <img
              src="/images/audi-suspension-repair.jpeg"
              alt="Tire & Suspension - Wheel alignment and suspension repair"
              loading="lazy"
            />
            <div className="service-icon"><FaCar /></div>
            <h3>Tire & Suspension</h3>
            <p>Wheel alignment, balancing, shock absorbers, struts, and full suspension work.</p>
            <div className="price">From Ksh 3,000</div>
            <a href="#booking" className="cta-btn">Book Service</a>
          </div>

          {/* Service 6 */}
          <div className="service-card">
            <img
              src="/images/markx-repair.jpeg"
              alt="Air Conditioning Repair - Car AC service"
              loading="lazy"
            />
            <div className="service-icon"><FaSnowflake /></div>
            <h3>Air Conditioning</h3>
            <p>AC gas refill, compressor repairs, leak detection, and full system overhaul.</p>
            <div className="price">From Ksh 2,000</div>
            <a href="#booking" className="cta-btn">Book AC Service</a>
          </div>

          {/* Service 7 */}
          <div className="service-card">
            <img
              src="/images/display-car-parts.jpeg"
              alt="Electric Window Repair - Power window mechanism"
              loading="lazy"
            />
            <div className="service-icon"><FaCar /></div>
            <h3>Electric Window Repair</h3>
            <p>Power window regulators, switches, motors, and wiring fixes for all vehicles.</p>
            <div className="price">From Ksh 3,500</div>
            <a href="#booking" className="cta-btn">Get Fixed</a>
          </div>

          {/* Service 8 */}
          <div className="service-card">
            <img
              src="/images/Radiator.jpeg"
              alt="Exhaust Replacement - Muffler and catalytic converter"
              loading="lazy"
            />
            <div className="service-icon"><FaCog /></div>
            <h3>Exhaust Replacement</h3>
            <p>Full exhaust systems, catalytic converters, mufflers, and emissions repairs.</p>
            <div className="price">From Ksh 5,000</div>
            <a href="#booking" className="cta-btn">Book Now</a>
          </div>

          {/* Service 9 */}
          <div className="service-card">
            <img
              src="/images/work-in-progress2.jpeg"
              alt="Oil and Fluid Services - Engine oil change"
              loading="lazy"
            />
            <div className="service-icon"><FaOilCan /></div>
            <h3>Oil & Fluid Services</h3>
            <p>Engine oil changes, transmission fluid, coolant, brake fluid, and more.</p>
            <div className="price">From Ksh 1,500</div>
            <a href="#booking" className="cta-btn">Book Service</a>
          </div>

          {/* Service 10 - Bonus for professionalism */}
          <div className="service-card">
            <img
              src="/images/work-in-progress.jpeg"
              alt="General Maintenance & Auto Restoration - Full car service"
              loading="lazy"
            />
            <div className="service-icon"><FaWrench /></div>
            <h3>General Maintenance & Restoration</h3>
            <p>Routine servicing, full restorations, bodywork, painting, and custom upgrades.</p>
            <div className="price">Quote on Request</div>
            <a href="#booking" className="cta-btn">Get Quote</a>
          </div>
        </div>

        <p className="more-services-note">
          All services come with genuine parts options and a full warranty.
          <strong>AI-assisted diagnostics included on all major repairs.</strong>
        </p>
      </section>

      {/* GUARANTEE BADGE */}
      <div className="guarantee-badge-wrapper">
        <div className="guarantee-badge"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
          title="Book with confidence - 100% Satisfaction Guaranteed">
          <span>✅</span>
          <div>
            <div className="title">100% Satisfaction Guarantee</div>
            <div className="subtitle">Not happy? We make it right — no questions asked.</div>
          </div>
        </div>
      </div>

      <section id="booking" className="booking-form">
        <div className="form-container">
          <h2>Book Your Service – Quick & Secure</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email (Optional)</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Needed *</label>
              <select id="service" name="service" required>
                <option value="">Select Service</option>
                <option value="car-rescue">Car Rescue / Towing</option>
                <option value="engine-repair">Engine Repairs</option>
                <option value="transmission">Transmission Repair</option>
                <option value="brakes">Brake Services</option>
                <option value="tires-suspension">Tire & Suspension</option>
                <option value="air-conditioning">Air Conditioning Repair</option>
                <option value="electric-windows">Electric Window Repair</option>
                <option value="exhaust">Exhaust Replacement</option>
                <option value="oil-fluids">Oil & Fluid Services</option>
                <option value="general-maintenance">General Maintenance</option>
                <option value="restoration">Auto Restoration</option>
                <option value="other">Other / Diagnostics</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">Your Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="e.g., Mirema Drive, Thika Road, Kasarani..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Vehicle Details & Issue</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="e.g., Toyota Prado, 2018, AC not cooling, strange noise from engine..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Request via WhatsApp <FaPaperPlane />
            </button>
          </form>

          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            We'll reply instantly on WhatsApp or call you back within minutes!
          </p>
        </div>
      </section>

      <section id="map-section" className="map-section">
        <h2>Visit Us – We're in Mirema</h2>
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5!2d36.870!3d-1.220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e0b0b0b0b0%3A0x0!2sMirema%20Lane%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Garage Auto Location in Mirema, Nairobi"
          />
        </div>
        <p style={{ marginTop: '1rem' }}>
          <strong>Address:</strong> Mirema, Nairobi (near USIU & Pan African University) |{' '}
          <a href="tel:+254726938838" style={{ color: 'var(--primary-color)' }}>
            +254 726 938 838
          </a>{' '}
          | Open daily until 6:00 PM
        </p>
      </section>

      <footer>
        <p>
          &copy; 2026 The Garage Auto. All rights reserved. | Professional Auto Services in Mirema, Nairobi |{' '}
          <a href="#" style={{ color: 'var(--primary-color)' }}>
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#" style={{ color: 'var(--primary-color)' }}>
            Terms of Service
          </a>
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
          🚀 Built for The Garage Auto – Honest. Fast. Professional.
        </p>
      </footer>

      <a
        href="https://wa.me/254726938838?text=Hi%20The%20Garage%20Auto%20team%2C%20I%20need%20help%20with%20my%20car!"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <InstallButton />
    </>
  );
}