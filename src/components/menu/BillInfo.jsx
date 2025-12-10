import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice, removeAllItems } from "../../redux/slices/cartSlice";
import { removeCustomer } from "../../redux/slices/customerSlice";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const BillInfo = () => {
  const dispatch = useDispatch();

  // Calculate Total Order
  const customerData = useSelector((state) => state.customer);
  const cartData = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice);
  const taxRate = 5.25;
  const tax = (total * taxRate) / 100;
  const totalPriceWithTax = total + tax;

  const [orderInfo, setOrderInfo] = useState();

  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-gray-600 font-medium mt-2">
          Items({cartData.length})
        </p>
        <h1 className="text-gray-800 text-md font-bold">₱{total.toFixed(2)}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-gray-600 font-medium mt-2">
          Service Fee(5.25%)
        </p>
        <h1 className="text-gray-800 text-md font-bold">₱{tax.toFixed(2)}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-gray-600 font-bold mt-2">Total</p>
        <h1 className="text-gray-800 text-lg font-bold">
          ₱{totalPriceWithTax.toFixed(2)}
        </h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-gray-200 px-4 py-3 w-full rounded-lg text-gray-800 font-semibold">
          Cash
        </button>
        <button className="bg-gray-200 px-4 py-3 w-full rounded-lg text-gray-800 font-semibold">
          Card
        </button>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-gray-200 font-semibold">
          Print Receipt
        </button>
        <button className="bg-[#9D5623] px-4 py-3 w-full rounded-lg text-gray-200 font-semibold">
          Place Order
        </button>
      </div>
    </>
  );
};

export default BillInfo;
