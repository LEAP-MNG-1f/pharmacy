import React from "react";

const FAQ = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#00BBD3]">
            Түгээмэл асуултууд
          </h2>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {/* FAQ Item 1 */}
          <details className="group border border-[#e2e8f0] rounded-lg hover:border-[#cbd5e1] transition-all duration-200 bg-white">
            <summary className="flex justify-between items-center cursor-pointer p-4 marker:content-none">
              <h3 className="text-lg font-semibold text-[#1e293b]">
                Захиалга хийхэд болон хүргэлтийн үнэ хэд вэ? Хүргэлт хэр уддаг
                вэ?
              </h3>
              <span className="transition-transform duration-200 group-open:rotate-180">
                <svg
                  className="h-5 w-5 text-[#2d3e50] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
                Манай захиалга энгийн хүргэлтээр 6 цагын дотор 5000 төгрөгөөр
                хүргэгдэнэ. Яаралтай 10000 төгрөгний нэмэгдэлтэй 1-2 цагын дотор
                очино.
              </p>
            </div>
          </details>

          {/* FAQ Item 2 */}
          <details className="group border border-[#e2e8f0] rounded-lg hover:border-[#cbd5e1] transition-all duration-200 bg-white">
            <summary className="flex justify-between items-center cursor-pointer p-4 marker:content-none">
              <h3 className="text-lg font-semibold text-[#1e293b]">
                Гэр хороолол руу хүргэлт хийдэг үү?
              </h3>
              <span className="transition-transform duration-200 group-open:rotate-180">
                <svg
                  className="h-5 w-5 text-[#2d3e50] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
                Хийдэг. Гэвч зөвхөн засмал зам дагуу хүргэлт хийх боломжтой
                бөгөөд гудам руу орохгүй ч зам дээр гарч ирээд авч болно.
              </p>
            </div>
          </details>

          {/* FAQ Item 3 */}
          <details className="group border border-[#e2e8f0] rounded-lg hover:border-[#cbd5e1] transition-all duration-200 bg-white">
            <summary className="flex justify-between items-center cursor-pointer p-4 marker:content-none">
              <h3 className="text-lg font-semibold text-[#1e293b]">
                Антибиотик хүргэдэг үү?
              </h3>
              <span className="transition-transform duration-200 group-open:rotate-180">
                <svg
                  className="h-5 w-5 text-[#2d3e50] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
                Бид эмчийн бичсэн жорын дагуу хүргэдэг. Жорын цаасны зургийг
                явуулах шаардлага хангасан тохиолдолд бид хүргэнэ.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
