import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants";
import { DashboardSideBarTypes } from "@/app/configs/types";
import useRouteChange from "@/shared/hooks/useRouteChange";
import { ICONS } from "@/shared/utils/icons";
import { useClerk } from "@clerk/nextjs";
// import Image from "next/image";
import Link from "next/link";
import { usePathname, redirect } from "next/navigation";
import { useEffect } from "react";

const DashboardItems = ({ bottomContent }: { bottomContent?: boolean }) => {
  const [activeRoute, setActiveRoute] = useRouteChange();
  const { signOut, user } = useClerk();
  const pathName = usePathname();

  useEffect(() => {
    setActiveRoute(pathName);
  }, [pathName, setActiveRoute]);

  const LogoutHandler = () => {
    signOut();
    redirect("/sign-in");
  };

  return (
    <>
      {!bottomContent ? (
        <>
          {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link
              key={index}
              href={item.url}
              className="p-3 flex items-center hover:bg-gray-100 rounded-md transition duration-200"
            >
              <span
                className={`text-3xl mr-3 ${
                  item.url === activeRoute ? "text-[#463bbd]" : "text-gray-600"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-lg font-medium ${
                  item.url === activeRoute ? "text-[#463bbd]" : "text-gray-700"
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </>
      ) : (
        <>
          {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link
                key={index}
                className="p-3 flex items-center hover:bg-gray-100 rounded-md transition duration-200"
                href={
                  item.url === "/"
                    ? `/subscribe?username=${user?.username}`
                    : item.url
                }
              >
                <span
                  className={`text-3xl mr-3 ${
                    item.url === activeRoute
                      ? "text-[#463bbd]"
                      : "text-gray-600"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-lg font-medium ${
                    item.url === activeRoute
                      ? "text-[#463bbd]"
                      : "text-gray-700"
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            )
          )}

          {/* Logout Button */}
          <div
            className="p-3 flex items-center hover:bg-red-100 rounded-md transition duration-200 cursor-pointer border-t mt-5"
            onClick={LogoutHandler}
          >
            <span className="text-3xl mr-3 text-red-500">{ICONS.logOut}</span>
            <span className="text-lg font-medium text-red-600">Sign Out</span>
          </div>

          {/* Footer */}
          <div className="mt-10 text-center">
            <div className="w-full flex justify-center cursor-pointer mb-4">
              {/* <Image src="/logo.png" alt="Logo" className="h-10 w-auto" /> */}
            </div>
            <p className="text-sm text-gray-500">
              © 2025 CodewithRabbil, Inc. All rights reserved.
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default DashboardItems;
