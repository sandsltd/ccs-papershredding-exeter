"use client"

import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6">
              Professional paper shredding services in Bournemouth and surrounding areas. 
              Secure, reliable, and BS EN 15713 compliant document destruction.
            </p>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 text-sm">4.9/5 Customer Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://crosscutshredding.co.uk/services/domestic-shredding" className="text-gray-300 hover:text-white transition-colors">
                  Home Shredding
                </a>
              </li>
              <li>
                <a href="https://crosscutshredding.co.uk/services/business-shredding" className="text-gray-300 hover:text-white transition-colors">
                  Business Collection
                </a>
              </li>
              <li>
                <a href="https://crosscutshredding.co.uk/services/business-shredding/regular-shredding" className="text-gray-300 hover:text-white transition-colors">
                  Regular Service
                </a>
              </li>
              <li>
                <a href="https://crosscutshredding.co.uk/services/document-scanning" className="text-gray-300 hover:text-white transition-colors">
                  Document Scanning
                </a>
              </li>
              <li>
                <a href="https://crosscutshredding.co.uk/services/secure-document-storage" className="text-gray-300 hover:text-white transition-colors">
                  Secure Storage
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://crosscutshredding.co.uk/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://crosscutshredding.co.uk/locations" className="text-gray-300 hover:text-white transition-colors">
                  Areas Served
                </a>
              </li>
              <li>
                <a href="https://crosscutshredding.co.uk/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://crosscutshredding.co.uk/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://crosscutshredding.co.uk/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <a 
                    href="tel:01935310616" 
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    01935 310616
                  </a>
                  <p className="text-sm text-gray-400">Call for immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <a 
                    href="mailto:info@papershreddingbournemouth.co.uk" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@papershreddingbournemouth.co.uk
                  </a>
                  <p className="text-sm text-gray-400">Email us anytime</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Serving Bournemouth</p>
                  <p className="text-sm text-gray-400">and surrounding areas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 8AM-6PM</p>
                  <p className="text-sm text-gray-400">Weekend collections available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Paper Shredding Bournemouth. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="https://crosscutshredding.co.uk/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="https://crosscutshredding.co.uk/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="https://crosscutshredding.co.uk/data-protection" className="text-gray-400 hover:text-white transition-colors">
                Data Protection
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}