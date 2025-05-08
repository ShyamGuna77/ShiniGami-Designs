import { IoTriangle } from "react-icons/io5";
import { FaDiamond } from "react-icons/fa6";
import { FaCircle, FaSquare, FaSquareFull } from "react-icons/fa";
import React from "react";
import { ActiveTool, Editor } from "../types";
import { cn } from "@/lib/utils";
import { ToolSidebarHeader } from "./ToolSideBarHeader";
import { ToolSidebarClose } from "./ToolSideBarclose";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShapeTool } from "./ShapeTools";
type ShapeSideBarProps = {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
};

const ShapeSideBar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: ShapeSideBarProps) => {
  const onclose = () => {
    onChangeActiveTool("select");
  };
  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "shapes" ? "visible" : "hidden"
      )}
    >
      <ToolSidebarHeader
        title="Shapes"
        description="Add Some Shapes to Your Canvas "
      />
      <ScrollArea>
        <div className="grid grid-cols-3 gap-4 p-4">
          <ShapeTool onClick={() => editor?.addCircle()} icon={FaCircle} />

          <ShapeTool
            onClick={() => editor?.addSoftRectangle()}
            icon={FaSquare}
          />
          <ShapeTool
            onClick={() => editor?.addRectangle()}
            icon={FaSquareFull}
          />
          <ShapeTool onClick={() => editor?.addTriangle()} icon={IoTriangle} />

          <ShapeTool
            onClick={() => editor?.addInverseTriangle()}
            icon={IoTriangle}
            iconClassName="rotate-180"
          />
          <ShapeTool onClick={() => editor?.addDiamond()} icon={FaDiamond} />
        </div>
      </ScrollArea>

      <ToolSidebarClose onClick={onclose} />
    </aside>
  );
};

export default ShapeSideBar;
