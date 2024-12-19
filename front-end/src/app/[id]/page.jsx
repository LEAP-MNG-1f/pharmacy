"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDataContext } from "@/components/context/dataContext";
import { toast } from "react-toastify";

const EmiinsanPage = () => {
  const { apteks, addToBasket } = useDataContext();
  const [emiinsan, setEmiinsan] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [warningMessage, setWarningMessage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const foundEmiinsan = apteks.find((emi) => emi._id === id);
      setEmiinsan(foundEmiinsan);
    }
  }, [id, apteks]);

  const handleIncreaseQuantity = (medicineId, stock) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[medicineId] || 0;
      if (currentQuantity < stock) {
        return {
          ...prevQuantities,
          [medicineId]: currentQuantity + 1,
        };
      } else {
        setWarningMessage("Захиалгын хэмжээ эмийн нөөцөөс хэтэрсэн байна");
        return prevQuantities;
      }
    });
  };

  useEffect(() => {
    if (warningMessage) {
      toast.warning(warningMessage);
      setWarningMessage(null);
    }
  }, [warningMessage]);

  const handleDecreaseQuantity = (medicineId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [medicineId]: Math.max((prevQuantities[medicineId] || 1) - 1, 1),
    }));
  };

  if (!emiinsan)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#33E4DB] to-[#00BBD3]/10">
        <div className="animate-pulse text-[#00BBD3] text-xl">Loading...</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#33E4DB]/10 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Pharmacy Details Card */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#33E4DB] to-[#00BBD3] opacity-20"></div>
                <img
                  className="w-full h-48 object-cover"
                  src={emiinsan?.image}
                  alt={emiinsan?.location}
                />
              </div>
              <div className="p-6">
                <h2 className="font-bold text-2xl text-[#00BBD3]">
                  {emiinsan.location}
                </h2>
                <div className="font-bold text-2xl text-[#00BBD3]">
                  Pharmacy Location
                </div>
              </div>
            </div>
          </div>

          {/* Medicines List */}
          <div className="lg:w-2/3">
            <h4 className="text-2xl font-bold text-[#00BBD3] mb-6">
              Available Medicines
            </h4>
            <div className="grid gap-4">
              {emiinsan?.emsId?.map((medicine) => {
                const medicineQuantity = quantities[medicine._id] || 1;

                return (
                  <div
                    key={medicine._id}
                    className="bg-white rounded-xl shadow-md w-[400px] hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="flex justify-center p-6">
                      <div className="flex flex-col justify-between gap-4">
                        <div className="flex justify-center gap-10">
                          <div className="w-[150px] h-[120px] rounded-lg overflow-hidden bg-gray-100">
                            <img
                              src={medicine?.img}
                              alt={medicine.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-between">
                            <h5 className="text-xl font-bold text-gray-800">
                              {medicine.name}
                            </h5>
                            <div className="space-y-1">
                              <p className="text-sm text-gray-600">
                                Stock: {medicine.balance}
                              </p>
                              <p className="text-2xl font-bold text-[#00BBD3]">
                                {parseInt(medicine.price).toLocaleString()} ₮
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Quantity Controls and Add to Cart */}
                        <div className="flex  items-center gap-24 ">
                          <div className="flex items-center bg-gray-50 rounded-lg p-1">
                            <button
                              onClick={() =>
                                handleDecreaseQuantity(medicine._id)
                              }
                              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition text-gray-600"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-medium">
                              {medicineQuantity}
                            </span>
                            <button
                              onClick={() =>
                                handleIncreaseQuantity(
                                  medicine._id,
                                  medicine.balance
                                )
                              }
                              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition text-gray-600"
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
                            className="px-6 py-3 w-[120px] bg-gradient-to-r from-[#33E4DB] to-[#00BBD3] text-white font-medium rounded-lg hover:shadow-md transition-all duration-300 whitespace-nowrap"
                          >
                            Сагслах
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiinsanPage;
