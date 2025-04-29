"use client";

import React from "react";
import SideBarItem from "./SideBarItem";
import { Palette } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-white flex flex-col w-[100px] h-full border-r overflow-y-auto">
      <ul className="flex flex-col">
        <SideBarItem
          icon={Palette}
          label="Design"
          isActive={true}
          onClick={() => {}}
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
