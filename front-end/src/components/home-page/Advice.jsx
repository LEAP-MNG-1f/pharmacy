import React, { useState, useEffect } from "react";

const AdviceCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      id: "my_modal_5",
      title: "Эм уухдаа зажлах ёстой юу?",
      image: "/pills.jpg",
      modalTitle: "Эм уухдаа зажлах ёстой юу?",
      content:
        "Эмийг зааврын дагуу хэрэглэх хэрэгтэй. Жишээ нь: Та залгиж уух заавартай Аспирин кардио гэх эмийг зажлаад уучихлаа. Энэ эм өөрөө нарийн гэдсэнд задрах ёстой. Яагаад гэж үү? Ходоодыг үрэвсүүлж, шархлуулдаг учраас. Зажлаад уучихаар ходоодны шүүрэлд тэсвэртэй бүрхүүл нь аманд механикаар бутлагдаад шууд ходоодонд ороод ходоодыг тань цочроодог юм даа. Цаашлаад эмийн шимэгдэлт болон үйлчилгээнд сөргөөр нөлөөлнө. Зажилж уух заавартай эм тун цөөхөн шүү!",
    },
    {
      id: "my_modal_6",
      title: "Хүүхдийн халуун хэрхэн буулгах вэ?",
      image: "/high.jpeg",
      modalTitle: "Халуун буулгах эмчилгээ",
      content: `
        Эмийн эмчилгээ
        • ДЭМБ–ын зөвлөмжийн дагуу биеийн халуун 38,5°C–аас ихэссэн тохиолдолд халуун бууруулах эмийг хэрэглэдэг.
        • Биеийн температур 38°C бага үед эмийн бодис хэрэглэх шаардлагагүй.
        • Парацетамол 10-15мг/кг-аар бодож 6 цагийн зайтай уулгах ба 3 хоногоос хэтрэхгүй.
        • Ибупрофен (нурофен) 5-10мг/кг-аар бодож 8 цагаар уулгах, нийт 3-5 хоног Халуун бууруулах II сонголтын бэлдмэл ба парацетамолд буухгүй тохиолдолд хэрэглэнэ.
      `,
    },
    {
      id: "my_modal_7",
      title: "Хоолны хордлого тайлах арга",
      image: "/poison.jpg",
      modalTitle: "Хоолны хордлого тайлах арга",
      content:
        "Хэрэв хоолны хордлогын шинж тэмдэг, зовиурууд 48 цагийн дотор зогсохгүй бол эмчид хандахыг зөвлөнө. Хоолны хордлогын үеэр шингэн нөхөх эмчилгээг түлхүү хийх ба, антибиотик хэрэглэж нян бактерийг устгадаг. Харин гэрийн нөхцөлд, Хэдэн цагийн турш хоол идэхээ зогсоож, зөвхөн ус ууна Хоросол найруулж ууна /нэг халбага давс, дөрвөн халбага элсэн чихрийг 1л усанд найруулж өдрийн турш бага багаар ууна/ Хоол идэж эхлэхдээ шөл, бантан идэх Гүйлгэлт зогстол өөх тостой хоол, сүү сүүн бүтээгдэхүүн хэрэглэхгүй байх",
    },
    {
      id: "my_modal_8",
      title: "Хий ханиалгаас сэргийлэх",
      image: "/cought.jpg",
      modalTitle: "Хий ханиалгаас сэргийлэх",
      content:
        "Цаг улиралдаа тохируулан хооллох, Ажил амралтаа зохицуулах, хангалттай унтаж амрах,Гараа байнга угаах, ханиаж найтаахдаа нэг удаагийн цаасан алчуураар амаа таглах, Өрөө тасалгаагаа агааржуулах, гэртээ байнга чийгтэй цэвэрлэгээ хийх",
    },
    {
      id: "my_modal_9",
      title: "Нүдний ядаргааг тайлах",
      image: "eye.jpg",
      modalTitle: "Нүдний ядаргааг тайлах",
      content: `1. 20-20-20 дүрэм: 20 минут тутамд 20 секундын турш 20 метрийн зайд харах. 
        2. Нүдээ байнга анивчих. 
        3. Нүдний дасгал хийх: дээш, доош, баруун, зүүн тийш харах. 
        4. А витамин агуулсан хүнс хэрэглэх. 
        5. Компьютерын дэлгэцнээс 50-70см-ийн зайд суух. 
        6. Тохиромжтой гэрэлтүүлэгтэй байх.`,
    },
    {
      id: "my_modal_10",
      title: "Стрессээс сэргийлэх",
      image: "stress.jpeg",
      modalTitle: "Стрессээс сэргийлэх аргууд",
      content: `1. Тогтмол дасгал хийх. 
      2. Хангалттай унтаж амрах (7-8 цаг). 
      3. Гүн амьсгалын дасгал хийх. 
      4. Сөрөг бодлоос зайлсхийх. 
      5. Найз нөхөд, гэр бүлтэйгээ цагийг зөв өнгөрөөх. 
      6. Тайвшруулах хөгжим сонсох. 
      7. Өөрийн цагийг зөв төлөвлөх.`,
    },
    {
      id: "my_modal_11",
      title: "Зүрх судасны эрүүл мэнд",
      image: "heart.jpg",
      modalTitle: "Зүрх судасны эрүүл мэндийг хамгаалах",
      content: `1. Өдөрт 30 минут дасгал хийх. 
        2. Давс, өөх тос багатай хооллох. 
        3. Жимс, ногоо их хэрэглэх. 
        4. Тамхи татахгүй байх. 
        5. Биеийн жингээ хянах. 
        6. Стрессээс зайлсхийх. 
        7. Цусны даралтаа тогтмол хянах. 
        8. Сайн чанарын нойр авах.`,
    },
    {
      id: "my_modal_12",
      title: "Өвлийн улиралд дархлаа дэмжих",
      image: "winter.jpg",
      modalTitle: "Өвлийн улиралд дархлаа дэмжих аргууд",
      content: `1. С витамин ихтэй жимс, ногоо хэрэглэх. 
        2. Дулаан хувцаслах. 
        3. Гараа тогтмол угаах. 
        4. Өдөрт 2-3 литр ус уух. 
        5. Агааржуулалт сайтай байх. 
        6. Дасгал хөдөлгөөн хийх.
        7. Витамин D-г хангалттай авах. 
        8. Халуун цай их уух.`,
    },
    {
      id: "my_modal_13",
      title: "Нуруу суултаас сэргийлэх",
      image: "spine.jpg",
      modalTitle: "Нуруу суултаас сэргийлэх аргууд",
      content: `1. Зөв байрлалаар суух. 
        2. Хүнд юм өргөхдөө өвдөг нугалж, нуруугаар биш хөлөөрөө түшиж өргөх. 
        3. Нурууны дасгал хийх. 
        4. Зөв матрас, дэр хэрэглэх. 
        5. Биеийн жингээ хэвийн хэмжээнд барих. 
        6. Өндөр өсгийтэй гутал байнга өмсөхгүй байх. 
        7. Ажлын ширээний сандлаа зөв сонгох.`,
    },
  ];
  useEffect(() => {
    const maxSlides = Math.max(0, cards.length - 2);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        return nextSlide >= maxSlides ? 0 : nextSlide;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style jsx global>{`
        .card.bg-base-100.image-full:before {
          background-color: rgba(0, 0, 0, 0.3) !important;
        }

        .card.bg-base-100.image-full:hover:before {
          background-color: rgba(0, 0, 0, 0.4) !important;
        }

        .card-title-container {
          background-color: rgba(0, 187, 211, 0.7);
          padding: 0.75rem;
          border-radius: 1rem;
          margin-top: auto;
          backdrop-filter: blur(2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .card:hover .card-title-container {
          background-color: rgba(0, 187, 211, 0.85);
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .modal-box {
          padding: 10px !important;
        }

        .modal-content {
          padding: 24px;
          max-height: 100vh;
          overflow-y: auto;
          background-color: white;
          scrollbar-width: thin; /* For Firefox */
          scrollbar-color: #00bbd3 #f1f1f1; /* For Firefox */
        }

        .modal-content::-webkit-scrollbar {
          width: 8px !important;
          background-color: #f1f1f1 !important;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background-color: #00bbd3 !important;
          border-radius: 4px !important;
        }

        .modal-content::-webkit-scrollbar-track {
          background-color: #f1f1f1 !important;
          border-radius: 4px !important;
        }

        .gradient-btn {
          background: linear-gradient(to right, #33e4db, #00bbd3) !important;
          color: white !important;
          border: none !important;
          transition: all 0.3s ease !important;
        }

        .gradient-btn:hover {
          background: linear-gradient(to left, #33e4db, #00bbd3) !important;
          transform: translateY(-1px);
        }
      `}</style>

      <div className=" min-h-80  items-center overflow-hidden container  flex justify-center ">
        <div className="relative container mx-auto px-4 justify-between items-center">
          <div
            className="flex gap-4 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="min-w-[calc(33.33%-1rem)] flex-shrink-0"
              >
                <div
                  className="card bg-base-100 image-full shadow-xl cursor-pointer h-64"
                  onClick={() => document.getElementById(card.id).showModal()}
                >
                  <figure>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="card-body flex items-end justify-center p-6">
                    <div className="card-title-container w-full transform transition-all duration-300 hover:scale-105">
                      <h2 className="card-title text-white text-sm md:text-base justify-center">
                        {card.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <dialog
                  id={card.id}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box flex flex-col items-center justify-center max-w-xl">
                    <div className="modal-content w-full p-10 custom-scrollbar">
                      <h3 className="font-bold text-lg text-[#00BBD3]">
                        {card.modalTitle}
                      </h3>
                      <img
                        className="w-full max-w-md h-auto object-cover my-4 rounded-lg"
                        src={card.image}
                        alt=""
                      />
                      <p className=" text-left whitespace-pre-line">
                        {card.content}
                      </p>
                      <div className="modal-action flex justify-center ">
                        <form method="dialog">
                          <button className="btn gradient-btn">Хаах</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            ))}
          </div>

          <div className="absolute container -bottom-6 left-0 right-0 flex justify-center gap-2">
            {[...Array(cards.length - 2)].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-[#00BBD3]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdviceCarousel;
