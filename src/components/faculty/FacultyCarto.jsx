import React from 'react'

const headData = {
    name: 'S K Sinha',
    designation: 'Deputy Surveyor General',
    position: 'Head Of Faculty',
    image: ''
  }
  
  const data = [
    {
      name: 'B C Sahoo',
      designation: 'Officer Surveyor',
      position: '-'
    },
    {
      name: 'Maheshwar Singh',
      designation: 'Officer Surveyor',
      position: '-'
    },
    {
      name: 'K G Sundara Rao',
      designation: 'Officer Surveyor',
      position: '-'
    },
    {
        name: 'T Sivananda Kumar',
        designation: 'Officer Surveyor',
        position: '-'
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
  
  const facultyPage={
    images:[
      { path: require('../../assests/geodesy/Snapshot_1420.png') },
      { path: require('../../assests/geodesy/Snapshot_1421.png') },
      { path: require('../../assests/geodesy/Image No. 7.jpg') },
          { path: require('../../assests/geodesy/Image No. 5.jpg') },
  
      
    ],
    
    heading:'Faculty of Cartography, Digital Mapping & Geographic Information System',
    content:['The faculty offers fundamental and progressive level of training in the domain of Cartography, Digital Mapping, and Geographic Information Systems.','The trainees are imparted with the core concepts in the theoretical sessions followed by the best-in-class live lab demonstrations.',' Participants are provided In-depth instruction and a hands-on exercise using the latest software/s.The training programmes aim at inculcating and exposing the trainees with the industrial best practices and software/s thereby unleashing the full potential of the technological advancements.','Both online as well as offline courses are undertaken to cater to the wide variety of participants from Departmental, private and other governmental agencies.','The courses in GIS are designed to simulate the real world scenario and to provide solutions to the real world problems.','The faculty is equipped with well-trained faculty members with over all working experiences both in the conventional and modern technologies the spheres of Digital mapping and GIS.']
  }
const FacultyCarto = () => {
  return (
    <div>FacultyCarto</div>
  )
}

export default FacultyCarto