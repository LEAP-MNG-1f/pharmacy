"use client";

import { useEffect, useState } from "react";
import { BoxIcon } from "@/svg/BoxIcon";
import { Info } from "@/svg/InfoIcon";
import { MapIcon } from "@/svg/MapIcon";
import { Wallet } from "@/svg/WalletIcon";
import { PhoneIcon, UserIcon } from "lucide-react";

export default function Orders() {
  const [dataOrder, setDataOrder] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Changed to null

  const getOrderData = async () => {
    try {
      const response = await fetch("http://localhost:8368/api/orders");
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setDataOrder(data?.data || []); // Added fallback array
    } catch (error) {
      console.error("Failed to fetch order data", error);
      setDataOrder([]); // Set empty array on error
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  function formatPrice(price) {
    if (!price) return "0"; // Return "0" instead of empty string
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  }

  const handleImageClick = (imageUrl) => {
    if (!imageUrl) return; // Don't open modal if no image
    setSelectedImage(imageUrl);
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Хяналтын Самбар</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto rounded-xl">
        {dataOrder?.map((order) => (
          <div
            key={order._id}
            className="bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="bg-[#33E4DB] text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BoxIcon className="w-6 h-6" />
                <div className="font-semibold text-lg">
                  Order #{order.orderNumber}
                </div>
              </div>
              <div className="font-extrabold">
                {new Date(order.createdAt).toLocaleDateString()}
              </div>
            </div>

            <div className="p-4 flex flex-col gap-4 justify-start">
              <div className="gap-7">
                <div className="text-gray-600 text-sm font-bold">
                  Сагсалсан эмнүүд:
                </div>
                {Array.isArray(order.medicineIds) &&
                order.medicineIds.length > 0 ? (
                  <div className="text-gray-600 pt-3 overflow-y-auto h-[100px] border-2 rounded-sm p-2 border-[#33E4DB]">
                    {order.medicineIds.map((med) => (
                      <div
                        key={med._id}
                        className="flex items-center justify-between mb-2"
                      >
                        <p>{med.name}</p>
                        <p className="text-gray-600">Тоо: {med.quantity}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-600 italic">No medicines found</div>
                )}
              </div>

              <div className="font-extrabold text-gray-600 gap-2 flex">
                <div>Нийт Үнэ:</div>
                <span className="text-[#33E4DB]">
                  {formatPrice(order.totalPrice)}₮
                </span>
              </div>

              <div>
                <div className="font-semibold text-gray-700">
                  Хүргэлтийн хаяг:
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapIcon className="w-5 h-5" />
                    <div>{order.district}</div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <UserIcon className="w-5 h-5" />
                    <div>{order.apartment}</div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <PhoneIcon className="w-5 h-5" />
                    <div>{order.phoneNumber}</div>
                  </div>
                </div>
              </div>

              {order.information && (
                <div>
                  <div className="text-gray-600 font-bold">
                    Нэмэлт мэдээлэл:
                  </div>
                  <div className="text-gray-600">{order.information}</div>
                </div>
              )}

              <div className="flex items-center gap-2 border-t pt-2">
                <Wallet className="w-5 h-5 text-gray-600" />
                <div className="text-gray-600 flex gap-1">
                  <div className="font-bold">Төлбөрийн төрөл:</div>
                  {order.paymentType}
                </div>
              </div>
            </div>

            <div className="div-4 border-t bg-gray-50 p-2 rounded-b-xl">
              {order.image_jor ? (
                <>
                  <div className="text-gray-600 text-sm mb-2 flex items-center gap-2 font-bold">
                    <Info className="w-5 h-5 text-gray-600" />
                    ЖОР:
                  </div>
                  <img
                    src={order.image_jor}
                    alt="Prescription"
                    className="w-full h-40 object-cover rounded-lg shadow-sm cursor-pointer"
                    onClick={() => handleImageClick(order.image_jor)}
                  />
                </>
              ) : (
                <>
                  <div className="text-gray-600 text-sm mb-2 flex items-center gap-2 font-bold">
                    <Info className="w-5 h-5 text-gray-600" />
                    ЖОРГҮЙ
                  </div>
                  <img
                    src="/noimg.jpg" // Added leading slash
                    alt="Default Prescription"
                    className="w-full h-40 object-cover rounded-lg shadow-sm"
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for larger image display */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div>Жорын зураг</div>
          {selectedImage && ( // Only render if selectedImage exists
            <img
              src={selectedImage}
              alt="Selected Prescription"
              className="w-[500px] h-[400px] object-contain"
            />
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
