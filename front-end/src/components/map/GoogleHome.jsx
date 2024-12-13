import { useState } from "react";
import List from "./List";
import { GoogleMap } from "./Google";
import { useDataContext } from "../context/dataContext";
import { SearchIcon } from "lucide-react";
import Select from "react-select";

export const GoogleHomePage = () => {
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
    <main className="w-screen flex flex-col justify-center mt-10 items-center gap-x-10">
      <div className="flex justify-between items-center bg-slate-100 outline-none  text-black mb-10 pr-10 w-[800px] h-16 border-gray-400  rounded-3xl">
        <details className="dropdown">
          <summary className="btn bg-slate-100">All</summary>
          <ul className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>Жортой</a>
            </li>
            <li>
              <a>Жоргүй</a>
            </li>
          </ul>
        </details>

        <input
          placeholder="Search"
          value={searchValue}
          type="text"
          className="pl-[20px] bg-slate-50  text-black "
          onChange={handleInputChange}
        />
        <div>
          <SearchIcon />
        </div>
      </div>
      <div className="flex">
        <div className="container">
          {filteredMedincine.slice(0, 3).map((medicine) => {
            return (
              <div key={medicine?._id}>
                <List selectedLocation={medicine} />
              </div>
            );
          })}
        </div>
        <div className="flex">
          <GoogleMap selectedLocation={filteredMedincine} />
        </div>
      </div>
    </main>
  );
};

export default GoogleHomePage;
