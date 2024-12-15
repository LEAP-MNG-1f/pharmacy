import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDataContext } from "../context/dataContext";

const MedicineSelector = () => {
  const { medicines, setMedicines } = useDataContext();
  const [options, setOptions] = useState([]);

  console.log(medicines);
  useEffect(() => {
    // Simulate an API request to get options
    const fetchMedicines = async () => {
      //   const response = [
      //     { value: "aspirin", name: "Aspirin" },
      //     { value: "paracetamol", name: "Paracetamol" },
      //     { value: "ibuprofen", name: "Ibuprofen" },
      //   ];
      setOptions(medicines);
    };

    fetchMedicines();
  }, []);

  const handleChange = (selectedOptions) => {
    setMedicines(selectedOptions);
  };

  return (
    <div>
      <h1>Select Medicines</h1>

      {/* Ensure options is an array */}
      <Select
        options={Array.isArray(medicines) ? medicines : []}
        value={medicines}
        onChange={handleChange}
        isMulti
        getOptionLabel={(e) => e.name}
        placeholder="Select medicines"
      />

      <h3>Selected Medicines:</h3>
      {medicines.length === 0 ? (
        <p>No medicines selected.</p>
      ) : (
        <ul>
          {medicines.map((medicine) => (
            <li key={medicine.value}>{medicine.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MedicineSelector;
