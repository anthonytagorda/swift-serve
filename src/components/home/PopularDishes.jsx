import React from 'react'
import { popularDishes } from "../../constants"

const PopularDishes = () => {
    return (
        <div className='mt-6 pr-6'>
            <div className='bg-white shadow-md
            w-full rounded-lg'>
                <div className='flex justify-between items-center px-6 py-4'>
                    <h1 className='text-gray-800 text-lg font-semibold tracking-wide'>Popular Dishes</h1>
                    <a href="" className='text-[#9D5623] text-sm font-semibold'>
                        View all
                    </a>
                </div>
                <div className='overflow-y-scroll h-[680px] scrollbar-hide'>
                    {
                        popularDishes.map((dish) => {
                            return (
                                <div
                                    key={dish.id}
                                    className='flex items-center gap-4 bg-gray-100 rounded-[15px] px-6 py-4 mt-4 mx-6'
                                >
                                    <h1 className='text-gray-900 font-bold text-xl mr-4'>{dish.id < 10 ? `0${dish.id}` : dish.id}</h1>
                                    <img 
                                        src={dish.image} 
                                        alt={dish.name} 
                                        className='w-[50px] h-[50px] rounded-full' 
                                    />
                                    <div>
                                        <h1 className='text-gray-900 font-semibold tracking-wide'> {dish.name} </h1>
                                        <p className='text-gray-700 text-sm font-semibold mt-1'>
                                            <span className='text-gray-800'>Orders: </span>
                                            {dish.numberOfOrders}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularDishes
