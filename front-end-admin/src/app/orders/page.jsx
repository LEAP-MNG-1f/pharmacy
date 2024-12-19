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
    <div className="min-h-screen bg-[#edece9] py-10 px-6">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-[#242321]">Хяналтын Самбар</h1>
      </div>
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto rounded-xl">
        {dataOrder?.map((order) => (
          <div
            key={order._id}
            className=" rounded-xl border-white border-2  hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="bg-white text-[#242321] p-4 rounded-t-xl flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BoxIcon className="w-6 h-6" />
                <div className="font-semibold text-lg text-[#242321]">
                  Order #{order.orderNumber}
                </div>
              </div>
              <div className="font-extrabold">
                {new Date(order.createdAt).toLocaleDateString()}
              </div>
            </div>
 
            <div className="p-4 flex flex-col gap-4 justify-start">
              <div className="flex flex-col gap-2">
                <div className="text-[#242321] text-base font-bold">
                  Сагсалсан эмнүүд:
                </div>
                <div>{Array.isArray(order.medicineIds) &&
                order.medicineIds.length > 0 ? (
                  <div className="text-[#242321] pt-3 overflow-y-auto h-[100px] border-2 rounded-xl p-2 border-white">
                    {order.medicineIds.map((med,index) => (
                      <div
                        key={med._id}
                        className="flex items-center justify-between mb-2 hover:bg-white"
                      ><div className="flex gap-2 " ><p>{index + 1}.</p>
                        <p>{med.name}</p></div>
                        
                        <p className="text-[#242321]">Тоо: {med.quantity}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-[#242321] italic">No medicines found</div>
                )}</div>
                
              </div>
 
              <div className="font-extrabold text-[#242321] gap-2 flex">
                <div>Нийт Үнэ:</div>
                <span className="text-[#242321]">
                  {formatPrice(order.totalPrice)}₮
                </span>
              </div>
 
              <div>
                <div className="font-semibold text-base text-[#242321]">
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
                  <div className="text-[#242321] text-base font-bold">
                    Нэмэлт мэдээлэл:
                  </div>
                  <div className="text-[#242321]">{order.information}</div>
                </div>
              )}
 
              <div className="flex items-center gap-2 border-t pt-2">
                <Wallet className="w-5 h-5 text-[#242321]" />
                <div className="text-[#242321] flex gap-1">
                  <div className="font-bold">Төлбөрийн төрөл:</div>
                  {order.paymentType}
                </div>
              </div>
            </div>
 
            <div className="div-4 border-t bg-white p-2 rounded-b-lg">
              {order.image_jor ? (
                <>
                  <div className="text-[#242321] text-sm mb-2 flex items-center gap-2 font-bold rounded-xl bg-white">
                    <Info className="w-5 h-5 text-gray-600" />
                    ЖОРТОЙ
                  </div>
                  <img
                    src={order.image_jor}
                    alt="Prescription"
                    className="w-full h-40 object-cover rounded-xl shadow-sm cursor-pointer"
                    onClick={() => handleImageClick(order.image_jor)}
                  />
                </>
              ) : (
                <>
                  <div className="text-[#242321] text-sm mb-2 flex items-center gap-2 font-bold rounded-xl bg-white">
                    <Info className="w-5 h-5 text-[#242321]" />
                    ЖОРГҮЙ
                  </div>
                  <img
                    src="/noimg.jpg"
                    alt="Default Prescription"
                    className="w-full h-40 object-cover rounded-xl shadow-sm"
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
 
     
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box gap-2 flex flex-col text-xl">
          <div className="text-[#242321] font-bold">Жорын зураг</div>
          <div className="bg-[#edece9]"> {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected Prescription"
              className="w-full max-w-[600px] max-h-[450px] object-contain rounded-xl "
            />
          )}</div>
         
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}