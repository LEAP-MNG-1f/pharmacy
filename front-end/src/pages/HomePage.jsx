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

    <div>
      {/* <GoogleHomePage /> */}
      <MedicineSelector />
      <CarouselAds />

      <FAQ />
      <Collab />
      <Advice />
    </div>
  );
}
