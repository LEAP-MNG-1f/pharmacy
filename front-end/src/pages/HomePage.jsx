"use client";

import Advice from "@/components/home-page/Advice";
import CarouselAds from "@/components/home-page/CarousalAds";

import Collab from "@/components/home-page/Collab";
import FAQ from "@/components/home-page/FAQ";
import GoogleHomePage from "@/components/map/GoogleHome";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <GoogleHomePage />
      <CarouselAds />
      <FAQ />
      <Advice />
      <Collab />
    </div>
  );
}
