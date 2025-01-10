import React from "react";
import { getAddToSlackUrl } from "../../../api/slack";
import { parseData } from "../../../utils/helpers";
function Operations() {
  const { type, botName } = parseData(localStorage.getItem("assistant"));
  const handleAddAssistant = async () => {
    try {
      const res = await getAddToSlackUrl({
        name: botName,
        type: type,
      });
      window.location.href = `${res.url}`;
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <div>
      <p className="text-[#433E3F] w-full px-4 pb-2 border-b border-[#898384]">
        Add {botName} to Slack
      </p>
      {/* <p className="text-[#433E3F] w-full px-4 my-5">
        Add Operations to your Slack workspace
      </p> */}
      {/* <div className="p-2 bg-[#BAE8D8] flex items-center justify-center rounded-sm">
        <img src="/assets/icons/check_circle.svg" />
        <p className="ml-2 text-[#297B60]">
          It is added already on your workspace
        </p>
      </div> */}
      <div>
        <button
          onClick={() => handleAddAssistant()}
          className="p-2 bg-[#fff] text-[#000] text-sm rounded-sm mt-4 shadow-md border"
        >
          Add to slack
        </button>
      </div>
      {/* <button className="p-2 bg-[#AE2929] px-6  text-customgray-2 text-sm rounded-sm mt-4">
        Delete operations from your workspace
      </button> */}
    </div>
  );
}

export default Operations;
