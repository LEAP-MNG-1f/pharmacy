"use client";

import Link from "next/link";
import { Logo } from "../svg/Logo";
import { UserButton, useUser } from "@clerk/nextjs";
import Basket from "../svg/Basket";
import CustomUserButton from "./custom-user-button"; // unused import
import { useEffect, useState } from "react";
import { useDataContext } from "../context/dataContext";

export default function Header() {
  const { isSignedIn, isLoaded } = useUser();
  const { basket } = useDataContext();
  // const [sags, setSags] = useState([]);

  // Load cart data on mount
  // useEffect(() => {
  //   const data = localStorage.getItem("sags");

  //   if (data) {
  //     const parsed = JSON.parse(data);
  //     setSags(parsed);
  //   }
  // }, []);

  // console.log(sags.length);

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
          <Link href="cartpage">
            <Basket />
          </Link>
          <p className="mr-[20px]">{basket?.length || 0}</p>{" "}
          {/* Ensure 0 if no cart data */}
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href="/sign-in?redirect=/orderpage">
              <button className="  bg-[#33E4DB] w-[100px] h-[36px] rounded-xl font-bold text-white">
                Нэвтрэх
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
