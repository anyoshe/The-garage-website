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
} from 'react-icons/fa';
// import emailjs from '@emailjs/browser';
import InstallButton from './components/InstallButton';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Form submission with EmailJS
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Build WhatsApp message
    const message =
      `*New Service Request from Sir Luke Garage website*\n\n` +
      `Name: ${data.name || '—'}\n` +
      `Phone: ${data.phone || '—'}\n` +
      `Email: ${data.email || '—'}\n` +
      `Service: ${data.service || '—'}\n` +
      `Location: ${data.location || '—'}\n` +
      `Vehicle & Issue:\n${data.message || '—'}\n\n` +
      `Sent from website form • ${new Date().toLocaleString('en-KE')}`;

    // Your garage WhatsApp number (without + or 00)
    const phoneNumber = "254736889880"; // ← change to real number

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    // Optional: show success message
    alert("Redirecting to WhatsApp... Please press SEND in the chat.");

    form.reset();
  };

  return (
    <>

      <header>
        <nav>
          <div className="logo">
            Sir Luke Garage <FaWrench />
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
          <a href="tel:+254712345678" className="cta-btn cta-btn-desktop">
            <FaPhone /> Call Now
          </a>

          {/* Mobile-only simple call button */}
          <a href="tel:+254712345678" className="cta-btn-mobile">
            <FaPhone />
          </a>
        </nav>
      </header>

      <section id="hero">
        <div className="hero-content">
          <h1>Stranded? Sir Luke's Got Your Back – 24/7!</h1>
          <div className="hero-badges flex flex-wrap justify-center gap-6 mt-6">
            <div className="hero-badge">
              <span>24/7</span>
              <span>Emergency Response</span>
            </div>
            <div className="hero-badge">
              <span>≤ 30 min</span>
              <span>Nairobi Area</span>
            </div>
          </div>
          <p className="hero-subtitle">
            <strong>Expert Breakdown Recovery</strong> •
            <strong>Precision Auto Repairs</strong> •
            Nairobi's Most Trusted Garage Since 2010
          </p>
          <a href="tel:+254712345678" className="breakdown-btn">
            <FaTruckPickup /> Call for Immediate Help
          </a>
        </div>
      </section>

      <section id="pain-points" className="pain-points">
        <h2>Why Drivers Trust Sir Luke Garage</h2>
        <div className="pain-grid">
          <div className="pain-item">
            <FaBolt />
            <h3>Lightning-Fast Response</h3>
            <p>
              Our tech-enabled team arrives in under 30 minutes for breakdowns—get back on the road without the wait.
            </p>
          </div>
          <div className="pain-item">
            <FaShieldAlt />
            <h3>Guaranteed Quality</h3>
            <p>
              Certified mechanics using cutting-edge diagnostics—repairs that last, backed by our satisfaction promise.
            </p>
          </div>
          <div className="pain-item">
            <FaMobileAlt />
            <h3>Easy Mobile Booking</h3>
            <p>
              Book services anytime via app-like form or WhatsApp—no more phone tag during rush hour.
            </p>
          </div>
          <div className="pain-item">
            <FaDollarSign />
            <h3>Affordable & Transparent</h3>
            <p>
              Upfront pricing with no hidden fees—budget-friendly fixes that save you time and money.
            </p>
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
                "Saved me at 11 PM on Thika Road. Fast and professional!"
              </p>
              <p className="testimonial-author">— James K., Kasarani</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Fixed my AC same day. Fair price too."
              </p>
              <p className="testimonial-author">— Sarah M., Westlands</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Best breakdown service in Nairobi hands down."
              </p>
              <p className="testimonial-author">— David O., Industrial Area</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sales-flow" className="sales-flow">
        <h2>Your Journey with Sir Luke – Seamless & Stress-Free</h2>
        <div className="flow-steps">
          <div className="step">
            <FaSearchLocation />
            <h3>1. Spot Your Issue</h3>
            <p>Search for us on Google—optimized for 'Nairobi car breakdown' to find help fast.</p>
          </div>
          <div className="step">
            <FaMousePointer />
            <h3>2. Connect Instantly</h3>
            <p>One-click call or WhatsApp chat—our AI-assisted system responds in seconds.</p>
          </div>
          <div className="step">
            <FaFileSignature />
            <h3>3. Book Securely</h3>
            <p>Fill our quick form; get instant confirmation via email or WhatsApp notification.</p>
          </div>
          <div className="step">
            <FaCheckCircle />
            <h3>4. Drive Happy</h3>
            <p>Professional service delivered—track your repair status online for peace of mind.</p>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <h2>Our Services & Pricing – Clear, Competitive, Complete</h2>
        <div className="service-grid">
          <div className="service-card">
            <img
              src="/images/breakdown-image.jpg"
              alt="24/7 Breakdown Recovery - Tow truck helping stranded car"
              loading="lazy"
            />
            <h3>24/7 Breakdown Recovery</h3>
            <p>Rapid towing and on-site repairs for any vehicle emergency.</p>
            <div className="price">From Ksh 2,500</div>
            <a href="#booking" className="cta-btn" style={{ display: 'inline-block', marginTop: '1rem' }}>
              Book Now
            </a>
          </div>

          <div className="service-card">
            <img
              src="/images/diagnostic-image.jpg"
              alt="Advanced Engine Diagnostics - Mechanic using scanner"
              loading="lazy"
            />
            <h3>Advanced Engine Diagnostics</h3>
            <p>State-of-the-art scans to pinpoint issues before they escalate.</p>
            <div className="price">Ksh 1,500</div>
            <a href="#booking" className="cta-btn" style={{ display: 'inline-block', marginTop: '1rem' }}>
              Book Now
            </a>
          </div>

          <div className="service-card">
            <img
              src="/images/mechanic-checking-car-parts.jpg"
              alt="Comprehensive Auto Repairs - Garage workshop"
              loading="lazy"
            />
            <h3>Comprehensive Auto Repairs</h3>
            <p>Brakes, tires, AC, and more—full-service under one tech-savvy roof.</p>
            <div className="price">Quote on Request</div>
            <a href="#booking" className="cta-btn" style={{ display: 'inline-block', marginTop: '1rem' }}>
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* GUARANTEE BADGE - Perfect mobile styling */}
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
                <option value="breakdown">Breakdown Recovery</option>
                <option value="diagnostics">Engine Diagnostics</option>
                <option value="repairs">Auto Repairs</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">Current Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="e.g., Along Thika Road, Nairobi"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Vehicle Details & Issue</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="e.g., Toyota Corolla, engine won't start..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Request <FaPaperPlane />
            </button>
          </form>

          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            We'll confirm via WhatsApp or email within minutes!
          </p>
        </div>
      </section>

      <section id="map-section" className="map-section">
        <h2>Visit Us – We're Here for You</h2>
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.762525698316!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172a0b0b0b0b%3A0x0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1690000000000!5m2!1sen!2ske"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sir Luke Garage Location on Google Maps"
          />
        </div>
        <p style={{ marginTop: '1rem' }}>
          <strong>Address:</strong> Industrial Area, Along Enterprise Road, Nairobi |{' '}
          <a href="tel:+254712345678" style={{ color: 'var(--primary-color)' }}>
            +254 71 234 5678
          </a>{' '}
          |{' '}
          <a href="mailto:info@sirlukegarage.co.ke" style={{ color: 'var(--primary-color)' }}>
            info@sirlukegarage.co.ke
          </a>
        </p>
      </section>

      <footer>
        <p>
          &copy; 2026 Sir Luke Garage. All rights reserved. | Serving Nairobi with Pride |{' '}
          <a href="#" style={{ color: 'var(--primary-color)' }}>
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#" style={{ color: 'var(--primary-color)' }}>
            Terms of Service
          </a>
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
          🚀 Powered by Getaxe Technologies Ltd – Fast, Secure, Customer-First
        </p>
      </footer>

      <a
        href="https://wa.me/254736889880?text=Hi%20Sir%20Luke%20team%2C%20I%20need%20help%20with%20my%20car%20breakdown!"
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
