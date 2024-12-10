"use client";

// import { useEffect, useState } from "react";
// import data from "../mock/data.json";
// import Header_Exp from "./layout/header/Header_exp";
// import Body from "./layout/body/Body";

const GooglePage = () => {
  //   const [districtOptions, setDistrictOptions] = useState([]);
  //   const [filterCity, setFilterCity] = useState([]);
  //   const [properties, setProperties] = useState([]);

  //   const fetchData = async () => {
  //     try {
  //       const uniqueCityOptions = [];
  //       const citySet = new Set();
  //       data.properties.forEach((property) => {
  //         if (!citySet.has(property.City)) {
  //           citySet.add(property.City);
  //           uniqueCityOptions.push({
  //             value: property.City,
  //             label: property.City,
  //           });
  //         }
  //       });

  //       setDistrictOptions(uniqueCityOptions);
  //       setProperties(data.properties);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  // const filteredProperty = data.properties.filter((property) =>
  //   property?.City?.toLowerCase().includes(searchValue)
  // );

  //   const handleSelectCityChange = (selectedOptions) => {
  //     const selectedCities = selectedOptions.map((option) => option.value);

  //     const newSelectedLocations = properties
  //       .filter((property) => selectedCities.includes(property.City))
  //       .map((property) => ({
  //         lat: parseFloat(property.lat),
  //         lng: parseFloat(property.long),
  //         title: property.title,
  //         cityName: property.City,
  //         imageUrl: property.imageUrl,
  //         star: property.star,
  //         type: property.type,
  //         bedrooms: property.bedrooms,
  //         bathrooms: property.bathrooms,
  //         amenities: property.amenities[0],
  //       }));
  //     setFilterCity(newSelectedLocations);
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <main className="bg-black text-center">
      Google
      {/* {" "}
      <div className="container flex flex-col justify-center items-center max-w-[1366px] max-h-[1024px] mt-7 rounded-3xl">
        <Header_Exp
          districtOptions={districtOptions}
          handleSelectChange={handleSelectCityChange}
        />

        <Body selectedLocation={filterCity} />
      </div> */}
    </main>
  );
};

export default GooglePage;
