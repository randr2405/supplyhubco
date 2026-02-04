'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <Image 
            src="/logo.png"
            alt="SupplyHubCo Logo"
            width={50}
            height={50}
            className="logo-image"
          />
          <span className="logo-text">SupplyHubCo</span>
        </Link>
        
        {/* Burger menu button - only visible on mobile */}
        <button 
          className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav links */}
        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li className={pathname === '/' ? 'active' : ''}>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className={pathname === '/about' ? 'active' : ''}>
            <Link href="/about" onClick={closeMenu}>About Us</Link>
          </li>
          <li className={pathname === '/services' ? 'active' : ''}>
            <Link href="/services" onClick={closeMenu}>Services</Link>
          </li>
          <li className={pathname === '/contact' ? 'active' : ''}>
            <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}