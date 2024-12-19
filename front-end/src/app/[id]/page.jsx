"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useDataContext } from "@/components/context/dataContext";

const EmiinsanPage = () => {
  const { apteks, addToBasket } = useDataContext();
  const [emiinsan, setEmiinsan] = useState(null);
  const [quantities, setQuantities] = useState({});

  const { id } = useParams();

  // Fetch the emiinsan details by id
  useEffect(() => {
    if (id) {
      const foundEmiinsan = apteks.find((emi) => emi._id === id);
      setEmiinsan(foundEmiinsan);
    }
  }, [id, apteks]);

  const handleIncreaseQuantity = (medicineId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [medicineId]: (prevQuantities[medicineId] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (medicineId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [medicineId]: Math.max((prevQuantities[medicineId] || 1) - 1, 1),
    }));
  };

  if (!emiinsan) return <div>Loading...</div>;

  console.log(emiinsan);

  return (
    <div className="w-full flex justify-center mt-20">
      <div className="container flex flex-col lg:flex-row gap-10 p-5">
        {/* Left Column: Emiinsan Image and Location */}
        <div className="flex flex-col items-center w-full lg:w-1/3">
          <img
            className="rounded-lg w-full max-w-xs"
            src={emiinsan?.image}
            alt={emiinsan?.location}
          />
          <h2 className="text-xl font-semibold text-center mt-4">
            {emiinsan.location}
          </h2>
        </div>

        {/* Right Column: Medicines List */}
        <div className="w-full lg:w-2/3">
          <h4 className="font-medium text-2xl text-gray-700 mb-6">
            Боломжит эмийн жагсаалт
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emiinsan?.emsId?.map((medicine) => {
              const medicineQuantity = quantities[medicine._id] || 1;

              return (
                <div
                  key={medicine._id}
                  className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col justify-between h-full">
                    {/* Medicine Info */}
                    <div>
                      <h5 className="font-semibold text-lg">{medicine.name}</h5>
                      <p className="text-sm text-gray-500">
                        {medicine.balance}
                      </p>
                      <p className="font-semibold text-blue-600 text-xl">
                        {parseInt(medicine.price).toLocaleString()} ₮
                      </p>
                    </div>

                    {/* Quantity Controls and Add to Cart Button */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border rounded-lg bg-gray-100 p-2">
                        <button
                          onClick={() => handleDecreaseQuantity(medicine._id)}
                          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">
                          {medicineQuantity}
                        </span>
                        <button
                          onClick={() => handleIncreaseQuantity(medicine._id)}
                          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          addToBasket(
                            emiinsan.location,
                            medicine._id,
                            medicine.name,
                            medicine.price,
                            medicine.balance,
                            medicine.categoryId,
                            medicineQuantity
                          );
                        }}
                        className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiinsanPage;
