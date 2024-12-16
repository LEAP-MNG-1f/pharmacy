"use client";

import Advice from "@/components/home-page/Advice";
import CarouselAds from "@/components/home-page/CarousalAds";

import Collab from "@/components/home-page/Collab";
import FAQ from "@/components/home-page/FAQ";

import SelectMedicines from "@/components/map/TestBadmaaEgch";
import MedicineSelector from "@/components/map/TestBadmaaEgch";
import Footer from "@/components/ui/Footer";

import Header from "@/components/ui/Header";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col ">
      <Header />
      <div className="w-full flex  gap-[100px] mt-[80px] h-[1200px]">
        {/* <CarouselAds /> */}
        <MedicineSelector />
        {/* <GoogleHomePage /> */}
        {/* <Collab /> */}
      </div>
      <Advice />
      <FAQ />
    </div>
  );
}
