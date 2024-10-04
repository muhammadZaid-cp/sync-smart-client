import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import SidebarMenu from "../sidebar/SidebarMenu";
import { Drawer } from "antd";

export default function LayoutWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  const handletoggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="h-screen overflow-hidden bg-customgray-2">
      <Header authenticated={true} />
      <main className="flex pt-10 lg:w-[85%] md:w-[90%] mx-auto px-4">
        <Drawer
          classNames="md:hidden block bg-customgray-2 overflow-hidden"
          onClose={() => {
            setIsOpen(false);
          }}
          open={isOpen}
          placement="left"
          width={260}
        >
          <SidebarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </Drawer>
        <SidebarMenu className="md:block hidden" />
        <button
          onClick={handletoggle}
          className="md:hidden block absolute top-[6rem]"
        >
          <img src="/assets/icons/toggle-btn.svg" alt="toggle btn" />
        </button>

        <div className="h-screen w-full overflow-scroll px-6 py-[6rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
