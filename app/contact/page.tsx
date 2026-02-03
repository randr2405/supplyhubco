'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const closeModal = () => {
    setShowModal(false)
    setSubmitStatus('idle')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Template parameters - these match your EmailJS template variables exactly
    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not provided',
      phone: formData.phone || 'Not provided',
      subject: formData.subject,
      message: formData.message
    }

    try {
      // Using the correct EmailJS method with the CORRECT public key
      const response = await emailjs.send(
        'service_9ryl6gq',    // Service ID
        'template_0y7w1al',   // Template ID
        templateParams,
        {
          publicKey: 'yFuVaeNpyjaOmy8Jo'  // CORRECT Public key
        }
      )
      
      console.log('Email sent successfully:', response)
      setSubmitStatus('success')
      setShowModal(true)
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error: any) {
      console.error('EmailJS error:', error)
      console.error('Error details:', error.text || error.message)
      setSubmitStatus('error')
      setShowModal(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page contact-page">
      {/* Success/Error Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            {submitStatus === 'success' ? (
              <>
                <div className="modal-icon success-icon">✓</div>
                <h2 className="modal-title">Message Sent Successfully!</h2>
                <p className="modal-message">
                  Thank you for reaching out, {formData.name || 'there'}! We've received your message and will get back to you as soon as possible.
                </p>
                <p className="modal-submessage">
                  A confirmation has been sent to <strong>{formData.email}</strong>
                </p>
                <button className="btn btn-primary modal-btn" onClick={closeModal}>
                  Got it!
                </button>
              </>
            ) : (
              <>
                <div className="modal-icon error-icon">✗</div>
                <h2 className="modal-title">Oops! Something Went Wrong</h2>
                <p className="modal-message">
                  We couldn't send your message at this time. Please try again or contact us directly.
                </p>
                <p className="modal-submessage">
                  Email us at: <a href="mailto:info@supplyhubco.co.za">info@supplyhubco.co.za</a>
                </p>
                <button className="btn btn-primary modal-btn" onClick={closeModal}>
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Header */}
      <section className="contact-header">
        <h1 className="section-title">Get In Touch</h1>
        <p className="contact-intro">
          Have questions? We'd love to hear from you. Send us a message and 
          we'll respond as soon as possible.
        </p>
      </section>

      {/* Contact Content */}
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-section">
          <div className="card form-card">
            <h2>Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 83 454 6375"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us more about your needs..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-info-section">
          <div className="card info-card">
            <div className="info-item">
              <div className="info-icon icon-email">
                <div className="envelope-flap"></div>
              </div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>info@supplyhubco.co.za</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon icon-location"></div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Johannesburg, Sandton</p>
              </div>
            </div>
          </div>

          <div className="card hours-card">
            <h3>Business Hours</h3>
            <div className="hours-list">
              <div className="hours-item">
                <span>Monday - Friday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Saturday</span>
                <span>Closed</span>
              </div>
              <div className="hours-item">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
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