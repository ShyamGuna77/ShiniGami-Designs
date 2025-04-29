"use client"
import { useEffect,useRef } from "react";
import { useEditor } from "../hooks/use-editor"
import { fabric } from "fabric";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Footer from "./Footer";
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


         return () => {
          canvas.dispose();
         }
      
    },[init])
    return (
      <>
        <div className="h-full flex flex-col ">
          <Navbar />
          <div className="absolute h-[calc(100vh-68px)] w-full top-[68px] flex">
            <Sidebar />
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
}