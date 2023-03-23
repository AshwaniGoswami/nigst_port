import React from 'react';

const data = [
  'NIGST campus is a state-of-the-art training facility located near Uppal junction, Hyderabad. The campus is conveniently located just 5 km away from Secunderabad junction railway station and 35 km away from Rajiv Gandhi International Airport Hyderabad.',
  'It boasts modern classrooms and labs that are fully equipped for both online and offline training, ensuring that trainees receive a world-class learning experience. The library is well-stocked with a vast collection of historical manuals for surveying and the latest textbooks on surveying and mapping related topics.',
  'Additionally, the campus offers affordable hostel and mess facilities for trainees and a guest house for senior government officials and guest faculty.',
  'NIGST campus also has excellent sports facilities, including cricket, volleyball, badminton, and table tennis. These facilities provide trainees with the opportunity to stay physically fit while developing their teamwork and collaboration skills.',
  'The campus is surrounded by natural beauty, with picturesque views and an abundance of wildlife, including deer and peacocks. This creates a serene and peaceful environment that promotes learning and relaxation.',
  'In summary, NIGST campus is a top-tier training facility that provides trainees with an exceptional learning experience. Its world-class facilities, extensive resources, and natural beauty make it a great place to learn, grow, and develop new skills.'
];

const NigstCampus = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 h-full">
  <div className="p-4">
    <div className="rounded-lg overflow-hidden shadow-lg bg-white h-full">
      <div className="p-6 h-full flex flex-col justify-center">
        <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus molestias tempore quod? Accusamus non, quia quo unde quod temporibus, sint eos molestias reprehenderit autem similique officiis. Ab, vero non nihil voluptates eum pariatur modi suscipit blanditiis iste quidem beatae molestiae magnam corporis natus doloribus consectetur tempora ratione sed itaque et. Saepe, doloremque provident?</p>
      </div>
    </div>
  </div>
  <div className="flex flex-wrap md:w-1/2">
    <div className="p-4 w-full md:w-1/2 lg:w-1/4">
      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="image" className="w-full h-auto"/>
      </div>
    </div>
    <div className="p-4 w-full md:w-1/2 lg:w-1/4">
      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="image" className="w-full h-auto"/>
      </div>
    </div>
    <div className="p-4 w-full md:w-1/2 lg:w-1/4">
      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="image" className="w-full h-auto"/>
      </div>
    </div>
    <div className="p-4 w-full md:w-1/2 lg:w-1/4">
      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="image" className="w-full h-auto"/>
      </div>
    </div>
    
  </div>
</div>


  );
};

export default NigstCampus;
