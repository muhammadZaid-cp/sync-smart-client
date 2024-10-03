import React, { useState } from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../../components/uiComponents/Btn";
import CustomInput from "../../components/uiComponents/InputField";
import CenteredCard from "../../components/uiComponents/centeredCard";
import CommonFields from "../../components/commonFields";

function Signup() {
  const navigate = useNavigate();
  const [apiLoading, setApiLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const handleLogin = async (values) => {
    try {
      setApiLoading(true);
      const { email, password } = values;
      //   const res = await loginUser({ email, password });
      let accessToken = true;
      if (accessToken) {
        // localStorage.setItem("token", res.accessToken);
        navigate("/dashboard");
        //   localStorage.setItem("currentUser", JSON.stringify(currentUser));
      }
    } catch (error) {
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
      <Link to="/">
        <img src="/assets/svgs/logo2.svg" />
      </Link>
      <h3 className="font-bold mt-1 mb-8">Sign Up</h3>

      <Form form={form} onFinish={handleLogin} className="w-full">
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
