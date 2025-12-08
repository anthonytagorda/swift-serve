import React from 'react'
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
    return (
        <div className='w-[500px] bg-gray-200 p-4 rounded-lg mb-4'>
            <div className='flex items-center gap-5'>
                <button className='bg-[#9D5623] p-3 text-xl font-bold text-gray-100 rounded-lg'>
                    AM
                </button>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='text-gray-600 text-lg font-semibold tracking-wide'>
                            Freen Armstrong
                        </h1>
                        <p className='text-gray-700 text-sm'>#101/ Dine in</p>
                    </div>
                    <div className='flex flex-col items-end gap-2'>
                        <p className='text-green-700 bg-[#8aceb5] px-2 py-1 rounded-lg'>
                            <FaCheckDouble className="inline mr-2" />
                            Ready
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <FaCircle className="inline mr-2 text-green-600" />
                            Ready to serve
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-4 text-gray-600'>
                <p>December 19, 2025 08:00 PM</p>
                <p>8 Items</p>
            </div>
            <hr className='w-full mt-4 border-t text-gray-400' />
            <div className='flex items-center justify-between mt-4'>
                <h1 className='text-gray-700 text-lg font-semibold'>Total</h1>
                <p className='text-gray-700 text-lg font-semibold'>₱250.00</p>
            </div>
        </div>
    )
}

export default OrderCard
