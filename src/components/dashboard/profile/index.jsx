import { Form } from "antd";
import React, {useState} from "react";
import CustomInput from "../../uiComponents/InputField";
import Btn from "../../uiComponents/Btn";

function Profile() {

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
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your Name.!",
            },
          ]}
        >
          <CustomInput type="text" placeholder="John Doe" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email.!",
            },
          ]}
        >
          <CustomInput type="email" placeholder="Email@company.com" />
        </Form.Item>

        <Form.Item
          name="accessToken"
          label="Slack App Configuration Token"
          rules={[
            {
              required: true,
              message: "Please input your Access Token.!",
            },
          ]}
        >
          <CustomInput type="text" placeholder="XXXXXXXXXXXXXXXXXXXXXXXX" />
        </Form.Item>
        <Form.Item
          name="refreshToken"
          label="Slack App Configuration Refresh Token"
          rules={[
            {
              required: true,
              message: "Please input your refresh token.!",
            },
          ]}
        >
          <CustomInput type="text" placeholder="XXXXXXXXXXXXXXXXXXXXXXXX" />
        </Form.Item>
        <div className="flex my-8 cursor-pointer">
        <img src="/assets/icons/open_in_new_blue.svg"/>
      <p className="ml-2 text-sm text-[#3E44A3]">CLICK HERE TO ISSUE NEW SLACK CONFIGURATION TOKEN</p>
      </div>

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

export default Profile;
