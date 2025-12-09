import { useState } from 'react'
import { menus } from '../../constants'
import { GrRadialSelected } from 'react-icons/gr'
import { FaBowlFood } from "react-icons/fa6";

const MenuContainer = () => {

    const [selected, setSelected] = useState(menus[0]);
    const [itemCount, setItemCount] = useState(0);
    const [itemId, setItemId] = useState();
    const increment = (id) => {
        setItemId(id);
        if (itemCount >= 4) return;
        setItemCount((prev) => prev + 1);
    };

    const decrement = () => {
        setItemId(id);
        if (itemCount <= 0) return;
        setItemCount((prev) => prev - 1);
    };

    return (
        <>
            <div className='grid grid-cols-4 gap-4 px-10 py-4 w-full'>
                {
                    menus.map((menu) => {
                        return (
                            <div
                                key={menu.id}
                                className='flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer'
                                style={{ backgroundColor: menu.bgColor }}
                                onClick={() => {
                                    setSelected(menu);
                                    setItemId(0);
                                    setItemCount(0);
                                }}
                            >
                                <div className='flex items-center justify-between w-full'>
                                    <h1 className='text-gray-100 text-lg font-semibold'>{menu.icon} {menu.name}</h1>
                                    {selected.id === menu.id && <GrRadialSelected className='text-gray-200' size={20} />}
                                </div>
                                <p className='text-gray-200 text-sm font-semibold'>
                                    {menu.items.length} Items
                                </p>
                            </div>
                        )
                    })
                }
            </div>

            <hr className='border-gray-200 border-t-2 mt-4' />

            <div className='grid grid-cols-4 gap-4 px-10 py-4 w-full'>
                {
                    selected?.items.map((menu) => {
                        return (
                            <div
                                key={menu.id}
                                className='flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer hover:bg-stone-200 bg-gray-200'
                            >
                                <div className='flex items-start justify-between w-full'>
                                    <h1 className='text-gray-900 text-lg font-semibold'>
                                        {menu.name}
                                    </h1>
                                    <button className='text-green-800 bg-[#8aceb5] p-2 rounded-lg cursor-pointer'>
                                        <FaBowlFood size={20} />
                                    </button>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <p className='text-gray-800 text-xl font-semibold'>
                                        ₱{menu.price}
                                    </p>
                                    <div className="flex items-center justify-between px-4 py-3 rounded-lg gap-6 w-[50%]">
                                        <button
                                            onClick={() => decrement(menu.id)}
                                            className="text-[#9D5623] text-2xl"
                                        >
                                            &minus;
                                        </button>
                                        <span className="text-gray-800">
                                            {menu.id == itemId ? itemCount : "0"}
                                        </span>
                                        <button
                                            onClick={() => increment(menu.id)}
                                            className="text-[#9D5623] text-2xl"
                                        >
                                            &#43;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MenuContainer
