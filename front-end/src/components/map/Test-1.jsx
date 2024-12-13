import React, { useState, useEffect } from "react";

function MultipleMedicineSelector() {
  // State for medicine options
  const [medicine, setMedicine] = useState([]);

  // State for selected medicines
  const [selectedMedicines, setSelectedMedicines] = useState([]);

  useEffect(() => {
    const medicineList = [
      { id: 1, name: "Aspirin", type: "Pain Reliever" },
      { id: 2, name: "Ibuprofen", type: "Anti-inflammatory" },
      { id: 3, name: "Paracetamol", type: "Pain and Fever Reducer" },
      { id: 4, name: "Amoxicillin", type: "Antibiotic" },
      { id: 5, name: "Loratadine", type: "Antihistamine" },
    ];

    setMedicine(medicineList);
  }, []);

  // Handle multiple medicine selection
  const handleMedicineChange = (event) => {
    // Convert selected options to array of values
    const selectedValues = Array.from(event.target.selectedOptions).map(
      (option) => option.value
    );

    setSelectedMedicines(selectedValues);
  };

  return (
    <div>
      <h2>Multiple Medicine Selector</h2>

      {/* Multiple Select Dropdown */}
      <select
        multiple
        value={selectedMedicines}
        onChange={handleMedicineChange}
        style={{ height: "150px", width: "300px" }}
      >
        {medicine.map((med) => (
          <option key={med.id} value={med.id}>
            {med.name} - {med.type}
          </option>
        ))}
      </select>

      {/* Display selected medicines */}
      <div>
        <h3>Selected Medicines:</h3>
        <ul>
          {selectedMedicines.map((selectedId) => {
            const selected = medicine.find(
              (med) => med.id.toString() === selectedId
            );
            return selected ? (
              <li key={selectedId}>
                {selected.name} - {selected.type}
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
}

export default MultipleMedicineSelector;
