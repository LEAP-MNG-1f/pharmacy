"use client";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { BACKEND_URL } from "../../../constant/constant";
import OrderPage from "../pages/OrderPage";

export const Cart = () => {
  const [spaceImage, setSpaceImage] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const [quantities, setQuantities] = useState({});
  const [parsedData, setParsedData] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const CLOUDINARY_UPLOAD_PRESET = "pharmacy_preset";
  const CLOUDINARY_CLOUD_NAME = "dvsck0zho";

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
      userId: "6756f77fd78e8837a652da17",
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
        userId: values.userId,
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
          localStorage.removeItem("sags");
          formik.resetForm(); // Reset form fields to initial values
          setQuantities({}); // Reset quantities state
          setImagePreview(null); // Clear the image preview state
          alert("Захиалга амжилттай боллоо");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col w-full  bg-white justify-center items-center py-4 px-2 sm:py-6 gap-[50px]"
    >
      <div className="w-[1200px] h-full overflow-auto flex flex-col items-center rounded-2xl border border-gray-[] gap-3 p-4 sm:p-6">
        <h2 className="text-zinc-700 text-2xl font-semibold mb-4">Таны сагс</h2>

        <div className="w-full h-full overflow-auto  grid grid-cols-3 gap-4">
          {parsedData?.map((medicine) => {
            const piecePrice = calculatePiecePrice(medicine.price);
            const itemTotal = calculateItemTotal(medicine);

            return (
              <div
                key={medicine?._id}
                className="w-[350px] h-[320px] overflow-auto bg-[#00BBD3] rounded-lg p-4 flex flex-col justify-between transform transition-transform hover:scale-95"
              >
                <div className="flex flex-col gap-1 p-2">
                  <div className="bg-white rounded-xl p-1">
                    <h3 className="text-[#00BBD3] font-bold text-lg sm:text-xl break-words">
                      Эмийн нэр: {medicine?.name}
                    </h3>
                  </div>

                  <p className="text-white font-bold text-sm sm:text-base">
                    Хайрцгийн үнэ: {medicine?.price.toLocaleString()}₮
                  </p>

                  <p
                    className={`text-white font-semibold text-sm sm:text-base ${
                      medicine?.categoryName !== "Жортой" ? "hidden" : "flex"
                    }`}
                  >
                    Ширхэгийн үнэ: {(medicine?.price / 10).toLocaleString()}₮
                  </p>

                  <div className="text-white text-xs sm:text-sm">
                    <p className="font-bold">Хүргэгдэх эмийн сангийн хаяг:</p>
                    {medicine?.location}
                  </div>
                  <p className="text-white font-bold text-xs sm:text-sm">
                    Эмийн төрөл: {medicine?.categoryName}
                  </p>

                  <div className="mt-2 flex gap-[10px]">
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
                      Нийт дүн:{" "}
                      {parseInt(itemTotal.toFixed(0)).toLocaleString()}₮
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="w-full p-4 border border-dashed border-gray-400 bg-gray-50 rounded-lg">
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
          )} */}
        </div>

        <div className="w-full max-w-md mt-6 sm:mt-8">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <span className="text-base sm:text-lg font-semibold">
                Нийт дүн:
              </span>
              <div className="text-lg sm:text-xl font-bold text-[#00BBD3]">
                {calculateTotal()
                  .toFixed(0)
                  .toLocaleString()
                  .replace(/,/g, "'")}
                ₮
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-md"></div>
      </div>
      <div className="w-[500px]">
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
            className="block w-full py-3 text-center rounded-lg bg-[#00BBD3] text-white font-bold cursor-pointer hover:bg-[#2ca4b4] transition-colors"
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
      </div>

      <div className="flex w-[1200px] h-[60%] bg-[#E9F6FE] rounded-2xl border-[1px] border-gray-400 gap-2 p-3">
        <div className="w-full h-full flex flex-col rounded-xl items-center py-4">
          <div className="text-zinc-700 font-semibold text-2xl pb-2">
            Баталгаажуулах
          </div>
          <div className="w-[95%] h-[40px] my-2 bg-white flex justify-between items-center px-4 rounded-lg font-semibold text-base">
            <label
              htmlFor="districts"
              className="text-stone-700 h-full items-center justify-center flex"
            >
              Дүүрэг сонгох
            </label>
            <select
              name="district"
              className="bg-white text-stone-700"
              value={formik.values.district}
              onChange={formik.handleChange}
            >
              <option value="">Дүүрэг сонгоно уу</option>
              <option value="БЗД">Баянзүрх</option>
              <option value="СБД">Сүхбаатар</option>
              <option value="ХУД">Хан-Уул</option>
              <option value="БГД">Баянгол</option>
            </select>
          </div>
          <div className="w-[95%] h-[40px] my-2 bg-white flex justify-between items-center px-4 font-semibold rounded-lg text-base">
            <label
              htmlFor="districts"
              className="text-stone-700 font-semibold h-full  items-center justify-center flex"
            >
              Хороо сонгох
            </label>
            <select
              name="khoroo"
              className="bg-white text-stone-700"
              value={formik.values.khoroo}
              onChange={formik.handleChange}
            >
              <option value="">Хороо сонгоно уу</option>
              <option value="1-р хороо">1-р Хороо</option>
              <option value="2-р хороо">2-р Хороо</option>
              <option value="3-р хороо">3-р Хороо</option>
              <option value="4-р хороо">4-р Хороо</option>
              <option value="5ы-р хороо">5-р Хороо</option>
            </select>
          </div>
          <div className="w-[95%] h-[8%] text-base  text-stone-700 font-semibold my-2">
            <p className="py-2">Хотхон, байрны нэр оруулах</p>
            <textarea
              name="apartment"
              value={formik.values.apartment}
              onChange={formik.handleChange}
              className="bg-white text-stone-700 w-full h-full rounded-lg text-base p-3"
              placeholder="Байр хотхоны нэрийг оруулна уу"
            ></textarea>
          </div>

          <div className="w-[95%] h-[15%] text-base  text-stone-700 font-semibold ">
            <div className="py-2">Нэмэлт мэдээлэл</div>
            <textarea
              name="information"
              value={formik.values.information}
              onChange={formik.handleChange}
              className="bg-white text-stone-700 w-full h-full rounded-lg text-base p-3"
              placeholder="Орц, давхар, орцны код ..."
            ></textarea>
          </div>
          <div className="w-[95%] h-[8%] text-base  text-stone-700 font-semibold ">
            <p className="py-2 ">Утасны дугаар</p>
            <textarea
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              className="bg-white text-stone-700 w-full h-full rounded-lg text-base p-3 selection items-center flex"
              placeholder="Утасны дугаарыг оруулна уу"
            ></textarea>
          </div>
          <div className=" h-[20%] w-[95%] font-bold flex items-center justify-between my-3">
            <div className="text-white flex text-lg bg-[#00BBD3] p-2 rounded-xl w-[40%] justify-between px-2">
              <div>Нийт төлөх дүн:</div>
              <div>{formatPrice(calculateTotal().toFixed(0))}₮</div>
            </div>

            <button
              className="bg-[#00BBD3] w-[12%] h-[40%] text-white rounded-xl textarea-md p-1 justify-center items-center hover:bg-[#2ca4b4]"
              type="submit"
            >
              Захиалах
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

[
  { id: 1, quantity: 1 },
  { id: 1, quantity: 1 },
];
