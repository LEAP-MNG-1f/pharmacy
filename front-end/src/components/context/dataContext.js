"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../../../constant/constant";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [apteks, setApteks] = useState([]);
  const [yags, setYags] = useState([]);

  const fetchDatas = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`${BACKEND_URL}/api/medicines`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const datas = await response.json();
      setMedicines(datas?.result || []); // Safely access the result
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // End loading
    }
  };

  //////emiinsanguudiig fetch hiij baina
  const fetchEmiinSans = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`${BACKEND_URL}/api/emiinsans`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const datas = await response.json();

      setApteks(datas?.data || []); // Safely access the result
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // End loading
    }
  };

  console.log(apteks);

  //yags-g fetch hiij baina///////
  const fetchYags = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`${BACKEND_URL}/api/yags`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const datas = await response.json();
      setYags(datas?.data || []); // Safely access the result
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // End loading
    }
  };

  const uniqueNames = [...new Set(yags.map((item) => item.name))]; //unique nernuudiig yags array-s ylgaj bgaa heseg

  useEffect(() => {
    fetchYags();
    fetchEmiinSans();
    fetchDatas();
  }, []); // Empty dependency array to fetch only on mount

  ///hailtaar iim utga orj irne gej uzeed

  // const hailt = ["Humira", "Adderall"];

  //hailtaar orj irsen emuudiig aguulsan aptekiig olj baigaa heseg

  // const filteredEmiins = apteks?.filter((aptek) => {
  //   // Check if all drugs in the query are in the emsId array
  //   return hailt.every((drug) =>
  //     aptek.emsId.some((item) => item?.name === drug)
  //   );
  // });

  const filteredMedincine = medicines?.filter((medicine) =>
    medicine?.name?.toLowerCase().includes(searchValue)
  );

  const handleInputChange = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };

  const contextValue = {
    medicines,
    loading,
    error,
    setMedicines,
    searchValue,
    setSearchValue,
    isOpen,
    setIsOpen,
    filteredMedincine,
    handleInputChange,
    uniqueNames,
    apteks,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
