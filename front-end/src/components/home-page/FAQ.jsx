export default function FAQ() {
  return (
    <>
      <style jsx global>{`
        .gradient-line {
          background: linear-gradient(to right, #33e4db, #00bbd3);
        }

        .faq-collapse {
          transition: all 0.3s ease;
          border: 2px solid transparent;
          background-image: linear-gradient(white, white),
            linear-gradient(to right, #33e4db, #00bbd3);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          border-radius: 0.5rem;
        }

        .faq-collapse:hover {
          box-shadow: 0 4px 12px rgba(51, 228, 219, 0.15);
          transform: translateY(-2px);
        }

        .faq-collapse[open] {
          background-image: linear-gradient(white, white),
            linear-gradient(to bottom right, #33e4db, #00bbd3);
        }

        .collapse-title:after {
          color: #00bbd3;
        }
      `}</style>

      <div className="w-full flex justify-center">
        <div className="w-[800px] flex flex-col gap-4 py-10 justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="font-bold text-2xl text-[#00BBD3]">
              Түгээмэл асуултууд
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="collapse collapse-arrow faq-collapse">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-lg font-bold">
                Захиалга хийхэд болон хүргэлтийн үнэ хэд вэ? Хүргэлт хэр уддаг
                вэ?
              </div>
              <div className="collapse-content">
                <p>
                  Манай захиалга энгийн хүргэлтээр 6 цагын дотор 5000 төгрөгөөр
                  хүргэгдэнэ. Яаралтай 10000 төгрөгний нэмэгдэлтэй 1-2 цагын
                  дотор очино.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow faq-collapse">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-bold">
                Гэр хороолол руу хүргэлт хийдэг үү?
              </div>
              <div className="collapse-content">
                <p>
                  Хийдэг. Гэвч зөвхөн засмал зам дагуу хүргэлт хийх боломжтой
                  бөгөөд гудам руу орохгүй ч зам дээр гарч ирээд авч болно.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow faq-collapse">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-bold">
                Антибиотик хүргэдэг үү?
              </div>
              <div className="collapse-content">
                <p>
                  Бид эмчийн бичсэн жорын дагуу хүргэдэг. Жорын цаасны зургийг
                  явуулах шаардлага хангасан тохиолдолд бид хүргэнэ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
