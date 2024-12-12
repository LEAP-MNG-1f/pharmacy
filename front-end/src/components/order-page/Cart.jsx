"use client";
import { useState } from "react";
import { useDataContext } from "../context/dataContext";

export const Cart = () => {
  const [spaceImage, setSpaceImage] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const [quantities, setQuantities] = useState({});

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

  const calculatePiecePrice = (price) => {
    return price / 10;
  };

  const handleQuantityChange = (medicineId, value) => {
    const newValue = Math.max(0, parseInt(value) || 0);
    setQuantities((prev) => ({
      ...prev,
      [medicineId]: newValue,
    }));
  };

  const calculateItemTotal = (medicine) => {
    const piecePrice = calculatePiecePrice(medicine.price);
    const quantity = quantities[medicine._id] || 0;
    return piecePrice * quantity;
  };

  const calculateTotal = () => {
    return slicedData.reduce((total, medicine) => {
      return total + calculateItemTotal(medicine);
    }, 0);
  };

  return (
    <div className="flex w-full min-h-screen bg-white justify-center items-start py-4 px-2 sm:py-6 ">
      <div className="flex flex-col items-center w-full max-w-[1200px] rounded-2xl border border-gray-400 gap-3 p-4 sm:p-6">
        <h2 className="text-zinc-700 text-lg sm:text-xl font-semibold mb-4">
          Таны сагс
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slicedData?.map((medicine) => {
            const piecePrice = calculatePiecePrice(medicine.price);
            const itemTotal = calculateItemTotal(medicine);

            return (
              <div
                key={medicine?._id}
                className="w-full bg-[#577774] rounded-lg p-4 flex flex-col justify-between transform transition-transform hover:scale-105"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-bold text-lg sm:text-xl break-words">
                    {medicine?.name}
                  </h3>

                  <p className="text-white font-bold text-sm sm:text-base">
                    Хайрцгийн үнэ: {medicine?.price.toLocaleString()}₮
                  </p>

                  <p className="text-white font-semibold text-sm sm:text-base">
                    Ширхэгийн үнэ: {piecePrice.toLocaleString()}₮
                  </p>

                  <p className="text-white text-xs sm:text-sm">
                    {medicine?.location}
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">
                    {medicine?.categoryId.name}
                  </p>

                  <div className="mt-2">
                    <input
                      type="number"
                      placeholder="Тоо ширхэг... "
                      value={quantities[medicine._id] || ""}
                      onChange={(e) =>
                        handleQuantityChange(medicine._id, e.target.value)
                      }
                      min="0"
                      className="w-full p-2 rounded-lg text-black text-sm sm:text-base"
                    />
                  </div>

                  <div className="text-white text-right mt-2">
                    <p className="text-base sm:text-lg font-bold">
                      Нийт дүн: {itemTotal.toFixed(0).toLocaleString()}₮
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full max-w-md mt-6 sm:mt-8">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <span className="text-base sm:text-lg font-semibold">
                Нийт дүн:
              </span>
              <span className="text-lg sm:text-xl font-bold text-[#577774]">
                {calculateTotal().toFixed(0).toLocaleString()}₮
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-md">
          <div className="w-full p-4 border border-dashed border-gray-400 bg-gray-50 rounded-lg">
            <input
              type="file"
              id="uploadFile1"
              name="uploadFile1"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="uploadFile1"
              className="block w-full py-3 text-center rounded-lg bg-[#577774] text-white font-bold cursor-pointer hover:bg-[#466461] transition-colors"
            >
              Жорын зургийг оруулна уу
            </label>
          </div>

          {imagePreview && (
            <div className="w-full mt-2">
              <img
                src={imagePreview}
                alt="Prescription Preview"
                className="w-full h-[200px] object-contain border border-gray-400 border-dashed rounded-lg p-2"
              />
            </div>
          )}

          <button
            className="w-full py-3 mt-4 bg-[#577774] text-white font-bold rounded-lg hover:bg-[#466461] transition-colors"
            onClick={() => {
              console.log("Order details:", {
                items: quantities,
                prescription: spaceImage,
                totalAmount: calculateTotal(),
              });
            }}
          >
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
};
