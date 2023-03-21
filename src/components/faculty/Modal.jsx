import React from 'react';
import { SlClose } from 'react-icons/sl';

const Modal = ({ onClose }) => {
  return (
    <div className="md:fixed md:top-0 md:left-0 flex items-center justify-center h-screen w-full">
    <div className="bg-white rounded-md p-4 max-w-lg w-full md:max-w-2xl h-96 overflow-y-scroll relative">
      <button onClick={onClose} className="absolute right-0 md:top-2 md:right-5">
        <SlClose className='fixed' />
      </button>
  
      <h2 className="text-2xl font-bold mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem totam possimus molestiae necessitatibus reprehenderit eaque est deserunt odio quis reiciendis.
      </h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repudiandae consequatur accusamus labore quasi! Rerum temporibus at placeat repellat, iusto aliquam totam porro eius quidem, vel et? Quisquam sapiente cupiditate aperiam soluta voluptates minima veniam, nisi reprehenderit amet sint asperiores magni? Laudantium dolore officia, illum autem perspiciatis enim error? Sapiente non dignissimos dolores vel?
      </p>
      <h3 className="text-lg font-bold mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aspernatur nostrum quas explicabo, laudantium molestiae.
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit recusandae, praesentium quisquam assumenda, eligendi consequuntur minima hic quas earum cupiditate doloremque voluptate. Ad fugit doloribus ipsa omnis molestiae nisi nam consectetur deleniti dolor, consequatur dolore aut eum repudiandae natus cupiditate? At odit reiciendis inventore maxime non magni nostrum?
      </p>
      <h3 className="text-lg font-bold mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aspernatur nostrum quas explicabo, laudantium molestiae.
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit recusandae, praesentium quisquam assumenda, eligendi consequuntur minima hic quas earum cupiditate doloremque voluptate. Ad fugit doloribus ipsa omnis molestiae nisi nam consectetur deleniti dolor, consequatur dolore aut eum repudiandae natus cupiditate? At odit reiciendis inventore maxime non magni nostrum?
      </p>
    </div>
  </div>
  


  );
};

export default Modal;
