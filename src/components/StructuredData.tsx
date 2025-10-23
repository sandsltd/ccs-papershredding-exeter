export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cross Cut Shredding - Paper Shredding Bournemouth",
    "description": "Professional paper shredding services in Bournemouth, Poole, and Christchurch. Secure document destruction for homes and businesses. BS EN 15713 compliant.",
    "url": "https://papershreddingbournemouth.co.uk",
    "telephone": "01935 310616",
    "email": "info@crosscutshredding.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Yeovil",
      "addressRegion": "Somerset",
      "addressCountry": "GB"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bournemouth"
      },
      {
        "@type": "City", 
        "name": "Poole"
      },
      {
        "@type": "City",
        "name": "Christchurch"
      }
    ],
    "serviceType": "Paper Shredding Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Paper Shredding Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Collection Shredding",
            "description": "Secure document destruction for residential customers"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Business Shredding",
            "description": "Professional document destruction for businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Regular Office Collections",
            "description": "Scheduled document destruction services"
          }
        }
      ]
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "££",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://www.crosscutshredding.co.uk"
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cross Cut Shredding",
    "url": "https://www.crosscutshredding.co.uk",
    "logo": "https://www.crosscutshredding.co.uk/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "01935 310616",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Paper Shredding Bournemouth",
    "url": "https://papershreddingbournemouth.co.uk",
    "description": "Professional paper shredding services in Bournemouth, Poole, and Christchurch",
    "publisher": {
      "@type": "Organization",
      "name": "Cross Cut Shredding"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can you collect from my area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can usually arrange collection within 2-3 weeks of your request. We provide a 3-hour time window so you know when we're coming. We cover Bournemouth, Poole, Christchurch and surrounding Dorset areas with flexible scheduling to suit your needs."
        }
      },
      {
        "@type": "Question",
        "name": "What services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three main services: Home collection shredding, business shredding, and drop-in shredding at our Yeovil facility. We also provide document scanning and secure storage services."
        }
      },
      {
        "@type": "Question",
        "name": "Are your services secure and compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our services are fully secure and compliant. We're BS EN 15713 compliant, our staff are DBS checked, and we provide certificates of destruction for all services."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide proof of destruction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide certificates of destruction for all services. These are emailed within 24 hours of shredding and provide proof for your records that documents have been securely destroyed."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  )
}
