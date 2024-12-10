export const Orderpage = () => {
  return <div className="flex w-full h-ful bg-white flex-row">
     <div className="w-[50%] h-[1200px]  flex-col items-center  flex  border-[2px] border-solid p-10">
       <div className="flex flex-row  w-[800px] !h-[200px] justify-center items-center bg-slate-100 rounded-lg">
        <div className="flex  p-4 ">
          <img src="https://khurmen.mn/wp-content/uploads/2021/03/ubVista.jpg" alt="" className="object-cover w-[180px] h-[160px] rounded-lg"/>
        </div>
        <div className="flex-col flex gap-3">
          <div className="text-teal-400 font-semibold">Витагриф</div>
          <div className="font-bold">Хүрмэн Эмийн Сан</div>
          <div className="flex flex-row gap-2">
            <p className="text-neutral-600 font-bold">Хаяг: </p>
            <p className="text-neutral-500 font-bold">Энх тайвaны өргөн чөлөө 46, БГД, Гранд плаза, 1 давхар, Улаанбаатар</p>
            </div>
          <div className="flex flex-row gap-3">
            <p className="text-neutral-600 font-bold">Үнэ:</p>
            <p className="font-semibold text-neutral-500">15'000</p>
          </div>
        </div>
       </div>
     </div>
  </div>;
};