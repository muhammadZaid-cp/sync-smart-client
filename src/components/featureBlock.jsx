import React from "react";

function FeatureBlock({ title, svg, description }) {
  return (
    <div className="flex justify-center md:col-span-1 col-span-3 lg:mt-0 mt-6">
      <div className="flex flex-col justify-between items-center md:w-[70%] w-full">
        <h3 className="md:self-start self-center font-bold">{title}</h3>
        <img src={svg} className="self-center my-4" />
        <p className="md:self-start self-center text-sm">{description}</p>
      </div>
    </div>
  );
}

export default FeatureBlock;
