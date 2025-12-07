import React, { useState } from 'react'
import Navigation from '../components/shared/Navigation'
import OrderCard from '../components/orders/OrderCard'
import BackButton from '../components/shared/BackButton'

const Orders = () => {

  const [status, setStatus] = useState("all");

  return (
    <section className='h-[calc(100vh-5rem)] overflow-hidden mt-2'>
      <div className='flex items-center justify-between px-10 py-4'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-gray-800 text-2xl font-bold tracking-wider'>Orders</h1>
        </div>
        <div className='text-gray-500 flex items-center justify-around gap-4'>
          <button onClick={() => setStatus("all")} className={`text-lg ${status === "all" && "bg-[#9D5623] text-white rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>All</button>
          <button onClick={() => setStatus("progress")} className={`text-lg ${status === "progress" && "bg-[#9D5623] text-white rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold cursor-pointer`}>In Progress</button>
          <button onClick={() => setStatus("ready")} className={`text-lg ${status === "ready" && "bg-[#9D5623] text-white rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold cursor-pointer`}>Ready</button>
          <button onClick={() => setStatus("completed")} className={`text-lg ${status === "completed" && "bg-[#9D5623] text-white rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold cursor-pointer`}>Completed</button>
        </div>
      </div>

      <div className='flex flex-wrap gap-6 px-16 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh - 5rem - 5rem)]'>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>

      <Navigation />
    </section>
  )
}

export default Orders