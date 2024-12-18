"use client";

import { ProductList } from "@/components/search-page/PorductList";

export default function SearchPage() {
  return (
    <div className="w-screen h-auto flex flex-col">
      <div className="w-screen h-auto flex items-center justify-between flex-row bg-white py-5 px-5">
        <div className="flex flex-col gap-4 w-[50%] h-full justify-center  ">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
