"use client"

import { useCallback,useState ,useMemo} from "react"
import { fabric } from "fabric";
import useAutoResize from "./use-auto-resize";
import { BuildEditorProps, CIRCLE_OPTIONS, Editor } from "../types";

const buildEditor = ({canvas}:BuildEditorProps):Editor => {


  const getWorkspace = () => {
    return canvas
    .getObjects()
    .find((object) => object.name === "clip");
  }

  const center =(object:fabric.Object) => {
    const workspace = getWorkspace();
    const center = workspace?.getCenterPoint();
  if(!center)  return
      // @ts-ignore
       canvas._centerObject(object,center);
  }
  
  return {
    addCircle:() => {

      const object = new fabric.Circle({
       ...CIRCLE_OPTIONS

      });
  
      center(object)
      canvas.add(object)
      canvas.setActiveObject(object);
      
      console.log("circle")
    
    },
  }
}

export const useEditor = () => {
  const [canvas ,setCanvas] = useState<fabric.Canvas | null>(null)
  const [container ,setContainer] = useState<HTMLDivElement | null>(null)
  useAutoResize({
    canvas,
    container

  })

  const editor =  useMemo(() => {
    if(canvas) {
     return buildEditor({canvas})
    }
    return undefined
  },[canvas])


    const init = useCallback(({initialCanvas , initialContainer}:{
        initialCanvas:fabric.Canvas;
        initialContainer:HTMLDivElement
    }) => {
      fabric.Object.prototype.set({
        cornerColor: "#fff",
        cornerStrokeColor: "#3b82f6",
        cornerStyle: "circle",
        borderColor: "3b82f6",
        borderScaleFactor: 1.5,
        
        borderOpacityWhenMoving: 1,
        transparentCorners: false,
      });

        const initialWorkSpace = new fabric.Rect({
          width: 900,
          height: 1200,
          name: "clip",
          fill: "white",
          selectable: false,
          hasControls: false,
          shadow: new fabric.Shadow({
            color: "rgba(0,0,0,0.8)",
            blur: 5,
          }),
        });
        initialCanvas.setWidth(initialContainer.offsetWidth);
        initialCanvas.setHeight(initialContainer.offsetHeight);
        initialCanvas.add(initialWorkSpace)
        initialCanvas.centerObject(initialWorkSpace)
        initialCanvas.clipPath = initialWorkSpace
       



        setCanvas(initialCanvas)
        setContainer(initialContainer)

       
    },[])

    return {init,editor}
}