import React from "react";

function DeleteOperation() {
  return (
    <div>
    <p className="text-[#433E3F] w-full px-4 pb-2 border-b border-[#898384]">Delete Assistant</p>
    <div className="p-4 bg-white rounded-md mt-4">
    <p className="text-[#433E3F] text-sm my-3 mb-5">System Prompt</p>
    <div className="p-4 bg-[#F2C9C9] flex rounded-sm">
        <img src="/assets/icons/cancel.svg"/>
        <p className="ml-2 text-[#AE2929] text-sm">Deleting your assistant is irreversible. You'll lose the content we've gathered, as well as any customized content, and the message logs.</p>
      </div>
    <button className="p-2 bg-[#AE2929] px-6  text-customgray-2 text-sm rounded-sm mt-4">
      Yes, delete assistant
      </button>
    </div>
  </div>
  );
}

export default DeleteOperation;
