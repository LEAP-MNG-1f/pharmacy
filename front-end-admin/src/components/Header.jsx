import Link from "next/link";
import { Logo } from "@/svg/Logo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
export default function Header() {
  return (
    <div className="w-full h-[80px] flex justify-between items-center bg-[#E9F6FE] px-4">
      <div className="flex gap-2">
        <Logo />
        <p className="font-bold text-2xl text-[#0b2c3b]">Pharma</p>
      </div>
      <div className="flex w-[28%] justify-between">
        <Link href="/">
          <div className="text-[#26b2b9] flex text-xl justify-center items-center">
            <AddBoxIcon sx={{ width: 35, height: 35 }} />
            <div className="font-bold text-lg">Бүтээгдэхүүн</div>
          </div>
        </Link>
        <Link href="/order">
          <div className="text-[#26b2b9] flex text-xl justify-center items-center">
            <ViewListIcon sx={{ width: 35, height: 35 }} />
            <div className="font-bold text-lg">Захиалгууд</div>
          </div>
        </Link>

        <button className="text-[#26b2b9] flex text-xl justify-center items-center">
          <AccountCircleIcon sx={{ width: 35, height: 35 }} />
          <div className="font-bold text-lg">Хэрэглэгч</div>
        </button>
      </div>
    </div>
  );
}
