export default function Advice() {
  return (
    <div className="w-full flex justify-center items-center min-h-96">
      <div className="w-[1200px] flex justify-center items-center gap-6">
        <div
          className="card bg-base-100 image-full w-96 shadow-xl"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <figure>
            <img src="/pills.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Эм уухдаа зажлах ёстой юу?</h2>
          </div>
        </div>

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex flex-col items-center justify-center">
            <h3 className="font-bold text-lg">Эм уухдаа зажлах ёстой юу?</h3>
            <img className="w-[364px] h-[217px]" src="/pills.jpg" alt="" />
            <p className="py-4">
              Эмийг зааврын дагуу хэрэглэх хэрэгтэй. Жишээ нь: Та залгиж уух
              заавартай Аспирин кардио гэх эмийг зажлаад уучихлаа. Энэ эм өөрөө
              нарийн гэдсэнд задрах ёстой. Яагаад гэж үү? Ходоодыг үрэвсүүлж,
              шархлуулдаг учраас. Зажлаад уучихаар ходоодны шүүрэлд тэсвэртэй
              бүрхүүл нь аманд механикаар бутлагдаад шууд ходоодонд ороод
              ходоодыг тань цочроодог юм даа. Цаашлаад эмийн шимэгдэлт болон
              үйлчилгээнд сөргөөр нөлөөлнө. Зажилж уух заавартай эм тун цөөхөн
              шүү!
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Хаах</button>
              </form>
            </div>
          </div>
        </dialog>

        <div
          className="card bg-base-100 image-full w-96 h-[262px] shadow-xl"
          onClick={() => document.getElementById("my_modal_6").showModal()}
        >
          <figure>
            <img src="/high.jpeg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Хүүхдийн халуун хэрхэн буулгах вэ?</h2>
          </div>
        </div>
        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex flex-col items-center justify-center">
            <h3 className="font-bold text-lg">Халуун буулгах эмчилгээ</h3>
            <img className="" src="/high.jpeg" alt="" />
            <ul className="py-4">
              Эмийн эмчилгээ
              <li>
                ДЭМБ–ын зөвлөмжийн дагуу биеийн халуун 38,5°C–аас ихэссэн
                тохиолдолд халуун бууруулах эмийг хэрэглэдэг.
              </li>
              <li>
                -Биеийн температур 38°C бага үед эмийн бодис хэрэглэх
                шаардлагагүй.
              </li>
              <li>
                -Парацетамол 10-15мг/кг-аар бодож 6 цагийн зайтай уулгах ба 3
                хоногоос хэтрэхгүй.
              </li>
              <li>
                -Ибупрофен (нурофен) 5-10мг/кг-аар бодож 8 цагаар уулгах, нийт
                3-5 хоног Халуун бууруулах II сонголтын бэлдмэл ба парацетамолд
                буухгүй тохиолдолд хэрэглэнэ.
              </li>
            </ul>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Хаах</button>
              </form>
            </div>
          </div>
        </dialog>

        <div
          className="card bg-base-100 image-full w-96 h-[262px] shadow-xl"
          onClick={() => document.getElementById("my_modal_7").showModal()}
        >
          <figure>
            <img src="/poison.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Хоолны хордлого тайлах арга</h2>
          </div>
        </div>
        <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex flex-col items-center justify-center">
            <h3 className="font-bold text-lg">Хоолны хордлого тайлах арга</h3>
            <img className="" src="/poison.jpg" alt="" />
            <p className="py-4">
            Хэрэв хоолны хордлогын шинж тэмдэг, зовиурууд 48 цагийн дотор зогсохгүй бол эмчид хандахыг зөвлөнө. Хоолны хордлогын үеэр шингэн нөхөх эмчилгээг түлхүү хийх ба, антибиотик хэрэглэж нян бактерийг устгадаг. Харин гэрийн нөхцөлд,

Хэдэн цагийн турш хоол идэхээ зогсоож, зөвхөн ус ууна
Хоросол найруулж ууна /нэг халбага давс, дөрвөн халбага элсэн чихрийг 1л усанд найруулж өдрийн турш бага багаар ууна/
Хоол идэж эхлэхдээ шөл, бантан идэх
Гүйлгэлт зогстол өөх тостой хоол, сүү сүүн бүтээгдэхүүн хэрэглэхгүй байх

            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Хаах</button>
              </form>
            </div>
          </div>
        </dialog>

      </div>
    </div>
  );
}
