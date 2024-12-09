export const Orderpage = () => {
  return <div className="flex w-full h-ful bg-white flex-row">
     <div className="w-[50%] h-full p-2 flex-col items-start">
       <div className="fle-col !w-[200px] !h-[100px] justify-center items-center bg-white rounded-lg">
        <div className="flex w-[50%]">
          <img src="https://khurmen.mn/wp-content/uploads/2021/03/ubVista.jpg" alt="" />
        </div>
        <div className="flex-col">
          <div>Витагриф</div>
          <div>Хүрмэн Эмийн Сан</div>
          <div className="flex flex-row">
            <p>Хаяг</p>
            <p>Энх тайвaны өргөн чөлөө 46, БГД, Гранд плаза, 1 давхар, Улаанбаатар</p>
            </div>
          <div className="flex flex-row">
            <p>Үнэ</p>
            <p>15'000.</p>
          </div>
        </div>
       </div>
     </div>
  </div>;
};
