import { Form, message } from "antd";
import React, { useEffect, useState } from "react";
import CustomInput from "../../uiComponents/InputField";
import Btn from "../../uiComponents/Btn";
import { getTokens, updateTokens } from "../../../api/token";
import { useNavigate } from "react-router-dom";

function Tokens() {
  const [apiLoading, setApiLoading] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchTokens = async () => {
      const res = await getTokens()
      form.setFieldsValue({
        slackToken: res.data.slackToken,
        slackRefreshToken: res.data.slackRefreshToken,
      })
    }
    fetchTokens()
  }, [])

  const handleClick = () => {
    window.open("https://slack.com/api/apps", "_blank");
  };

  const handleContinue = async (values) => {
    try {
      setApiLoading(true);
      const { slackToken, slackRefreshToken } = values;
      const res = await updateTokens({ slackToken, slackRefreshToken });
      console.log(res);
      if (res.message === "Tokens updated successfully") {
        messageApi.success("Tokens updated successfully");
      }
    } catch (error) {
      messageApi.error(
        error?.response?.data?.message || "Something went wrong",
      );
      form.resetFields();
    } finally {
      setApiLoading(false);
    }
  };
  return (
    <div>
      {contextHolder}
      <p className="text-[#433E3F] w-full px-4 pb-2 border-b border-[#898384]">
        Profile Information
      </p>
      <div className="p-4 bg-white rounded-md mt-4">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleContinue}
          className="w-full"
        >
          <Form.Item
            name="slackToken"
            label="Slack App Configuration Token"
            rules={[
              {
                required: true,
                message: "Please input your Access Token.!",
              },
            ]}
          >
            <CustomInput name="slackToken" type="text" placeholder="XXXXXXXXXXXXXXXXXXXXXXXX" />
          </Form.Item>
          <Form.Item
            name="slackRefreshToken"
            label="Slack App Configuration Refresh Token"
            rules={[
              {
                required: true,
                message: "Please input your refresh token.!",
              },
            ]}
          >
            <CustomInput name="slackRefreshToken" type="text" placeholder="XXXXXXXXXXXXXXXXXXXXXXXX" />
          </Form.Item>
          <div className="flex my-8 cursor-pointer" onClick={handleClick}>
            <img src="/assets/icons/open_in_new_blue.svg" />
            <p className="ml-2 text-sm text-[#3E44A3]">
              CLICK HERE TO ISSUE NEW SLACK CONFIGURATION TOKEN
            </p>
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

export default Tokens;
