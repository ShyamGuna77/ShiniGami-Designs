"use client"
import { useEffect,useRef } from "react";
import { useEditor } from "../hooks/use-editor"
import { fabric } from "fabric";
export const Editor  = () => {
    const canvasRef = useRef(null)
    const workspaceRef  = useRef<HTMLDivElement>(null)

    const {init} = useEditor() ;

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current,{
            controlsAboveOverlay:true,
            preserveObjectStacking:true
        }) 
         init({
            initialCanvas : canvas,
            initialContainer : workspaceRef.current!,
         })
    },[init])
    return (
      <>
        <div className="h-full flex flex-col ">
          <div className="flex-1 h-full bg-muted" ref={workspaceRef}>
            <canvas ref={canvasRef} />
          
          </div>
        </div>
      </>
    );
}