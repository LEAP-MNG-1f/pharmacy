import React, { useState } from "react";
import Link from "next/link";
import { Clock, MapPin, Phone, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Correct import for react-select
import ReactSelect from "react-select";
import { useDataContext } from "../context/dataContext";
import { GoogleMap } from "./Google";

const CustomSelect = ReactSelect;

const MedicineSelector = () => {
  const { uniqueNames, apteks, addToBasket } = useDataContext();
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [quantities, setQuantities] = useState({});

  const medicineOptions = uniqueNames.map((name) => ({
    value: name,
    label: name,
  }));

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: "#e2e8f0",
      "&:hover": {
        borderColor: "#cbd5e1",
      },
      boxShadow: "none",
      borderRadius: "0.375rem",
      minHeight: "42px",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#f1f5f9",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#1e293b",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      ":hover": {
        backgroundColor: "#e2e8f0",
        color: "#ef4444",
      },
    }),
  };

  const handleMedicineChange = (selectedOptions) => {
    setSelectedMedicines(selectedOptions || []);
  };

  const filteredEmiinsan = apteks?.filter((aptek) => {
    return selectedMedicines?.every((drug) =>
      aptek.emsId.some((item) => item?.name === drug?.value)
    );
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-12">
        <CustomSelect
          styles={customStyles}
          className="w-full max-w-3xl mx-auto"
          classNamePrefix="select"
          options={medicineOptions}
          value={selectedMedicines}
          onChange={handleMedicineChange}
          isMulti={true}
          placeholder="Search for medicines..."
          isClearable={true}
          isSearchable={true}
          name="medicines"
          inputId="select-medicines"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-4">
          {filteredEmiinsan?.length > 0 ? (
            filteredEmiinsan.map((pharmacy) => (
              <Link
                key={pharmacy._id}
                href={`/${pharmacy._id}`}
                className="block"
              >
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 h-[188px]">
                      <img
                        src={pharmacy.image || "/api/placeholder/400/300"}
                        alt={pharmacy.name}
                        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      />
                    </div>

                    <div className="w-full md:w-3/5 py-4 pl-8">
                      <CardHeader className="p-0">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {pharmacy.name || "Pharmacy Name"}
                          </h3>
                          {pharmacy.isOpen && (
                            <Badge className="bg-green-100 text-green-800">
                              Open Now
                            </Badge>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{pharmacy.location}</span>
                        </div>

                        {pharmacy.phone && (
                          <div className="flex items-center text-gray-600">
                            <Phone className="w-4 h-4 mr-2" />
                            <span className="text-sm">{pharmacy.phone}</span>
                          </div>
                        )}

                        {pharmacy.workingHours && (
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm">
                              {pharmacy.workingHours}
                            </span>
                          </div>
                        )}

                        {selectedMedicines.length > 0 && (
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                              Available Medicines:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedMedicines.map((medicine) => (
                                <Badge
                                  key={medicine.value}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {medicine.label}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              {selectedMedicines.length > 0
                ? "No pharmacies found with all selected medicines"
                : "Loading..."}
            </div>
          )}
        </div>

        <div className="h-[600px] rounded-lg overflow-hidden">
          <GoogleMap selectedLocation={filteredEmiinsan} />
        </div>
      </div>
    </div>
  );
};

export default MedicineSelector;
