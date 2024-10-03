import React from "react";
import Card from "./uiComponents/Card";

function DetailInfoCard({ title, svg, description, keyBenefits }) {
  return (
    <div className="grid grid-cols-5 mt-4 px-6">
      <div className="lg:w-[85%] w-full mx-auto lg:col-span-4 col-span-5">
        <Card className="px-6">
          <h3 className="text-primary font-bold mb-2">{title}</h3>
          <p className="text-[#433E3F] text-sm ">{description}</p>

          <h3 className="text-[#2B2829] text-sm mt-3">Key Benefits</h3>
          <ul className="list-disc ml-4 text-[#2B2829]">
            {keyBenefits.map((benefit, index) => (
              <li className="text-sm" key={index}>
                {benefit}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <img
        src={svg}
        className="lg:col-span-1 lg:block hidden w-[80%] h-[80%] mt-4"
      />
    </div>
  );
}

export default DetailInfoCard;
