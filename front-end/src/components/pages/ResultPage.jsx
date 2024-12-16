"use client";
import { useDataContext } from "@/components/context/dataContext";
import { GoogleMap } from "@/components/map/Google";
import List from "@/components/map/List";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function ResultPage() {
  const { filteredMedincine } = useDataContext();
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex">
        <div className="flex flex-col gap-2">
          {filteredMedincine.map((medicine) => {
            return <List key={medicine?._id} selectedLocation={medicine} />;
          })}
        </div>
        <GoogleMap selectedLocation={filteredMedincine} />
      </div>
      <Footer />
    </div>
  );
}
