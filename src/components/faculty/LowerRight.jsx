import React from 'react'

const LowerRight = (props) => {
  const { data } = props;

  return (
    <div className="flex justify-center items-center">
      <div className="overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Designation</th>
              <th className="px-4 py-2">Position</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className=" px-4 py-2">{row.name}</td>
                <td className=" px-4 py-2">{row.designation}</td>
                <td className=" px-4 py-2">{row.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  
  //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //   {data.map((row, index) => (
  //     <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
  //       <div className="px-6 py-4">
  //         <div className="font-bold text-xl mb-2">{row.name}</div>
  //         <p className="text-gray-700 text-base">{row.designation}</p>
  //         <p className="text-gray-700 text-base">{row.position}</p>
  //       </div>
  //     </div>
  //   ))}
  // </div>
  )
}

export default LowerRight