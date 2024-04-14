import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Detail() {
    
    const techs = [
        { id: 1, title: "HTML", imageUrl: "/image/tech/html.png" },
        { id: 2, title: "JavaScript", imageUrl: "/image/tech/js.png" },
        { id: 3, title: "WordPress", imageUrl: "/image/tech/wp.png" },
        { id: 4, title: "WooCommerce", imageUrl: "/image/tech/woocommerce.png" }
    ];

    return (
        <div className="flex flex-col items-start justify-center px-40 bg-gradient-to-b from-[rgb(12,28,56)] to-[rgb(15,17,22)] text-white">
            <div className="flex items-center justify-center mb-12">
                <img src="/image/arrow-left.png" alt="Back" className="mr-6 w-4 h-4" />
                <Link href="/" className="text-[rgb(197,197,197)] text-base hover:underline">Go Back</Link>
            </div>

            <Image src="/image/Frame 341.png" alt="Logo" width={960} height={470} />

            <div className="flex flex-wrap items-center my-9">
                <h2 className="text-2xl font-bold mr-12">Our Role</h2>
                <div className="flex flex-wrap">
                                    <p className="mr-4 px-5 py-2 rounded-full bg-[rgb(35,49,70)] text-[rgb(57,116,220)] border border-white/20 text-xs">Web Development</p>
                <p className='px-5 py-2 rounded-full bg-[rgb(35,49,70)] text-[rgb(57,116,220)] border border-white/20 text-xs'>UI Design</p>
                </div>
            </div>
            <div className='mt-20'>
                <h1 className="text-5xl font-bold mb-8 tracking-[2px]">Levare Decanter</h1>
                <p className="mb-14 text-base">Through Levare website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.</p>
                <h2 className="text-2xl font-bold mb-10">Tech stack</h2>

                <div className="bg-[rgb(11,28,52)] grid grid-cols-4 gap-8 justify-center rounded-lg border border-white/20 p-2">
                    {techs.map(tech => (
                        <div key={tech.id} className="bg-[rgb(12,30,51)] rounded-lg border border-white/20 shadow-md p-2 relative flex flex-col items-center">
                            <div className="row1">
                                <img src={tech.imageUrl} className="h-12 mb-1" />
                                <h2 className="text-base font-bold mb-1 text-white">{tech.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="my-16">
                    <a href="" className='py-2 px-5 text-xs text-white rounded-full bg-blue-700'>Visit Site</a>
                </div>
                <hr className="border-t border-gray-200" />

                <h2 className="text-2xl font-bold mt-10 mb-10">Description</h2>
                <p className="mb-14 text-base">Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.</p>
                <h2 className="text-2xl font-bold mb-10">A sneak peek</h2>
                <p className="mb-14 text-base">Here’s a sneak peek of what we do with Levare:</p>
                <div className="mb-20">
                    <Image src="/image/Frame 346.png" alt="Logo" width={960} height={640} />
                </div>
                <h2 className="text-2xl font-bold mb-10">Problem Statement</h2>
                <p className="mb-14 text-base">The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.</p>
                <h2 className="text-2xl font-bold mb-10">What We Did</h2>
                <p className="mb-14 text-base">By developing a website for Levare Decanter, we aim to address these challenges and provide a platform that offers innovative products and resources to revolutionize the wine drinking experience. Our goal is to create an online destination where wine enthusiasts can access reliable information, discover products that enhance wine aeration, and connect with a community of like-minded individuals passionate about true taste.</p>
            </div>
        </div>
    );
}
