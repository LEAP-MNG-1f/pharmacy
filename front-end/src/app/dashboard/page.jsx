"use client";
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { user } = useUser();
  console.log("user", user?.fullName);
  return <div>Dashboard</div>;
};
export default Dashboard;
