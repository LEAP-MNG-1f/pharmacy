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
    <div className="w-screen flex justify-center mt-[50px] mb-[50px]  flex-col   items-center ">
      <Select
        className="w-[800px] mb-[50px]"
        options={medicineOptions}
        value={selectedMedicines}
        onChange={handleMedicineChange}
        isMulti
        getOptionLabel={(option) => option.label}
        placeholder="Select medicines"
      />
      <div className="container flex justify-between ">
        <div className="w-[1/3] h-[600px] overflow-y-auto flex flex-col gap-4  rounded-2xl">
          {filteredEmiinsan?.map((emiinsan) => {
            return (
              <div
                className="flex flex-col w-full shadow-md  rounded-2xl "
                key={emiinsan._id}
              >
                <div className="flex w-auto rounded-2xl gap-2">
                  <div className="flex flex-col w-[260px] ">
                    <p className="font-semibold w-[260px pl-2 ">
                      Хаяг:{emiinsan?.location}
                    </p>{" "}
                    <div
                      className="flex flex-col w-[260px] h-[240px]"
                      style={{
                        backgroundImage: `url(${emiinsan?.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "16px",
                      }}
                    ></div>
                  </div>

                  <div className="flex flex-col gap-[5px] h-[240px] overflow-y-auto mr-4 mt-2">
                    <p className="font-semibold pt-1">Эмийн жагсаалт</p>
                    {emiinsan?.emsId.map((em) => {
                      return (
                        <div
                          key={em._id}
                          className="flex flex-col gap-[2px] pt-3"
                        >
                          <div className="flex">
                            Эмийн нэр:{" "}
                            <p className="font-semibold pl-1">{em?.name}</p>
                          </div>
                          <div>Үнэ:{em?.price}</div>
                          <div className="flex gap-1">
                            {" "}
                            <div>Үлдэгдэл:{em?.balance}</div>
                            <button
                              className="bg-gray-100 cursor-pointer rounded-lg pl-1 pr-1"
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
                              Сагслах
                            </button>
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
        <div className="w-2/3">
          <GoogleMap selectedLocation={filteredEmiinsan} />
        </div>
      </div>
    </div>
  );
};

export default MedicineSelector;
