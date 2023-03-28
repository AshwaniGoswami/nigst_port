// import { useState } from "react";

// const Gallery = ({ images }) => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [speed, setSpeed] = useState(3000);

//   const handlePrev = () => {
//     setCurrentImage((currentImage - 1 + images.length) % images.length);
//     setIsPlaying(false);
//   };

//   const handleNext = () => {
//     setCurrentImage((currentImage + 1) % images.length);
//     setIsPlaying(false);
//   };

//   const handlePlay = () => {
//     setIsPlaying(true);
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//   };

//   const handleSlow = () => {
//     setSpeed(6000);
//     setIsPlaying(true);
//   };

//   const handleMedium = () => {
//     setSpeed(3000);
//     setIsPlaying(true);
//   };

//   const handleFast = () => {
//     setSpeed(1500);
//     setIsPlaying(true);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center py-8">
//       <div className="relative">
//         <img
//           src={images[currentImage]}
//           alt={`Image ${currentImage + 1}`}
//           className="h-96 w-full object-cover rounded-md shadow-lg"
//         />
//         {isPlaying ? (
//           <button
//             onClick={handlePause}
//             className="absolute top-2 right-2 bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
//           >
//             <i className="fas fa-pause"></i>
//           </button>
//         ) : (
//           <button
//             onClick={handlePlay}
//             className="absolute top-2 right-2 bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
//           >
//             <i className="fas fa-play"></i>
//           </button>
//         )}
//       </div>
//       <div className="flex items-center justify-center mt-4">
//         <button
//           onClick={handlePrev}
//           className="mr-2 bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
//         >
//           <i className="fas fa-chevron-left"></i>
//         </button>
//         <button
//           onClick={handleNext}
//           className="ml-2 bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
//         >
//           <i className="fas fa-chevron-right"></i>
//         </button>
//       </div>
//       <div className="flex items-center justify-center mt-4">
//         <button
//           onClick={handleSlow}
//           className="mr-2 bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
//         >
//           0.5x
//         </button>
//         <button
//           onClick={handleMedium}
//           className="mr-2 bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
//         >
//           1x
//         </button>
//         <button
//           onClick={handleFast}
//           className="bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
//         >
//           2x
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

