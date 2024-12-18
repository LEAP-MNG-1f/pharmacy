// //"use client";
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

//   return (
//     <div className="flex justify-center">
//       <div className="p-6 w-[1024px] mt-6">
//         <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
//         <div className="bg-white rounded-lg shadow">
//           {/* Header */}
//           <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 rounded-t-lg font-semibold text-gray-700">
//             <p className="p-6">Order name </p>
//             <p className="p-6">Buyer info</p>
//             <p className="p-6">Payment</p>
//             <p className="p-6">Address</p>
//             <p className="p-6">Delivery state</p>
//           </div>
//           <div className="divide-y divide-gray-200">
//             {orders.map((order) => {
//               return (
//                 <div
//                   key={order._id}
//                   className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50"
//                 >
//                   <div className="p-6 flex">
//                     <img
//                       src="/breakfastBurrito.png"
//                       className="w-10 h-10 rounded-[4px]"
//                       alt=""
//                     />
//                     <div>
//                       <p>{order?._id}</p>
//                       {order?.foodIds?.map((food) => {
//                         return <p key={uniqueId()}>{food?.name}</p>;
//                       })}
//                     </div>
//                   </div>

//                   <div className="flex p-6">
//                     <div>
//                       <p>{order.price}</p>
//                       <p>
//                         {new Date(order.createdDate).toLocaleString("en-GB", {
//                           year: "numeric",
//                           month: "2-digit",
//                           day: "2-digit",
//                           hour: "2-digit",
//                           minute: "2-digit",
//                           hour12: false,
//                         })}
//                       </p>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="inline-flex w-[67px] justify-center items-center px-2 py-1 rounded-full text-xs bg-[#C1E6CF] text-[#0A4E22]">
//                         Paid
//                       </span>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <p>{order.district}</p>
//                     <p>{order.Khoroo}</p>
//                     <p>{order.Apartment}</p>
//                   </div>
//                   <div className="flex items-center">
//                     <span
//                       className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
//                         order.process === "Progress"
//                           ? "bg-[#FDF4B6] text-[#695C08]"
//                           : order.process === "Delivered"
//                           ? "bg-[#C1E6CF] text-[#0A4E22]"
//                           : order.process === "Active"
//                           ? "bg-[#C1E6CF] text-[#0A4E22]"
//                           : order.process === "Waiting"
//                           ? "bg-[#ECEDF0] text-[#1F2126]"
//                           : "bg-gray-100 text-gray-800"
//                       }`}
//                     >
//                       {order.process || "Pending"}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// //
// //
// // export const Table = () => {
// //   return (
// //     <div>
// //       <div className="overflow-x-auto">
// //         <table className="table table-zebra">
// //           {/* head */}
// //           <thead>
// //             <tr>
// //               <th></th>
// //               <th>Хэрэглэгч</th>
// //               <th>Үнийн дүн</th>
// //               <th>Дүүрэг, хороо </th>
// //               <th>Дэлгэрэнгүй хаяг</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {/* row 1 */}
// //             <tr>
// //               <th>1</th>
// //               <td>Sarnai</td>
// //               <td>9000</td>
// //               <td>Сүхбаатар</td>
// //               <td>Сүхбаатар</td>
// //             </tr>
// //             {/* row 2 */}
// //             <tr>
// //               <th>2</th>
// //               <td>Badmaa</td>
// //               <td>87'000</td>
// //               <td>Сүхбаатар</td>
// //               <td>Сүхбаатар</td>
// //             </tr>
// //             {/* row 3 */}
// //             <tr>
// //               <th>3</th>
// //               <td>Boloroo</td>
// //               <td>26'000</td>
// //               <td>Сүхбаатар</td>
// //               <td>Сүхбаатар</td>
// //             </tr>
// //             {/* row 3 */}
// //             <tr>
// //               <th>4</th>
// //               <td>Jawzaa</td>
// //               <td>126'000</td>
// //               <td>Сүхбаатар</td>
// //               <td>Сүхбаатар</td>
// //             </tr>
// //             {/* row 3 */}
// //             <tr>
// //               <th>5</th>
// //               <td>Buynaa</td>
// //               <td>46'000</td>
// //               <td>Сүхбаатар</td>
// //               <td>Сүхбаатар</td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };
