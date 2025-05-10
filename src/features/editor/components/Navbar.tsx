"use client ";


import { useFilePicker } from "use-file-picker";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { ActiveTool,Editor } from "../types";

import { Hint } from "@/components/Hint";
import { BsCloudCheck } from "react-icons/bs";

import { Separator } from "@/components/ui/separator";
import { MousePointerClick, Undo2, Redo2, ChevronDown , Download } from "lucide-react";

import Logo from "./Logo";

import { Button } from "@/components/ui/button";
import { CiFileOn } from "react-icons/ci";



interface NavbarProps {
 
 editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
};

const Navbar = ({editor,activeTool,onChangeActiveTool} :NavbarProps) => {
  const {openFilePicker} = useFilePicker({
    accept: [".json",".png",".jpg",".jpeg",".svg"],
    onFilesSuccessfullySelected: ({plainFiles}:any) => {
      if(plainFiles && plainFiles.length > 0){
        const file = plainFiles[0];
        const reader = new FileReader();
        reader.readAsText(file,"UTF-8");
        reader.onload = () => {
          editor?.loadJson(reader.result as string);
      };
    }
  }
}
  )

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
                onClick={() => openFilePicker()} //Add a function
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
              onClick={() => onChangeActiveTool("select")}
              className= {cn("gap-x-2",activeTool === "select" && "bg-slate-200 text-primary")}
            >
              <MousePointerClick className="size-4" />
            </Button>
          </Hint>
          <Hint label="Undo" side="bottom" sideOffset={10}>
            <Button
            disabled={!editor?.onUndo}
              variant="ghost"
              size="icon"
              onClick={() => {editor?.onUndo()}}
              className="gap-x-2"
            >
              <Undo2 className="size-4" />
            </Button>
          </Hint>

          <Hint label="Redo" side="bottom" sideOffset={10}>
            <Button
            disabled={!editor?.onRedo()}
              variant="ghost"
              size="icon"
              onClick={() => {editor?.onRedo()}}
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
                  onClick={() => editor?.saveJson()}
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
                  onClick={() => editor?.savePng()}
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
                  onClick={() => editor?.saveJpg()}
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
                  onClick={() => editor?.saveSvg()}
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
