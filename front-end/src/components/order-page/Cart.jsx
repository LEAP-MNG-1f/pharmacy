"use client";
import { useEffect, useState } from "react";
import { useDataContext } from "../context/dataContext";
import { useFormik } from "formik";
import { BACKEND_URL } from "../../../constant/constant";

export const Cart = () => {
  const [spaceImage, setSpaceImage] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const [quantities, setQuantities] = useState({});
  const [parsedData, setParsedData] = useState([]);
  // const [yagIdArray, setYagIdArray] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("sags");
    if (data) {
      const parsed = JSON.parse(data);
      setParsedData(parsed);
      // const idArray = parsed?.map((parse) => parse?._id);
      // setYagIdArray(idArray || []);
    } else {
      console.log("No data found in localStorage for the key 'sags'.");
    }
  }, []);

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
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      const medicineIds = parsedData?.map((item) => item?._id);

      formData.append("userId", values.userId);
      // formData.append("orderNumber", toString(values.orderNumber));
      formData.append("medicineIds", JSON.stringify(medicineIds));
      formData.append(
        "totalPrice",
        calculateTotal().toFixed(0).toLocaleString()
      );
      formData.append("district", values.district);
      formData.append("khoroo", values.khoroo);
      formData.append("apartment", values.apartment);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("information", values.information);
      formData.append("paymentType", values.paymentType || "Card");

      if (spaceImage.image) {
        formData.append("image_jor", spaceImage.image);
      }

      try {
        const response = await fetch(`${BACKEND_URL}/api/orders`, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        console.log(data);
        if (data?.success) {
          localStorage.removeItem("sags");
          alert("Zahialga amjilttai bolloo");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-[1200px]  bg-white justify-center items-start py-4 px-2 sm:py-6 gap-[50px]"
    >
      <div className=" w-[50%] h-[60%] overflow-auto flex flex-col items-center rounded-2xl border border-gray-400 gap-3 p-4 sm:p-6">
        <h2 className="text-zinc-700 text-2xl font-semibold mb-4">Таны сагс</h2>

        <div className="w-full h-[500px] overflow-auto flex flex-col gap-4">
          {parsedData?.map((medicine) => {
            const piecePrice = calculatePiecePrice(medicine.price);
            const itemTotal = calculateItemTotal(medicine);

            return (
              <div
                key={medicine?._id}
                className="w-[500px] overflow-auto bg-[#00BBD3] rounded-lg p-4 flex flex-col justify-between transform transition-transform hover:scale-105"
              >
                <div className="flex flex-col gap-1 p-2">
                  <h3 className="text-white font-bold text-lg sm:text-xl break-words">
                    Эмийн нэр: {medicine?.name}
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
                    Ширхэгийн үнэ: {(medicine?.price / 10).toLocaleString()}₮
                  </p>

                  <p className="text-white text-xs sm:text-sm">
                    Хүргэгдэх эмийн сангийн хаяг: {medicine?.location}
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
          <div className="w-full p-4 border border-dashed border-gray-400 bg-gray-50 rounded-lg">
            <input
              type="file"
              id="uploadFile1"
              name="uploadFile1"
              // className="hidden"
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
          {/* <button
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
          </button> */}
        </div>
      </div>
      <div className="flex w-[50%] h-[60%] bg-[#E9F6FE] rounded-2xl border-[1px] border-gray-400 gap-2 p-3">
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
              <div>{calculateTotal().toFixed(0).toLocaleString()}</div>
            </div>

            <button
              className="bg-[#00BBD3] w-[12%] h-[40%] text-white rounded-xl textarea-md p-1 justify-center items-center hover:bg-amber-300 hover:text-[#0b2c3b]"
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
