export default function Collab() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-7 gap-7 ">
      <p className="font-bold text-lg text-[#00BBD3]">
        Хамтрагч байгууллагууд:
      </p>
      <div className="w-[600px]  grid grid-cols-4 gap-4">
        <img src="/monos.jpg" alt="" className="w-[100px] h-[100px]" />
        <img src="/cityfarm.jpg" alt="" className="w-[100px] h-[100px]" />
        <img src="/khurmen.png" alt="" className="w-[100px] h-[100px]" />
        <img src="/mago.jpg" alt="" className="w-[100px] h-[100px]" />
        <img src="/monfa.jpg" alt="" className="w-[100px] h-[100px]" />
        <img src="/tavinus.jpg" alt="" className="w-[100px] h-[100px]" />
        <img src="/zuun.jpg" alt="" className="w-[100px] h-[100px]" />
        <img src="/tsahildag.jpg" alt="" className="w-[100px] h-[100px]" />
      </div>
    </div>
  );
}
