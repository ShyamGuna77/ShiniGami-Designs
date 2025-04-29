"use client ";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Hint } from "@/components/Hint";

import { Separator } from "@/components/ui/separator";
import { MousePointerClick, Undo2, Redo2, ChevronDown } from "lucide-react";

import Logo from "./Logo";

import { Button } from "@/components/ui/button";
import { CiFileOn } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px]">
        <Logo />

        <div className="w-full flex items-center gap-x-1 h-full">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                File
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="min-w-68">
              <DropdownMenuItem
                onClick={() => {}} //Add a function
                className="flex items-center gap-x-2"
              >
                <CiFileOn className="mr-2 h-4 w-4" />
                <div>
                  <p>Open</p>
                  <p className="text-xs text-muted-foreground">
                    Open a JSON File
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Separator orientation="vertical" className="mx-2" />
          <Hint label="select" side="bottom" sideOffset={10}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {}}
              className="gap-x-2"
            >
              <MousePointerClick className="size-4" />
            </Button>
          </Hint>
          <Hint label="undo" side="bottom" sideOffset={10}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {}}
              className="gap-x-2"
            >
              <Undo2 className="size-4" />
            </Button>
          </Hint>

          
          <Hint label="Redo" side="bottom" sideOffset={10}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {}}
              className="gap-x-2"
            >
              <Redo2 className="size-4" />
            </Button>
          </Hint>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
