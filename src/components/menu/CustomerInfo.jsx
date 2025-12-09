import React from 'react'

const CustomerInfo = () => {
    return (
        <div className='flex items-center justify-between px-4 py-3'>
            <div className='flex flex-col items-start'>
                <h1 className='text-md text-gray-800 font-semibold tracking-wide'>
                    Customer Name
                </h1>
                <p className='text-xs text-shadow-stone-400 font-medium mt-1'>
                    #101/Dine in
                </p>
                <p className='text-xs text-shadow-stone-400'>Dec 11, 2025 05:34 PM</p>
            </div>
            <button className='bg-[#9D5623] text-white p-3 text-xl font-bold rounded-lg]'>CN</button>
        </div>
    )
}

export default CustomerInfo
