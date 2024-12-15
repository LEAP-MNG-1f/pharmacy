import React, { useState, useContext } from "react";
import Select from "react-select";
import { useDataContext } from "../context/dataContext";

const MedicineSelector = () => {
  const { uniqueNames, apteks } = useDataContext();
  const [selectedMedicines, setSelectedMedicines] = useState([]);

  const medicineOptions = uniqueNames.map((name) => ({
    value: name,
    label: name,
  }));

  const handleMedicineChange = (selectedOptions) => {
    setSelectedMedicines(selectedOptions);
  };

  const filteredEmiinsan = apteks?.filter((aptek) => {
    console.log(selectedMedicines);
    // Check if all drugs in the query are in the emsId array
    return selectedMedicines?.every((drug) =>
      aptek.emsId.some((item) => item?.name === drug?.value)
    );
  });

  console.log(filteredEmiinsan);

  return (
    <div className="ml-[300px] flex flex-col gap-[100px]">
      <div>
        <h1>Select Medicines</h1>

        <Select
          options={medicineOptions}
          value={selectedMedicines}
          onChange={handleMedicineChange}
          isMulti
          getOptionLabel={(option) => option.label}
          placeholder="Select medicines"
        />

        <h3>Selected Medicines:</h3>
        {selectedMedicines.length === 0 ? (
          <p>No medicines selected.</p>
        ) : (
          <ul>
            {selectedMedicines.map((medicine) => (
              <li key={medicine.value}>{medicine.label}</li>
            ))}
          </ul>
        )}
      </div>
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
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MedicineSelector;
