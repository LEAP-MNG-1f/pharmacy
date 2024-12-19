"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone, Plus, Minus, Calendar } from "lucide-react";
import { useParams } from "next/navigation";
import { useDataContext } from "@/components/context/dataContext";
import { toast } from "react-toastify";

const EmiinSan = () => {
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
      <div className="flex items-center justify-center min-h-screen bg-[#E9F6FE] to-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#00BBD3] border-r-transparent mb-4"></div>
          <div className="text-[#00BBD3] font-medium animate-pulse">
            Loading...
          </div>
        </div>
      </div>
    );

  // Not found state
  if (!emiinsan) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            emiinsan not found
          </h1>
          <p className="text-gray-600">
            The emiinsan you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {emiinsan.name}
            </h1>
            {emiinsan.isOpen && (
              <Badge className="bg-green-100 text-green-800">Open Now</Badge>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="overflow-hidden">
              <img
                src={emiinsan.image || "/api/placeholder/800/400"}
                alt={emiinsan.name}
                className="w-full h-[200px] object-cover"
              />
            </Card>

            <Card className="p-6 flex items-center">
              <div className="space-y-4 w-full">
                {emiinsan.location && (
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-[#00BBD3]" />
                    <span>{emiinsan.location}</span>
                  </div>
                )}

                {emiinsan.phone && (
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3 text-[#00BBD3]" />
                    <span>{emiinsan.phone}</span>
                  </div>
                )}

                {emiinsan.workingHours && (
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3 text-[#00BBD3]" />
                    <span>{emiinsan.workingHours}</span>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Available Medicines Section */}
          {emiinsan.emsId && emiinsan.emsId.length > 0 && (
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Available Medicines
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {emiinsan.emsId.map((medicine) => {
                      const medicineQuantity = quantities[medicine._id] || 1;

                      return (
                        <div
                          key={medicine._id}
                          className="p-4 border border-[#e2e8f0] rounded-lg hover:border-[#cbd5e1] hover:shadow-lg transition-all duration-200"
                        >
                          {/* Image Section */}
                          <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 h-[160px]">
                            <img
                              src={medicine?.img || "/api/placeholder/400/320"}
                              alt={medicine.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Title and Price */}
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-medium text-gray-900 flex-1 pr-2">
                              {medicine.name}
                            </h3>
                            <Badge className="bg-[#E9F6FE] text-black whitespace-nowrap">
                              {parseInt(medicine.price).toLocaleString()}₮
                            </Badge>
                          </div>

                          {/* Stock Info */}
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Stock: {medicine.balance}</span>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center bg-gray-50 rounded-lg p-1">
                              <button
                                onClick={() =>
                                  handleDecreaseQuantity(medicine._id)
                                }
                                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition text-gray-600"
                              >
                                <Minus className="w-4 h-4" />
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
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Add to Cart Button */}
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
                            className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#E9F6FE] text-black font-medium rounded-md hover:shadow-md transition-all duration-200"
                          >

                            <Plus className="w-4 h-4" />
                    

                            Сагслах

                          </button>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmiinSan;
