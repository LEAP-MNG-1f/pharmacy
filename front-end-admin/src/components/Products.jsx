import { BACKEND_URL } from "@/constants/constants";

export default function () {
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/medicines`);
      const dataMedicines = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}
