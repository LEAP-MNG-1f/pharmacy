"use client";

import Link from "next/link";
import { Logo } from "../svg/Logo";
import { UserButton, useUser } from "@clerk/nextjs";
import Basket from "../svg/Basket";
import { useDataContext } from "../context/dataContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { isSignedIn, isLoaded, user } = useUser();
  const { basket } = useDataContext();
  const router = useRouter();

  const handleBasketClick = (e) => {
    e.preventDefault();
    if (isSignedIn) {
      router.push("/cartpage");
    } else {
      router.push("/sign-in?redirect=/cartpage");
    }
  };

  return (
    <div className="w-screen h-[80px] flex justify-center bg-[#E9F6FE]">
      <div className="container flex justify-between items-center">
        <div className="flex gap-2">
          <Link href="./" className="flex gap-2">
            <Logo />
            <p className="font-bold text-2xl text-[#0b2c3b]">Pharma</p>
          </Link>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <a href="#" onClick={handleBasketClick}>
            <Basket />
          </a>
          <p className="mr-[20px]">{basket?.length || 0}</p>
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
