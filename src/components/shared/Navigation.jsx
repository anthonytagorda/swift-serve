import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder, MdTableBar } from 'react-icons/md'
import { CiCircleMore } from 'react-icons/ci'
import { BiSolidDish } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white shadow-md p-2 h-16 flex justify-around'>
      <button onClick={() => navigate("/")} className='flex items-center justify-center text-[#9D5623] bg-gray-100 w-[200px] rounded-[20px] cursor-pointer'>
        <FaHome className="inline mr-2" size={20} /><p>Home</p>
      </button>
      <button onClick={() => navigate("/orders")} className='flex items-center justify-center text-[#9D5623] w-[200px]' >
        <MdOutlineReorder className="inline mr-2" size={20} /><p>Orders</p>
      </button>
      <button onClick={() => navigate("/tables")}className='flex items-center justify-center text-[#9D5623] w-[200px]'>
        <MdTableBar className="inline mr-2" size={20} /><p>Tables</p>
      </button>
      <button className='flex items-center justify-center text-[#9D5623] w-[200px]'>
        <CiCircleMore className="inline mr-2" size={20} /><p>More</p>
      </button>
      <button className='absolute bottom-10 bg-[#9D5623] text-gray-100 rounded-full p-3 items-center justify-cente7r'>
        <BiSolidDish />
      </button>
    </div>
  )
}

export default Navigation