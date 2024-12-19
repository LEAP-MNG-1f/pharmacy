"use client";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { BACKEND_URL } from "../../../constant/constant";
import OrderPage from "../pages/OrderPage";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import {
  MapIcon,
  Phone,
  Home,
  Info,
  Camera,
  ShoppingCart,
  Package2,
  CreditCard,
} from "lucide-react";

export const Cart = () => {
  const [spaceImage, setSpaceImage] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const [quantities, setQuantities] = useState({});
  const [parsedData, setParsedData] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const CLOUDINARY_UPLOAD_PRESET = "pharmacy_preset";
  const CLOUDINARY_CLOUD_NAME = "dvsck0zho";

  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    const data = localStorage.getItem("sags");
    if (data) {
      const parsed = JSON.parse(data);
      setParsedData(parsed);
      const initialQuantities = parsed.reduce((acc, medicine) => {
        acc[medicine._id] = medicine.quantity || 1; // default quantity to 1
        return acc;
      }, {});
      setQuantities(initialQuantities);
    }
  }, []);

  function formatPrice(price) {
    if (!price) return ""; // Handle undefined or null prices gracefully
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  }

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Show image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      formik.setFieldValue("image_jor", data.secure_url);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading image");
    } finally {
      setIsUploading(false);
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

  // const calculateItemTotal = (medicine) => {
  //   const piecePrice = calculatePiecePrice(medicine.price);
  //   const quantity = quantities[medicine._id] || 0;
  //   return piecePrice * quantity;
  // };
  const calculateItemTotal = (medicine) => {
    const piecePrice = calculatePiecePrice(medicine.price);
    const quantity = quantities[medicine._id] || 0;

    // Check if the medicine category is "Жортой"
    if (medicine?.categoryName == "Жортой") {
      // Calculate total price based on unit price
      return piecePrice * quantity;
    } else {
      // Calculate total price based on box price
      return medicine.price * quantity;
    }
  };

  const calculateTotal = () => {
    return parsedData.reduce((total, medicine) => {
      return total + calculateItemTotal(medicine);
    }, 0);
  };

  const formik = useFormik({
    initialValues: {
      userId: "",
      medicineIds: [],
      totalPrice: "",
      district: "",
      khoroo: "",
      apartment: "",
      phoneNumber: "",
      information: "",
      image_jor: "",
    },

    onSubmit: async (values) => {
      if (!parsedData || parsedData.length === 0) {
        alert("Сагсанд бараа байхгүй байна!");
        return;
      }

      const medicineIds = parsedData
        .map((item) => ({
          name: item?.name || "",
          quantity: quantities[item?._id] || 0,
        }))
        .filter((item) => item.name && item.quantity > 0);

      if (medicineIds.length === 0) {
        alert("Эм сонгоогүй байна!");
        return;
      }

      const orderData = {
        userId: "6756f77fd78e8837a652da17",
        medicineIds: medicineIds,
        totalPrice: calculateTotal().toFixed(0),
        district: values.district,
        khoroo: values.khoroo,
        apartment: values.apartment,
        phoneNumber: values.phoneNumber,
        information: values.information,
        paymentType: values.paymentType || "Card",
        image_jor: values.image_jor, // Include the Cloudinary URL
      };

      // if (spaceImage.image) {
      //   formData.append("image_jor", spaceImage.image);
      // }

      try {
        const response = await fetch(`${BACKEND_URL}/api/orders`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Ensure correct header
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(orderData),
        });
        const data = await response.json();
        console.log(data);
        if (data?.success) {
          toast.success("Таны захиалга амжилттай баталгаажлаа");
          localStorage.removeItem("sags");
          localStorage.setItem(
            "orderNumber",
            JSON.stringify(data?.data.orderNumber)
          );
          formik.resetForm();
          setQuantities({});
          setImagePreview(null);
          router.push("./");
          // alert("Захиалга амжилттай боллоо");
        } else {
          toast.error("Мэдээллийг бүрэн оруулна уу");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <form onSubmit={formik.handleSubmit} className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Таны сагс</h1>
          {/* <p className="text-gray-600">{parsedData?.length || 0} items</p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {parsedData?.map((medicine) => {
                const piecePrice = calculatePiecePrice(medicine.price);
                const itemTotal = calculateItemTotal(medicine);

                return (
                  <div
                    key={medicine?._id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-[#00BBD3] to-[#00A0B4] p-4">
                      <h3 className="text-white font-bold text-lg truncate">
                        {medicine?.name}
                      </h3>
                    </div>

                    <div className="p-4 space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Хайрцгийн үнэ:</span>
                          <span className="font-semibold">
                            {parseInt(medicine?.price).toLocaleString()}₮
                          </span>
                        </div>

                        {medicine?.categoryName === "Жортой" && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">
                              Ширхэгийн үнэ:
                            </span>
                            <span className="font-semibold">
                              {(medicine?.price / 10).toLocaleString()}₮
                            </span>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapIcon className="w-4 h-4" />
                          <span>{medicine?.location}</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          <Package2 className="w-4 h-4" />
                          {medicine?.categoryName}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <input
                            type="number"
                            placeholder="Тоо ширхэг..."
                            value={quantities[medicine._id] || ""}
                            onChange={(e) =>
                              handleQuantityChange(medicine._id, e.target.value)
                            }
                            min="0"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BBD3] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-gray-600">Нийт дүн:</span>
                        <span className="text-lg font-bold text-[#00BBD3]">
                          {parseInt(itemTotal.toFixed(0)).toLocaleString()}₮
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Prescription Upload */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-5 h-5 text-[#00BBD3]" />
                <h3 className="text-lg font-semibold">Жорын зураг</h3>
              </div>

              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                <input
                  type="file"
                  id="uploadFile1"
                  name="uploadFile1"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="uploadFile1"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00BBD3] text-white rounded-lg cursor-pointer hover:bg-[#00A0B4] transition-colors"
                >
                  <Camera className="w-5 h-5" />
                  Жорын зураг оруулах
                </label>

                {imagePreview && (
                  <div className="mt-4">
                    <img
                      src={imagePreview}
                      alt="Prescription Preview"
                      className="max-h-[200px] mx-auto object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Delivery Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-5 h-5 text-[#00BBD3]" />
                <h3 className="text-lg font-semibold">Хүргэлтийн мэдээлэл</h3>
              </div>

              <div className="space-y-4">
                {/* District Selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Дүүрэг
                  </label>
                  <select
                    name="district"
                    value={formik.values.district}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BBD3] focus:border-transparent"
                  >
                    <option value="">Дүүрэг сонгоно уу</option>
                    <option value="БЗД">Баянзүрх</option>
                    <option value="СБД">Сүхбаатар</option>
                    <option value="ХУД">Хан-Уул</option>
                    <option value="БГД">Баянгол</option>
                  </select>
                </div>

                {/* Khoroo Selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Хороо
                  </label>
                  <select
                    name="khoroo"
                    value={formik.values.khoroo}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BBD3] focus:border-transparent"
                  >
                    <option value="">Хороо сонгоно уу</option>
                    <option value="1-р хороо">1-р Хороо</option>
                    <option value="2-р хороо">2-р Хороо</option>
                    <option value="3-р хороо">3-р Хороо</option>
                    <option value="4-р хороо">4-р Хороо</option>
                    <option value="5-р хороо">5-р Хороо</option>
                  </select>
                </div>

                {/* Apartment Information */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Хотхон, байрны нэр
                  </label>
                  <textarea
                    name="apartment"
                    value={formik.values.apartment}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BBD3] focus:border-transparent"
                    rows="2"
                    placeholder="Байр хотхоны нэрийг оруулна уу"
                  />
                </div>

                {/* Additional Information */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Нэмэлт мэдээлэл
                  </label>
                  <textarea
                    name="information"
                    value={formik.values.information}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BBD3] focus:border-transparent"
                    rows="3"
                    placeholder="Орц, давхар, орцны код ..."
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Утасны дугаар
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00BBD3] focus:border-transparent"
                    placeholder="Утасны дугаарыг оруулна уу"
                  />
                </div>

                {/* Total and Submit */}
                <div className="pt-6 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Нийт дүн:</span>
                    <span className="text-2xl font-bold text-[#00BBD3]">
                      {parseInt(calculateTotal().toFixed(0)).toLocaleString()}₮
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#00BBD3] text-white rounded-lg hover:bg-[#00A0B4] transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Захиалах
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

[
  { id: 1, quantity: 1 },
  { id: 1, quantity: 1 },
];
