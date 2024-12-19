export default function FAQ() {
  return (
    <div className="bg-[#edece9]">
      <div className=" w-screen flex justify-center ">
        <div className=" flex-col gap-4 py-10 w-[820px] flex justify-between items-center ">
          <div className="flex flex-col items-center gap-2">
            <div className="font-black text-2xl text-[#242321]">
              Түгээмэл асуултууд
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full ">
            <div className="collapse collapse-arrow faq-collapse drop-shadow-2xl ">
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
    </div>
  );
}
