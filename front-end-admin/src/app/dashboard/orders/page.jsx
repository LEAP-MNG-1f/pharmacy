// import { uniqueId } from "lodash";
// import { useEffect, useState } from "react";

// export default function Page() {
//   const [orders, setOrders] = useState([]);
//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/api/orders");
//       const data = await response.json();
//       console.log(data);
//       setOrders(data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // const orders = [
//   //   {
//   //     id: 1,
//   //     user: "Sarnai",
//   //     amount: "9000",
//   //     district: "Сүхбаатар",
//   //     address: "Сүхбаатар",
//   //   },
//   //   {
//   //     id: 2,
//   //     user: "Badmaa",
//   //     amount: "87'000",
//   //     district: "Сүхбаатар",
//   //     address: "Сүхбаатар",
//   //   },
//   // ];

//   return (
//     <div className="w-full overflow-x-auto">
//       <table className="w-full table-auto border-collapse">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-4 text-left border-b">#</th>
//             <th className="p-4 text-left border-b">Хэрэглэгч</th>
//             <th className="p-4 text-left border-b">Үнийн дүн</th>
//             <th className="p-4 text-left border-b">Дүүрэг, хороо</th>
//             <th className="p-4 text-left border-b">Дэлгэрэнгүй хаяг</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order, index) => (
//             <tr
//               key={order.id}
//               className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
//             >
//               <td className="p-4 border-b">{order.id}</td>
//               <td className="p-4 border-b">{order.user}</td>
//               <td className="p-4 border-b">{order.amount}</td>
//               <td className="p-4 border-b">{order.district}</td>
//               <td className="p-4 border-b">{order.address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrdersTable;
