import CarouselAds from "@/components/home-page/CarouselAds";
import Collab from "@/components/home-page/Collab";
import FAQ from "@/components/home-page/FAQ";
import Footer from "@/components/ui/Footer";

import Header from "@/components/ui/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      {/* <CarouselAds />
      <Collab /> */}
      <div className="flex ">
        <CarouselAds />
        <FAQ />
        <Collab />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}
