import './about.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className="page about-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="about-header-badge">
          <span>▢ Meet Supply Hub Co</span>
        </div>
        <h1 className="about-title">About Supply Hub Co</h1>
        <div className="about-intro-card">
          <p className="about-intro">
            Founded on the principle that businesses deserve better office management solutions, 
            Office Supply Hub emerged from a shared vision to eliminate operational inefficiencies 
            and simplify vendor coordination.
          </p>
          <p className="about-intro-highlight">
            We deliver comprehensive office solutions that allow South African businesses to focus 
            on growth, not administrative complexity.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section story-section">
        <h2 className="section-title">Our Story</h2>
        <div className="story-content">
          <p>
            Office Supply Hub was founded by two colleagues who, throughout their diverse career 
            experiences, consistently identified a critical challenge: businesses were investing 
            excessive time and resources coordinating multiple suppliers, managing administrative 
            tasks, and resolving operational inefficiencies.
          </p>
          <p>
            This recurring pattern crystallized their vision. What began as collaborative discussions 
            between friends rapidly evolved into a dedicated team of professionals—each contributing 
            specialized expertise. From operations and financial management to IT systems integration, 
            our close-knit team collaborates to deliver seamless, end-to-end office management solutions.
          </p>
          <p>
            As a startup organization, we maintain an agile, hands-on approach to service delivery. 
            We are intentional in our processes, focused on creating operational ease, systematic 
            efficiency, and reliable infrastructure that enables our clients to concentrate on core 
            business activities—not office logistics.
          </p>
          <div className="story-tagline">
            <span className="tagline-supplied">Supplied.</span>
            <span className="tagline-simplified">Simplified.</span>
            <span className="tagline-sorted">Sorted.</span>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="grid grid-2">
          <div className="card mv-card">
            <div className="mv-icon icon-mission">
              <div className="center-dot"></div>
            </div>
            <h2>Our Mission</h2>
            <p>
              To streamline office management for South African businesses by consolidating vendor 
              relationships, eliminating administrative complexity, and delivering reliable, customizable 
              solutions. We transform fragmented procurement processes into unified, efficient systems 
              that drive operational excellence.
            </p>
          </div>
          
          <div className="card mv-card">
            <div className="mv-icon icon-vision">
              <div className="lens"></div>
            </div>
            <h2>Our Vision</h2>
            <p>
              To become the definitive office solutions partner for every business in South Africa—and 
              eventually across Africa. We envision comprehensive national infrastructure including 
              regional hubs, dedicated delivery fleets, and fully integrated digital platforms that 
              provide seamless client support and operational transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <h2 className="section-title centered-title">What Drives Us</h2>
        <p className="section-subtitle centered-subtitle">
          Our core principles guide every decision and partnership
        </p>
        <div className="grid grid-3">
          <div className="value-card">
            <div className="value-number">01</div>
            <h3>Operational Efficiency</h3>
            <p>
              We eliminate inefficiencies through streamlined processes and consolidated vendor 
              management, reducing complexity at every touchpoint.
            </p>
          </div>
          
          <div className="value-card">
            <div className="value-number">02</div>
            <h3>Reliability</h3>
            <p>
              Consistent service delivery through vetted providers and quality-controlled processes 
              ensures dependable results you can trust.
            </p>
          </div>
          
          <div className="value-card">
            <div className="value-number">03</div>
            <h3>Customization</h3>
            <p>
              Flexible subscription models and tailored packages designed to meet your specific 
              business needs, industry requirements, and budget parameters.
            </p>
          </div>
          
          <div className="value-card">
            <div className="value-number">04</div>
            <h3>Human Support</h3>
            <p>
              Real people providing real-time assistance. No automated systems—just responsive, 
              knowledgeable support when you need it most.
            </p>
          </div>
        </div>
        
        <div className="grid grid-2 values-last-row">
          <div className="value-card">
            <div className="value-number">05</div>
            <h3>Transparency</h3>
            <p>
              Clear communication, straightforward pricing, and honest relationships built on 
              integrity and mutual respect.
            </p>
          </div>
          
          <div className="value-card">
            <div className="value-number">06</div>
            <h3>Agility</h3>
            <p>
              As a startup, we remain nimble and responsive, adapting quickly to evolving client 
              needs and market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Experience the Difference?</h2>
        <p>
          Join forward-thinking businesses who have simplified their office management with 
          Office Supply Hub.
        </p>
        <div className="about-cta-buttons">
          <Link href="/contact">
            <button className="btn btn-primary">Get Started</button>
          </Link>
          <Link href="/services">
            <button className="btn btn-secondary">View Services</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
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