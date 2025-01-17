"use client";

import DashboardOverViewCard from "@/shared/components/cards/cards/overview.card";
import { useUser } from "@clerk/nextjs";

const Main = () => {
  const { user } = useUser();

  return (
    <div className="p-5 w-full bg-[#f9fafb]">
      <h1 className="text-2xl text-surface-900 font-medium">
        hi {user?.fullName}👋
      </h1>

      <p className="opacity-[.7] text-sm">
        THere &apos;s how your publication is doing
      </p>
      <div className="w-full flex">
        <div className=" min-h-[88vh] pr-5">
          <DashboardOverViewCard />
        </div>
      </div>
    </div>
  );
};
export default Main;
