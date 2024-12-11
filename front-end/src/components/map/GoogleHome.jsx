import { useEffect, useState } from "react";

import Select from "react-select";
import List from "./List";
import { GoogleMap } from "./Google";
import { BACKEND_URL } from "../../../constant/constant";

export const GoogleHomePage = () => {
  const [districtOptions, setDistrictOptions] = useState([]);
  const [filterCity, setFilterCity] = useState([]);

  const [medicines, setMedicine] = useState([]);

  const fetchBeData = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/medicines`);
      const dataMedicines = await response.json();
      setMedicine(dataMedicines?.result);
      console.log(dataMedicines);
    } catch (error) {
      console.log(error, "Medicine fetch error");
    }
  };

  const fetchData = async () => {
    try {
      const uniqueCityOptions = [];
      const citySet = new Set();
      medicines.forEach((medicine) => {
        if (!citySet.has(medicine.name)) {
          citySet.add(medicine.name);
          uniqueCityOptions.push({
            value: medicine.name,
            label: medicine.name,
          });
        }
      });

      setDistrictOptions(uniqueCityOptions);
      setMedicine(medicines);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(medicines);

  const handleSelectCityChange = (selectedOptions) => {
    const selectedCities = selectedOptions.map((option) => option.value);

    const newSelectedLocations = medicines
      .filter((medicine) => selectedCities.includes(medicine.name))
      .map((medicine) => ({
        _id: medicine._id,
        lat: parseFloat(medicine.lat),
        lng: parseFloat(medicine.long),
        categoryId: medicine.categoryId,
        name: medicine.name,
        balance: medicine.balance,
        imageUrl: medicine.image,
        location: medicine.location,
        type: medicine.recipeType,
      }));
    setFilterCity(newSelectedLocations);
  };

  useEffect(() => {
    fetchData();
    fetchBeData();
  }, []);

  return (
    <main className="w-screen flex justify-center items-center">
      <div>
        {medicines.map((medicine) => {
          return <div key={medicine.id}>{medicine.name}</div>;
        })}
      </div>
      <div className="w-full flex flex-col justify-center items-center max-w-[1366px] max-h-[1024px] mt-7 rounded-3xl">
        <div className="flex items-center gap-6">
          <Select
            defaultValue={[]}
            isMulti
            name="name"
            options={districtOptions}
            className="basic-multi-select w-[626px] text-black"
            classNamePrefix="select"
            onChange={handleSelectCityChange}
          />
        </div>

        <div className="flex">
          <List selectedLocation={filterCity} />
          <GoogleMap selectedLocation={filterCity} />
        </div>
      </div>
    </main>
  );
};

export default GoogleHomePage;
