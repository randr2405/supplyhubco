import './services.css'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="page services-page">
      {/* Header */}
      <section className="services-header">
        <h1 className="section-title">Our Services</h1>
        <p className="services-intro">
          Comprehensive office management solutions that eliminate vendor complexity and streamline 
          your operations. One supplier for everything your office needs.
        </p>
      </section>

      {/* Main Services */}
      <section className="section main-services">
        <div className="service-card featured">
          <div className="service-header">
            <div className="service-icon-large icon-essentials">
              <div className="box-flap"></div>
              <div className="box-flap"></div>
            </div>
            <div>
              <h2>Office Essentials</h2>
              <p className="service-tagline">Everything your office needs, delivered seamlessly</p>
            </div>
          </div>
          <div className="service-content">
            <p>
              From stationery and supplies to kitchen essentials and cleaning products, we provide 
              comprehensive office provisioning through a single, reliable supplier relationship. 
              No more juggling multiple vendors or managing countless invoices.
            </p>
            <div className="service-features">
              <div className="feature-tag">✓ Stationery & Supplies</div>
              <div className="feature-tag">✓ Kitchen & Pantry</div>
              <div className="feature-tag">✓ Cleaning Products</div>
              <div className="feature-tag">✓ Catering</div>
              <div className="feature-tag">✓ Office Furniture</div>
              <div className="feature-tag">✓ Custom Orders</div>
            </div>
            <Link href="/contact">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
          
          {/* Service Image Gallery */}
          <div className="service-image-row">
            <div className="service-image-row-inner">
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80" alt="Stationery" />
                <div className="row-item-label">Stationery</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80" alt="Kitchen & Pantry" />
                <div className="row-item-label">Kitchen & Pantry</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80" alt="Cleaning Products" />
                <div className="row-item-label">Cleaning Products</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80" alt="Catering" />
                <div className="row-item-label">Catering</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80" alt="Office Furniture" />
                <div className="row-item-label">Office Furniture</div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80" alt="Stationery" />
                <div className="row-item-label">Stationery</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80" alt="Kitchen & Pantry" />
                <div className="row-item-label">Kitchen & Pantry</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80" alt="Cleaning Products" />
                <div className="row-item-label">Cleaning Products</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80" alt="Catering" />
                <div className="row-item-label">Catering</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80" alt="Office Furniture" />
                <div className="row-item-label">Office Furniture</div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-card featured">
          <div className="service-header">
            <div className="service-icon-large icon-specialist">
              <div className="tool-wrench-head"></div>
              <div className="tool-screwdriver-handle"></div>
            </div>
            <div>
              <h2>Specialist Services</h2>
              <p className="service-tagline">Professional solutions for specialized office needs</p>
            </div>
          </div>
          <div className="service-content">
            <p>
              Beyond supplies, we coordinate vetted service providers for all your specialized 
              office requirements. From IT support to maintenance, we manage the vendors so you 
              don't have to.
            </p>
            <div className="service-features">
              <div className="feature-tag">✓ IT Support & Systems</div>
              <div className="feature-tag">✓ Maintenance & Repairs</div>
              <div className="feature-tag">✓ Cleaning Services</div>
              <div className="feature-tag">✓ Security Solutions</div>
              <div className="feature-tag">✓ Compliance Certifications</div>
              <div className="feature-tag">✓ Plumbing</div>
              <div className="feature-tag">✓ Electrical Services</div>
              <div className="feature-tag">✓ Bespoke Office Supply Planning</div>
              <div className="feature-tag">✓ Office Management Support</div>
            </div>
            <Link href="/contact">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
          
          {/* Service Image Gallery */}
          <div className="service-image-row">
            <div className="service-image-row-inner">
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" alt="IT Support" />
                <div className="row-item-label">IT Support</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80" alt="Maintenance" />
                <div className="row-item-label">Maintenance</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&q=80" alt="Cleaning Services" />
                <div className="row-item-label">Cleaning Services</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80" alt="Security" />
                <div className="row-item-label">Security</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80" alt="Electrical & Plumbing" />
                <div className="row-item-label">Electrical & Plumbing</div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" alt="IT Support" />
                <div className="row-item-label">IT Support</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80" alt="Maintenance" />
                <div className="row-item-label">Maintenance</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&q=80" alt="Cleaning Services" />
                <div className="row-item-label">Cleaning Services</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80" alt="Security" />
                <div className="row-item-label">Security</div>
              </div>
              <div className="row-item">
                <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80" alt="Electrical & Plumbing" />
                <div className="row-item-label">Electrical & Plumbing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section className="section pricing-section">
        <h2 className="section-title">Choose Your Service Model</h2>
        <p className="section-subtitle">
          Flexible options designed to fit your business operations
        </p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Subscription Model</h3>
              <div className="price">
                <span className="amount-text">Monthly</span>
              </div>
            </div>
            <div className="pricing-description">
              <p>
                Predictable, recurring office management with consistent service delivery 
                and priority scheduling.
              </p>
            </div>
            <ul className="pricing-features">
              <li>✓ Regular scheduled deliveries</li>
              <li>✓ Fixed monthly pricing</li>
              <li>✓ Priority service booking</li>
              <li>✓ Dedicated account support</li>
              <li>✓ Custom inventory management</li>
              <li>✓ Flexible contract terms</li>
            </ul>
            <Link href="/contact">
              <button className="btn btn-secondary">Get Started</button>
            </Link>
          </div>

          <div className="pricing-card featured-plan">
            <div className="popular-badge">Most Flexible</div>
            <div className="pricing-header">
              <h3>Once-Off Bookings</h3>
              <div className="price">
                <span className="amount-text">On-Demand</span>
              </div>
            </div>
            <div className="pricing-description">
              <p>
                Order exactly what you need, when you need it. Perfect for project-based 
                requirements or occasional office needs.
              </p>
            </div>
            <ul className="pricing-features">
              <li>✓ No long-term commitment</li>
              <li>✓ Order as needed</li>
              <li>✓ Same streamlined process</li>
              <li>✓ Vetted service providers</li>
              <li>✓ Transparent pricing</li>
              <li>✓ Quick turnaround</li>
            </ul>
            <Link href="/contact">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>

          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Custom Solution</h3>
              <div className="price">
                <span className="amount-text">Tailored</span>
              </div>
            </div>
            <div className="pricing-description">
              <p>
                Unique business requirements? We'll create a bespoke package that aligns 
                perfectly with your operational needs.
              </p>
            </div>
            <ul className="pricing-features">
              <li>✓ Fully customized service mix</li>
              <li>✓ Flexible pricing structure</li>
              <li>✓ Dedicated account manager</li>
              <li>✓ Scalable as you grow</li>
              <li>✓ Industry-specific solutions</li>
              <li>✓ Priority implementation</li>
            </ul>
            <Link href="/contact">
              <button className="btn btn-secondary">Contact Us</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="services-footer">
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