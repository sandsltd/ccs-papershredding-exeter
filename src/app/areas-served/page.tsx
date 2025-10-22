import { MapPin, CheckCircle } from 'lucide-react'

export default function AreasServedPage() {
  const mainAreas = [
    'Bournemouth',
    'Christchurch', 
    'Poole',
    'Ferndown'
  ]

  const allAreas = [
    'Bournemouth', 'Christchurch', 'Poole', 'Ferndown',
    'Wimborne', 'Ringwood', 'New Milton', 'Wareham',
    'Verwood', 'West Moors', 'Corfe Mullen', 'Swanage',
    'Dorchester', 'Blandford Forum', 'Shaftesbury', 'Gillingham',
    'Bridport', 'Lyme Regis', 'Weymouth', 'Portland',
    'Sturminster Newton', 'Sherborne', 'Beaminster', 'Lytchett Matravers'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Areas We Serve
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional paper shredding services across Bournemouth, Dorset and surrounding areas. 
              Same-day collections available in most locations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Primary Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              Our main service areas with regular collections and fastest response times
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {mainAreas.map((area, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area}</h3>
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Same-day service available</span>
                </div>
              </div>
            ))}
          </div>

          {/* Services Available */}
          <div className="bg-green-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Services Available in All Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Home collection services',
                'Business document shredding',
                'Regular scheduled collections',
                'Same-day emergency service',
                'Secure console placement',
                'Certificate of destruction'
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Service Locations
            </h2>
            <p className="text-lg text-gray-600">
              We provide paper shredding services to the following areas across Dorset
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all"
              >
                <span className="font-medium text-gray-900">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Don&apos;t see your area listed?
              </h3>
              <p className="text-gray-600 mb-6">
                We&apos;re constantly expanding our service area. If your location isn&apos;t listed above, 
                please get in touch as we may still be able to help you.
              </p>
              <a 
                href="tel:01935310616"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Call to Check: 01935 310616
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Paper Shredding in Your Area?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. Same-day collections available across most of our service area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors">
              Get Free Quote
            </button>
            <a 
              href="tel:01935310616"
              className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-800 transition-colors"
            >
              Call: 01935 310616
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}