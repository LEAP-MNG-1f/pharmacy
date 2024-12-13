import { StarIcon } from "../svg/Star";
import { SubmitButton } from "../svg/SubmitButton";

const ListCard = ({
  imageUrl,
  name,
  ObjectId,
  type,
  balance,
  location,
  price,
}) => {
  return (
    <div className="flex flex-col w-full h-1/3 bg-[#E9F6FE] rounded-2xl ">
      <div className="flex w-auto h-1/3 rounded-2xl shadow-md">
        <div
          className="w-[248px] h-[160px]"
          style={{
            backgroundImage: `url(${imageUrl || ""})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "16px",
          }}
        ></div>
        <div className="flex flex-col justify-center w-[248px] h-full p-4">
          <div className="text-stone-700  font-semibold">
            {name || "No title"}
          </div>
          <div className=" text-[#26b2b9] font-semibold">Хүрмэн Эмийн Сан</div>
          {/* <div className="flex gap-5">
            <div className="flex gap-1 items-center">
              <StarIcon /> <h1 className="text-[#3E4958]">{ObjectId || 0}</h1>
            </div>
            <div className="text-black">{balance || "No amenitie"}</div>
          </div> */}
          <div className="flex">
            <p className="text-stone-700 text-xs h-[50px]">{location}</p>
          </div>
          <div className="flex justify-between">
            <div className="text-stone-700 text-base">{price} ₮ 12000</div>
            <button

            // onClick={handleAddToCart}
            >
              <SubmitButton />
            </button>
          </div>

          {/* <div className="text-[#3E4958]">{type || "No Type"}</div> */}
        </div>
      </div>
    </div>
  );
};
export default ListCard;
