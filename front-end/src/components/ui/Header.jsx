"use client";

import Link from "next/link";

import { Logo } from "../svg/Logo";
import { UserButton, useUser } from "@clerk/nextjs";
import Basket from "../svg/Basket";
import CustomUserButton from "./custom-user-button";
import { useDataContext } from "../context/dataContext";

export default function Header() {
  const { isSignedIn, isLoaded } = useUser();
  const { basket } = useDataContext();

  return (
    <div className="w-screen h-[80px] flex justify-center bg-[#E9F6FE]">
      <div className=" container flex justify-between items-center">
        <div className="flex gap-2">
          <Link href="./" className="flex gap-2">
            <Logo />
            <p className="font-bold text-2xl text-[#0b2c3b]">Pharma</p>
          </Link>
        </div>

        <div className="flex items-center  gap-2">
          <Link href="cartpage">
            <Basket />
          </Link>
          <p className="mr-[20px] text-[#00BBD3]">{basket?.length}</p>

          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href="/sign-in?redirect=/orderpage">
              <button className="bg-[#33E4DB] w-[100px] h-[36px] rounded-xl font-bold text-white">
                Нэвтрэх
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
