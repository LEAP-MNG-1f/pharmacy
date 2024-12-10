import { FacebookIcon } from "../../../../../front-end/src/components/svg/FacebookIcon";
import { InstaIcon } from "../../../../../front-end/src/components/svg/InstaIcon";

export const Footer = () => {
  return (
    <div className="w-full bg-[#E9F6FE] justify-center items-center flex flex-col">
      <div className="flex gap-2 p-3">
        <InstaIcon />
        <FacebookIcon />
      </div>
      <div>
        <p className="font-bold text-[#0b2c3b]">Нүүр хуудас</p>
        <p className="font-bold text-[#0b2c3b]">Бидний тухай</p>
        <p className="font-bold text-[#0b2c3b]">Холбоо барих</p>
      </div>
    </div>
  );
};
