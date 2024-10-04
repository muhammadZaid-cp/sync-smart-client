import { Checkbox, Form, Select, Input } from "antd";
import React, { useState } from "react";
import CustomInput from "../../uiComponents/InputField";
import Btn from "../../uiComponents/Btn";

function Settings() {
  const [apiLoading, setApiLoading] = useState(false);
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const handleContinue = () => {
    console.log("hello");
  };

  const options1 = [
    { option: "Text", value: 10 },
    { option: "file", value: 20 },
    { option: "image", value: 130 },
  ];

  return (
    <div className="pb-8">
      <p className="text-[#433E3F] w-full px-4 pb-2 border-b border-[#898384]">
        Settings
      </p>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleContinue}
        className="w-full mt-4"
      >
        <div className="p-4 bg-white rounded-md mt-4">
          <p className="text-[#433E3F] text-sm mb-3">Assistant Details</p>

          <Form.Item
            name="operations"
            label="Assistant Name"
            rules={[
              {
                required: true,
                message: "Please input your Assistant Name.!",
              },
            ]}
          >
            <CustomInput type="text" placeholder="Operations" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Assistant Description"
            rules={[
              {
                required: true,
                message: "Please input your Assistant Description.!",
              },
            ]}
          >
            <CustomInput type="text" placeholder="Help streamline processes." />
          </Form.Item>
        </div>
        <div className="p-4 bg-white rounded-md mt-4">
          <p className="text-[#433E3F] text-sm mb-3">Capabilities</p>
          <div className="flex">
            <Checkbox />
            <p className="ml-2">Enable search if the assistant doesn’t know</p>
          </div>
          <p className="text-[#898384] mt-1 mb-3">
            If this option is checked, the assistant will try to answer the
            question based on a search engine result.
          </p>
          <Form.Item
            name="restrict"
            label="Restrict search results to these domains (Leave empty to allow all domains)"
          >
            <CustomInput type="text" placeholder="Operations" />
          </Form.Item>
          <div className="flex">
            <Checkbox />
            <p className="ml-2">
              Enable AI to rewrite and expand on the user input
            </p>
          </div>
          <p className="text-[#898384] mt-1 mb-3">
            If this option is checked, the assistant will try to answer the
            question based on a search engine result.
          </p>
        </div>

        <div className="p-4 bg-white rounded-md mt-4">
          <p className="text-[#433E3F] text-sm mb-3">Narrative</p>
          <Form.Item
            name="operations"
            label="Point of view"
            rules={[
              {
                required: true,
                message: "Please input your Assistant Name.!",
              },
            ]}
          >
            <Select
              size="large"
              placeholder="Select an Option"
              options={options1}
            />
          </Form.Item>
          <Form.Item
            name="personality"
            label="Personality"
            rules={[
              {
                required: true,
                message: "Please input your Assistant Description.!",
              },
            ]}
          >
            <CustomInput type="text" placeholder="Help streamline processes." />
          </Form.Item>
        </div>

        <div className="p-4 bg-white rounded-md mt-4">
          <p className="text-[#433E3F] text-sm mb-3">System Prompt</p>
          <div className="p-4 bg-[#E1E3F4] flex rounded-sm my-3">
            <img src="/assets/icons/info.svg" />
            <p className="ml-2 text-primary text-sm">
              Operation is already on your workspace
            </p>
          </div>
          <Form.Item
            name="operations"
            label="System Prompt"
            rules={[
              {
                required: true,
                message: "Please input your Assistant Name.!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </div>

        <div className="p-4 bg-white rounded-md mt-4">
          <p className="text-[#433E3F] text-sm mb-3">Instruction Prompt</p>
          <div className="p-4 bg-[#E1E3F4] flex rounded-sm my-3">
            <img src="/assets/icons/info.svg" />
            <p className="ml-2 text-primary text-sm">
              Instructions are sent as part of every query from the user
            </p>
          </div>
          <Form.Item
            name="operations"
            label="Instruction Prompt"
            rules={[
              {
                required: true,
                message: "Please input your Assistant Name.!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </div>

        <div className="p-4 bg-white rounded-md mt-4">
          <p className="text-[#433E3F] text-sm mb-3">
            Start conversations with the following message
          </p>
          <div className="p-4 bg-[#E1E3F4] flex rounded-sm my-3">
            <img src="/assets/icons/info.svg" />
            <p className="ml-2 text-primary text-sm">
              You can leave this blank if you do not want to send the message
              first
            </p>
          </div>
          <Form.Item
            name="operations"
            label="Initial conversation starter"
            rules={[
              {
                required: true,
                message: "Please input your Assistant Name.!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </div>

        <Form.Item className="mb-0 ml-auto mt-10 w-[8rem] self-end">
          <Btn
            type="submit"
            color="primary"
            text="Save"
            isLoading={apiLoading}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default Settings;
