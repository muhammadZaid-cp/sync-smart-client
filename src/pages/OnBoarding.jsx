import React, { useState } from "react";
import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../components/uiComponents/Btn";
import CenteredCard from "../components/uiComponents/centeredCard";
import CustomInput from "../components/uiComponents/InputField";

function OnBoarding() {
  const navigate = useNavigate();
  const [apiLoading, setApiLoading] = useState(false);
  const [form] = Form.useForm();

  const handleContinue = () => {
    console.log("continue");
  };

  return (
    <CenteredCard className="md:w-[45%] w-[90%]">
      <Link to="/">
        <img src="/assets/svgs/logo2.svg" />
      </Link>
      <h3 className="text-2xl font-bold mt-4">Let’s get you onboarded</h3>
      <p className="text-[#898384] md:text-start text-center text-sm mt-2 mb-2">
        AI Assistants created in AssistIQ are powered by Slack. Let’s get you
        setup with Slack.
      </p>
      <div className="flex items-center justify-center text-[#898384] w-full md:px-6 px-2 mb-4">
        <hr className="flex-grow border-gray-300" />
        <p className="text-sm mx-2 whitespace-nowrap">
          It takes less than 2 minutes to setup.
        </p>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="grid grid-cols-2">
        <div className="md:col-span-1 col-span-2 px-4">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleContinue}
            className="w-full"
          >
            <Form.Item
              name="accessToken"
              label="Slack App Configuration Token"
              rules={[
                {
                  required: true,
                  message: "Please input your Access Token!",
                },
              ]}
            >
              <CustomInput
                type="text"
                placeholder="Access token start with xoxe-..."
              />
            </Form.Item>
            <Form.Item
              name="refreshToken"
              label="Slack App Configuration Refresh Token"
              rules={[
                {
                  required: true,
                  message: "Please input your Refresh Token!",
                },
              ]}
            >
              <CustomInput
                type="text"
                placeholder="Refresh token start with xoxe-..."
              />
            </Form.Item>
            <Form.Item className="mb-0">
              <Btn
                type="submit"
                color="primary"
                text="Continue"
                isLoading={apiLoading}
                disabled={true}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="md:col-span-1 col-span-2 text-[#898384] text-sm mt-4 px-4">
          <p className="mb-2">To get your slack app Configuration Tokens:</p>
          <ol className="list-decimal ml-4">
            <li>Go to Slack API Apps page.</li>
            <li>Look for “Your App Configuration Tokens” section</li>
            <li>
              Copy the “Access Token and “Refresh Token” for your workspace.
            </li>
            <li>
              If you don’t see any tokens, you can generate one by clicking
              “Generate Token” button.
            </li>
          </ol>
        </div>
      </div>
      <hr className="mt-8 md:w-[80%] w-[70%] text-[#898384] mx-auto px-12" />
    </CenteredCard>
  );
}

export default OnBoarding;
