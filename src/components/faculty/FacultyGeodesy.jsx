import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const images = [
  { path: require('../../assests/geodesy/Image No. 5.jpg') },
  { path: require('../../assests/geodesy/Image No. 7.jpg') },
  { path: require('../../assests/geodesy/Snapshot_1420.png') },
  { path: require('../../assests/geodesy/Snapshot_1421.png') }
];
const heading='Faculty Geo'
const content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, accusantium, recusandae suscipit minus mollitia tempore amet ducimus dolorum dicta quasi dignissimos voluptatibus. Doloremque quos, non omnis earum saepe placeat nulla necessitatibus fugit ex? Temporibus nisi cum tenetur in alias debitis corporis laborum numquam vel autem. Enim repellat nam doloremque dolorum quia, veritatis autem consequuntur.'
const FacultyGeodesy = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  m-4 md:m-6 lg:m-8 rounded-md gap-2 md:gap-4 lg:gap-6'>
        <LeftSection heading={heading} content={content} />
        <RightSection images={images}/>
    </div>
  )
}

export default FacultyGeodesy