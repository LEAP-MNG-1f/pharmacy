"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../../../constant/constant";

const DataContext = createContext(undefined);
export const DataProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);

  const fetchDatas = async () => {
    const response = await fetch(`${BACKEND_URL}/api/medicines`);
    const datas = await response.json();

    setMedicines(datas?.result);
  };

  console.log(medicines);

  useEffect(() => {
    fetchDatas();
  }, []);

  const contextValue = {
    medicines,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useFoodContext must be used within a FoodProvider");
  }
  return context;
};
