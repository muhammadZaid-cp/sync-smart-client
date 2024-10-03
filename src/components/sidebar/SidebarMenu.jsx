import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SIDEBARLINKS } from "../../constants";
import SiderbarLinks from "./sidebarLinks";

function SidebarMenu({ className }) {
  const location = useLocation();
  const path = location.pathname;

  const sidebarItems = path.includes("operations")
    ? SIDEBARLINKS.operations
    : SIDEBARLINKS.account;

  return (
    <div
      className={`sticky top-0 h-screen z-[200] sidebar bg-customgray-2 ${className} w-[260px]`}
      style={{ maxHeight: "calc(100vh)" }}
    >
      <div className="flex items-center justify-between pt-10 px-4">
        <img src="/assets/icons/arrow_back.svg" />
        <h3 className="text-3xl font-bold mx-2">Operations</h3>
        <img src="/assets/icons/open_in_new.svg" />
      </div>
      <div
        className={`sidebar-inner flex flex-shrink-0 flex-col h-screen justify-between px-0 py-2 text-base  text-carbon-800 font-medium `}
        style={{ maxHeight: "calc(100vh - 20px)" }}
      >
        <div className="flex flex-col">
          {sidebarItems.map((linkData) => (
            <SiderbarLinks info={linkData} key={linkData.redirectTo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
