"use client";
import { useState } from "react";
import { useDataContext } from "../context/dataContext";

export const Cart = () => {
  const [spaceImage, setSpaceImage] = useState({});
  const [imagePreview, setImagePreview] = useState();
  // let [count, setCount] = useState(0);
  // function Nemeh() {
  //   count = count + 1;
  //   setCount(count);
  // }
  // function Hasah() {
  //   count = count - 1;
  //   setCount(count);
  // }

  const { medicines } = useDataContext();
  const slicedData = medicines.slice(0, 3);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSpaceImage({ image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex w-full  bg-white justify-center items-center py-6">
      <div className="flex flex-col items-center   w-[1200px] h-[90%] rounded-2xl border-[1px] border-gray-400 gap-3 p-3">
        <div className="text-zinc-700 font-semibold">Таны сагс</div>
        <div className="w-[90%] flex flex-col gap-3">
          {slicedData?.map((medicine) => {
            return (
              <div
                key={medicine?._id}
                className="  w-[400px] h-[200px] bg-[#577774] rounded-lg py-3 px-5 items-center justify-between flex"
              >
                <div className=" flex flex-col">
                  <div className="flex flex-row gap-3 items-center">
                    <p className="text-white  font-bold  text-2xl">
                      {medicine?.name}
                    </p>
                  </div>

                  <div className="flex flex-row gap-3 items-center">
                    <p className="text-white font-bold text-lg">
                      {medicine?.price}₮
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <p className="text-white  text-sm">{medicine?.location}</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <p className="text-white text-sm">
                      {medicine?.categoryId.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-1">
          <div className="max-w-[210px] w-full h-[50px] p-2 flex flex-col justify-center items-center gap-2 border border-dashed border-[#D6D7DC] bg-[rgba(186,188,196,0.12)] rounded-lg">
            <input
              type="file"
              id="uploadFile1"
              name="uploadFile1"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="uploadFile1"
              className="px-1 py-2 rounded-lg bg-SecondColor text-black font-inter text-base font-bold cursor-pointer"
            >
              Жорын зургийг оруулна уу
            </label>
          </div>
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Prescription Preview"
                className="w-full h-[200px] object-contain border border-black border-dashed p-2"
              />
            </div>
          )}
        </div>
        <button>Захиалах</button>
      </div>
    </div>
  );
};
