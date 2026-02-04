'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()

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
        
        <ul className="nav-links">
          <li className={pathname === '/' ? 'active' : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === '/about' ? 'active' : ''}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={pathname === '/services' ? 'active' : ''}>
            <Link href="/services">Services</Link>
          </li>
          <li className={pathname === '/contact' ? 'active' : ''}>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}