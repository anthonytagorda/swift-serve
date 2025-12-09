import { getBgColor } from '../../utils'
import { useNavigate } from 'react-router-dom';

const TableCard = ({ key, name, status, initials, seats }) => {

  const navigate = useNavigate();
  const bgColor = getBgColor();

  const handleClick = () => {
    if (status === "Booked") return;
    navigate(`/menu`);
  };

  return (
    <div onClick={handleClick} key={key} className='w-[300px] hover:bg-gray-300 bg-gray-200 p-4 rounded-lg cursor-pointer shadow-lg'>
      <div className='flex items-center justify-between px-1'>
        <h1 className='text-gray-800 text-xl font-semibold'>{name}</h1>
        <p className={`${status === "Booked"
          ? "text-green-800 bg-[#8aceb5]"
          : "text-[#f8cb5a] bg-yellow-100"
          } px-2 py-1 rounded-lg`}>
          {status}
        </p>
      </div>
      <div className='flex items-center justify-center mt-5 mb-8'>
        <h1
          style={{ backgroundColor: bgColor }}
          className="text-gray-200 rounded-full p-5 text-xl">
          {initials}
        </h1>
      </div>
      <p className='text-gray-500 text-xs'>Seats: <span className='text-[#9D5623]'>{seats}</span></p>
    </div >
  )
}

export default TableCard