import { Form } from "antd";
import React, {useState} from "react";
import CustomInput from "../../uiComponents/InputField";
import Btn from "../../uiComponents/Btn";

function Password() {
  const [apiLoading, setApiLoading] = useState()
  const [form] = Form.useForm();

  const handleContinue = () => {
    console.log('hell')
  }
  return (
    <div>
    <p className="text-[#433E3F] w-full px-4 pb-2 border-b border-[#898384]">Profile Information</p>
    <div className="p-4 bg-white rounded-md mt-4">
    <Form
      form={form}
      layout="vertical"
      onFinish={handleContinue}
      className="w-full"
    >
      <Form.Item
        name="passwordCurrent"
        label="Current Password"
        rules={[
          {
            required: true,
            message: "Please input your current password.!",
          },
        ]}
      >
        <CustomInput type="text" placeholder="Alaajs12@" />
      </Form.Item>
      <Form.Item
        name="newPassword"
        label="New Password"
        rules={[
          {
            required: true,
            message: "Please input your New Password.!",
          },
        ]}
      >
        <CustomInput type="text" placeholder="Johnnny312" />
      </Form.Item>

      <Form.Item
        name="retypePassword"
        label="Retype Password"
        rules={[
          {
            required: true,
            message: "Please input your Retype Password.!",
          },
        ]}
      >
        <CustomInput type="text" placeholder="Johnnny312" />
      </Form.Item>
 
      <Form.Item className="mb-0 ml-auto w-[8rem] self-end">
        <Btn
          type="submit"
          color="primary"
          text="Save Changes"
          isLoading={apiLoading}
        />
      </Form.Item>
    </Form>
   
    </div>
  </div>
  );
}

export default Password;
