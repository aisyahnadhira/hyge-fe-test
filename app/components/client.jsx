import React from 'react'

export default function Client() {

    const clientImages = [
        "/image/client/Frame 304.png",
        "/image/client/Frame 306.png",
        "/image/client/Frame 303.png",
        "/image/client/Frame 313.png",
        "/image/client/Frame 302.png",
        "/image/client/Frame 301.png",
        "/image/client/Frame 330.png",
        "/image/client/Frame 311.png",
        "/image/client/Frame 305.png",
        "/image/client/Frame 307.png",
        "/image/client/Frame 308.png",
        "/image/client/Frame 309.png",
        "/image/client/Frame 310.png",
        "/image/client/Frame 315.png",
    ];

    return (
        <div className="flex flex-col items-start justify-center bg-[rgb(15,17,22)] px-40 py-20 ">
            <h1 className="text-white text-5xl font-bold mb-4">Our <span className="bg-gradient-to-r from-[rgb(31,164,217)] to-[rgb(57,116,220)] bg-clip-text text-transparent">Client</span></h1>
            <p className="text-[rgb(197,197,197)] text-xl mb-14">Here are just few of the clients we’ve had the privilege to serve:</p>
            <div className="flex flex-wrap">
                {clientImages.map((imageUrl, index) => (
                    <div key={index} className="flex items-center justify-center bg-[rgb(15,17,22)] p-4 border border-white-10 rounded-2xl mr-4 mb-4 w-auto h-17 hover:bg-[rgb(255,255,255,0.3)]">
                            <img src={imageUrl} alt="image" className='h-12'/>
                    </div>
                ))}
            </div>
        </div>
    );
};
