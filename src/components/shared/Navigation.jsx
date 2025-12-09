import React, { useState } from 'react'
import Modal from './Modal'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder, MdTableBar } from 'react-icons/md'
import { CiCircleMore } from 'react-icons/ci'
import { BiSolidDish } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  }
  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  }
  const guestLabel = guestCount <= 1 ? "person" : "persons";

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-[0_-8px_30px_rgba(0,0,0,0.08)] p-2 h-16 flex justify-around z-40'>
      <button
        onClick={() => navigate("/")}
        className='flex items-center justify-center text-[#9D5623] bg-gray-100 w-[300px] rounded-[20px] cursor-pointer'>
        <FaHome className="inline mr-2" size={20} /><p>Home</p>
      </button>
      <button onClick={() => navigate("/orders")} className='flex items-center justify-center text-[#9D5623] w-[300px] cursor-pointer' >
        <MdOutlineReorder className="inline mr-2" size={20} /><p>Orders</p>
      </button>
      <button onClick={() => navigate("/tables")} className='flex items-center justify-center text-[#9D5623] w-[300px] cursor-pointer'>
        <MdTableBar className="inline mr-2" size={20} /><p>Tables</p>
      </button>
      <button className='flex items-center justify-center text-[#9D5623] w-[300px] cursor-pointer'>
        <CiCircleMore className="inline mr-2" size={20} /><p>More</p>
      </button>
      <button onClick={openModal} className='absolute bottom-6 bg-[#9D5623] text-gray-100 rounded-full p-4 items-center'>
        <BiSolidDish size={40} />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className="block text-gray-800 mb-2 text-sm font-medium">Customer Name</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-gray-200 ">
            <input type="text" name="" placeholder="Enter customer name" id="" className="bg-transparent flex-1 text-gray-800 focus:outline-none" />
          </div>
        </div>
        <div>
          <label className="block text-gray-800 mb-2 mt-3 text-sm font-medium">Customer Phone</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-gray-200 ">
            <input type="number" name="" placeholder="+63 " id="" className="bg-transparent flex-1 text gray-800 focus:outline-none" />
          </div>
        </div>
        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-gray-700">Guests</label>
          <div className='flex items-center justify-between bg-gray-200 px-4 py-3 rounded-lg'>
            <button onClick={decrement} className='text-[#9D5623] text-2xl'>&minus;</button>
            <span className='text-gray-700'>{guestCount} {guestLabel}</span>
            <button onClick={increment} className='text-[#9D5623] text-2xl'>&#43;</button>
          </div>
        </div>
        <button onClick={() => navigate("/tables")} className='w-full bg-[#9D5623] text-gray-100 rounded-lg py-3 mt-8 hover:bg-[#ab734c]'>
          Create Order
        </button>
      </Modal>
    </div>
  )
}

export default Navigation