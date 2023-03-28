import React from 'react'
import ImgCard from '../components/pageStructure/ImgCard'

const dataB = {
    title: 'Board Of Studies',
    members: [
      {
        name: 'Shri Sunil Kumar',
        designation: 'Surveyor General Of India',
        position: 'Chairman',
        image: require('../assests/Dr. Srivari Chandrasekhar.jpg')
      },
      {
        name: 'Shri Sunil Kumar',
        designation: 'CEO',
        position: 'Board Member',
        image: require('../assests/Dr. Srivari Chandrasekhar.jpg')
      },
      {
        name: 'Shri Sunil Kumar',
        designation: 'CEO',
        position: 'Board Member',
        image: require('../assests/Dr. Srivari Chandrasekhar.jpg')
      },
      {
        name: 'Shri Sunil Kumar',
        designation: 'CEO',
        position: 'Board Member',
        image: require('../assests/Dr. Srivari Chandrasekhar.jpg')
      },
      {
        name: 'Shri Sunil Kumar',
        designation: 'CTO',
        position: 'Board Member',
        image: require('../assests/Dr. Srivari Chandrasekhar.jpg')
      }
    ]
  };
const Board_of_studies = () => {
  return (
    <div><ImgCard title={dataB.title} members={dataB.members} /></div>
  )
}

export default Board_of_studies