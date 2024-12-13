"use client";

import Advice from "@/components/home-page/Advice";
import CarouselAds from "@/components/home-page/CarousalAds";

import Collab from "@/components/home-page/Collab";
import FAQ from "@/components/home-page/FAQ";
import GoogleHomePage from "@/components/map/GoogleHome";
import MedicineSelector from "@/components/map/Test";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col ">
      <Header />
      <div className="w-full flex  gap-[100px] mt-[80px] h-[1200px]">
        <CarouselAds />
        <GoogleHomePage />
        {/* <Collab /> */}
      </div>
      <Advice />
      <FAQ />
    </div>
  );
}
