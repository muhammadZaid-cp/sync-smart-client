import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";

function Header({ authenticated }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const items = [
    {
      label: <Link to="/account">Account</Link>,
      key: "0",
    },
    {
      label: <button onClick={handleLogout}>Logout</button>,
      key: "1",
    },
  ];

  return (
    <div className="fixed flex justify-between items-center bg-white w-full h-[60px] px-6 py-3 z-[300]">
      <div className="flex items-center">
        <Link to="/home">
          <img src="/assets/svgs/logo.svg" />
        </Link>
        {authenticated && (
          <Link
            to="/home"
            className="px-6 py-2 sm:block hidden  border-l-2 ml-6"
          >
            <span className="bg-[#C4C6E9] px-3 py-1 rounded-md">
              AI Assistant
            </span>
          </Link>
        )}
      </div>
      {!authenticated ? (
        <Link
          to="/auth/signin"
          className="bg-primary text-customgray-2 rounded-sm px-3 py-1"
        >
          Sign in
        </Link>
      ) : (
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <div className="flex items-center pointer-cursor">
            <img src="/assets/icons/user-icon.svg" />
            <p className="ml-2">John Doe</p>
          </div>
        </Dropdown>
      )}
    </div>
  );
}

export default Header;
