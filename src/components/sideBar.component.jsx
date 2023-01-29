import React from "react";
import { HiCode, HiLightBulb, HiOutlineSparkles } from "react-icons/hi";
import { RiBracesLine } from "react-icons/ri";

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}

    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default function SideBar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col 
                    bg-gray-900 text-white shadow-lg"
    >
      <SideBarIcon icon={<HiOutlineSparkles size="28" />} />
      <SideBarIcon icon={<HiCode size="32" />} />
      <SideBarIcon icon={<HiLightBulb size="20" />} />
      <SideBarIcon icon={<RiBracesLine size="20" />} />
    </div>
  );
}
