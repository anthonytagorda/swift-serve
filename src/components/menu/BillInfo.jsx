import React from 'react'

const BillInfo = () => {
  return (
    <>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs text-gray-600 font-medium mt-2'>Items(6)</p>
        <h1 className='text-gray-800 text-md font-bold'>₱1,500.00</h1>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs text-gray-600 font-medium mt-2'>Service Fee(5.25%)</p>
        <h1 className='text-gray-800 text-md font-bold'>₱78.75</h1>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs text-gray-600 font-bold mt-2'>Total</p>
        <h1 className='text-gray-800 text-lg font-bold'>₱1,578.75</h1>
      </div>
      <div className='flex items-center gap-3 px-5 mt-4'>
        <button className='bg-gray-200 px-4 py-3 w-full rounded-lg text-gray-800 font-semibold'>Cash</button>
        <button className='bg-gray-200 px-4 py-3 w-full rounded-lg text-gray-800 font-semibold'>Card</button>
      </div>
      <div className='flex items-center gap-3 px-5 mt-4'>
        <button className='bg-[#025cca] px-4 py-3 w-full rounded-lg text-gray-200 font-semibold'>Print Receipt</button>
        <button className='bg-[#9D5623] px-4 py-3 w-full rounded-lg text-gray-200 font-semibold'>Place Order</button>
      </div>
    </>
  )
}

export default BillInfo
