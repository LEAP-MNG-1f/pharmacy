import { useState } from "react";

import List from "./List";
import { GoogleMap } from "./Google";
import { useDataContext } from "../context/dataContext";

export const GoogleHomePage = () => {
  const [filterName, setFilterName] = useState([]);
  const { medicines, setMedicines } = useDataContext();

  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredMedincine = medicines?.filter((medicine) =>
    medicine?.name?.toLowerCase().includes(searchValue)
  );

  console.log(filteredMedincine);

  const handleInputChange = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };

  return (
    <main className="w-screen flex justify-center items-center">
      <input
        placeholder="Search"
        value={searchValue}
        type="text"
        className="bg-[#E8E8EA] outline-none rounded-md text-black"
        onChange={handleInputChange}
      />
      <div className="w-full flex flex-col justify-center items-center max-w-[1366px] max-h-[1024px] mt-7 rounded-3xl">
        {filteredMedincine.map((medicine) => {
          return (
            <div key={medicine?._id} className="flex flex-col">
              <List selectedLocation={medicine} />
            </div>
          );
        })}

        <div className="flex">
          <GoogleMap selectedLocation={filteredMedincine} />
        </div>
      </div>
    </main>
  );
};

export default GoogleHomePage;
