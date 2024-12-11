export const Confirmation =()=>{
    return(
        <div className="flex w-screen h-screen bg-white justify-center items-center">
         <div className="flex w-[60%] h-[90%] bg-[#E9F6FE] rounded-2xl border-[1px] border-gray-400 gap-3 p-3">
        <div className="w-full h-full flex flex-col border-[1px] border-gray-400 rounded-xl items-center py-4 gap-4">
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
}

 
