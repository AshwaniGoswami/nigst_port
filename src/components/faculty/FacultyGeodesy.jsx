import React from 'react'
import LeftSection from './LeftSection'
import LowerLeft from './LowerLeft';
import LowerRight from './LowerRight';
import RightSection from './RightSection'
import imageHead from '../../assests/geodesy/G. Varun Kumar, Head Faculty.JPG'
const images = [
  { path: require('../../assests/geodesy/Image No. 5.jpg') },
  { path: require('../../assests/geodesy/Image No. 7.jpg') },
  { path: require('../../assests/geodesy/Snapshot_1420.png') },
  { path: require('../../assests/geodesy/Snapshot_1421.png') }
];

const heading = 'Faculty Geo'
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, accusantium, recusandae suscipit minus mollitia tempore amet ducimus dolorum dicta quasi dignissimos voluptatibus. Doloremque quos, non omnis earum saepe placeat nulla necessitatibus fugit ex? Temporibus nisi cum tenetur in alias debitis corporis laborum numquam vel autem. Enim repellat nam doloremque dolorum quia, veritatis autem consequuntur.'

const headData = {
  name: 'G. Varun Kumar',
  designation: 'Deputy Surveyor General',
  position: 'Head Of Faculty',
  image: imageHead
}

const data = [
  {
    name: 'K.V. Ramana Murthy',
    designation: 'Superintending Surveyor',
    position: 'Faculty'
  },
  {
    name: 'Ch.V.S.S. Prasad',
    designation: 'Superintending',
    position: 'Faculty'
  },
  {
    name: 'Samir-Ud-Din-Khan',
    designation: 'Surveyor(Adhoc)',
    position: 'Instructor'
  }
];

const Modata = {
  title: 'Biography',
  data: [
    {
      heading: 'Info',
      details: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed tellus blandit mollis. Maecenas ac quam ut nibh consequat hendrerit eget quis felis. Donec eget turpis in lorem consectetur eleifend. Nullam ultriciesnulla eget metus ultricies, at faucibus metus posuere. Suspendisse potenti. In vulputate metus non efficitur vulputate. Nunc id neque ut mi rhoncus commodo sit amet ut odio. Nam ut lacus leo. Nulla vel elit nec elit laoreet egestas vel ut erat. Praesent iaculis, ipsum id venenatis varius, nisl dui vestibulum est, eu mollis nibh  justo a arcu. Integer malesuada velit purus, in vehicula magna rhoncus vitae.'
    },
    {
      heading: 'Education',
      details: ' Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum  metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.'
    },
    {
      heading: '',
      details: 'Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum  metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.'
    },
    {
      heading: '',
      details: 'Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum  metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.'
    },
    {
      heading: '',
      details: 'Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum  metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.'
    },
    {
      heading: '',
      details: 'Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum  metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.'
    },
    {
      heading: 'Info',
      details: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed tellus blandit mollis. Maecenas ac quam ut nibh consequat hendrerit eget quis felis. Donec eget turpis in lorem consectetur eleifend. Nullam ultriciesnulla eget metus ultricies, at faucibus metus posuere. Suspendisse potenti. In vulputate metus non efficitur vulputate. Nunc id neque ut mi rhoncus commodo sit amet ut odio. Nam ut lacus leo. Nulla vel elit nec elit laoreet egestas vel ut erat. Praesent iaculis, ipsum id venenatis varius, nisl dui vestibulum est, eu mollis nibh  justo a arcu. Integer malesuada velit purus, in vehicula magna rhoncus vitae.'
    },
    {
      heading: 'Info',
      details: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed tellus blandit mollis. Maecenas ac quam ut nibh consequat hendrerit eget quis felis. Donec eget turpis in lorem consectetur eleifend. Nullam ultriciesnulla eget metus ultricies, at faucibus metus posuere. Suspendisse potenti. In vulputate metus non efficitur vulputate. Nunc id neque ut mi rhoncus commodo sit amet ut odio. Nam ut lacus leo. Nulla vel elit nec elit laoreet egestas vel ut erat. Praesent iaculis, ipsum id venenatis varius, nisl dui vestibulum est, eu mollis nibh  justo a arcu. Integer malesuada velit purus, in vehicula magna rhoncus vitae.'
    },
    {
      heading: '',
      details: 'Aliquam rhoncus risus ac nunc convallis, sit amet volutpat quam dictum. Maecenas convallis venenatis nibh, eget aliquet mauris dignissim id. Etiam feugiat, libero non hendrerit suscipit, felis turpis ultrices purus, at interdum leo odio ac sapien. Aenean sed enim vel dolor volutpat rhoncus. Nulla facilisi. Suspendisse eget mauris ipsum. Sed quis suscipit eros. Praesent congue, nunc id suscipit fringilla, enim mi consequat metus, eu bibendum  metus ex non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec semper elit eget tellus consectetur suscipit. Donec sed felis vitae erat vehicula feugiat nec eu ipsum.'
    },
    
  ]
}

const FacultyGeodesy = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  m-4 md:m-6 lg:m-8 rounded-md gap-2 md:gap-4 lg:gap-6'>
      <LeftSection heading={heading} content={content} />
      <RightSection images={images} />
      <LowerLeft Modata={Modata} headData={headData} />
      <LowerRight data={data} />
    </div>
  )
}

export default FacultyGeodesy