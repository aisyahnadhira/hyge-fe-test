// import React from 'react'
// import Link from "next/link"

// export default function Card({ imageUrl, webButtonLink, uiButtonLink, description }) {
//   return (
//         <div className="flex flex-col items-center justify-center mb-8">
//       <div className="border border-gray-300 rounded-md p-4 mb-4">
//         <img src={imageUrl} alt="Card Image" className="w-48 h-48 object-cover mb-4" />
//         <div className="flex justify-center">
//           <Link href={webButtonLink}>
//            Web
//           </Link>
//           <Link href={uiButtonLink}>
           
//           </Link>
//         </div>
//       </div>
//       <p className="text-center text-gray-500">{description}</p>
//     </div>
//   )
// }

// const Content = () => {
//   return (
//     <div className="flex flex-wrap justify-center items-center h-screen bg-gray-800 text-white p-8">
//       <Portfolio />
//       {[...Array(8)].map((_, index) => (
//         <Card
//           key={index}
//           imageUrl={`/image/${index + 1}.jpg`}
//           webButtonLink="/web-dev"
//           uiButtonLink="/ui-design"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus tortor vel ligula molestie, et consequat velit ultricies."
//         />
//       ))}
//     </div>
//   );
// };

// export default Content;
