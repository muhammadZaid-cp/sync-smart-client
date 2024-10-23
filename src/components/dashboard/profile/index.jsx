import { Form, message } from "antd";
import React, { useState } from "react";
import CustomInput from "../../uiComponents/InputField";
import Btn from "../../uiComponents/Btn";
import { updateUser } from "../../../api/auth";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [apiLoading, setApiLoading] = useState();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleContinue = async (values) => {
    try {
      setApiLoading(true);
      const { name } = values;
      const res = await updateUser({ name });
      if (res.message === "user updated successfully") {
        user.name = res.user.name
        localStorage.setItem('user', JSON.stringify(user))
        messageApi.success("User updated successfully")
      }
    } catch (error) {
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
          initialValues={user}
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
            <CustomInput name="name" type="text" placeholder="John Doe" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
          >
            <CustomInput
              disable={true}
              type="email"
              placeholder={`${user.email}`}
            />
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

export default Profile;
