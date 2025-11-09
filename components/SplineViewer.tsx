"use client"

import { useEffect, useRef } from "react"
import Spline from "@splinetool/react-spline"

interface SplineViewerProps {
  url: string
  style?: React.CSSProperties
}

export default function SplineViewer({ url, style }: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Optional GSAP fade-in effect or lazy loading
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.opacity = "1"
    }
  }, [])

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", ...style }}>
      <Spline scene={url} />
    </div>
  )
}
