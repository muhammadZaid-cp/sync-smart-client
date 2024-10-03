import React from "react";
import { Form } from "antd";
import CustomInput from "./uiComponents/InputField";

function CommonFields() {
  return (
    <>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <CustomInput type="email" placeholder="Email address" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <CustomInput type="password" placeholder="Password" />
      </Form.Item>
    </>
  );
}

export default CommonFields;
