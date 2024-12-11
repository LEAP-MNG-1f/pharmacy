import Link from "next/link";
import { Basket } from "../svg/Basket";
import { Logo } from "../svg/Logo";

export default function Header() {
  return (
    <div className="w-full h-[80px] flex justify-between items-center bg-[#E9F6FE] px-3">
      <div className="flex gap-2">
        <Link href="./" className="flex gap-2">
          <Logo />
          <p className="font-bold text-2xl text-[#0b2c3b]">Pharma</p>
        </Link>
      </div>
      <div className="">
        <label className="input input-bordered h-11 rounded-3xl flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
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
