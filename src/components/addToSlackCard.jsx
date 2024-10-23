import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddToSlackCard({ text, assistant, isSlack }) {
  const navigate = useNavigate()

  const handleNavigate = (text) => {
    if (text === "Configure") {
      localStorage.setItem("assistant", JSON.stringify(assistant))
      navigate("/operations/addtoslack")
    }
    else navigate("/customize", { state: assistant?.botName })
  }
  return (
    <div className="md:w-[90%] shadow-md flex flex-col justify-between w-full bg-white pt-6 pb-3  mx-auto lg:col-span-1 md:col-span-2 col-span-4 pb-4 lg:mt-0 mt-4 z-[200] rounded-md">
      <div className="px-6">
        <h3 className="font-bold mb-3">{assistant?.botName}</h3>
        <h5 className="font-bold mb-3">{assistant?.type}</h5>
        <p className="text-sm my-3">{assistant?.description || "Helps streamline processes and day to day operational tasks"}</p>
      </div>

      <button
        onClick={() => handleNavigate(text)}
        state={assistant?.botName}
        className="flex items-center justify-center text-primary font-semibold border-t-2 mt-2 pt-3"
      >
        {isSlack ? (
          <img src="/assets/icons/color-slack-icon.svg" className="mr-2" />
        ) : (
          <img src="/assets/icons/settings.svg" className="mr-2" />
        )}
        {text}
      </button>
    </div>
  );
}

export default AddToSlackCard;
