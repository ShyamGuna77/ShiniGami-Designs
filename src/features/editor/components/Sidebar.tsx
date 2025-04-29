"use client";

import React from "react";
import {SideBarItem} from "./SideBarItem";
import {
  Palette,
  ImageIcon,
  Pencil,
 
  Settings,
  Shapes,
  Type,
  Sparkles,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-white flex flex-col w-[100px] h-full border-r overflow-y-auto">
      <ul className="flex flex-col">
        <SideBarItem
          icon={Palette}
          label="Design"
          isActive={false}
          onClick={() => {}}
        />

        <SideBarItem
          icon={ImageIcon}
          label="Image"
          isActive={false}
          onClick={() => {}}
        />
        <SideBarItem
          icon={Type}
          label="Text"
          isActive={false}
          onClick={() => {}}
        />
        <SideBarItem
          icon={Shapes}
          label="Shapes"
          isActive={false}
          onClick={() => {}}
        />
        <SideBarItem
          icon={Pencil}
          label="Draw"
          isActive={false}
          onClick={() => {}}
        />
        <SideBarItem
          icon={Sparkles}
          label="AI"
          isActive={false}
          onClick={() => {}}
        />

        <SideBarItem
          icon={Settings}
          label="Settings"
          isActive={false}
          onClick={() => {}}
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
