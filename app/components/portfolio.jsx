import React from 'react'
import Link from "next/link"
import Image from "next/image"

export default function Portfolio () {
  return (
    <div className="flex flex-col items-start justify-center h-screen">
      <div className="flex items-center mb-8">
        <div className="mr-1">
          <Image src="/image/Vector 24.png" alt="Image" width={100} height={100} />
        </div>
        <div className="mr-4">
          <h1 className="text-white text-5xl font-bold mb-10">Our <span className="text-[rgb(46,114,223)]">Portfolio</span></h1>
          <p className="text-[rgb(197,197,197)] text-xl mb-10">As your digital partner, we collaborate with you to drive innovation, stay ahead of the curve, and deliver real impact for your business.</p>
          <div className="inline-flex">
            <Link className="bg-[rgb(26,104,254)]  text-white font-bold py-2 px-5 border border-white-20 rounded-full" href="/web-dev">All</Link>
            <Link className="bg-[rgb(31,44,65)]  text-white font-bold py-2 px-5 border border-white-20 rounded-full ml-4" href="/uiux">Web Development</Link>
            <Link className="bg-[rgb(31,44,65)]  text-white font-bold py-2 px-5 border border-white-20 rounded-full ml-4" href="/uiux">App Development</Link>
            <Link className="bg-[rgb(31,44,65)]  text-white font-bold py-2 px-5  border border-white-20 rounded-full ml-4" href="/uiux">UI Design</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};
