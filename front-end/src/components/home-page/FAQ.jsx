export default function FAQ() {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-[1200px] flex flex-col gap-4 p-4 justify-center items-center">
        <div className="font-bold text-3xl">Түгээмэл асуултууд</div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
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
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Гэр хороолол руу хүргэлт хийдэг үү?
          </div>
          <div className="collapse-content">
            <p>
              Хийдэг. Гэвч зөвхөн засмал зам дагуу хүргэлт хийх боломжтой бөгөөд
              гудам руу орохгүй ч зам дээр гарч ирээд авч болно.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
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
  );
}