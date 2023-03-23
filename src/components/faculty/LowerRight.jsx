import React from 'react'

const LowerRight = (props) => {
  const { data } = props;

  return (
    <div className="flex justify-center items-center">
  <div className="overflow-x-auto">
    <table className="table-auto ">
      <thead>
        <tr className="bg-blue-500 text-white">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Designation</th>
          <th className="px-4 py-2">Position</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
            <td className="px-4 py-2">{row.name}</td>
            <td className="px-4 py-2">{row.designation}</td>
            <td className="px-4 py-2">{row.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


  )
}

export default LowerRight