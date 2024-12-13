import { useState } from "react";
import List from "./List";
import { GoogleMap } from "./Google";
import { useDataContext } from "../context/dataContext";
import { SearchIcon } from "lucide-react";
import { Hidden } from "@mui/material";
import Link from "next/link";

export const GoogleHomePage = () => {
  const { searchValue, handleInputChange, filteredMedincine, isOpen } =
    useDataContext();
  // const { medicines, setMedicines } = useDataContext();
  // const [searchValue, setSearchValue] = useState("");
  // const [isOpen, setIsOpen] = useState(false);

  // const filteredMedincine = medicines?.filter((medicine) =>
  //   medicine?.name?.toLowerCase().includes(searchValue)
  // );

  // const handleInputChange = (event) => {
  //   setIsOpen(true);
  //   setSearchValue(event.target.value);
  // };

  return (
    <main className="w-[800px] flex flex-col   items-center gap-x-10">
      <div className="flex flex-col ">
        <div className="flex justify-between items-center bg-slate-100 outline-none  text-black mb-10 px-6 w-[800px] h-16 border-gray-400  rounded-3xl">
          <input
            placeholder="Хайх эмийн нэрийг оруулна уу"
            value={searchValue}
            type="text"
            className="w-[600px] pl-[20px] bg-slate-100  text-black border-none"
            onChange={handleInputChange}
          />
          <Link href={"./resultpage"}>
            <SearchIcon />
          </Link>
        </div>
        {/* <div
          className={`${
            searchValue ? "flex flex-col" : "hidden"
          } flex flex-col gap-1`}
        >
          {filteredMedincine.map((medicine) => {
            return (
              <Link
                href={"./resultpage"}
                key={medicine?._id}
                className="ml-[30px] w-[30%] rounded-xl border border-green-400"
              >
                {medicine?.name}
              </Link>
            );
          })}
        </div> */}
      </div>
      <div className="flex ">
        <div className="">
          <GoogleMap selectedLocation={filteredMedincine} />
        </div>
        <div className="">
          {filteredMedincine.slice(0, 3).map((medicine) => {
            return (
              <div key={medicine?._id}>
                <List selectedLocation={medicine} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default GoogleHomePage;
