"use client";

import { useEffect, useState } from "react";
import data from "../../../mock/data.json";

import Select from "react-select";
import List from "./List";
import { GoogleMap } from "./Google";

export const GoogleHomePage = () => {
  const [districtOptions, setDistrictOptions] = useState([]);
  const [filterCity, setFilterCity] = useState([]);
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    try {
      const uniqueCityOptions = [];
      const citySet = new Set();
      data.properties.forEach((property) => {
        if (!citySet.has(property.City)) {
          citySet.add(property.City);
          uniqueCityOptions.push({
            value: property.City,
            label: property.City,
          });
        }
      });

      setDistrictOptions(uniqueCityOptions);
      setProperties(data.properties);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSelectCityChange = (selectedOptions) => {
    const selectedCities = selectedOptions.map((option) => option.value);

    const newSelectedLocations = properties
      .filter((property) => selectedCities.includes(property.City))
      .map((property) => ({
        lat: parseFloat(property.lat),
        lng: parseFloat(property.long),
        title: property.title,
        cityName: property.City,
        imageUrl: property.imageUrl,
        star: property.star,
        type: property.type,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        amenities: property.amenities[0],
      }));
    setFilterCity(newSelectedLocations);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="w-screen flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center max-w-[1366px] max-h-[1024px] mt-7 rounded-3xl">
        <div className="flex items-center gap-6">
          <Select
            defaultValue={[]}
            isMulti
            name="districts"
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
