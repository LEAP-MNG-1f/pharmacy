import Link from "next/link";
import { FacebookIcon } from "../svg/FacebookIcon";
import { InstaIcon } from "../svg/InstaIcon";
import { Logo } from "../svg/Logo";
import { MapIcon } from "../svg/Map";

export default function Footer() {
  return (
    <div className=" w-full bg-[#242321] h-full  items-center flex flex-col justify-center py-7 ">
      <div className="w-[1200px] flex flex-col ">
        <div className="flex">
          <div>
            <img src="darkLogo.png" alt="" className="w-[800px]" />
          </div>
          <div className="container flex flex-col items-end justify-center">
            <div className="flex gap-14">
              <Link href="./">
                <p className=" text-[#edece9] ">Нүүр хуудас</p>
              </Link>

              <Link href="/about-us">
                <p className=" text-[#edece9]  ">Бидний тухай</p>
              </Link>

              <p className=" text-[#edece9]  ">Холбоо барих</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-2 p-3 justify-center items-center">
            <a
              href="https://www.facebook.com/monosemiinsan/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/aloebrand_monos/"
              target="_blank"
              rel="noreferrer"
            >
              <InstaIcon />
            </a>
          </div>
        </div>
        <a
          className="flex gap-3 justify-center items-center"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/Monos+%D1%8D%D0%BC%D0%B8%D0%B9%D0%BD+%D0%B1%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9+%D1%82%D3%A9%D0%B2/@47.9175604,106.8955712,584m/data=!3m2!1e3!4b1!4m6!3m5!1s0x5d96925827684173:0xc44e131a8a952b15!8m2!3d47.9175604!4d106.8981461!16s%2Fg%2F1tfcbxmx?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
        >
          <MapIcon />
          <p className="text-white">Ulaanbaatar , Mongolia</p>
        </a>
      </div>
    </div>
  );
}
