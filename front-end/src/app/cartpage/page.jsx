import CartPage from "@/components/pages/CartPage";
import OrderPage from "@/components/pages/OrderPage";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <CartPage />
      {/* <OrderPage /> */}
    </div>
  );
}
