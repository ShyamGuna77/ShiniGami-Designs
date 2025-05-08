/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActiveTool, Editor, filters } from "../types";
import { ToolSidebarClose } from "./ToolSideBarclose";
import { ToolSidebarHeader } from "./ToolSideBarHeader";
import { fabric } from "fabric";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface FilterSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const FilterSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: FilterSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };

  const activeObject = editor?.canvas.getActiveObject() as fabric.Image;

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "filter" ? "visible" : "hidden"
      )}
    >
      <ToolSidebarHeader
        title="Filters"
        description="Apply a filter to selected image"
      />
      <ScrollArea className="h-[calc(100%-120px)]">
        <div className="p-4 space-y-1 border-b">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant="secondary"
              size="lg"
              className={cn(
                "w-full h-16 justify-start text-left",
                activeObject?.filters?.some((f: any) => f.type === filter) &&
                  "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
              onClick={() => editor?.changeImageFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
