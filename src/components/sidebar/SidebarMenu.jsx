import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SIDEBARLINKS } from "../../constants";
import SiderbarLinks from "./sidebarLinks";
import { parseData } from "../../utils/helpers";

function SidebarMenu({ className }) {
  const location = useLocation();
  const path = location.pathname;
  const { type } = parseData(localStorage.getItem("assistant"));

  const sidebarItems = path.includes("operations")
    ? SIDEBARLINKS.operations
    : SIDEBARLINKS.account;

  return (
    <div
      className={`sticky top-0 h-full overflow-hidden z-[200] bg-customgray-2 ${className} w-[260px]`}
    >
      <div className="flex items-center pt-10 px-2">
        <Link to="/home">
          <img src="/assets/icons/arrow_back.svg" />
        </Link>
        {path.includes("operations") ? (
          <>
            <h3 className="text-2xl font-semibold mx-2">{type || 'assistant'}</h3>
            <img src="/assets/icons/open_in_new.svg" />
          </>
        ) : (
          <h3 className="text-2xl font-semibold mx-2">Account</h3>
        )}
      </div>
      <div
        className={`sidebar-inner flex flex-shrink-0 flex-col h-full justify-between px-0 py-2 text-base  text-carbon-800 font-medium `}
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
