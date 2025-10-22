export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Paper Shredding Bournemouth
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted local paper shredding service, providing secure document destruction 
              for homes and businesses across Bournemouth and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2>Professional Document Destruction Services</h2>
            <p>
              Paper Shredding Bournemouth is your local specialist for secure document destruction services. 
              We provide professional paper shredding solutions for both residential and commercial clients 
              throughout Bournemouth, Christchurch, Poole, and the surrounding Dorset area.
            </p>

            <h3>Our Mission</h3>
            <p>
              To provide secure, reliable, and compliant document destruction services that protect your 
              privacy and help you meet your data protection obligations. We understand the importance of 
              confidential information and are committed to destroying your sensitive documents in the most 
              secure way possible.
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li><strong>Local Service:</strong> Based in the Bournemouth area, we understand local needs</li>
              <li><strong>Fully Compliant:</strong> All services meet BS EN 15713 standards</li>
              <li><strong>Flexible Collections:</strong> Same-day and scheduled services available</li>
              <li><strong>Certificate of Destruction:</strong> Provided for all shredding services</li>
              <li><strong>Competitive Pricing:</strong> Transparent, fair pricing with no hidden costs</li>
              <li><strong>Environmentally Responsible:</strong> All shredded material is 100% recycled</li>
            </ul>

            <h3>Our Services</h3>
            <p>
              We offer a comprehensive range of document destruction services including home collections, 
              business collections, regular scheduled services, and drop-off options. Whether you need to 
              destroy old bank statements, confidential business documents, or bulk paper waste, we have a 
              solution that meets your needs.
            </p>

            <h3>Areas We Serve</h3>
            <p>
              Our paper shredding services are available throughout Bournemouth and the surrounding areas 
              including Christchurch, Poole, Ferndown, Wimborne, Ringwood, and many other locations across Dorset.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}