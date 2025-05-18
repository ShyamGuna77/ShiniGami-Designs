/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import debounce from "lodash.debounce";
import { useCallback, useEffect, useRef, useState } from "react";
import { useEditor } from "../hooks/use-editor";
import { fabric } from "fabric";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";
import { Toolbar } from "./Toolbar";
import Footer from "./Footer";
import { ActiveTool, selectionDependentTools } from "../types";
import ShapeSideBar from "./ShapeSideBar";
import { FillColorSidebar } from "./FillColorSideBar";
import { StrokeColorSidebar } from "./SrokeColorSidebar";
import { StrokeWidthSidebar } from "./StrokeWidthSidebar";
import { OpacitySidebar } from "./OpactitySidebar";
import { TextSidebar } from "./TextSidebar";
import { FontSidebar } from "./FontSidebar";
import { ImageSidebar } from "./ImageSidebar";
import { FilterSidebar } from "./FilterSidebar";
import { AiSidebar } from "./AisideBar";
import { RemoveBgSidebar } from "./Removebg";
import { DrawSidebar } from "./DrawSidebar";
import { SettingsSidebar } from "./SettingsSidebar";
import { TemplateSidebar } from "./TemplateSidebar";
import { useUpdateProject } from "@/features/projects/api/use-update-project";
import { ResponseType } from "@/features/projects/api/use-get-project";

interface EditorProps {
  initialData: ResponseType["data"];
}

export const Editor = ({ initialData }: EditorProps) => {
  const { mutate } = useUpdateProject(initialData.id);
  const [activeTool, setActiveTool] = useState<ActiveTool>("select");

  const onClearSelection = useCallback(() => {
    if (selectionDependentTools.includes(activeTool)) {
      setActiveTool("select");
    }
  }, [activeTool]);

  const debouncedSave = useCallback(
    debounce((values: { json: string; height: number; width: number }) => {
      mutate(values);
    }, 500),
    [mutate]
  );

  const canvasRef = useRef(null);
  const workspaceRef = useRef<HTMLDivElement>(null);

  const { init, editor } = useEditor({
    defaultState: initialData.json,
    defaultWidth: initialData.width,
    defaultHeight: initialData.height,
    clearSelectionCallback: onClearSelection,
    saveCallback: debouncedSave,
  });

  const onChangeActiveTool = useCallback(
    (tool: ActiveTool) => {
      if (tool === "draw") {
        editor?.enableDrawingMode();
      }

      if (activeTool === "draw") {
        editor?.disableDrawingMode();
      }

      if (tool === activeTool) {
        return setActiveTool("select");
      }

      setActiveTool(tool);
    },
    [activeTool, editor]
  );

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
      <div className="h-full flex flex-col bg-gray-300">
        <Navbar
          id={initialData.id}
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
          <Sidebar
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />

          <ShapeSideBar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />

          <FillColorSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />
          <StrokeColorSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />
          <StrokeWidthSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />

          <OpacitySidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />
          <TextSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />

          <FontSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />

          <ImageSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />

          <TemplateSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />

          <FilterSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />

          <AiSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />
          <RemoveBgSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />
          <DrawSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />
          <SettingsSidebar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />

          <main className="bg-gray-100 flex-1 overflow-auto relative flex flex-col">
            <Toolbar
              editor={editor}
              activeTool={activeTool}
              onChangeActiveTool={onChangeActiveTool}
              key={JSON.stringify(editor?.canvas.getActiveObject())}
            />
            <div
              className="flex-1 h-full bg-gray-100 p-4 overflow-auto"
              ref={workspaceRef}
            >
              <div className="w-full h-full rounded-lg shadow-lg bg-white border border-gray-200">
                <canvas ref={canvasRef} />
              </div>
            </div>
            <Footer editor={editor} />
          </main>
        </div>
      </div>
    </>
  );
};
