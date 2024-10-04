import React, { useState } from "react";
import KnowledgeBaseModal from "../../uiComponents/modals/KnowledgeBaseModal";
import { KNOWLEDGEBASEDATA } from "../../../constants";

function KnowledgeBase() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = (data) => {
    if (data) setSelectedItem(data);
    if (isOpen) setSelectedItem(null);
    setIsOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="flex justify-between px-4 pb-2 border-b border-[#898384]">
        <p className="text-[#433E3F]">Your Knowledge Base</p>
        <button
          onClick={() => toggleModal()}
          className="sm:flex hidden py-1 px-3 rounded-md text-primary border border-[#898384] flex items-center justify-center"
        >
          <img src="/assets/icons/add_icon.svg" className="mr-2" />
          New Knowledge Base
        </button>
      </div>
      {KNOWLEDGEBASEDATA ? (
        <div className="grid grid-cols-3 pt-6">
          {KNOWLEDGEBASEDATA.map((data, index) => (
            <div
              key={data.name + index}
              className="md:w-[90%] shadow-md flex flex-col justify-between w-full bg-white pt-6 h-[12rem] mx-auto lg:col-span-1 col-span-3 pb-4 lg:mt-0 mt-4 mb-6 z-[200] rounded-md"
            >
              <div className="px-6 mt-8">
                <h3 className="font-bold  text-center">{data.name}</h3>
                <p className="text-sm mt-1 text-center capitalize">
                  Type: {data.type}
                </p>
              </div>
              <button
                onClick={() => toggleModal(data)}
                className="flex items-center justify-center text-primary font-semibold border-t-2 mt-2 pt-3"
              >
                <img src="/assets/icons/settings.svg" className="mr-2" />
                Configure
              </button>
            </div>
          ))}
          <div className="md:w-[90%] flex  justify-center items-center w-full  pt-6 h-[12rem] mx-auto lg:col-span-1 border border-dashed border-[#898384] col-span-3 pb-4 lg:mt-0 mt-4 mb-6 z-[200] rounded-md">
            <button
              onClick={() => toggleModal()}
              className="text-center text-sm px-3 py-1 bg-white flex items-center"
            >
              <img src="/assets/icons/add_icon.svg" className="mr-2" />
              Add
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 mt-4 flex flex-col items-center">
          <p className="text-[#433E3F] text-sm mb-3">No Knowledge Base</p>
          <p className="text-[#433E3F] text-sm mb-3">
            Get started by adding a knowledge base.
          </p>
          <button
            onClick={() => toggleModal()}
            className=" py-1 px-3 rounded-md text-primary border mb-2 border-[#898384] flex items-center justify-center"
          >
            <img src="/assets/icons/add_icon.svg" className="mr-2" />
            New Knowledge Base
          </button>
        </div>
      )}
      <KnowledgeBaseModal
        selectedItem={selectedItem}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

export default KnowledgeBase;
