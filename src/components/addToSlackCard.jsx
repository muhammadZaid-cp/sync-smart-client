import React from "react";
import { Link } from "react-router-dom";

function AddToSlackCard({ title, description, text, isSlack }) {
  return (
    <div className="md:w-[90%] shadow-md flex flex-col justify-between w-full bg-white pt-6 pb-3  mx-auto lg:col-span-1 md:col-span-2 col-span-4 pb-4 lg:mt-0 mt-4 z-[200] rounded-md">
      <div className="px-6">
        <h3 className="font-bold mb-3">{title}</h3>
        <p className="text-sm my-3">{description}</p>
      </div>

      <Link
        to="/auth/signin"
        className="flex items-center justify-center text-primary font-semibold border-t-2 mt-2 pt-3"
      >
        {isSlack ? (
          <img src="/assets/icons/color-slack-icon.svg" className="mr-2" />
        ) : (
          <img src="/assets/icons/settings.svg" className="mr-2" />
        )}
        {text}
      </Link>
    </div>
  );
}

export default AddToSlackCard;
