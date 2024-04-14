import React from 'react';
import Link from "next/link";
import Image from "next/image";

const posts = [
  { id: 1, title: "Lavare Decanter", imageUrl: "/image/portfolio/portfolio1.png", content: "Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.", category1: "Web Development", category2: "UI Design" },
  { id: 2, title: "Lavare Decanter", imageUrl: "/image/portfolio/portfolio2.png", content: "Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.", category1: "Web Development", category2: "UI Design" },
  { id: 3, title: "Lavare Decanter", imageUrl: "/image/portfolio/portfolio3.png", content: "Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.", category1: "Web Development", category2: "UI Design" },
  { id: 4, title: "Lavare Decanter", imageUrl: "/image/portfolio/portfolio4.png", content: "Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.", category1: "Web Development", category2: "UI Design" },
  { id: 5, title: "Lavare Decanter", imageUrl: "/image/portfolio/portfolio5.png", content: "Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.", category1: "Web Development", category2: "UI Design" },
  { id: 6, title: "Lavare Decanter", imageUrl: "/image/portfolio/portfolio1.png", content: "Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.", category1: "Web Development", category2: "UI Design" },
  { id: 7, title: "Lavare Decanter", imageUrl: "/image/portfolio/portfolio1.png", content: "Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.", category1: "Web Development", category2: "UI Design" },
  { id: 8, title: "Lavare Decanter", imageUrl: "/image/portfolio/portfolio1.png", content: "Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.", category1: "Web Development", category2: "UI Design" },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col items-start justify-center p-20 bg-gradient-to-b from-[rgb(12,28,56)] to-[rgb(15,17,22)]">
      <div className="flex items-center mb-8">
        <div className="mr-1">
          <Image src="/image/Vector 24.png" alt="Image" width={100} height={100} />
        </div>
        <div className="mr-4">
          <h1 className="text-white text-5xl font-bold mb-10">Our <span className="bg-gradient-to-r from-[rgb(31,164,217)] to-[rgb(57,116,220)] bg-clip-text text-transparent">Portfolio</span></h1>
          <p className="text-[rgb(197,197,197)] text-xl mb-10">As your digital partner, we collaborate with you to drive innovation, stay ahead of the curve, and deliver real impact for your business.</p>
          <div className="inline-flex">
            <Link href="/web-dev" className="bg-[rgb(26,104,254)] text-white font-bold py-2 px-5 border border-white/20 rounded-full">
              All
            </Link>
            <Link href="/uiux" className="bg-[rgb(31,44,65)] text-white font-bold py-2 px-5 border border-white/20 rounded-full ml-4">
              Web Development
            </Link>
            <Link href="/uiux" className="bg-[rgb(31,44,65)] text-white font-bold py-2 px-5 border border-white/20 rounded-full ml-4">
              App Development
            </Link>
            <Link href="/uiux" className="bg-[rgb(31,44,65)] text-white font-bold py-2 px-5 border border-white/20 rounded-full ml-4">
              UI Design
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center">
      <div className="mr-1">
          <Image src="/image/Vector 27.png" alt="Image" width={100} height={100} />
        </div>
      
      <div className="grid grid-cols-2 gap-8 px-20 w-max-[456px]">
        {posts.map(post => (
          <div key={post.id} className="bg-[rgb(12,24,46)] rounded-lg border border-white/20 overflow-hidden shadow-md p-2 relative">
            <div className="row1">
              <img src={post.imageUrl} alt={post.title} className="w-full h-54 object-cover rounded-lg" />
            </div>
            <div className="bg-[rgb(21,41,68)] row2 p-4 rounded-lg mt-6 relative z-10 border border-white/20">
              <div className="flex flex-row mb-4">
                <p className="mr-4 px-5 py-2 rounded-full bg-[rgb(35,49,70)] text-[rgb(57,116,220)] border border-white/20 text-xs">{post.category1}</p>
                <p className='px-5 py-2 rounded-full bg-[rgb(35,49,70)] text-[rgb(57,116,220)] border border-white/20 text-xs'>{post.category2}</p>
              </div>
              <h2 className="text-xl font-bold mb-2 text-white ">{post.title}</h2>
              <p className="text-[rgb(197,197,197)] text-base overflow-hidden text-overflow-ellipsis line-clamp-3">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
          <Image src="/image/Vector 26.png" alt="Image" width={100} height={100} />
        </div>
      </div>

    </div>
  );
}
