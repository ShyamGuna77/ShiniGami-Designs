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
import { BsCloudCheck } from "react-icons/bs";

import { Separator } from "@/components/ui/separator";
import { MousePointerClick, Undo2, Redo2, ChevronDown , Download } from "lucide-react";

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
          <Hint label="Undo" side="bottom" sideOffset={10}>
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

          <Separator orientation="vertical" className="mx-2" />
          <div className="flex items-center gap-x-2">
            <BsCloudCheck className="mr-2 h-4 w-4" />
            <div className="text-xs text-muted-foreground">Saved</div>
          </div>

          <div className="ml-auto flex items-center gap-x-4">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  Export
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-68">
                <DropdownMenuItem
                  className="flex items-center gap-x-2"
                  onClick={() => {}}
                >
                  <CiFileOn className="mr-2 h-4 w-4" />
                  <div>
                    <p>JSON</p>
                    <p className="text-xs text-muted-foreground">
                      Save for later Editing
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-x-2"
                  onClick={() => {}}
                >
                  <CiFileOn className="mr-2 h-4 w-4" />
                  <div>
                    <p>PNG</p>
                    <p className="text-xs text-muted-foreground">
                      Best for Sharing on the Website
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-x-2"
                  onClick={() => {}}
                >
                  <CiFileOn className="mr-2 h-4 w-4" />
                  <div>
                    <p>Jpeg</p>
                    <p className="text-xs text-muted-foreground">
                      Best for Printing
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-x-2"
                  onClick={() => {}}
                >
                  <CiFileOn className="mr-2 h-4 w-4" />
                  <div>
                    <p>SVG</p>
                    <p className="text-xs text-muted-foreground">
                      Best for editing in vector software
                    </p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        {/* Add Todo Button  */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
