import { Form } from "antd";
import React, {useState} from "react";
import CustomInput from "../../uiComponents/InputField";
import Btn from "../../uiComponents/Btn";

function Settings() {

  const [apiLoading, setApiLoading] = useState(false);
  const [form] = Form.useForm();

  const handleContinue = () => {
    console.log('hello')
  }
  return (
    <div>
      <p className="text-[#433E3F] w-full px-4 pb-2 border-b border-[#898384]">Settings</p>
      <div className="p-4 bg-white rounded-md mt-4">
      <p className="text-[#433E3F] text-sm mb-3">Assistant Details</p>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleContinue}
        className="w-full mt-4"
      >
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
      

        <Form.Item className="mb-0 ml-auto w-[8rem] self-end">
          <Btn
            type="submit"
            color="primary"
            text="Save"
            isLoading={apiLoading}
          />
        </Form.Item>
      </Form>
      </div>
    </div>
  );
}

export default Settings;
