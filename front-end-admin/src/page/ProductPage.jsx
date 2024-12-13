import Header from "@/components/Header";
import { Products } from "@/app/dashboard/products/Product";

export default function ProductPage() {
  return (
    <div className="bg-white w-screen h-screen ">
      <Header />
      <Products />
    </div>
  );
}
