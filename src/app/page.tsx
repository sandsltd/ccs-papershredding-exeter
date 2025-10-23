"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import QuoteModal from '../components/QuoteModal'
import { 
  Phone, 
  MapPin, 
  Star, 
  Shield, 
  Clock,
  Truck,
  Users,
  Building2,
  CheckCircle,
  ArrowRight,
  Scissors,
  Award,
  Recycle,
  CalendarDays
} from 'lucide-react'

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_9361.jpg"
            alt="Professional Cross Cut Shredding collection van"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-blue-900/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              {/* Compliance Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">BS EN 15713 Compliant Service</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Paper Shredding<br />
                <span className="text-green-400">Bournemouth</span><br />
                <span className="text-3xl sm:text-4xl lg:text-5xl">Professional</span><br />
                <span className="text-3xl sm:text-4xl lg:text-5xl">Document</span><br />
                <span className="text-3xl sm:text-4xl lg:text-5xl">Destruction</span>
              </h1>
              
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
                Professional shredding Bournemouth - document destruction for homes and businesses across Bournemouth. 
                Serving Bournemouth, Poole, Christchurch and surrounding areas with secure shredding services.
              </p>

              {/* Contact Info */}
              <div className="text-white mb-8">
                <p className="text-lg font-medium">01935 310616</p>
                <p className="text-lg">info@crosscutshredding.co.uk</p>
              </div>

              {/* Feature Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                  <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-white">Secure Destruction</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-white">Certificate Provided</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                  <Building2 className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-white">Customer Portal</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://www.crosscutshredding.co.uk/pricing"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  View Pricing
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.button
                  onClick={() => setIsQuoteModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Get Quote
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side - Shred Bag Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/images/1xshredbag.webp"
                  alt="Professional Cross Cut Shredding secure shred bag"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Paper Shredding Services for Bournemouth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional document destruction services for homes and businesses across Bournemouth, 
              Poole, Christchurch, and surrounding Dorset areas.
            </p>
          </motion.div>

          {/* Professional Collection Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Professional Collection Service
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Our dedicated collection vehicles serve Bournemouth, Poole, and Christchurch with secure document destruction. 
                    Professional drivers ensure your confidential documents are handled safely from collection to destruction.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Secure collection vehicles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">DBS checked drivers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Same-day collections available</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/Back of Van Shred Bags .webp"
                    alt="Professional collection van with secure shred bags"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    <span className="text-sm font-semibold">Professional Service</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Home Shredding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Home Shredding</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Secure document destruction for Bournemouth residents. Collection from your home 
                or drop-off at our secure facility.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Personal documents',
                  'Bank statements', 
                  'Medical records',
                  'Old passports & ID',
                  'Credit card statements'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://crosscutshredding.co.uk/services/domestic-shredding"
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Business Shredding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Business Shredding</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Professional document destruction for Bournemouth businesses. Regular collections 
                and secure console placement available.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Confidential documents',
                  'Employee records',
                  'Financial documents',
                  'Client information',
                  'GDPR compliance'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://crosscutshredding.co.uk/services/business-shredding"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Bournemouth Paper Shredding Service?
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by hundreds of homes and businesses across Bournemouth, Poole, and Christchurch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Secure & Compliant',
                description: 'BS EN 15713 certified document destruction with certificate of destruction provided.'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Fast & Reliable',
                description: 'Same-day collections available. Scheduled services to fit your requirements.'
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Dedicated Service Area',
                description: 'Specialised collection service for Bournemouth, Poole, Christchurch and surrounding Dorset areas.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-green-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional paper shredding across Bournemouth and surrounding areas
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              'Bournemouth', 'Christchurch', 'Poole', 'Ferndown',
              'Wimborne', 'Ringwood', 'New Milton', 'Wareham',
              'Verwood', 'West Moors', 'Corfe Mullen', 'Swanage'
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-lg p-4 text-center hover:bg-green-100 transition-colors"
              >
                <span className="font-medium text-gray-900">{area}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a 
              href="https://crosscutshredding.co.uk/locations"
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View All Areas <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What Can Go in Shred Bags Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Can Go in Paper Shredding Bags?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our secure shred bags and what you can include
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Shred Bag Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Shred Bag Image */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <img 
                    src="/images/1xshredbag.webp" 
                    alt="Professional Document Shredding Bag"
                    className="mx-auto max-w-sm rounded-lg shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Shred Bags</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>75cm x 53cm</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Up to 15kg capacity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Tamper-proof ties</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What You Can Include */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">What You CAN Include</h3>
              </div>
              <p className="text-gray-600 mb-8">
                Our professional shredding equipment handles all these items safely and securely
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Paper & Documents</h4>
                  <ul className="space-y-2">
                    {[
                      'Any paper documents',
                      'Card and cardboard',
                      'Passports',
                      'Books (all types)'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Bound Items & Fasteners</h4>
                  <ul className="space-y-2">
                    {[
                      'Hard back diaries',
                      'Spiral bound documents',
                      'Staples & paperclips',
                      'Treasury tags'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-green-600 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">No need to remove staples, clips, or spiral bindings - we handle everything!</span>
                </div>
                <p className="text-green-100 text-sm">
                  Our professional shredding equipment can handle small metal items without any issues, making preparation easier for you.
                </p>
              </div>

              <div className="mt-6">
                <a 
                  href="https://www.crosscutshredding.co.uk/pricing"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  View Collection Packages
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Document Console Service Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Secure Console Service
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional Document Console Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure document storage with scheduled collections. Perfect for businesses that need regular, reliable document disposal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Console Options & Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Beech Console */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col items-center text-center">
                  <Image
                    src="/images/Standard Beech .png"
                    alt="Standard Beech Document Shredding Console"
                    width={300}
                    height={300}
                    className="mb-4 rounded-lg shadow-sm"
                  />
                  <span className="text-lg font-semibold text-gray-800">Standard Beech</span>
                </div>
                {/* White Console */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col items-center text-center">
                  <Image
                    src="/images/Standard White.png"
                    alt="Standard White Document Shredding Console"
                    width={300}
                    height={300}
                    className="mb-4 rounded-lg shadow-sm"
                  />
                  <span className="text-lg font-semibold text-gray-800">Standard White</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Console</h3>
                  <p className="text-gray-600">900mm x 500mm x 500mm</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Document Slot</h3>
                  <p className="text-gray-600">35mm wide</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Can Be Shredded:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Paper</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Hard Back Diaries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Invoices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Staples & Paperclips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Card Files</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Pricing & Collections */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-700 text-white rounded-2xl p-8 shadow-lg space-y-8"
            >
              <div className="inline-flex items-center gap-2 text-white bg-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <CalendarDays className="w-4 h-4" />
                Most Popular Choice
              </div>
              <h3 className="text-3xl font-bold mb-4">4-Weekly Collections</h3>
              <p className="text-green-100 text-lg mb-6">
                Perfect balance of security and cost-effectiveness. Most businesses choose this option.
              </p>

              <div className="bg-green-800 rounded-xl p-6 text-center space-y-2 mb-8">
                <p className="text-5xl font-extrabold">£40</p>
                <p className="text-green-200 text-lg">exVAT per collection</p>
                <p className="text-green-300 text-sm font-medium">Try free for 8 weeks</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span className="text-lg">Secure tamper-proof console</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span className="text-lg">Scheduled collections</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span className="text-lg">Certificate of destruction</span>
                </div>
              </div>

              <div className="bg-yellow-400 text-gray-900 rounded-xl p-6 flex items-center gap-4 shadow-md">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  8
                </div>
                <div>
                  <p className="font-bold text-lg">Free 8-Week Trial</p>
                  <p className="text-sm">Try our service risk-free</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://www.crosscutshredding.co.uk/services/business-shredding/regular-shredding"
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our shredding services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CalendarDays className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How quickly can you collect from my area?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We can usually arrange collection within <span className="font-semibold text-green-600">2-3 weeks</span> of your request. We provide a 3-hour time window so you know when we&apos;re coming. We cover Bournemouth, Poole, Christchurch and surrounding Dorset areas with flexible scheduling to suit your needs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What services do you offer?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We offer <span className="font-semibold text-blue-600">three main services</span>: Home collection shredding, business shredding, and drop-in shredding at our Yeovil facility. We also provide document scanning and secure storage services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Are your services secure and compliant?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-purple-600">Yes, our services are fully secure and compliant.</span> We&apos;re BS EN 15713 compliant, our staff are DBS checked, and we provide certificates of destruction for all services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do you provide proof of destruction?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-orange-600">Yes, we provide certificates of destruction for all services.</span> These are emailed within 24 hours of shredding and provide proof for your records that documents have been securely destroyed.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Securely Destroy Your Documents?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get a free quote for professional paper shredding services in Bournemouth. 
              Same-day collections available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Get Free Quote
              </motion.button>
              <motion.a
                href="tel:01935310616"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now: 01935 310616
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onCloseAction={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}