import { BsFillCartXFill } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";

const CartInfo = () => {
  const cartData = useSelector((state) => state.cart);
  const scrolLRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrolLRef.current) {
      scrolLRef.current.scrollTo({
        top: scrolLRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="px-4 py-2">
      <h1 className="text-lg text-gray-900 font-semibold tracking-wide text-md">
        Order Details
      </h1>
      <div
        className="mt-4 overflow-y-scroll scrollbar-hide h-[380px]"
        ref={scrolLRef}>
        {cartData.length === 0 ? (
          <p className="text-[#ababab] text-sm flex justify-center items-center h-[380px]">
            No orders yet.
          </p>
        ) : (
          cartData.map((item) => {
            return (
              <div className="bg-gray-200 rounded-lg px-4 py-4 mb-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-gray-800 font-semibold tracking-wide text-md">
                    {item.name}
                  </h1>
                  <p className="text-gray-700 font-semibold">
                    x{item.quantity}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3">
                    <BsFillCartXFill
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 cursor-pointer"
                      size={20}
                    />
                  </div>
                  <p className="text-[#f5f5f5 text-md font-bold">
                    ₱{item.price}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CartInfo;