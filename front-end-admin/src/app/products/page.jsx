"use client";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
  const [pharmacies, setPharmacies] = useState([]);
  const [categories, setCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BACKEND_URL = "https://back-end-wine-five.vercel.app";

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/categories`);
      if (!response.ok) throw new Error("Failed to fetch categories");

      const data = await response.json();

      const categoryMap = {};
      if (data && Array.isArray(data.result)) {
        data.result.forEach((category) => {
          categoryMap[category._id] = category.name;
        });
      }
      setCategories(categoryMap);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      await fetchCategories();

      const response = await fetch(`${BACKEND_URL}/api/emiinsans`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      const data = responseData.data;

      if (!Array.isArray(data)) {
        throw new Error("Invalid data format received");
      }

      const pharmaciesArray = data
        .map((pharmacy) => {
          const medicines = Array.isArray(pharmacy.emsId)
            ? pharmacy.emsId.map((med) => ({
                id: med._id,
                name: med.name,
                categoryId: med.categoryId,
                price: med.price,
                balance: med.balance,
              }))
            : [];

          return {
            id: pharmacy._id,
            name: pharmacy.name || "Unknown Pharmacy",
            location: pharmacy.location || "Location Not Available",
            medicines: medicines,
          };
        })
        .filter(Boolean);

      const sortedPharmacies = pharmaciesArray.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setPharmacies(sortedPharmacies);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setPharmacies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter pharmacies and their medicines based on search term
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

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Error Loading Data</h2>
          <p>{error}</p>
          <button
            onClick={fetchData}
            className="mt-4 px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200"
          >
            Retry
          </button>
        </div>
      </div>
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
          filteredPharmacies.map((pharmacy) => (
            <div key={pharmacy.id} className="border rounded-lg p-4 shadow-sm">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-blue-600">
                  {pharmacy.name}
                </h2>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    Location: {pharmacy.location}
                  </p>
                  <p className="text-sm text-gray-500">
                    Total Medicines: {pharmacy.medicines.length}
                  </p>
                </div>
              </div>
              {pharmacy.medicines.length > 0 ? (
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
                          key={medicine.id}
                          className="border-t hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-2">{medicine.name}</td>
                          <td className="px-4 py-2">
                            {categories[medicine.categoryId] || "N/A"}
                          </td>
                          <td className="px-4 py-2 text-right">
                            <span
                              className={`px-2 py-1 rounded-full text-sm ${
                                medicine.balance < 3
                                  ? "bg-red-100 text-red-800"
                                  : medicine.balance < 5
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {medicine.balance}
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
              ) : (
                <p className="text-center py-4 text-gray-500">
                  No medicines available for this pharmacy
                </p>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No medicines found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
