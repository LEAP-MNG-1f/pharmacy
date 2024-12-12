import { BACKEND_URL } from "@/constants/constants";

export const Products = () => {
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/medicines`);
      const dataMedicines = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white flex w-screen h-screen p-10 flex-wrap gap-">
      <div className="w-[20%] h-[50%] bg-[#e9f6fe] rounded-lg flex flex-col pb-1">
        <div className="p-3 h-[50%] w-full">
          <img
            src="https://back.emonos.mn/media/product/vita-tsair.jpg"
            alt="em"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-full h-[40%] px-3 pb-3">
          <div className="text-[#0b2c3b] font-semibold text-xl w-full h-[60%] bg-amber-400 p-1.5 rounded-lg">
            Витагриф чацарганатай 10ш тэй 20г
          </div>
          <div className="flex gap-2 items-center p-1.5">
            <div className="text-[#0b2c3b] font-semibold text-xl">
              Үлдэгдэл:
            </div>
            <div className="text-[#0b2c3b] text-xl ">1126ш</div>
          </div>
          <div className="flex gap-2 items-center p-1.5">
            <div className="text-[#0b2c3b] font-semibold text-xl">Үнэ:</div>
            <div className="text-[#0b2c3b] text-xl ">8000₮</div>
          </div>
          <div className="flex gap-2 items-center p-1.5">
            <div className="text-[#0b2c3b] font-semibold text-xl">
              Жортой олгох:
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text"></span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-error checkbox-sm"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
