"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3"
      >
        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">PS</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900 leading-none">
            Paper Shredding
          </span>
          <span className="text-sm text-green-600 font-medium leading-none">
            Bournemouth
          </span>
        </div>
      </motion.div>
    </Link>
  )
}