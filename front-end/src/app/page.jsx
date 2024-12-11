"use client";
import { useDataContext } from "@/components/context/dataContext";
import HomePage from "@/pages/HomePage";

export default function Home() {
  // const { medicines } = useDataContext();
  // console.log(medicines);

  return (
    <div className="">
      <HomePage />
    </div>
  );
}
