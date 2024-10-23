import React from "react";
import { deleteAssistant } from "../../../api/assistant";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

function DeleteOperation() {
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage();
  const assistant = JSON.parse(localStorage.getItem("assistant"))
  const handleDeleteAssistant = () => {
    deleteAssistant({ id: assistant.id }).then((res) => {
      if (res.message === "Assistant deleted successfully") {
        messageApi.success("Assistant deleted successfully")
        navigate("/home")
      }
    }).catch((err) => {
      console.warn(err)
    })
  }
  return (
    <div>
      {contextHolder}
      <p className="text-[#433E3F] w-full px-4 pb-2 border-b border-[#898384]">
        Delete Assistant
      </p>
      <div className="p-4 bg-white rounded-md mt-4">
        <p className="text-[#433E3F] text-sm my-3 mb-5">System Prompt</p>
        <div className="p-4 bg-[#F2C9C9] flex rounded-sm">
          <img src="/assets/icons/cancel.svg" />
          <p className="ml-2 text-[#AE2929] text-sm">
            Deleting your assistant is irreversible. You'll lose the content
            we've gathered, as well as any customized content, and the message
            logs.
          </p>
        </div>
        <button className="p-2 bg-[#AE2929] px-6  text-customgray-2 text-sm rounded-sm mt-4" onClick={handleDeleteAssistant}>
          Yes, delete assistant
        </button>
      </div>
    </div>
  );
}

export default DeleteOperation;
