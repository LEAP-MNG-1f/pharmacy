"use client";

import CarouselAds from "@/components/home-page/CarouselAds";
import FAQ from "@/components/home-page/FAQ";
import GoogleHomePage from "@/components/map/GoogleHome";
import Footer from "@/components/ui/Footer";

import Header from "@/components/ui/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <CarouselAds />
      <GoogleHomePage />
      <FAQ />
      <Footer />
    </div>
  );
}
