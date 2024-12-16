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
    <div className="w-screen flex justify-center mt-[80px]">
      <div className="w-full flex flex-col gap-[50px] items-center">
        <Select
          className="w-[800px]"
          options={medicineOptions}
          value={selectedMedicines}
          onChange={handleMedicineChange}
          isMulti
          getOptionLabel={(option) => option.label}
          placeholder="Select medicines"
        />
        <div className="container flex justify-end gap-10 ">
          <div className="w-[1/3] overflow-auto h-[600px] overflow-y-auto flex flex-col gap-4">
            {filteredEmiinsan?.map((emiinsan) => {
              return (
                <div
                  className="flex flex-col w-full  rounded-2xl "
                  key={emiinsan._id}
                >
                  <p className="font-semibold p-4">Хаяг:{emiinsan?.location}</p>
                  <div className="flex w-auto h-1/3 rounded-2xl justify-between gap-x-3 ">
                    <div
                      className="flex flex-col gap-[10px] w-[280px] h-[240px]"
                      style={{
                        backgroundImage: `url(${emiinsan?.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "16px",
                      }}
                    ></div>
                    <div className="flex flex-col gap-[5px] h-[240px] overflow-y-auto mr-4">
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
          <div className="w-2/3">
            <GoogleMap selectedLocation={filteredEmiinsan} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineSelector;
