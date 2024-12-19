import React, { useState, useContext } from "react";
import Select from "react-select";
import { useDataContext } from "../context/dataContext";
import { GoogleMap } from "./Google";
import { MinusIcon } from "../svg/MinusIcon";
import { PlusIcon } from "../svg/PlusICon";
import Link from "next/link";

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
      <div className="container flex gap-[30px] mt-[50px]">
        <div className="w-1/2 h-[600px] overflow-y-auto flex flex-col gap-4">
          {filteredEmiinsan?.map((emiinsan) => (
            <div
              key={emiinsan._id}
              className=" bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex gap-[20px]"
            >
              {/* Pharmacy Header */}
              <Link className="w-full flex" href={`/${emiinsan._id}`}>
                <img
                  className="w-[50%] h-[300px] mb-4 rounded-lg bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${emiinsan?.image})`,
                  }}
                />
                <div className="p-4 border-1  w-[50%]">
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
              </Link>
            </div>
          ))}
        </div>

        <div className="w-1/2">
          <GoogleMap selectedLocation={filteredEmiinsan} />
        </div>
      </div>
    </div>
  );
};

export default MedicineSelector;
