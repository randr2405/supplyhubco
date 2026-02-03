'use client'
import './home.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Slide {
  url: string
  alt: string
  caption: string
}

const TICKER_ITEMS: string[] = [
  'Fast Delivery',
  'Flexible Plans',
  'Real Human Support',
  'South Africa Based',
  'Vetted Providers',
  'Custom Packages',
  'One-Stop Shop',
  '24/7 Availability'
]

const SLIDES: Slide[] = [
  {
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80',
    alt: 'Organized office supplies and stationery',
    caption: 'Office Essentials'
  },
  {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
    alt: 'Modern office workspace with equipment',
    caption: 'Complete Solutions'
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    alt: 'Business planning and office organization',
    caption: 'Streamlined Operations'
  },
  {
    url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80',
    alt: 'Professional office environment',
    caption: 'Professional Service'
  }
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(SLIDES.length - 1)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        setAnimating(true)
        setPrev(current)
        setCurrent(i => (i + 1) % SLIDES.length)
        setTimeout(() => setAnimating(false), 900)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [current, animating])

  const goTo = (idx: number): void => {
    if (idx === current || animating) return
    setAnimating(true)
    setPrev(current)
    setCurrent(idx)
    setTimeout(() => setAnimating(false), 900)
  }

  return (
    <div className="page home-page">

      {/* ─── Hero Section (static, original) ─── */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>▢ Your All-in-One Office Solutions Partner</span>
          </div>
          <h1 className="hero-title">Office Supply Hub</h1>
          <div className="hero-slogan">
            <span className="slogan-word supplied">Supplied.</span>
            <span className="slogan-word simplified">Simplified.</span>
            <span className="slogan-word sorted">Sorted.</span>
          </div>
          <p className="hero-subtitle">
            A modern, all-in-one solution for office-based businesses in South Africa.
            We reduce the hassle of managing multiple vendors by offering a fully customizable
            office management service—delivered via subscription or once-off bookings.
          </p>
          <div className="hero-buttons">
            <Link href="/contact">
              <button className="btn btn-primary">Get Started Today</button>
            </Link>
            <Link href="/services">
              <button className="btn btn-secondary">View Services</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Ticker / Trust Bar ─── */}
      <section className="ticker-bar">
        <div className="ticker-track">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
          {/* duplicate for seamless loop */}
          {TICKER_ITEMS.map((item, i) => (
            <span key={`dup-${i}`} className="ticker-item">
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ─── Value Proposition ─── */}
      <section className="value-section">
        <div className="value-content">
          <h2 className="section-title">Comprehensive Office Solutions, Seamlessly Delivered</h2>
          <p className="value-text">
            Office Supply Hub serves as your dedicated partner for complete office management solutions.
            We streamline procurement and service delivery by consolidating vendor relationships,
            invoice management, and logistics coordination into one efficient platform. From essential
            supplies to specialized equipment and professional maintenance services, we provide
            integrated solutions that enhance operational efficiency and reduce administrative complexity.
          </p>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="section features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="section-subtitle">One supplier. Every solution. Real benefits for your business.</p>

        <div className="grid grid-2">
          <div className="card feature-card">
            <div className="feature-icon icon-layers">
              <div className="middle-layer"></div>
            </div>
            <h3>One Supplier. Every Solution.</h3>
            <p>Consolidate all your office needs under one roof. From pens to printers, cleaning services to IT support—we've got you covered.</p>
          </div>

          <div className="card feature-card">
            <div className="feature-icon icon-support"></div>
            <h3>Real-Time Human Support</h3>
            <p>Speak to a real person whenever you need help. No bots, no waiting—just responsive, knowledgeable support when you need it most.</p>
          </div>

          <div className="card feature-card">
            <div className="feature-icon icon-customize">
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
            </div>
            <h3>Customizable Packages</h3>
            <p>Choose from flexible subscription models or one-off bookings. We tailor our services to match your business size, industry, and budget.</p>
          </div>

          <div className="card feature-card">
            <div className="feature-icon icon-verified"></div>
            <h3>Vetted Service Providers</h3>
            <p>Trust in quality. We work with carefully selected in-house teams and trusted subcontractors to ensure consistent, reliable service delivery.</p>
          </div>
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section className="section services-preview">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">Comprehensive office solutions designed for South African businesses</p>

        <div className="grid grid-3">
          <div className="card service-preview-card">
            <div className="service-preview-icon icon-essentials">
              <div className="line-middle"></div>
            </div>
            <h3>Office Essentials</h3>
            <p>Stationery, supplies, and everyday items delivered on schedule</p>
          </div>

          <div className="card service-preview-card">
            <div className="service-preview-icon icon-tech">
              <div className="stand"></div>
            </div>
            <h3>Equipment & Tech</h3>
            <p>Printers, computers, furniture, and technology solutions</p>
          </div>

          <div className="card service-preview-card">
            <div className="service-preview-icon icon-maintenance"></div>
            <h3>Maintenance Services</h3>
            <p>Cleaning, repairs, IT support, and facility management</p>
          </div>
        </div>

        <div style={{ textAlign: 'center' as const, marginTop: '3rem' }}>
          <Link href="/services">
            <button className="btn btn-primary">Explore All Services</button>
          </Link>
        </div>
      </section>

      {/* ─── Why We Exist — Slideshow + Text ─── */}
      <section className="why-section">
        {/* Left: slideshow */}
        <div className="why-slideshow">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`why-slide ${i === current ? 'active' : i === prev ? 'exiting' : ''}`}
            >
              <img src={slide.url} alt={slide.alt} />
            </div>
          ))}
          <div className="why-slide-overlay" />

          {/* Dot nav */}
          <div className="why-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`why-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: text */}
        <div className="why-content">
          <span className="why-badge">Why we exist</span>
          <h2>Built for South African Businesses</h2>
          <p>
            We understand the unique challenges that local businesses face—from delivery logistics
            across provinces to the need for flexible, budget-conscious solutions. Office Supply Hub
            was founded right here to serve you better than any overseas competitor ever could.
          </p>
          <Link href="/contact">
            <button className="btn btn-primary">Talk to Us</button>
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="home-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Supply Hub Co. All rights reserved.</p>
          <p className="footer-email">
            <a href="mailto:info@supplyhubco.co.za">info@supplyhubco.co.za</a>
          </p>
        </div>
      </footer>

    </div>
  )
}