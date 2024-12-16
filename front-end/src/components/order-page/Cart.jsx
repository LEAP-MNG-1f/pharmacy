"use client";
import { useEffect, useState } from "react";
import { useDataContext } from "../context/dataContext";

export const Cart = () => {
  const [spaceImage, setSpaceImage] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const [quantities, setQuantities] = useState({});
  const [parsedData, setParsedData] = useState([]); // State for storing the parsed data from localStorage

  // Fetch and parse data from localStorage on component mount
  useEffect(() => {
    const data = localStorage.getItem("sags");
    if (data) {
      const parsed = JSON.parse(data); // Parse the JSON string into an array
      setParsedData(parsed); // Set the parsed data into state
    } else {
      console.log("No data found in localStorage for the key 'sags'.");
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  console.log(parsedData);

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
    return parsedData.reduce((total, medicine) => {
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
          {parsedData?.map((medicine) => {
            const piecePrice = calculatePiecePrice(medicine.price);
            const itemTotal = calculateItemTotal(medicine);

            return (
              <div
                key={medicine?._id}
                className="w-full bg-[#00BBD3] rounded-lg p-4 flex flex-col justify-between transform transition-transform hover:scale-105"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-bold text-lg sm:text-xl break-words">
                    {medicine?.name}
                  </h3>

                  <p className="text-white font-bold text-sm sm:text-base">
                    Хайрцгийн үнэ: {medicine?.price.toLocaleString()}₮
                  </p>

                  <p
                    className={`text-white font-semibold text-sm sm:text-base ${
                      medicine?.getCatName[0].name !== "Жортой"
                        ? "hidden"
                        : "flex"
                    }`}
                  >
                    Ширхэгийн үнэ: {piecePrice.toLocaleString()}₮
                  </p>

                  <p className="text-white text-xs sm:text-sm">
                    {medicine?.location}
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">
                    {medicine?.getCatName[0].name}
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
                      className="w-full p-2 rounded-lg bg-white text-sm sm:text-base"
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
              <span className="text-lg sm:text-xl font-bold text-[#00BBD3]">
                {calculateTotal().toFixed(0).toLocaleString()}₮
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-md">
          <button
            className="w-full py-3 mt-4 bg-[#00BBD3] text-white font-bold rounded-lg hover:bg-[#466461] transition-colors"
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
