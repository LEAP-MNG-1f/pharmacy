"use client";

import Advice from "@/components/home-page/Advice";
import CarouselAds from "@/components/home-page/CarouselAdsTop";
import Collab from "@/components/home-page/Collab";
import FAQ from "@/components/home-page/FAQ";
import GoogleHomePage from "@/components/map/GoogleHome";

export default function HomePage() {
  return (
    <div>
      <CarouselAds />
      <GoogleHomePage />
      <FAQ />
      <Collab />

      <Advice />
      <FAQ />
    </div>
  );
}
