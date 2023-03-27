import React from 'react'

const ImgCard = () => {
  return (
<div className=''>
  <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
    <div className='bg-gray-100 p-4 text-center'>
      <img src={require('../../assests/Dr. Srivari Chandrasekhar.jpg')} alt="" className='mx-auto mb-4 rounded-full' />
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <h2 className='text-lg font-medium'>Name:</h2>
          <span className='text-gray-700'>Shri Sunil Kumar</span>
        </div>
        <div className='flex gap-2'>
          <h2 className='text-lg font-medium'>Designation:</h2>
          <span className='text-gray-700'>Surveyor General of India</span>
        </div>
        <div className='flex gap-2'>
          <h2 className='text-lg font-medium'>Position:</h2>
          <span className='text-gray-700'>Chairman</span>
        </div>
      </div>
    </div>
  </div>
</div>



  )
}

export default ImgCard