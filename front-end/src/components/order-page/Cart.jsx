"use client";
import { useState } from "react";

export const Cart = () => {
  let [count, setCount] = useState(0);
  function Nemeh() {
    count = count + 1;
    setCount(count);
  }
  function Hasah() {
    count = count - 1;
    setCount(count);
  }
  return (
    <div className="flex w-full h-full bg-white justify-center items-center">
      <div className="flex w-[60%] h-[90%] bg-[#E9F6FE] rounded-2xl border-[1px] border-gray-400 gap-3 p-3">
        <div className="w-[50%] h-full flex flex-col border-[1px] border-gray-400 rounded-tl-xl rounded-bl-xl items-center py-4 gap-4">
          <div className="text-zinc-700 font-semibold">Таны сагс</div>
          <div className="w-[95%] h-[17%] bg-white rounded-lg p-2 items-center justify-center ">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-1 items-center">
                <div className="text-stone-700 text-sm font-semibold">
                  Витагриф:
                </div>
                <div className="text-stone-700 text-sm">Хүрмэн Эмийн Сан</div>
              </div>
              <div className="flex text-stone-700 gap-2 items-center">
                <button
                  className="w-4 h-4 justify-center items-center flex  rounded-sm bg-[#26b2b9]"
                  onClick={Nemeh}
                >
                  +
                </button>
                <div>{count}</div>
                <button
                  className="w-4 h-4 justify-center items-center flex rounded-sm bg-[#26b2b9]"
                  onClick={Hasah}
                >
                  -
                </button>
              </div>
            </div>
            <div className="text-stone-700 text-xs">
              Энх тайвaны өргөн чөлөө 46, БГД, Гранд плаза, 1 давхар,
              Улаанбаатар
            </div>
          </div>
          <div className="w-[95%] h-[17%] bg-white rounded-lg p-2 items-center justify-center ">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-1 items-center">
                <div className="text-stone-700 text-sm font-semibold">
                  Витагриф:
                </div>
                <div className="text-stone-700 text-sm">Хүрмэн Эмийн Сан</div>
              </div>
              <div className="flex text-stone-700 gap-2 items-center">
                <button
                  className="w-4 h-4 justify-center items-center flex  rounded-sm bg-[#26b2b9]"
                  onClick={Nemeh}
                >
                  +
                </button>
                <div>{count}</div>
                <button
                  className="w-4 h-4 justify-center items-center flex rounded-sm bg-[#26b2b9]"
                  onClick={Hasah}
                >
                  -
                </button>
              </div>
            </div>
            <div className="text-stone-700 text-xs">
              Энх тайвaны өргөн чөлөө 46, БГД, Гранд плаза, 1 давхар,
              Улаанбаатар
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col border-[1px] border-gray-400 rounded-tr-xl rounded-br-xl items-center py-4 gap-4">
          <div className="text-zinc-700 font-semibold">Баталгаажуулах</div>
          <div className="w-[95%] h-[10%] bg-white flex justify-between items-center px-4 rounded-lg text-sm">
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
          <div className="w-[95%] h-[20%] text-sm text-stone-700 bg-white rounded-t-lg ">
            <p className="p-1 px-4 "> Хаягийн дэлгэрэнгүйг бичнэ үү!</p>
            <input
              type="text"
              className="bg-white text-stone-700 w-full h-full rounded-lg text-sm px-4"
              spaceholder="Хаягийн дэлгэрэнгүйг бичнэ үү!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
