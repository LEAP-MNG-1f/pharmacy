// "use client";

// export const Product = () => {
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("http://localhost:8368/api/emiinsans");
//       const dataMedicines = await response.json();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="bg-[#e9f6fe] flex h-screen p-[20px] flex-wrap gap-">
//       <div className="w-[18%] h-[40%] bg-white rounded-lg flex flex-col pb-3 p-">
//         <div className="p-3 h-[50%] w-full">
//           <img
//             src="https://back.emonos.mn/media/product/vita-tsair.jpg"
//             alt="em"
//             className="object-cover w-full h-full rounded-lg"
//           />
//         </div>
//         <div className="w-full h-[40%] px-3 pb-3">
//           <div className="text-[#0b2c3b] font-semibold text-md w-full h-[60%] bg-amber-400 p-1.5 rounded-lg">
//             Витагриф чацарганатай 10ш тэй 20г
//           </div>
//           <div className="flex gap-2 items-center p-1.5">
//             <div className="text-[#0b2c3b] font-semibold text-md">
//               Үлдэгдэл:
//             </div>
//             <div className="text-[#0b2c3b] text-md ">1126ш</div>
//           </div>
//           <div className="flex gap-2 items-center p-1.5">
//             <div className="text-[#0b2c3b] font-semibold text-md">Үнэ:</div>
//             <div className="text-[#0b2c3b] text-lg ">8000₮</div>
//           </div>
//           <div className="flex gap-2 items-center p-1.5">
//             <div className="text-[#0b2c3b] font-semibold text-md">
//               Жортой олгох:
//             </div>
//             <div className="form-control">
//               <label className="cursor-pointer label">
//                 <span className="label-text"></span>
//                 <input
//                   type="checkbox"
//                   defaultChecked
//                   className="checkbox checkbox-error checkbox-xs"
//                 />
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
