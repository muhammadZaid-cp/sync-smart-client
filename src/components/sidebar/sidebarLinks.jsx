import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SiderbarLinks({ info }) {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path) => {
    return  pathname.includes(path) ;
  };

  return (
    <Link
      className="mx-4 mt-6"
      to={info?.redirectTo}
      aria-label={`redirect to ${info.title}`}
    >
      <div
        className={`relative flex flex-row px-3 py-2  items-center leading-tight rounded-md items-center leading-tight text-primary  hover:border-primary transition ${isActive(info.redirectTo) ? "active shadow-md border-primary bg-white " : "text-primary"} `}
      >
        <div className="group relative flex items-center">
          {info?.svg &&
          info?.redirectTo.includes("addtoslack") &&
          isActive(info?.redirectTo) ? (
            <img src="/assets/icons/color-slack-icon.svg" />
          ) : (
            <img src={info?.svg} />
          )}
          <span className="flex leading-tight ml-2">{info?.title}</span>
        </div>
      </div>
    </Link>
  );
}
