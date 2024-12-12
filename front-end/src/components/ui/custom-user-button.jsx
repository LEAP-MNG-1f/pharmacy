import { UserButton } from "@clerk/nextjs";

const CustomUserButton = () => {
  return (
    <div className="relative w-[41px] h-[40px]">
      <UserButton
        appearance={{
          elements: {
            rootBox: "w-[41px] h-[40px]",
            userButtonTrigger: {
              backgroundColor: "transparent",
              border: "none",
              "&:after": {
                content: "''",
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, #33E4DB 0%, #00BBD3 100%)",
                borderRadius: "9999px",
                zIndex: -1,
              },
            },
            userButtonAvatarBox: "w-[41px] h-[40px]",
            userButtonAvatarImage: "w-full h-full rounded-full",
          },
        }}
      />
    </div>
  );
};

export default CustomUserButton;
