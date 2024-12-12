import { Confirmation } from "@/components/order-page/Confirmation";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function OrderPage() {
  return (
    <div className="flex w-screen flex-col">
      <Header />
      <Confirmation />
      <Footer />
    </div>
  );
}
