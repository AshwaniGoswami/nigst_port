import React from 'react'
import DetilnImg from '../pageStructure/DetilnImg'
import LowerLeft from './LowerLeft'
import LowerRight from './LowerRight'


const headData = {
  name: 'G Varun Kumar',
  designation: 'Deputy Surveyor General',
  position: 'Head Of Faculty',
  image: ''
}

const data = [
  {
    name: 'Pankaj Singh Kalam',
    designation: 'Superintending Surveyor',
    position: 'Faculty'
  },
  {
    name: 'Y.K. Rathod',
    designation: 'Superintending Surveyor(Adhoc)',
    position: 'Faculty'
  },
  {
    name: 'N. Balaram Swamy',
    designation: 'Superintending Surveyor(Adhoc)',
    position: 'Faculty'
  },
  {
      name: 'P. Yadish',
      designation: 'Officer Surveyor',
      position: 'Faculty'
    },
    {
      name: 'R.V.V. SATYANARAYANA',
      designation: 'Surveyor',
      position: 'Faculty Instructor'
    },
    {
      name: 'Mrs. Syeda Hafeeza Sulthana',
      designation: 'Surveyor',
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
   
    
  ]
}

const facultyPage={
  images:[


    
  ],
  
  heading:'Faculty of Topographical Survey & Land Information System',
  content:['Welcome to the Topographical Survey and Land Information System Faculty, where we provide comprehensive training to government, private and individual entities involved in geospatial domain. Our mission is to equip the trainee officers and staff with the necessary knowledge and skills to conduct large scale mapping, field verification and QA/QC of geospatial data using total station, GNSS, CORS, digital level, mobile mapping, 360° panoramic camera and other related technologies.','Our courses cover theoretical concepts of surveying and are complemented with practical and lab exercises to provide a comprehensive understanding of the subject. We offer various training programs ranging from one week to one year, depending on the course.','We also conduct tailor-made courses as per the specific needs of our clients. Our faculty ensures that participants receive personalized attention and guidance from experienced trainers. We are committed to providing our trainees with the highest quality education in topographical survey and land information system to help them make good contributions in their respective fields',' Join us today to take the first step towards a successful career in the geospatial domain.']
}
const FacultyTopo = () => {
  return (
<div className='m-2 md:m-4 p-2 md:p-6'>
    <DetilnImg heading={facultyPage.heading} text={facultyPage.content} images={facultyPage.images} />

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  m-4 md:m-6 lg:m-8 rounded-md gap-2 md:gap-4 lg:gap-6'>
    
      <LowerLeft Modata={Modata} headData={headData} />
      <LowerRight data={data} />
    </div>
    </div>  )
}

export default FacultyTopo