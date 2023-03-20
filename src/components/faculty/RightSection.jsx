import React from 'react'

const RightSection = ({images}) => {
  return (
  //   <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-5 grid-auto-flow dense grid-rows-[300px]'>
  //   <div className='h-full overflow-hidden rounded-lg'>
  //     <img src={require('../../assests/geodesy/Image No. 5.jpg')} alt="img4" className='h-full w-full object-cover' />
  //   </div>
  //   <div className='h-full overflow-hidden rounded-lg'>

  //     <img src={require('../../assests/geodesy/Image No. 7.jpg')} alt="img2" className='h-full w-full object-cover object-center' />
  //   </div>
  //   <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8 flex items-center justify-center'>
  //     <img src={require('../../assests/geodesy/Snapshot_1420.png')} alt="img3" className='h-full w-full object-cover object-center' />
  //   </div>
  //   <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8 flex items-center justify-center'>
  //     <img src={require('../../assests/geodesy/Snapshot_1421.png')} alt="img4" className='h-full w-full object-cover object-center' />
  //   </div>
    
  
  // </div>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-5 grid-auto-flow dense grid-rows-[300px]'>
  {images.map((image, index) => (
    <div key={index} className='h-full overflow-hidden rounded-lg'>
      <img src={image.path} alt={`img${index}`} className='h-full w-full object-cover' />
    </div>
  ))}
</div>

  )
}

export default RightSection