import React, { useState, useEffect } from "react";

function MedicineSelector() {
  // State for medicine options
  const [medicine, setMedicine] = useState([]);

  // State for selected medicine
  const [selectedMedicine, setSelectedMedicine] = useState("");

  // Populate medicine options on component mount
  useEffect(() => {
    // Example medicine list - could be fetched from an API
    const medicineList = [
      { id: 1, name: "Aspirin", type: "Pain Reliever" },
      { id: 2, name: "Ibuprofen", type: "Anti-inflammatory" },
      { id: 3, name: "Paracetamol", type: "Pain and Fever Reducer" },
      { id: 4, name: "Amoxicillin", type: "Antibiotic" },
      { id: 5, name: "Loratadine", type: "Antihistamine" },
    ];

    setMedicine(medicineList);
  }, []);

  // Handle medicine selection
  const handleMedicineChange = (event) => {
    setSelectedMedicine(event.target.value);
  };

  return (
    <div>
      <h2>Medicine Selector</h2>

      {/* Single Select Dropdown */}
      <select value={selectedMedicine} onChange={handleMedicineChange}>
        {/* Default option */}
        <option value="">Select a Medicine</option>

        {/* Dynamically generate options */}
        {medicine.map((med) => (
          <option key={med.id} value={med.id}>
            {med.name} - {med.type}
          </option>
        ))}
      </select>

      {/* Display selected medicine details */}
      {selectedMedicine && (
        <div>
          <h3>Selected Medicine:</h3>
          {(() => {
            const selected = medicine.find(
              (med) => med.id.toString() === selectedMedicine
            );
            return selected ? (
              <p>
                Name: {selected.name}
                <br />
                Type: {selected.type}
              </p>
            ) : null;
          })()}
        </div>
      )}
    </div>
  );
}

export default MedicineSelector;
