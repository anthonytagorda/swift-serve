import { getRandomBG } from '../../utils'

const TableCard = ({ key, name, status, initials }) => {
  return (
    <div key={key} className='w-[300px] hover:bg[#1f1f1f] bg-gray-200 p-4 rounded-lg cursor-pointer shadow-lg'>
      <div className='flex items-center justify-between px-1'>
        <h1 className='text-gray-800 text-xl font-semibold'>{name}</h1>
        <p className={`${status === "Booked" ? "text-green-800 bg-[#8aceb5]" : "text-[#f8cb5a] bg-yellow-100"} px-2 py-1 rounded-lg`}>
          {status}
        </p>
      </div>
      <div className='flex items-center justify-center mb-7'>
        <h1 className={`${getRandomBG()} text-gray-600 rounded-full p-5 text-xl`}>{initials}</h1>
      </div>
    </div>
  )
}

export default TableCard