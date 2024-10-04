import React, { useState } from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../../components/uiComponents/Btn";
import CustomInput from "../../components/uiComponents/InputField";
import CenteredCard from "../../components/uiComponents/centeredCard";
import CommonFields from "../../components/commonFields";
import { signupUser } from "../../api/auth";

function Signup() {
  const navigate = useNavigate();
  const [apiLoading, setApiLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const handleSignup = async (values) => {
    try {
      setApiLoading(true);
      const { email, password, name } = values;
      const res = await signupUser({ email, password, name });
      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/onboarding");
      }
    } catch (error) {
      form.resetFields();
      messageApi.error(
        error?.response?.data?.message || "Something went wrong",
      );
    } finally {
      setApiLoading(false);
    }
  };

  return (
    <CenteredCard className="w-[355px]">
      {contextHolder}
      <Link to="/">
        <img src="/assets/svgs/logo2.svg" />
      </Link>
      <h3 className="font-bold mt-1 mb-8">Sign Up</h3>

      <Form form={form} onFinish={handleSignup} className="w-full">
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <CustomInput type="text" placeholder="Name" />
        </Form.Item>
        <CommonFields />

        <Form.Item className="mb-0">
          <Btn
            type="submit"
            color="primary"
            text="Continue"
            isLoading={apiLoading}
          />
        </Form.Item>
      </Form>
      <p className="self-start text-sm mt-2">
        Already have an account?{" "}
        <Link to="/auth/signin" className="text-priamry">
          Sign In
        </Link>
      </p>
    </CenteredCard>
  );
}

export default Signup;
