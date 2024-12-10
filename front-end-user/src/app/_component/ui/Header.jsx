import { Basket } from "../svg/Basket";
import { Logo } from "../svg/Logo";

export default function Header() {
  return (
    <div className="w-full h-[50px] flex justify-between items-center bg-[#E9F6FE] px-3">
      <div className="flex gap-2">
        <Logo />
        <p className="font-bold text-2xl text-[#0b2c3b]">Эм хайгч</p>
      </div>
      <div className="flex gap-2">
        <Basket />
        <button className="bg-[#33E4DB] w-[100px] h-[36px] rounded-xl font-bold text-white">
          Нэвтрэх
        </button>
      </div>
    </div>
  );
}
