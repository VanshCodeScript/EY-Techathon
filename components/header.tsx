"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Link from "next/link"

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
  }, [])

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#003a88] dark:bg-slate-900 backdrop-blur-md bg-opacity-95 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-md">
              <svg
                className="w-6 h-6 text-[#003a88] dark:text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white leading-tight">AgenicAI</h1>
              <p className="text-blue-100 dark:text-blue-300 text-xs">Pharma Innovation Assistant</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-blue-50">
            <button
              onClick={() => handleScroll("agents-section")}
              className="hover:text-white transition-colors duration-300"
            >
              Agents
            </button>
            <button
              onClick={() => handleScroll("team-section")}
              className="hover:text-white transition-colors duration-300"
            >
              Team
            </button>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium transition-all duration-300 hover:shadow-lg"
            >
              Launch App
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
