import React from "react";

export default function Btn({ isLoading, text, type, disabled, showIcon }) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`w-full text-customgray-2 border border-1 rounded-sm py-2 flex justify-center items-center  bg-primary ${disabled && "bg-[#A6AADD]"}`}
    >
      {isLoading ? (
        <svg
          className={`animate-spin h-5 w-5 mr-3`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.21.896 4.21 2.344 5.658l2.657-2.368z"
          ></path>
        </svg>
      ) : showIcon ? (
        <img src="/assets/icons/color-slack-icon.svg" className="mr-2" />
      ) : (
        ""
      )}
      {text}
    </button>
  );
}
