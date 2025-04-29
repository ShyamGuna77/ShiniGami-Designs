"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useEditor } from "../hooks/use-editor";
import { fabric } from "fabric";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Footer from "./Footer"; 
import { ActiveTool } from "../types";
import ShapeSideBar from "./ShapeSideBar";
export const Editor = () => {
  const [activeTool, setActiveTool] = useState<ActiveTool>("select");

  const onChangeActiveTool = useCallback(
    (tool: ActiveTool) => {
      if (tool === activeTool) {
        return setActiveTool("select");
      }

      if (tool === "draw") {
        // Todo :Enable draw mode
      }

      if (activeTool === "draw") {
        //Todo :Disable draw mode
      }
      setActiveTool(tool);
    },
    [activeTool]
  );

  const canvasRef = useRef(null);
  const workspaceRef = useRef<HTMLDivElement>(null);

  const { init,editor } = useEditor();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });
    init({
      initialCanvas: canvas,
      initialContainer: workspaceRef.current!,
    });

    return () => {
      canvas.dispose();
    };
  }, [init]);
  return (
    <>
      <div className="h-full flex flex-col ">
        <Navbar
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
          <Sidebar
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />

          <ShapeSideBar
          editor = {editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />
          <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
            <Toolbar />
            <div className="flex-1 h-full bg-muted" ref={workspaceRef}>
              <canvas ref={canvasRef} />
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};
