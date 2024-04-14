import React from 'react';

export default function Banner() {
  return (
    <div className="relative bg-[rgb(15,17,22)] px-4 py-12 md:px-20 lg:px-32 xl:px-40 flex justify-center items-center">
      <div className="absolute inset-16 bg-cover"></div>
      <div className="absolute inset-24 bg-cover"></div>
      <div className="absolute inset-32 bg-cover"></div>
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 text-center">We can help to improve your business</h1>
          <h1 className="bg-gradient-to-r from-[rgb(31,164,217)] to-[rgb(57,116,220)] bg-clip-text text-transparent text-3xl md:text-5xl font-bold pb-1 text-center">by upgrading your technology!</h1>
        </div>
        <p className="text-[rgb(197,197,197)] text-lg md:text-xl mb-6 text-center">Schedule a free 30 mins call with us</p>
        <button className="bg-[rgb(26,104,254)] rounded-full px-8 py-3 text-white font-semibold text-base md:text-lg transition duration-300 ease-in-out hover:bg-[rgb(255,255,255)]">Book an appointment</button>
      </div>
    </div>
  );
}
