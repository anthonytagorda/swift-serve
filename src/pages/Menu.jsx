import React from 'react'
import Navigation from '../components/shared/Navigation'
import BackButton from '../components/shared/BackButton'
import MenuContainer from '../components/menu/MenuContainer';
import CustomerInfo from '../components/menu/CustomerInfo';
import CartInfo from '../components/menu/CartInfo';
import BillInfo from '../components/menu/BillInfo';
import { MdRestaurantMenu } from 'react-icons/md';

const Menu = () => {
  return (
    <section className='h-[calc(100vh-4rem)] overflow-hidden flex gap-3'>
      {/* LEFT DIV */}
      <div className="flex-3">
        <div className='flex items-center justify-between px-10 py-4'>
          <div className='flex items-center gap-4'>
            <BackButton />
            <h1 className='text-gray-800 text-2xl font-bold tracking-wider'>
              Menu
            </h1>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <MdRestaurantMenu className="text-[#713d18] text-4xl" />
            <div className="flex flex-col items-start">
              <h1 className="text-md text-[#9D5623] font-semibold">
                Customer Name
              </h1>
              <p className="text-xs text-shadow-stone-400 font-medium">Table No: 2</p>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>
      {/* RIGHT DIV */}
      <div className="flex-1 bg-stone-50 mt-4 mr-3 h-[700px] rounded-lg pt-2">
        {/* Customer Info */}
        <CustomerInfo />
        <hr className='border-gray-200 border-t-2' />
        {/* Cart Items */}
        <CartInfo />
        <hr className='border-gray-200 border-t-2' />
        {/* Bills */}
        <BillInfo />
      </div>
      <Navigation />
    </section>
  )
}

export default Menu
