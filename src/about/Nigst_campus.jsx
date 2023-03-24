import React from 'react';
import HostelComp from './HostelComp';
import SportsComp from './SportsComp';
import CampusComp from './CampusComp';

const wholeData={
  campus:{
    heading:'NIGST CAMPUS',
    data:[
      'NIGST campus is a state-of-the-art training facility located near Uppal junction, Hyderabad. The campus is conveniently located just 5 km away from Secunderabad junction railway station and 35 km away from Rajiv Gandhi International Airport Hyderabad.',
      'It boasts modern classrooms and labs that are fully equipped for both online and offline training, ensuring that trainees receive a world-class learning experience. The library is well-stocked with a vast collection of historical manuals for surveying and the latest textbooks on surveying and mapping related topics.',
      'Additionally, the campus offers affordable hostel and mess facilities for trainees and a guest house for senior government officials and guest faculty.',
      'NIGST campus also has excellent sports facilities, including cricket, volleyball, badminton, and table tennis. These facilities provide trainees with the opportunity to stay physically fit while developing their teamwork and collaboration skills.',
      'The campus is surrounded by natural beauty, with picturesque views and an abundance of wildlife, including deer and peacocks. This creates a serene and peaceful environment that promotes learning and relaxation.',
      'In summary, NIGST campus is a top-tier training facility that provides trainees with an exceptional learning experience. Its world-class facilities, extensive resources, and natural beauty make it a great place to learn, grow, and develop new skills.'
       
    ],
    images:[
      { path: require('../assests/NIGST Campus/Snapshot_1424.png') },

      { path: require('../assests/NIGST Campus/Snapshot_1434.png') },


        { path: require('../assests/NIGST Campus/Snapshot_1422.png') },
        { path: require('../assests/NIGST Campus/Snapshot_1443.png') },

      
       
      
    ]
  },
  sports:{
    heading:'SPORTS FACILITY',
    data:[
      'NIGST campus is a state-of-the-art training facility located near Uppal junction, Hyderabad. The campus is conveniently located just 5 km away from Secunderabad junction railway station and 35 km away from Rajiv Gandhi International Airport Hyderabad.',
      'It boasts modern classrooms and labs that are fully equipped for both online and offline training, ensuring that trainees receive a world-class learning experience. The library is well-stocked with a vast collection of historical manuals for surveying and the latest textbooks on surveying and mapping related topics.',
      'Additionally, the campus offers affordable hostel and mess facilities for trainees and a guest house for senior government officials and guest faculty.',
      'NIGST campus also has excellent sports facilities, including cricket, volleyball, badminton, and table tennis. These facilities provide trainees with the opportunity to stay physically fit while developing their teamwork and collaboration skills.',
      'The campus is surrounded by natural beauty, with picturesque views and an abundance of wildlife, including deer and peacocks. This creates a serene and peaceful environment that promotes learning and relaxation.',
      'Additionally, the campus offers affordable hostel and mess facilities for trainees and a guest house for senior government officials and guest faculty.',
     'In summary, NIGST campus is a top-tier training facility that provides trainees with an exceptional learning experience. Its world-class facilities, extensive resources, and natural beauty make it a great place to learn, grow, and develop new skills.'
    ],
    images:[
     
        { path: require('../assests/Sports/Snapshot_1425.png') },
        { path: require('../assests/Sports/Snapshot_1426.png') },
        { path: require('../assests/Sports/Snapshot_1427.png') },
        { path: require('../assests/Sports/Snapshot_1428.png') },

      
    ]
  },
  hostel:{
    heading:'NIGST HOSTEL',
    data:[
      'NIGST campus is a state-of-the-art training facility located near Uppal junction, Hyderabad. The campus is conveniently located just 5 km away from Secunderabad junction railway station and 35 km away from Rajiv Gandhi International Airport Hyderabad.',
      'It boasts modern classrooms and labs that are fully equipped for both online and offline training, ensuring that trainees receive a world-class learning experience. The library is well-stocked with a vast collection of historical manuals for surveying and the latest textbooks on surveying and mapping related topics.',
      'Additionally, the campus offers affordable hostel and mess facilities for trainees and a guest house for senior government officials and guest faculty.',
      'NIGST campus also has excellent sports facilities, including cricket, volleyball, badminton, and table tennis. These facilities provide trainees with the opportunity to stay physically fit while developing their teamwork and collaboration skills.',
      'The campus is surrounded by natural beauty, with picturesque views and an abundance of wildlife, including deer and peacocks. This creates a serene and peaceful environment that promotes learning and relaxation.',
      'Additionally, the campus offers affordable hostel and mess facilities for trainees and a guest house for senior government officials and guest faculty.',
     'In summary, NIGST campus is a top-tier training facility that provides trainees with an exceptional learning experience. Its world-class facilities, extensive resources, and natural beauty make it a great place to learn, grow, and develop new skills.'
    ],
    images:[
     
      { path: require('../assests/Hostels/Snapshot_1444.png') },
      { path: require('../assests/Hostels/Snapshot_1445.png') },
      { path: require('../assests/Hostels/Snapshot_1447.png') },
      { path: require('../assests/Hostels/Snapshot_1454.png') },

    
  ]
  }
}


const NigstCampus = () => {
  return (
//     <div className='m-2 md:m-4 p-2 md:p-6'>
  

//   <div className=''>
//   <h1 className='text-center font-bold p-12 text-[24px]'>{wholeData.campus.heading}</h1>
//   <div className="flex justify-center">
//   <div className="grid grid-cols-1 md:grid-cols-2 h-full">
//   <div className="p-2 md:p-4">
//     <div className="rounded-lg overflow-hidden shadow-lg bg-white h-full">
//       <div className=" p-6 md:p-28 h-full flex flex-col">
//         {wholeData.campus.data.map((detail,index)=>(
//           <p className="text-gray-800 text-justify" key={index}>{detail}</p>
//         ))}
//       </div>
//     </div>
//   </div>
//   <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center md:gap-4 lg:gap-5 grid-auto-flow dense grid-rows-[400px]'>
//       {wholeData.campus.images.map((image, index) => (
//       <div className={`rounded-lg overflow-hidden shadow-lg h-[400px] bg-white ${wholeData.campus.images.length % 2 === 1 && index === wholeData.campus.images.length - 1 ? 'col-span-2' : ''}`} key={index}>
//         <div className="flex h-full items-center">
//           <img src={image.path} alt="image" className="w-full h-full object-cover"/>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//   </div>
// </div>



//     <div>
//     <h1 className='text-center font-bold p-12 text-[24px]'>{wholeData.sports.heading}</h1>
//     <div className="grid grid-cols-1 md:grid-cols-2 h-full">

//     <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center md:gap-4 lg:gap-5 grid-auto-flow dense grid-rows-[400px]'>
//         {wholeData.sports.images.map((image, index) => (
//       <div className={`rounded-lg overflow-hidden shadow-lg h-[400px] bg-white ${wholeData.sports.images.length % 2 === 1 && index === wholeData.sports.images.length - 1 ? 'col-span-2' : ''}`} key={index}>
//         <div className="flex h-full items-center">
//           <img src={image.path} alt="image" className="w-full h-full object-cover"/>
//         </div>
//       </div>
//     ))}
//   </div>


//   <div className="p-2 md:p-4">
//     <div className="rounded-lg overflow-hidden shadow-lg bg-white h-full">
//     <div className=" p-6 md:p-28 h-full flex flex-col">
//         {wholeData.sports.data.map((detail,index)=>(
//           <p className="text-gray-800  text-justify" key={index}>{detail}</p>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>
//     </div>



//     <div>
//     <h1 className='text-center font-bold p-12 text-[24px]'>{wholeData.hostel.heading}</h1><div className="grid grid-cols-1 md:grid-cols-2 h-full">
//     <div className="p-2 md:p-4">
//     <div className="rounded-lg overflow-hidden shadow-lg bg-white h-full">
//     <div className=" p-6 md:p-28 h-full flex flex-col">
//         {wholeData.campus.data.map((detail,index)=>(
//           <p className="text-gray-800  text-justify" key={index}>{detail}</p>
//         ))}
//       </div>
//     </div>
//   </div>
//   <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center md:gap-4 lg:gap-5 grid-auto-flow dense grid-rows-[400px]'>
//       {wholeData.hostel.images.map((image, index) => (
//       <div className={`rounded-lg overflow-hidden shadow-lg h-[400px] bg-white ${wholeData.hostel.images.length % 2 === 1 && index === wholeData.hostel.images.length - 1 ? 'col-span-2' : ''}`} key={index}>
//         <div className="flex h-full items-center">
//           <img src={image.path} alt="image" className="w-full h-full object-cover"/>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//     </div>

//     </div>
<div className='m-2 md:m-4 p-2 md:p-6'>
<CampusComp wholeData={wholeData} />
 <SportsComp wholeData={wholeData} />
 <HostelComp wholeData={wholeData} />
</div>


  );
};

export default NigstCampus;
