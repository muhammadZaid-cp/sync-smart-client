import React from "react";

function Operations() {
  return (
    <div>
      <p className="text-[#433E3F] w-full px-4 pb-2 border-b border-[#898384]">
        Add assitant to Slack
      </p>
      <p className="text-[#433E3F] w-full px-4 my-5">
        Add Operations to your Slack workspace
      </p>
      <div className="p-2 bg-[#BAE8D8] flex items-center justify-center rounded-sm">
        <img src="/assets/icons/check_circle.svg" />
        <p className="ml-2 text-[#297B60]">
          Operation is already on your workspace
        </p>
      </div>
      <button className="p-2 bg-[#AE2929] px-6  text-customgray-2 text-sm rounded-sm mt-4">
        Delete operations from your workspace
      </button>
    </div>
  );
}

export default Operations;
