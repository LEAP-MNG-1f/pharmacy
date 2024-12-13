export default function FAQ() {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-[800px] flex flex-col gap-4 py-10 justify-center items-center ">
        <div className="flex flex-col items-center gap-2">
          <div className="font-bold  text-3xl">Түгээмэл асуултууд</div>
          <div className="w-[120px] h-[7px] bg-[#33E4DB]"></div>
        </div>

        <div className=" flex flex-col gap-4">
          <div className=" collapse collapse-arrow  border border-[#33E4DB]">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg  font-bold ">
              Захиалга хийхэд болон хүргэлтийн үнэ хэд вэ? Хүргэлт хэр уддаг вэ?
            </div>
            <div className="collapse-content">
              <p>
                Манай захиалга энгийн хүргэлтээр 6 цагын дотор 5000 төгрөгөөр
                хүргэгдэнэ. Яаралтай 10000 төгрөгний нэмэгдэлтэй 1-2 цагын дотор
                очино.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border  border-[#33E4DB]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-bold">
              Гэр хороолол руу хүргэлт хийдэг үү?
            </div>
            <div className="collapse-content ">
              <p>
                Хийдэг. Гэвч зөвхөн засмал зам дагуу хүргэлт хийх боломжтой
                бөгөөд гудам руу орохгүй ч зам дээр гарч ирээд авч болно.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border  border-[#33E4DB]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-bold ">
              Антибиотик хүргэдэг үү?
            </div>
            <div className="collapse-content ">
              <p className="">
                Бид эмчийн бичсэн жорын дагуу хүргэдэг. Жорын цаасны зургийг
                явуулах шаардлага хангасан тохиолдолд бид хүргэнэ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
