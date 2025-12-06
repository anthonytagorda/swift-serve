import React from 'react'
import { FaSearch } from 'react-icons/fa'
import OrderList from "./OrderList"

const RecentOrders = () => {
    return (
        <div className='px-8 mt-6'>
            <div className='bg-white shadow-md
            w-full h-[450px] rounded-lg'>
                <div className='flex justify-between items-center px-6 py-4'>
                    <h1 className='text-gray-800 text-lg font-semibold tracking-wide'>Recent Orders</h1>
                    <a href="" className='text-[#9D5623] text-sm font-semibold'>
                        View all
                    </a>
                </div>

                <div className='flex items-center gap-4  bg-gray-100 border border-gray-200 shadow-md rounded-[15px] px-6 py-4 mx-6'>
                    <FaSearch className='text-gray-500' />
                    <input
                        type="text"
                        placeholder='Search recent orders'
                        className='bg-gray-100 outline-none text-gray-600'
                    />
                </div>

                {/* ORDER LIST */}
                <div className='mt-4 px-6 overflow-y-scroll h-[300px] scrollbar-hide'>
                    <OrderList/>
                    <OrderList/>
                    <OrderList/>
                    <OrderList/>
                    <OrderList/>
                </div>
            </div>
        </div>
    )
}

export default RecentOrders
