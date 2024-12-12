"use client";
import * as React from "react";

export const Confirmation = () => {
  return (
    <div className="flex w-screen h-screen bg-white justify-center items-center">
      <div className="flex w-[60%] h-[90%] bg-[#E9F6FE] rounded-2xl border-[1px] border-gray-400 gap-3 p-3">
        <div className="w-full h-full flex flex-col border-[1px] border-gray-400 rounded-xl items-center py-4 gap-4">
          <div className="text-zinc-700 font-semibold text-2xl">
            Баталгаажуулах
          </div>
          <div className="w-[95%] h-[8%] bg-white flex justify-between items-center px-4 rounded-lg font-semibold text-base">
            <label for="districts" className="text-stone-700">
              Дүүрэг сонгох
            </label>
            <select
              name="districts"
              id="district"
              className="bg-white text-stone-700"
            >
              <option value="">Баянзүрх</option>
              <option value="saab">Сүхбаатар</option>
              <option value="mercedes">Хан-Уул</option>
              <option value="audi">Баянгол</option>
            </select>
          </div>
          <div className="w-[95%] h-[8%] bg-white flex justify-between items-center px-4 font-semibold rounded-lg text-base">
            <label for="districts" className="text-stone-700 font-semibold">
              Хороо сонгох
            </label>
            <select
              name="districts"
              id="district"
              className="bg-white text-stone-700"
            >
              <option value="">1-р Хороо</option>
              <option value="">2-р Хороо</option>
              <option value="">3-р Хороо</option>
              <option value="">4-р Хороо</option>
              <option value="">5-р Хороо</option>
              <option value="">6-р Хороо</option>
              <option value="">7-р Хороо</option>
              <option value="">8-р Хороо</option>
              <option value="">9-р Хороо</option>
              <option value="">10-р Хороо</option>
              <option value="">11-р Хороо</option>
              <option value="">12-р Хороо</option>
              <option value="">13-р Хороо</option>
              <option value="">14-р Хороо</option>
              <option value="">15-р Хороо</option>
              <option value="">16-р Хороо</option>
              <option value="">17-р Хороо</option>
              <option value="">18-р Хороо</option>
              <option value="">19-р Хороо</option>
              <option value="">20-р Хороо</option>
              <option value="">21-р Хороо</option>
              <option value="">22-р Хороо</option>
              <option value="">23-р Хороо</option>
              <option value="">24-р Хороо</option>
              <option value="">25-р Хороо</option>
              <option value="">26-р Хороо</option>
              <option value="">27-р Хороо</option>
              <option value="">28-р Хороо</option>
            </select>
          </div>
          <div className="w-[95%] h-[8%] text-base my-4 text-stone-700 font-semibold ">
            <p className="py-2">Хотхон, байрны нэр оруулах</p>
            <textarea
              className="bg-white text-stone-700 w-full h-full rounded-lg text-base p-3"
              placeholder="жш: Мандах наран хотхон 123-в"
            ></textarea>
          </div>

          <div className="w-[95%] h-[15%] text-base my-4 text-stone-700 font-semibold ">
            <div className="py-2">Нэмэлт мэдээлэл</div>
            <textarea
              className="bg-white text-stone-700 w-full h-full rounded-lg text-base p-3"
              placeholder="Орц, давхар, орцны код ..."
            ></textarea>
          </div>
          <div className="w-[95%] h-[8%] text-base my-4 text-stone-700 font-semibold ">
            <p className="py-2 ">Утасны дугаар</p>
            <textarea
              className="bg-white text-stone-700 w-full h-full rounded-lg text-base p-3 selection items-center flex"
              placeholder="12345678"
            ></textarea>
          </div>
          <div className=" h-[20%] w-[95%] font-bold flex items-center justify-between">
            <div className="text-[#0b2c3b] flex  text-2xl bg-amber-300 w-[40%] justify-between px-2">
              <div>Нийт төлөх дүн:</div>
              <div>120'600'000₮</div>
            </div>
            <div className="flex w-[35%] items-center justify-between px-2">
              <div className="text-[#0b2c3b] text-base">Төлөх сонголт</div>
            </div>
            <button className="bg-[#26b2b9] w-[12%] h-[40%] text-white rounded-xl text-xl hover:bg-amber-300 hover:text-[#0b2c3b]">
              Захиалах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
