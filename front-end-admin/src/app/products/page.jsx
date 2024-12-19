"use client";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
  const [pharmacies, setPharmacies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = "http://localhost:8368";

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/api/medicines`);
      const data = await response.json();

      // Group medicines by pharmacy
      const groupedByPharmacy = data.result.reduce((acc, medicine) => {
        const pharmacyId = medicine.pharmacyId?._id;
        const pharmacyName = medicine.pharmacyId?.name || "Unknown Pharmacy";

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

      // Convert to array format and sort pharmacies alphabetically
      const pharmaciesArray = Object.values(groupedByPharmacy).sort((a, b) =>
        a.name.localeCompare(b.name)
      );
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

  // Filter pharmacies and their medicines based on search term
  const filteredPharmacies = searchTerm
    ? pharmacies
        .map((pharmacy) => ({
          ...pharmacy,
          medicines: pharmacy.medicines.filter((medicine) =>
            medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((pharmacy) => pharmacy.medicines.length > 0)
    : pharmacies;

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
        {filteredPharmacies.length > 0 ? (
          filteredPharmacies.map((pharmacy, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-blue-600">
                  {pharmacy.name}
                </h2>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    Total Medicines: {pharmacy.medicines.length}
                  </p>
                </div>
              </div>
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
                      <tr
                        key={medIndex}
                        className="border-t hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-2">{medicine.name}</td>
                        <td className="px-4 py-2">
                          {medicine.category || "N/A"}
                        </td>
                        <td className="px-4 py-2 text-right">
                          <span
                            className={`px-2 py-1 rounded-full text-sm ${
                              medicine.stock < 3
                                ? "bg-red-100 text-red-800"
                                : medicine.stock < 5
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
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
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No pharmacies or medicines found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
