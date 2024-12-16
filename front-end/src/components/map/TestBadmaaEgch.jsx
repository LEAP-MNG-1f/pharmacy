import React, { useState, useContext } from "react";
import Select from "react-select";
import { useDataContext } from "../context/dataContext";
import { GoogleMap } from "./Google";

const MedicineSelector = () => {
  const { uniqueNames, apteks, addToBasket } = useDataContext();
  const [selectedMedicines, setSelectedMedicines] = useState([]);

  const medicineOptions = uniqueNames.map((name) => ({
    value: name,
    label: name,
  }));

  const handleMedicineChange = (selectedOptions) => {
    setSelectedMedicines(selectedOptions);
  };

  const filteredEmiinsan = apteks?.filter((aptek) => {
    // Check if all drugs in the query are in the emsId array
    return selectedMedicines?.every((drug) =>
      aptek.emsId.some((item) => item?.name === drug?.value)
    );
  });

  return (
    <div className="w-full flex justify-center mt-[80px]">
      <div className="w-[1200px] flex flex-col gap-[50px] items-center">
        <Select
          className="w-[800px]"
          options={medicineOptions}
          value={selectedMedicines}
          onChange={handleMedicineChange}
          isMulti
          getOptionLabel={(option) => option.label}
          placeholder="Select medicines"
        />
        <div className="w-full flex">
          <div>
            {filteredEmiinsan?.map((emiinsan) => {
              return (
                <div key={emiinsan._id}>
                  <div className="flex gap-[50px]">
                    <div className="flex flex-col gap-[100px]">
                      <img src={emiinsan?.image} alt="" />
                      <p>Hayg:{emiinsan?.location}</p>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                      {emiinsan?.emsId.map((em) => {
                        return (
                          <div
                            key={em._id}
                            className="flex flex-col gap-[10px] border border-green-500 rounded-xl"
                          >
                            <div>{em?.name}</div>
                            <div>{em?.price}</div>
                            <div>{em?.balance}</div>
                            <button
                              onClick={() => {
                                addToBasket(
                                  emiinsan.location,
                                  em._id,
                                  em.name,
                                  em.price,
                                  em.balance,
                                  em.categoryId
                                );
                              }}
                            >
                              AddtoButton
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <GoogleMap selectedLocation={filteredEmiinsan} />
        </div>
      </div>
    </div>
  );
};

export default MedicineSelector;
