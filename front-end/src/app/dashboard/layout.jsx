"use client";
import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <UserButton />
      {children}
    </div>
  );
};
export default DashboardLayout;
