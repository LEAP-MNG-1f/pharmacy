"use client";
import { BACKEND_URL } from "@/constants/constants";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
  const [pharmacies, setPharmacies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/api/medicines`);
      const data = await response.json();
      // Add this console.log to inspect the first item in the result array
      console.log("Sample medicine data:", data.result[0]);

      // This will specifically show the pharmacyId structure
      console.log("PharmacyId structure:", data.result[0].pharmacyId);

      // Group medicines by pharmacy
      const groupedByPharmacy = data.result.reduce((acc, medicine) => {
        const pharmacyId = medicine.pharmacyId?._id;

        const pharmacyName = medicine.pharmacyId?.name || "Unknown Pharmacy";
        console.log(pharmacyId, pharmacyName);
        if (!acc[pharmacyId]) {
          acc[pharmacyId] = {
            name: pharmacyName,
            medicines: [],
          };
        }

        acc[pharmacyId].medicines.push({
          name: medicine.name,
          stock: medicine.balance,
          price: medicine.price,
          category: medicine.categoryId?.name,
        });

        return acc;
      }, {});

      // Convert to array format
      const pharmaciesArray = Object.values(groupedByPharmacy);
      setPharmacies(pharmaciesArray);
    } catch (error) {
      console.error("Error fetching inventory:", error);
      setPharmacies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPharmacies = pharmacies
    .map((pharmacy) => ({
      ...pharmacy,
      medicines: pharmacy.medicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((pharmacy) => pharmacy.medicines.length > 0);

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4">Loading inventory...</div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">
          Pharmacy Inventory Management System
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search medicines..."
            className="w-full p-2 pl-10 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      <div className="space-y-6">
        {filteredPharmacies.map((pharmacy, index) => (
          <div key={index} className="w-full">
            <div>
              <div className="text-xl text-blue-600">{pharmacy.name}</div>
            </div>
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left">Medicine Name</th>
                      <th className="px-4 py-2 text-left">Category</th>
                      <th className="px-4 py-2 text-right">Stock</th>
                      <th className="px-4 py-2 text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pharmacy.medicines.map((medicine, medIndex) => (
                      <tr key={medIndex} className="border-t">
                        <td className="px-4 py-2">{medicine.name}</td>
                        <td className="px-4 py-2">
                          {medicine.category || "N/A"}
                        </td>
                        <td className="px-4 py-2 text-right">
                          <span
                            className={`${
                              medicine.stock < 3
                                ? "text-red-500"
                                : medicine.stock < 5
                                ? "text-yellow-500"
                                : "text-green-500"
                            }`}
                          >
                            {medicine.stock}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-right">
                          ₮{parseInt(medicine.price).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
}
