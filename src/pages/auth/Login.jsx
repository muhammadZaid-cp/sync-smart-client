import React, { useState } from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../../components/uiComponents/Btn";
import CommonFields from "../../components/commonFields";
import CenteredCard from "../../components/uiComponents/centeredCard";
import { loginUser } from "../../api/auth";

function Signin() {
  const navigate = useNavigate();
  const [apiLoading, setApiLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const handleSignup = async (values) => {
    try {
      setApiLoading(true);
      const { name, email, password } = values;
      const res = await loginUser({ name, email, password });
      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      form.resetFields();
      messageApi.error(
        error?.response?.data?.message || "Invalid Email or Password",
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
      <h3 className="font-bold mt-1 mb-8">Sign In</h3>

      <Form form={form} onFinish={handleSignup} className="w-full">
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
        Don’t have an account?{" "}
        <Link to="/auth/signup" className="text-priamry">
          Sign Up
        </Link>
      </p>
    </CenteredCard>
  );
}

export default Signin;
