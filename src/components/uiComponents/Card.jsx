import React from "react";

function Card({ children, className }) {
  return (
    <div className={`bg-customgray-2 py-6 my-4 ${className}`}>{children}</div>
  );
}

export default Card;
