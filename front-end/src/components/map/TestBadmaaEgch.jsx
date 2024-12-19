import React, { useState, useContext } from "react";
import Select from "react-select";
import { useDataContext } from "../context/dataContext";
import { GoogleMap } from "./Google";
import { MinusIcon } from "../svg/MinusIcon";
import { PlusIcon } from "../svg/PlusICon";

const MedicineSelector = () => {
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
    <div className="w-screen flex justify-center mt-[50px] mb-[50px] flex-col items-center">
      <Select
        className="w-[800px] mb-[50px] border rounded-sm border-[#00BBD3]"
        options={medicineOptions}
        value={selectedMedicines}
        onChange={handleMedicineChange}
        isMulti
        getOptionLabel={(option) => option.label}
        placeholder="Select medicines"
      />
      <div className="container flex gap-[30px] ">
        <div className="w-full md:w-1/2 lg:w-2/3 h-[600px] overflow-y-auto flex flex-col gap-4">
          {filteredEmiinsan?.map((emiinsan) => (
            <div
              key={emiinsan._id}
              className=" w-[50%] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex gap-[20px]"
            >
              {/* Pharmacy Header */}
              <div>
                <div className="p-4 border-1  w-[400px]">
                  <h3 className="text-[#00BBD3] font-semibold flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {emiinsan?.location}
                  </h3>
                </div>
                <img
                  className="w-[400px] h-[300px] mb-4 rounded-lg bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${emiinsan?.image})`,
                  }}
                />
              </div>

              <div className="p-4 ">
                {/* Pharmacy Image */}
                <div />

                {/* Medicine List */}
                <div className="space-y-4 ">
                  <h4 className="font-medium text-gray-700">
                    Available Medicines
                  </h4>
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
            </div>
          ))}
        </div>

        <div className="w-1/3">
          <GoogleMap selectedLocation={filteredEmiinsan} />
        </div>
      </div>
    </div>
  );
};

export default MedicineSelector;
