import React from 'react';

export default function Banner() {
  return (
    <div className="relative h-screen bg-[rgb(15,17,22)] px-40 flex justify-center items-center">
      <div className="absolute inset-16 bg-cover" style={{ backgroundImage: "url('/image/bg-banner-1.png')" }}></div>
      <div className="absolute inset-24 bg-cover" style={{ backgroundImage: "url('/image/bg-banner-2.png')" }}></div>
      <div className="absolute inset-32 bg-cover" style={{ backgroundImage: "url('/image/bg-banner-3.png')" }}></div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-11">
          <h1 className="text-white text-5xl font-bold mb-4">We can help to improve your business</h1>
          <h1 className="bg-gradient-to-r from-[rgb(31,164,217)] to-[rgb(57,116,220)] bg-clip-text text-transparent text-5xl font-bold pb-1">by upgrading your technology!</h1>
        </div>
        <p className="text-[rgb(197,197,197)] text-xl mb-8">Schedule a free 30 mins call with us</p>
        <button className="bg-[rgb(26,104,254)] rounded-full px-12 py-4 text-white font-semibold text-base">Book an appointment</button>
      </div>
    </div>
  );
}
