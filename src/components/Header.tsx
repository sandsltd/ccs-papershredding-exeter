"use client"

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  ChevronDown, 
  Building2, 
  Users2, 
  FileText, 
  Search, 
  Info 
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import QuoteModal from './QuoteModal'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<{
    services: typeof businessServices,
    other: Array<{ name: string, href: string, description: string }>
  }>({
    services: [],
    other: []
  })

  // Handle scroll effect with throttling for smoother transitions
  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (Math.abs(scrollY - lastScrollY) > 5) {  // Reduced threshold for smoother detection
            setIsScrolled(scrollY > 30);  // Lower threshold for earlier transition
            lastScrollY = scrollY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu section states
  const [mobileMenuSections, setMobileMenuSections] = useState({
    services: false,
  })

  const toggleMobileSection = (section: keyof typeof mobileMenuSections) => {
    setMobileMenuSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const businessServices = [
    {
      category: "Business Collection",
      icon: <Building2 className="w-5 h-5" />,
      items: [
        { 
          name: "Business Collection Service", 
          href: "https://crosscutshredding.co.uk/services/business-shredding", 
          description: "Secure shredding collections from your business premises" 
        },
        { 
          name: "Regular Collection Service", 
          href: "https://crosscutshredding.co.uk/services/business-shredding/regular-shredding", 
          description: "Scheduled shredding with secure consoles provided" 
        },
      ]
    },
    {
      category: "Additional Services",
      icon: <FileText className="w-5 h-5" />,
      items: [
        { 
          name: "Document Scanning", 
          href: "https://crosscutshredding.co.uk/services/document-scanning", 
          description: "Digital conversion of your documents" 
        },
        { 
          name: "Secure Document Storage", 
          href: "https://crosscutshredding.co.uk/services/secure-document-storage", 
          description: "Safe storage for your sensitive files" 
        },
      ]
    }
  ]

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    
    if (!query.trim()) {
      setSearchResults({ services: [], other: [] })
      return
    }

    const searchTerm = query.toLowerCase()

    // Combined services for search including individual services
    const allServices = [
      {
        category: "Individual Services",
        icon: <MapPin className="w-5 h-5" />,
        items: [
          { name: "Drop In Shredding", href: "https://crosscutshredding.co.uk/services/drop-in", description: "Visit our service center for immediate shredding" },
          { name: "Home Collection Service", href: "https://crosscutshredding.co.uk/services/domestic-shredding", description: "Secure shredding collections from residential addresses" }
        ]
      },
      ...businessServices
    ]

    // Search through services
    const matchedServices = allServices.filter(category => 
      category.items.some(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
      )
    ).map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
      )
    }))

    // Other searchable items
    const otherResults = [
      { name: 'Pricing', href: 'https://crosscutshredding.co.uk/pricing', description: 'View our competitive pricing options' },
    ].filter(item => 
      item.name.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    )

    setSearchResults({
      services: matchedServices,
      other: otherResults
    })
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Navigation Container */}
      <div 
        className={`transform-gpu transition-all duration-500 ease-out bg-white ${
          isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-md' : ''
        }`}
      >
        {/* Top Bar */}
        <div 
          className="bg-gradient-to-r from-green-900 to-green-800 h-12"
        >
          <div className="max-w-7xl mx-auto h-full">
            <div className="flex items-center justify-between h-full px-6">
              {/* Left Side - Contact */}
              <div className="flex items-center h-full gap-8">
                <motion.a 
                  href="tel:01935310616" 
                  className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4" />
                  01935 310616
                </motion.a>
                <div className="hidden sm:block w-px h-5 bg-white/20"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-full flex items-center"
                >
                  <a 
                    href="https://crosscutshredding.co.uk/services/drop-in"
                    className="hidden sm:flex items-center gap-2.5 text-white/90 hover:text-white transition-colors text-sm font-medium group"
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="relative">
                      Yeovil Drop In Centre
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                    </span>
                  </a>
                </motion.div>
              </div>

              {/* Right Side - Links */}
              <div className="flex items-center h-full gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-full flex items-center"
                >
                  <Link 
                    href="/about" 
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium hidden sm:block group"
                  >
                    <span className="relative">
                      About
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
                <div className="hidden sm:block w-px h-5 bg-white/20"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-full flex items-center"
                >
                  <Link 
                    href="/contact" 
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium hidden sm:block group"
                  >
                    <span className="relative">
                      Contact
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
                <div className="hidden sm:block w-px h-5 bg-white/20"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-full flex items-center"
                >
                  <a
                    href="https://portal.crosscutshredding.paperroute.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <span className="hidden sm:inline">Customer Portal</span>
                    <span className="sm:hidden">Portal</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="transform-gpu transition-all duration-500 ease-out">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="flex items-center justify-between transition-all duration-500 ease-out"
              style={{
                height: isScrolled ? '64px' : '80px'
              }}
            >
              {/* Logo */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Logo />
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex lg:items-center lg:gap-8">
                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                  {/* Drop In Link */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href="https://crosscutshredding.co.uk/services/drop-in"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                    >
                      <MapPin className="w-4 h-4 text-gray-600 group-hover:text-green-600" />
                      <span className="font-medium text-gray-700 group-hover:text-green-700">Drop In</span>
                    </a>
                  </motion.div>

                  {/* Home Shred Link */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href="https://crosscutshredding.co.uk/services/domestic-shredding"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                    >
                      <Users2 className="w-4 h-4 text-gray-600 group-hover:text-green-600" />
                      <span className="font-medium text-gray-700 group-hover:text-green-700">Home Shred</span>
                    </a>
                  </motion.div>

                  {/* Business Services Dropdown */}
                  <div className="relative" ref={servicesRef}>
                    <motion.button
                      onClick={() => {
                        setIsServicesOpen(!isServicesOpen)
                      }}
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Building2 className="w-4 h-4 text-gray-600 group-hover:text-green-600" />
                      <span className="font-medium text-gray-700 group-hover:text-green-700">Business Services</span>
                      <motion.div
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-8">
                              {businessServices.map((category) => (
                                <div key={category.category}>
                                  <div className="flex items-center gap-2.5 mb-4">
                                    <div className="p-2 rounded-lg bg-green-50">
                                      {category.icon}
                                    </div>
                                    <h3 className="text-base font-semibold text-gray-900">
                                      {category.category}
                                    </h3>
                                  </div>
                                  <ul className="space-y-1">
                                    {category.items.map((item) => (
                                      <li key={item.href}>
                                        <a
                                          href={item.href}
                                          onClick={() => setIsServicesOpen(false)}
                                          className="block p-3 hover:bg-green-50 rounded-xl transition-colors group"
                                        >
                                          <div className="font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                                            {item.name}
                                          </div>
                                          <p className="text-sm text-gray-500 mt-0.5 group-hover:text-gray-600 transition-colors">
                                            {item.description}
                                          </p>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Pricing Link */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href="https://crosscutshredding.co.uk/pricing"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                    >
                      <FileText className="w-4 h-4 text-gray-600 group-hover:text-green-600" />
                      <span className="font-medium text-gray-700 group-hover:text-green-700">Pricing</span>
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="hidden lg:flex lg:items-center lg:gap-6">
                {/* Search Button */}
                <motion.button
                  onClick={() => setIsSearchOpen(true)}
                  className={`p-2 text-gray-600 hover:text-green-600 transition-all duration-700 ease-in-out rounded-full hover:bg-green-50`}
                  style={{
                    transform: isScrolled ? 'scale(0.9)' : 'scale(1)'
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5" />
                </motion.button>

                {/* Action Button */}
                <motion.button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className={`transition-all duration-700 ease-in-out text-white bg-green-600 hover:bg-green-700 rounded-full font-medium`}
                  style={{
                    padding: isScrolled ? '0.5rem 1rem' : '0.625rem 1.25rem',
                    fontSize: isScrolled ? '0.875rem' : '1rem'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Quote
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-700 ease-in-out"
                  style={{
                    transform: isScrolled ? 'scale(0.9)' : 'scale(1)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
                  aria-expanded={isOpen}
                >
                  {isOpen ? (
                    <X className="w-6 h-6 text-gray-600" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-600" />
                  )}
                </motion.button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 bg-gray-800/40 backdrop-blur-sm">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 20 }}
                className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Logo />
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      className="p-2 text-gray-600 hover:text-gray-900"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Close mobile menu"
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <nav className="px-4 py-6 space-y-4">
                      {/* Mobile Navigation Links */}
                      <div className="space-y-4">
                        {/* Drop In Link */}
                        <a
                          href="https://crosscutshredding.co.uk/services/drop-in"
                          className="flex items-center gap-3 mx-4 mb-3 px-4 py-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          <MapPin className="w-5 h-5 text-gray-600" />
                          <span className="text-lg font-medium text-gray-900">Drop In</span>
                        </a>

                        {/* Home Shred Link */}
                        <a
                          href="https://crosscutshredding.co.uk/services/domestic-shredding"
                          className="flex items-center gap-3 mx-4 mb-3 px-4 py-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          <Users2 className="w-5 h-5 text-gray-600" />
                          <span className="text-lg font-medium text-gray-900">Home Shred</span>
                        </a>

                        {/* Business Services Dropdown */}
                        <div className="mx-4 mb-4">
                          <button
                            onClick={() => toggleMobileSection('services')}
                            className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                            aria-label="Toggle business services menu"
                            aria-expanded={mobileMenuSections.services}
                          >
                            <div className="flex items-center gap-3">
                              <Building2 className="w-5 h-5 text-gray-600" />
                              <span className="text-lg font-medium text-gray-900">Business Services</span>
                            </div>
                            <motion.div
                              animate={{ rotate: mobileMenuSections.services ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {mobileMenuSections.services && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-2 space-y-1 px-4">
                                  {businessServices.map((category) => (
                                    <div key={category.category} className="mb-4">
                                      <div className="flex items-center gap-2.5 mb-2 text-sm font-medium text-gray-500">
                                        <div className="p-1.5 rounded-lg bg-green-50">
                                          {category.icon}
                                        </div>
                                        {category.category}
                                      </div>
                                      {category.items.map((item) => (
                                        <a
                                          key={item.href}
                                          href={item.href}
                                          onClick={() => setIsOpen(false)}
                                          className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                        >
                                          <div className="text-sm font-medium">{item.name}</div>
                                          <div className="text-xs text-gray-500">{item.description}</div>
                                        </a>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Regular Links */}
                        <a
                          href="https://crosscutshredding.co.uk/pricing"
                          className="flex items-center gap-3 mx-4 mb-3 px-4 py-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          <FileText className="w-5 h-5 text-gray-600" />
                          <span className="text-lg font-medium text-gray-900">Pricing</span>
                        </a>
                        
                        <Link
                          href="/about"
                          className="flex items-center gap-3 mx-4 mb-3 px-4 py-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          <Info className="w-5 h-5 text-gray-600" />
                          <span className="text-lg font-medium text-gray-900">About</span>
                        </Link>
                        
                        <Link
                          href="/contact"
                          className="flex items-center gap-3 mx-4 mb-3 px-4 py-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          <Phone className="w-5 h-5 text-gray-600" />
                          <span className="text-lg font-medium text-gray-900">Contact</span>
                        </Link>
                      </div>

                      {/* Mobile Action Buttons */}
                      <div className="mt-6 space-y-3 px-4">
                        <button
                          onClick={() => {
                            setIsOpen(false)
                            setIsQuoteModalOpen(true)
                          }}
                          className="w-full px-4 py-3 text-white bg-green-600 hover:bg-green-700 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                          aria-label="Get shredding quote"
                        >
                          <FileText className="w-5 h-5" />
                          Get Quote
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-gray-800/40 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsSearchOpen(false)
                setSearchQuery('')
                setSearchResults({ services: [], other: [] })
              }
            }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white shadow-xl"
            >
              <div className="max-w-3xl mx-auto px-4 py-4">
                <div className="flex items-center gap-4 mb-4">
                  <Search className="w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for services, industries, or resources..."
                    className="flex-1 text-lg border-none focus:ring-0 focus:outline-none placeholder-gray-400"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    autoFocus
                  />
                  <motion.button
                    onClick={() => {
                      setIsSearchOpen(false)
                      setSearchQuery('')
                      setSearchResults({ services: [], other: [] })
                    }}
                    className="p-2 text-gray-400 hover:text-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close search"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Search Results */}
                {searchQuery && (
                  <div className="mt-2 max-h-[60vh] overflow-y-auto">
                    {/* Services Results */}
                    {searchResults.services.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-500 mb-3">Services</h3>
                        <div className="space-y-2">
                          {searchResults.services.map((category) => (
                            <div key={category.category}>
                              {category.items.map((item) => (
                                <a
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => {
                                    setIsSearchOpen(false)
                                    setSearchQuery('')
                                    setSearchResults({ services: [], other: [] })
                                  }}
                                  className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                  <div className="font-medium text-gray-900">{item.name}</div>
                                  <div className="text-sm text-gray-500">{item.description}</div>
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Other Results */}
                    {searchResults.other.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-500 mb-3">Pages</h3>
                        <div className="space-y-2">
                          {searchResults.other.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setIsSearchOpen(false)
                                setSearchQuery('')
                                setSearchResults({ services: [], other: [] })
                              }}
                              className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              <div className="font-medium text-gray-900">{item.name}</div>
                              <div className="text-sm text-gray-500">{item.description}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* No Results */}
                    {!searchResults.services.length && !searchResults.other.length && (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                          <Search className="w-6 h-6 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No results found</h3>
                        <p className="text-gray-500">Try adjusting your search terms</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <QuoteModal isOpen={isQuoteModalOpen} onCloseAction={() => setIsQuoteModalOpen(false)} />
    </header>
  )
}