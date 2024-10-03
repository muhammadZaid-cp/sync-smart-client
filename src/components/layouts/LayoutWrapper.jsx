import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import SidebarMenu from "../sidebar/SidebarMenu";
import { Drawer } from "antd";

export default function LayoutWrapper() {
  const [isOpen, setIsOpen] = useState(true);

  const handletoggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="h-screen overflow-hidden bg-customgray-2">
      <Header authenticated={true} />
      <main className="flex pt-10 mt-4 lg:w-[85%] md:w-[90%] mx-auto px-4">
        <Drawer
          classNames="md:hidden block bg-customgray-2 "
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
        <button onClick={handletoggle} className="md:hidden block pt-10">
          <img src="/assets/icons/toggle-btn.svg" alt="toggle btn" />
        </button>

        <div className="h-full overflow-scroll px-6 pt-10 pb-[6rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
