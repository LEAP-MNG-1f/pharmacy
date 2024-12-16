"use client";
export default function AboutUs() {
  return (
    <>
      <style jsx global>{`
        .about-header {
          background: linear-gradient(to right, #33e4db, #00bbd3);
        }

        .content-section {
          transition: all 0.3s ease;
          padding: 2rem 0;
        }

        .section-title {
          color: #00bbd3;
          margin-bottom: 1rem;
        }

        .section-image {
          width: 400px;
          height: 300px;
          border-radius: 1rem;
          overflow: hidden;
        }

        .section-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full about-header items-center h-[100px] flex justify-center mb-8">
          <p className="font-bold text-4xl text-white">Бидний Тухай</p>
        </div>

        <div className="w-[1200px] py-8 flex flex-col gap-6">
          <div className="content-section flex gap-12 items-center">
            <div className="section-image">
              <img src="/aboutus.jpg" alt="" />
            </div>
            <div className="flex-1">
              <p className="section-title font-bold text-2xl">Бидний тухай</p>
              <p className="text-gray-700 leading-relaxed">
                Pharma нь 2019 онд байгуулагдсан бөгөөд эрүүл мэндийн салбарт
                олон жилийн туршлагатай, чанартай бүтээгдэхүүн, үйлчилгээг
                үзүүлэхээр зорьж ажиллаж байна. Манай эмийн сан нь
                үйлчлүүлэгчдэдээ эм, эмнэлгийн хэрэгслийг нийлүүлэхээс гадна,
                эрүүл мэндийн зөвлөгөө, эмчилгээний дэмжлэг үзүүлэхээр мэргэшсэн
                мэргэжилтнүүдтэй ажилладаг.
              </p>
            </div>
          </div>
          <div className="content-section flex gap-12 items-center">
            <div className="flex-1">
              <p className="section-title font-bold text-2xl">Манай зорилго:</p>
              <p className="text-gray-700 leading-relaxed">
                Манай эмийн сан нь хэрэглэгчийн эрүүл мэндийг дээдэлж, эмнэлгийн
                үйлчилгээ, эмийн хэрэгслийг шинжлэх ухааны үндэслэлтэй,
                мэргэжлийн түвшинд үзүүлэхийг зорьдог. Бидний хамгийн том
                зорилго бол таны амьдралыг сайжруулахад чиглэсэн эрүүл мэндийн
                шийдлүүдийг санал болгох юм.
              </p>
            </div>
            <div className="section-image">
              <img src="/lab.webp" alt="" />
            </div>
          </div>
          <div className="content-section flex gap-12 items-center">
            <div className="section-image">
              <img src="/growth.jpg" alt="" />
            </div>
            <div className="flex-1">
              <p className="section-title font-bold text-2xl">Үнэт зүйлс:</p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>
                  Чанар - Бид зөвхөн баталгаатай, чанартай эм, эмнэлгийн
                  хэрэгслийг нийлүүлдэг.
                </li>
                <li>
                  Итгэлцэл - Үйлчлүүлэгчдийнхээ эрүүл мэндийг эрхэмлэж, тэдний
                  итгэлийг хүндэтгэн ажилладаг.
                </li>
                <li>
                  Мэргэжлийн ур чадвар - Манай багийн гишүүд нь өндөр
                  боловсролтой, мэргэжлийн туршлагатай эмч, эм зүйч, эмнэлгийн
                  ажилтнуудаас бүрдсэн.
                </li>
                <li>
                  Хариуцлагатай хандлага - Бид үйлчлүүлэгчиддээ зөвлөгөө өгөх,
                  хариуцлагатай үйлчилгээ үзүүлэхэд анхаардаг.
                </li>
                <li>
                  Шинэлэг байдал - Эм, эмнэлгийн технологийн шинэ шийдлүүдийг
                  үргэлж судалж, үйлчлүүлэгчиддээ хамгийн орчин үеийн үйлчилгээ
                  үзүүлэхийг эрмэлздэг.
                </li>
              </ol>
            </div>
          </div>
          <div className="content-section flex gap-12 items-center">
            <div className="flex-1">
              <p className="section-title font-bold text-2xl">
                Таны Эрүүл Мэндийн Шийдэл Бидэнтэй:
              </p>
              <p className="text-gray-700 leading-relaxed">
                Бид Pharma-т бүх төрлийн эм, эмнэлгийн хэрэгслийг нийлүүлэхээс
                гадна үйлчлүүлэгчдэдээ зөвлөгөө өгөх, мэргэжлийн эмч нарын
                дэмжлэгийг үзүүлэх үйлчилгээ үзүүлдэг. Та манай эмийн сангаар
                үйлчлүүлснээр эрүүл мэндээ бүрэн шийдэж, зөв эмчилгээнд
                хамрагдах боломжтой.
              </p>
            </div>
            <div className="section-image">
              <img src="/health.jpeg" alt="" />
            </div>
          </div>

          <p className="text-center font-bold text-xl text-[#00BBD3]">
            Манай хамт олон таны эрүүл мэндийн асуудлыг шийдэхэд туслахад бэлэн
            байна!
          </p>
        </div>
      </div>
    </>
  );
}
