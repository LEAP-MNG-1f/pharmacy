"use client";
import { useDataContext } from "../context/dataContext";

export const CartTotal = () => {
  const { cartTotal } = useDataContext();

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold text-gray-800">
        Таны захиалгын дүн
      </h3>
      <p className="text-2xl font-bold text-[#00BBD3] mt-2">
        {cartTotal.toFixed(0).toLocaleString()}₮
      </p>
    </div>
  );
};
