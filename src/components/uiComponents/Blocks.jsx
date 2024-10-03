import React from "react";

function Block({ children, title }) {
  return (
    <div className="my-12 py-4 px-8">
      <h1 className="text-primary text-2xl font-bold text-center">{title}</h1>
      {children}
    </div>
  );
}

export default Block;
