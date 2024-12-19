"use client";

import { useEffect, useState } from "react";
import { BoxIcon } from "@/svg/BoxIcon";
import { Info } from "@/svg/InfoIcon";
import { MapIcon } from "@/svg/MapIcon";
import { Wallet } from "@/svg/WalletIcon";
import { PhoneIcon, UserIcon } from "lucide-react";

export default function Orders() {
  const [dataOrder, setDataOrder] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const getOrderData = async () => {
    try {
      const response = await fetch(
        "https://back-end-wine-five.vercel.app/api/orders"
      );
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setDataOrder(data?.data || []);
    } catch (error) {
      console.error("Failed to fetch order data", error);
      setDataOrder([]);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  // const handleProcessChange = async (orderId, newProcess) => {
  //   try {
  //     console.log("Updating order:", orderId, "to process:", newProcess); // Debug log

  //     const response = await fetch(
  //       `https://back-end-wine-five.vercel.app/api/orders/${orderId}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           process: newProcess,
  //         }),
  //       }
  //     );

  //     console.log("Response status:", response.status); // Debug log

  //     const data = await response.json();
  //     console.log("Response data:", data); // Debug log

  //     if (data.success) {
  //       // Update local state
  //       setDataOrder((prevOrders) =>
  //         prevOrders.map((order) =>
  //           order._id === orderId ? { ...order, process: newProcess } : order
  //         )
  //       );
  //       alert("Order status updated successfully");
  //     } else {
  //       throw new Error(data.error || "Failed to update status");
  //     }
  //   } catch (error) {
  //     console.error("Failed to update order process:", error);
  //     alert("Failed to update order status");
  //   }
  // };

  function formatPrice(price) {
    if (!price) return "0";
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  }

  const handleImageClick = (imageUrl) => {
    if (!imageUrl) return;
    setSelectedImage(imageUrl);
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Захиалгын Самбар</h1>
      </div>

      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        {dataOrder?.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r bg-[#E9F6FE] p-4 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <BoxIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-gray-900">
                      Order #{order.orderNumber}
                    </div>
                    <div className="text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm flex gap-5">
                  <select
                    // value={order.process || "Ordered"}
                    // onChange={(e) =>
                    //   handleProcessChange(order._id, e.target.value)
                    // }
                    className="px-3 py-1 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Ordered">Ordered</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Processing">Processing</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                  <span className="font-medium text-blue-600">
                    {formatPrice(order.totalPrice)}₮
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
              {/* Medicine List Section */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Захиалсан эмнүүд
                  </h3>
                  <span className="text-sm text-gray-500">
                    {order.medicineIds?.length || 0} items
                  </span>
                </div>
                {Array.isArray(order.medicineIds) &&
                order.medicineIds.length > 0 ? (
                  <div className="bg-gray-50 rounded-xl p-4 max-h-[250px] overflow-y-auto">
                    {order.medicineIds.map((med, index) => (
                      <div
                        key={med._id}
                        className="flex items-center justify-between py-3 px-4 bg-white rounded-lg mb-2 shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500">
                            {index + 1}
                          </span>
                          <span className="font-medium text-gray-900">
                            {med.name}
                          </span>
                        </div>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {med.quantity} ш
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-500 italic text-center py-8 bg-gray-50 rounded-xl">
                    No medicines found
                  </div>
                )}
              </div>

              {/* Delivery Information Section */}
              <div className="md:col-span-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Хүргэлтийн мэдээлэл
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MapIcon className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">
                          {order.district}-{order.khoroo}-{order.apartment}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <UserIcon className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">{order.apartment}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <PhoneIcon className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">
                          {order.phoneNumber}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <Wallet className="w-5 h-5 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500">
                          Төлбөрийн төрөл
                        </span>
                        <div className="font-medium text-gray-900">
                          {order.paymentType}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prescription Image Section */}
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Жорын зураг
                </h3>
                <div className="bg-gray-50 rounded-xl p-4">
                  {order.image_jor ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Info className="w-5 h-5 text-green-600" />
                        <span className="text-green-600 font-medium">
                          ЖОРТОЙ
                        </span>
                      </div>
                      <img
                        src={order.image_jor}
                        alt="Prescription"
                        className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                        onClick={() => handleImageClick(order.image_jor)}
                      />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Info className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-400 font-medium">
                          ЖОРГҮЙ
                        </span>
                      </div>
                      <img
                        src="/noimg.jpg"
                        alt="Default Prescription"
                        className="w-full h-48 object-cover rounded-lg shadow-sm opacity-50"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-3xl p-0 bg-white rounded-2xl overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">Жорын зураг</h3>
          </div>
          <div className="p-6 bg-gray-50">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected Prescription"
                className="w-full max-h-[600px] object-contain rounded-xl"
              />
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="cursor-pointer">close</button>
        </form>
      </dialog>
    </div>
  );
}
