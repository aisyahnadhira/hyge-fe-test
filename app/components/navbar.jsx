import React from 'react'
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
 
      <div className="flex justify-between items-center py-6 bg-[rgb(12,28,56)] px-20">
        <Image src="/image/logo.png" alt="Logo" width={100} height={27.38} />

        <div className="text-white bg-[rgb(32,47,76)] px-5 py-3 rounded-full ">
          <Link className="px-5 py-2 hover:text-blue-300 text-xs " href="/">Home</Link>
          <Link className="px-5 py-2 hover:text-blue-300 text-xs" href="/services">Services</Link>
          <Link className="px-5 py-2 hover:text-blue-300 text-xs" href="/why-us">Why Us</Link>
          <Link className="px-5 py-2 hover:text-blue-300 text-xs" href="/our-process">Our Process</Link>
          <Link className="px-5 py-2 hover:text-blue-300 text-xs" href="/our-work">Our Work</Link>
          <Link className="px-5 py-2 hover:text-blue-300 text-xs" href="/faqs">FAQs</Link>
        </div>

        <div className="px-5 py-3 rounded-full bg-[rgb(24,34,61)] hover:bg-[rgb(255,255,255,0.3)]">
        <Link className="text-[rgb(245,245,255)] text-xs hover:text-blue-300" href="/">Let’s Talk</Link>
      </div>
      </div>
  
  )
}
