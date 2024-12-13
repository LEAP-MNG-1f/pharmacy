import { useState } from "react";
import List from "./List";
import { GoogleMap } from "./Google";
import { useDataContext } from "../context/dataContext";
import { SearchIcon } from "lucide-react";
import CarouselAds from "../home-page/CarouselAdsTop";
import CarouselAdsTop from "../home-page/CarouselAdsTop";
import CarouselAdsBottom from "../home-page/CarousalAdsBottom";

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
    <main className="flex justify-center">
      <div className="w-[1300px] flex flex-col items-center ">
        <div className="py-10">
          <label className="input input-bordered rounded-3xl flex items-center gap-2 outline-none w-[500px] h-14">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchValue}
              onChange={handleInputChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        {/* <div className="flex justify-between items-center bg-slate-100 outline-none  text-black mb-10 pr-10 w-[600px] h-16 border-gray-400 rounded-3xl">
          <input
            placeholder="Search"
            
            type="text"
            className="pl-[20px] bg-slate-50  text-black "
           
          />
          <div>
            <SearchIcon />
          </div>
        </div> */}
        <div className="flex gap-2 h-[700px] w-full">
          <div className="w-3/5">
            <GoogleMap selectedLocation={filteredMedincine} />
          </div>
          <div className="w-2/5 h-full">
            {filteredMedincine.slice(0, 3).map((medicine) => {
              return (
                <div key={medicine?._id}>
                  <List selectedLocation={medicine} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GoogleHomePage;
