"use client"

import { useEffect } from 'react'

interface ClientComponentsProps {
  GA_MEASUREMENT_ID?: string
  ADS_CONVERSION_ID?: string
}

export default function ClientComponents({ 
  GA_MEASUREMENT_ID, 
  ADS_CONVERSION_ID 
}: ClientComponentsProps) {
  useEffect(() => {
    // Google Analytics
    if (GA_MEASUREMENT_ID) {
      // Load GA script
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      script.async = true
      document.head.appendChild(script)

      // Initialize GA
      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      gtag('js', new Date())
      gtag('config', GA_MEASUREMENT_ID)

      // Make gtag available globally
      ;(window as any).gtag = gtag
    }

    // Google Ads
    if (ADS_CONVERSION_ID) {
      const adsScript = document.createElement('script')
      adsScript.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_CONVERSION_ID}`
      adsScript.async = true
      document.head.appendChild(adsScript)
    }
  }, [GA_MEASUREMENT_ID, ADS_CONVERSION_ID])

  return null
}

// Extend window type for gtag
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}