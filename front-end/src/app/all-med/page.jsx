"use client";

import { useDataContext } from "@/components/context/dataContext";
import { useState } from "react";

export default function Home() {
  const { uniqueNames, apteks, addToBasket } = useDataContext();

  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [quantities, setQuantities] = useState({});

  const medicineOptions = uniqueNames.map((name) => ({
    value: name,
    label: name,
  }));

  const handleMedicineChange = (selectedOptions) => {
    setSelectedMedicines(selectedOptions);
  };

  const handleIncreaseQuantity = (medicineId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [medicineId]: (prevQuantities[medicineId] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (medicineId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [medicineId]: Math.max((prevQuantities[medicineId] || 1) - 1, 1), // Prevent going below 1
    }));
  };

  const filteredEmiinsan = apteks?.filter((aptek) => {
    // Check if all drugs in the query are in the emsId array
    return selectedMedicines?.every((drug) =>
      aptek.emsId.some((item) => item?.name === drug?.value)
    );
  });
  return (
    <div>
      {filteredEmiinsan?.map((emiinsan) => {
        return (
          <div key={emiinsan._id} className="p-4 ">
            {/* Pharmacy Image */}
            <div />

            {/* Medicine List */}
            <div className="space-y-4 ">
              <h4 className="font-medium text-gray-700">Available Medicines</h4>
              <div className="space-y-3">
                {emiinsan?.emsId.map((em) => {
                  const medicineQuantity = quantities[em._id] || 1;

                  return (
                    <div
                      key={em._id}
                      className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex justify-between items-start">
                        {/* Medicine Info */}
                        <div className="space-y-1">
                          <h5 className="font-medium">{em?.name}</h5>
                          <p className="text-sm text-gray-500">
                            {em?.categoryName}
                          </p>
                          <p className="font-medium text-blue-600">
                            {em?.price.toLocaleString()} ₮
                          </p>
                        </div>

                        {/* Controls */}
                        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
                          <div className="flex items-center border rounded-lg bg-gray-50 p-1">
                            <button
                              onClick={() => handleDecreaseQuantity(em._id)}
                              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200"
                            >
                              -
                            </button>
                            <span className="w-8 text-center">
                              {medicineQuantity}
                            </span>
                            <button
                              onClick={() => handleIncreaseQuantity(em._id)}
                              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => {
                              addToBasket(
                                emiinsan.location,
                                em._id,
                                em.name,
                                em.price,
                                em.balance,
                                em.categoryId,
                                medicineQuantity
                              );
                            }}
                            className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
