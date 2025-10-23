"use client"

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const socialLinks = {
    facebook: "https://www.facebook.com/crosscutshredding",
    twitter: "https://twitter.com/crosscutshred",
    linkedin: "https://www.linkedin.com/company/cross-cut-shredding-ltd"
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-600 text-sm leading-relaxed">
              Professional document destruction services you can trust. BS EN 15713 compliant, ensuring your confidential information is securely destroyed.
            </p>
            <div className="flex gap-4">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/areas-served" className="text-gray-600 hover:text-green-600 transition-colors">
                  Areas Served
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://crosscutshredding.co.uk/services" className="text-gray-600 hover:text-green-600 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="https://crosscutshredding.co.uk/pricing" className="text-gray-600 hover:text-green-600 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Certifications */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:01935310616" className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>01935 310616</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@crosscutshredding.co.uk" className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>info@crosscutshredding.co.uk</span>
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <address className="text-gray-600 not-italic text-sm">
                    Units 1-2, 15 Oxford Road<br />
                    Pen Mill Trading Estate<br />
                    Yeovil<br />
                    BA21 5HR
                  </address>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600 text-center md:text-left">
                &copy; {new Date().getFullYear()} Cross Cut Shredding Ltd. All Rights Reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <a href="https://www.crosscutshredding.co.uk/legal/privacy-policy" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Privacy Policy
                </a>
                <a href="https://www.crosscutshredding.co.uk/legal/terms" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
            <div className="text-xs text-gray-500 text-center md:text-left">
              <span className="block sm:inline">Company Number: 09920755</span>
              <span className="hidden sm:inline"> | </span>
              <span className="block sm:inline">VAT: 239141808</span>
              <span className="hidden sm:inline"> | </span>
              <span className="block sm:inline">Waste Carrier: CBDU93711</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}