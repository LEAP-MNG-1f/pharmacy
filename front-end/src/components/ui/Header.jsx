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
    <div className="w-screen h-[80px] flex justify-center bg-[#edece9]">
      <div className="container flex justify-between items-center">
        <Link href="/about-us">
          <p className=" text-[#242321]   ">Бидний тухай</p>
        </Link>
        <Link href="./" className="flex gap-2 items-center h-20">
          <img src="logo.png" alt="" className="h-16 w-auto" />
        </Link>

        <div className="flex gap-2 justify-center items-center">
          <a href="#" onClick={handleBasketClick}>
            <Basket />
          </a>
          <p className="mr-[20px]">
            {basket?.length > 0 ? basket?.length : ""}
          </p>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href="/sign-in?redirect=/orderpage">
              <button className="bg-[#edece9] w-[100px] h-[36px] rounded-xl  text-[#242321]">
                Нэвтрэх
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
