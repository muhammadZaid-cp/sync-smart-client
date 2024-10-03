import React from "react";
import Card from "./uiComponents/Card";
import { Link } from "react-router-dom";

function AssistantCard({ title, designation, description }) {
  return (
    <div className="md:w-[70%] flex flex-col  justify-between w-full mx-auto lg:col-span-2 md:col-span-3 col-span-6 pb-4 lg:mt-0 mt-4">
      <div>
        <h3 className="text-primary font-bold">{title}</h3>
        <h3 className="text-primary text-sm mb-1">{designation}</h3>
        <p className="text-sm">{description}</p>
      </div>

      <Link
        to="/auth/signin"
        className="flex items-center text-primary font-semibold mt-3"
      >
        Customize and Add to Slack{" "}
        <img src="/assets/icons/right-arrow.svg" className="ml-3" />
      </Link>
    </div>
  );
}

export default AssistantCard;
