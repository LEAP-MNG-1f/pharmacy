export const ProductList = () => {
  return (
    <div className="flex w-full h-full bg-white flex-row">
      <div className="flex flex-row  w-[90%] !h-[200px] justify-center items-center bg-[#e9f6fe] rounded-xl  hover:bg-[#deedf7] ">
        <div className="flex  p-4 ">
          <img
            src="https://khurmen.mn/wp-content/uploads/2021/03/ubVista.jpg"
            alt=""
            className="object-cover w-[180px] h-[160px] rounded-lg"
          />
        </div>
        <div className="flex-col flex gap-1 p-3">
          <div className="text-stone-700  font-semibold">Витагриф</div>
          <div
            className="relative text-[#26b2b9] hover:text-red-700 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] font-semibold
  "
          >
            Хүрмэн Эмийн Сан
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-stone-700 font-medium">Хаяг: </p>
            <p className="text-stone-700 font-medium">
              Энх тайвaны өргөн чөлөө 46, БГД, Гранд плаза, 1 давхар,
              Улаанбаатар
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="w-[50%]">
              <div className="flex flex-row gap-3">
                <p className="text-stone-700 font-medium">Үнэ:</p>
                <p className="font-medium text-stone-700">15'000</p>
              </div>
              <div className="flex flex-row gap-3">
                <p className="text-stone-700 font-medium">Үлдэгдэл:</p>
                <p className=" font-semibold text-[#26b2b9]">1189ш</p>
              </div>
            </div>
            <div className="w-[50%] flex items-end justify-center">
              <button className="font-bold w-20 h-8 bg-[#26b2b9] rounded-xl hover: ">
                Сагслах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
