import { DataProvider } from "@/components/context/dataContext";
import { Cart } from "@/components/order-page/Cart";

export default function CartPage() {
  return (
    <DataProvider>
      <Cart />
    </DataProvider>
  );
}
