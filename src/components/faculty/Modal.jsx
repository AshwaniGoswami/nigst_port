import React from 'react';
import { SlClose } from 'react-icons/sl';

const Modal = ({ onClose }) => {
  return (

  
<div class="fixed top-0 left-0  w-screen h-screen mt-7 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50 overflow-y-auto">
  <div class="bg-white rounded-lg shadow-lg p-6 max-w-full mx-auto">
    <div class="max-h-screen overflow-y-auto mb-4 relative mt-4 p-4">
      <button onClick={onClose} className="absolute top-2 right-2 md:top-2 md:right-5">
        <SlClose className="w-4 h-4 md:w-6 md:h-6" />
      </button>
     <h2 class="text-2xl font-bold mb-4">Bio</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed tellus blandit mollis. Maecenas ac quam
        ut nibh consequat hendrerit eget quis felis. Donec eget turpis in lorem consectetur eleifend. Nullam ultricies
        nulla eget metus ultricies, at faucibus metus posuere. Suspendisse potenti. In vulputate metus non efficitur
        vulputate. Nunc id neque ut mi rhoncus commodo sit amet ut odio. Nam ut lacus leo. Nulla vel elit nec elit
        laoreet egestas vel ut erat. Praesent iaculis, ipsum id venenatis varius, nisl dui vestibulum est, eu mollis nibh
        justo a arcu. Integer malesuada velit purus, in vehicula magna rhoncus vitae.
      </p>
      <p>
        Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget
        aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at
        interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris
        ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum
        metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec
        semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.
      </p>
      <p>
        Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget
        aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at
        interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris
        ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum
        metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec
        semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.
      </p>
      <p>
        Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget
        aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at
        interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris
        ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum
        metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec
        semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.
      </p>
      <p>
        Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget
        aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at
        interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris
        ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum
        metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec
        semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.
      </p>
    </div>
  
  </div>
</div>

// {/* <div class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-900 bg-opacity-50 z-50 overflow-y-auto">
//   <div class="bg-white rounded-lg shadow-lg p-6 max-w-full mx-auto p-4 md:float-right md:max-w-md relative">
//     <button onClick={onClose} className="absolute top-2 right-2">
//       <SlClose className="w-4 h-4 md:w-6 md:h-6 md:w-6 md:h-6" />
//     </button>
//     <div class="max-h-screen overflow-y-auto mb-4 relative">
//       <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed tellus blandit mollis. Maecenas ac quam
//         ut nibh consequat hendrerit eget quis felis. Donec eget turpis in lorem consectetur eleifend. Nullam ultricies
//         nulla eget metus ultricies, at faucibus metus posuere. Suspendisse potenti. In vulputate metus non efficitur
//         vulputate. Nunc id neque ut mi rhoncus commodo sit amet ut odio. Nam ut lacus leo. Nulla vel elit nec elit
//         laoreet egestas vel ut erat. Praesent iaculis, ipsum id venenatis varius, nisl dui vestibulum est, eu mollis nibh
//         justo a arcu. Integer malesuada velit purus, in vehicula magna rhoncus vitae.
//       </p>
//       <p>
//         Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget
//         aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at
//         interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris
//         ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum
//         metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec
//         semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.
//       </p>
//       <p>
//         Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget
//         aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at
//         interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris
//         ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum
//         metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec
//         semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.
//       </p>
//       <p>
//         Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget
//         aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at
//         interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris
//         ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum
//         metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec
//         semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.
//       </p>
      
//     </div>
//   </div>
// </div> */}



  );
};

export default Modal;
