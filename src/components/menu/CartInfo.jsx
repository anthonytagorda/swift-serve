import { RiDeleteBack2Fill } from 'react-icons/ri';
import { FaNotesMedical } from 'react-icons/fa';

const CartInfo = () => {
    return (
        <div className='px-4 py-2'>
            <h1 className='text-lg text-gray-900 font-semibold tracking-wide text-md'>Order Details</h1>
            <div className='mt-4 overflow-y-scroll scrollbar-hide h-[380px]'>
                <div className='bg-gray-200 rounded-lg px-4 py-4 mb-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-gray-800 font-semibold tracking-wide text-md'>
                            Chicken Tikka
                        </h1>
                        <p className='text-gray-700 font-semibold'>x2</p>
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center gap-3'>
                            <RiDeleteBack2Fill className='text-gray-500 cursor-pointer' size={20} />
                            <FaNotesMedical className='text-gray-500 cursor-pointer' size={20} />
                        </div>
                        <p className='text-[#f5f5f5 text-md font-bold'>₱600</p>
                    </div>
                </div>
                <div className='bg-gray-200 rounded-lg px-4 py-4 mb-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-gray-800 font-semibold tracking-wide text-md'>
                            Tandoori Chicken
                        </h1>
                        <p className='text-gray-700 font-semibold'>x2</p>
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center gap-3'>
                            <RiDeleteBack2Fill className='text-gray-500 cursor-pointer' size={20} />
                            <FaNotesMedical className='text-gray-500 cursor-pointer' size={20} />
                        </div>
                        <p className='text-[#f5f5f5 text-md font-bold'>₱700</p>
                    </div>
                </div>
                <div className='bg-gray-200 rounded-lg px-4 py-4 mb-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-gray-800 font-semibold tracking-wide text-md'>
                            Samosa
                        </h1>
                        <p className='text-gray-700 font-semibold'>x2</p>
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center gap-3'>
                            <RiDeleteBack2Fill className='text-gray-500 cursor-pointer' size={20} />
                            <FaNotesMedical className='text-gray-500 cursor-pointer' size={20} />
                        </div>
                        <p className='text-[#f5f5f5 text-md font-bold'>₱200</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartInfo
