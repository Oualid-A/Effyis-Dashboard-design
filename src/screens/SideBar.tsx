import { useEffect, useState } from "react";
import "../index.css";
import {
  HomeOutlined,
  TeamOutlined,
  ShopOutlined,
  AppstoreOutlined,
  ShoppingOutlined, 
  MenuOutlined,
  CloseOutlined
} from "@ant-design/icons";

const navLinks = [
  {
    name: "Dashboard",
    icon: HomeOutlined,
  },
  {
    name: "Products",
    icon: AppstoreOutlined,
  },
  {
    name: "Users",
    icon: TeamOutlined,
  },
  {
    name: "Orders",
    icon: ShoppingOutlined,
  },
  {
    name: "Shopping",
    icon: ShopOutlined,
  },
];

export const SideBar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1400);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex w-64 h-screen border bg-white border-r-1  px-10 py-10 flex-col relative sidebar-transition ${
        collapsed ? "w-[66px] px-4 py-4" : "w-64"
      }`}
    >
      <div
        className="w-5 h-5 bg-[#d23565d1] rounded-full absolute p-3 -right-[10.2px] top-10 flex items-center justify-center text-white"
        onClick={toggleCollapsed}
      >
        {collapsed ? <MenuOutlined /> : <CloseOutlined />}
      </div>
      <div className=" flex items-center justify-center align-middle">
        {collapsed ? (
          <img
            src="https://i0.wp.com/effyisgroup.com/wp-content/uploads/2020/11/cropped-icon-1.png?fit=32%2C32&#038;ssl=1"
            alt="logo"
          />
        ) : (
          <img src="src\assets\effyis-logo.png" alt="logo" />
        )}
      </div>
      <div className="mt-10 flex flex-col space-y-8 ">
        {navLinks.map((item, index) => (
          <div
            className={`flex flex-row items-center space-x-3 font-normal p-2 cursor-pointer text-xl  ${
              activeLink === index
                ? "bg-[#d23565d1] text-white  rounded-md font-semibold"
                : ""
            }`}
            key={index}
            onClick={() => setActiveLink(index)}
          >
            <item.icon />
            {!collapsed && <span>{item.name}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};
