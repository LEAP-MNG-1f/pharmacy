import { BoxIcon } from "@/svg/BoxIcon";
import { Info } from "@/svg/InfoIcon";
import { MapIcon } from "@/svg/MapIcon";
import { Wallet } from "@/svg/WalletIcon";
import { PhoneIcon, UserIcon } from "lucide-react";

export default function Orders() {
  return (
    <div className="w-full h-full flex justify-center py-10">
      <div className="w-[1100px]  bg-white flex flex-col p-6 rounded-xl">
        <div className="w-[700px] h-[500px] rounded-xl border-2 border-[#33E4DB] bg-[#e6fbfa] p-4 flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex item-center gap-1">
              <BoxIcon />
              <p className="font-extrabold text-xl">Order - 7676</p>
            </div>
            <div>2024.12.31</div>
          </div>
          <div>
            <div className="flex gap-2 font-bold">
              <Info />
              <p>Жорын зураг</p>
            </div>

            <div>
              <p>Paracetamol</p>
              <p>quantity: 2</p>
            </div>
          </div>
          <div>
            <p className="font-bold ">Total Price : 25,000$</p>
          </div>
          <p className="font-semibold ">Delivery details</p>
          <div className="flex flex-col gap-2 pl-2">
            <div className="text-center flex gap-1">
              <MapIcon />
              <p>BZD , 4r khoroo</p>
            </div>
            <div className="text-center flex gap-1">
              <UserIcon />
              <p>Apartment , 1021</p>
            </div>
            <div className="text-center flex gap-1">
              <PhoneIcon />
              <p>99118734</p>
            </div>
          </div>
          <p>Payment & Additional Info</p>
          <div className="flex flex-col gap-2 pl-2">
            <div className="flex gap-2 ">
              <Wallet />
              <p>Payment type: Credit Card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
