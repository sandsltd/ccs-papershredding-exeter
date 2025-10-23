"use client"

import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/">
        <h1 className="text-[2.5rem] font-light tracking-[0.2em] group">
          <span className="text-gray-500 inline-block transition-all duration-500 hover:text-gray-700 hover:-translate-y-1">
            cross
          </span>
          <span className="text-green-600 inline-block transition-all duration-500 hover:text-green-700 hover:scale-110">
            cut
          </span>
        </h1>
      </Link>
    </div>
  )
}