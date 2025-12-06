import React from 'react'

const MiniCard = ({ title, icon, number, footerNum }) => {
  return (
    <div className='bg-white shadow-md py-5 px-5 rounded-lg w-[50%]'>
      <div className='flex items-start justify-between'>
        <h1 className='text-[#9D5623] text-lg font-semibold tracking-wide'>{title}</h1>
        <button className={`${title === "Total Earnings" ? "bg-[#02ca3a]" : "bg-[#9D5623]"} p-3 rounded-lg text-[#f5f5f5] text-2xl`}>{icon}</button>
      </div>
      <div className='bg-'>

      </div>
      <div>
        <h1 className='text-gray-800 text-4xl font-bold mt-5'>₱{number}</h1>
        <h1><span className='text-[#02ca3a]'>{footerNum}%</span> than yesterday</h1>
      </div>
    </div>
  )
}

export default MiniCard
