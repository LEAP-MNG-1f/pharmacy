import Link from "next/link";
import { FacebookIcon } from "../svg/FacebookIcon";
import { InstaIcon } from "../svg/InstaIcon";
import { Logo } from "../svg/Logo";
import { MapIcon } from "../svg/Map";

export default function Footer() {
  return (
    <div className="w-full bg-[#E9F6FE] h-[250px]  items-center flex flex-col justify-between py-7">
      <div>
        <div className="flex gap-[900px] items-center">
          <div className="flex gap-2">
            <Link href="./" className="flex items-center justify-center gap-2">
              <Logo />
              <p className="font-bold text-2xl text-[#0b2c3b]">Pharma</p>
            </Link>
          </div>
          <div className="flex gap-2 p-3">
            <a href="https://www.facebook.com/monosemiinsan/">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/aloebrand_monos/">
              <InstaIcon />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Link href="./">
            <p className="font-bold text-[#0b2c3b] hover:text-[#33E4DB]">
              Нүүр хуудас
            </p>
          </Link>

          <Link href="/about-us">
            <p className="font-bold text-[#0b2c3b]  hover:text-[#33E4DB]">
              Бидний тухай
            </p>
          </Link>

          <p className="font-bold text-[#0b2c3b]  hover:text-[#33E4DB]">
            Холбоо барих
          </p>
        </div>
      </div>

      <div className="flex gap-3 justify-center items-center">
        <MapIcon />
        <p className="">Ulaanbaatar , Mongolia</p>
      </div>
    </div>
  );
}
