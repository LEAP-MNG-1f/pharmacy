import React, { useState, useEffect } from "react";
import Select from "react-select";

const MedicineSelector = () => {
  const [medicines, setMedicines] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Simulate an API request to get options
    const fetchMedicines = async () => {
      const response = [
        { value: "aspirin", label: "Aspirin" },
        { value: "paracetamol", label: "Paracetamol" },
        { value: "ibuprofen", label: "Ibuprofen" },
      ];
      setOptions(response);
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
        options={Array.isArray(options) ? options : []}
        value={medicines}
        onChange={handleChange}
        isMulti
        getOptionLabel={(e) => e.label}
        placeholder="Select medicines"
      />

      <h3>Selected Medicines:</h3>
      {medicines.length === 0 ? (
        <p>No medicines selected.</p>
      ) : (
        <ul>
          {medicines.map((medicine) => (
            <li key={medicine.value}>{medicine.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MedicineSelector;
