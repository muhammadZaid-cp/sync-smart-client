import React from "react";

function CenteredCard({ children, className }) {
  return (
    <div className=" h-screen w-screen flex items-center justify-center overflow-y-hidden bg-customgray-2 bg-cover bg-center">
      <div
        className={`flex flex-col items-center bg-customgray-2 border rounded-md shadow-md md:px-8 px-4 py-6 z-[200] ${className}`}
      >
        {children}
      </div>
      <div className="h-[50vh] absolute bottom-0">
        <img
          src="/assets/svgs/waves.svg"
          className="object-cover w-screen h-full"
        />
      </div>
    </div>
  );
}

export default CenteredCard;
