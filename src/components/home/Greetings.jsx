import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Greetings = () => {
  const userData = useSelector(state => state.user);
  const [dateTime, setDateTime] = useState(new Date());

  // Update Time
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000); // 1 second
    return () => clearInterval(timer);
  }, []);

  // Update Greeting depending on day time
  const getGreeting = (date) => {
    const hour = date.getHours();

    if (hour >= 5 && hour < 12) return "Morning";
    if (hour >= 12 && hour < 18) return "Afternoon";
    return "Evening";
  };

  const formatDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(
      2,
      "0"
    )}, ${date.getFullYear()}`;
  };

  const formatTime = (date) =>
    `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

  return (
    <div className="flex justify-between items-center px-8 mt-5">
      <div>
        <h1 className="text-[#9D5623] text-2xl mb-2 font-semibold tracking-wide">
          Good {getGreeting(dateTime)}, {userData.name || "User"}
        </h1>
        <p className="text-[#ababab] text-sm">Give your best today!</p>
      </div>
      <div className="">
        <h1 className="text-[#9D5623] text-3xl font-bold tracking-wide w-[130px]">{formatTime(dateTime)}</h1>
        <p className="text-gray-500 text-sm">{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greetings;
