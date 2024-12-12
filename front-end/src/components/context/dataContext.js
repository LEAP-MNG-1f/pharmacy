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

  useEffect(() => {
    fetchDatas();
  }, []); // Empty dependency array to fetch only on mount

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
