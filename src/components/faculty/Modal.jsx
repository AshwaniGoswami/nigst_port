import React from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
const Modal = ({ onClose,data,title}) => {
  return (
  
<div class="fixed top-0 left-0 md:left-[50%]   md:items-end md:w-auto md:h-auto  w-screen h-screen mt-7 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50 overflow-y-auto">
  <div class="bg-white rounded-lg shadow-lg p-6 max-w-full mx-auto">
    <div class="max-h-screen overflow-y-auto mb-4 relative mt-4 p-8">
      <button onClick={onClose} className="absolute top-2 right-2 md:top-2 md:right-5">
        <AiFillCloseCircle className="fixed right-6 md:right-12 w-6 h-6 md:w-8 md:h-8" />
      </button>
     <h2 class="text-2xl font-bold mb-4">{title}</h2>
     <div>
     {data.map((detail,index)=>(
      <div key={index}>
          <h2 className='font-semibold'>{detail.heading}</h2>
          <p className='text-justify pb-4'>{detail.details}</p>
        </div>
))}
     </div>
 
    </div>
  
  </div>
</div>

  );
};

export default Modal;
