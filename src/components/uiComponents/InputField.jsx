import React from "react";
import { Input } from "antd";

export default function CustomInput({ type, placeholder, onChange, disable }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <>
      {type !== "password" ? (
        <Input
          disabled={disable}
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
          className="w-full px-3 py-2 text-gray-800 bg-white outline-none border border-customgray-1 focus:border-indigo-600 shadow-sm rounded-sm"
        />
      ) : (
        <Input.Password
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
          className="w-full px-3 py-2 text-gray-800 bg-white outline-none border border-customgray-1 focus:border-indigo-600 shadow-sm rounded-sm"
        />
      )}
    </>
  );
}
