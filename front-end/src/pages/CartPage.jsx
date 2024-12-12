import { DataProvider } from "@/components/context/dataContext";
import { Cart } from "@/components/order-page/Cart";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function CartPage() {
  return (
    <DataProvider>
      <div>
        <Header />
        <Cart />
        <Footer />
      </div>
    </DataProvider>
  );
}
