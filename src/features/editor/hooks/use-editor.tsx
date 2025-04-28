"use client"

import { useCallback } from "react"
import { fabric } from "fabric";

export const useEditor = () => {
    const init = useCallback(({initialCanvas , initialContainer}:{
        initialCanvas:fabric.Canvas;
        initialContainer:HTMLDivElement
    }) => {

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
        initialCanvas.renderAll()
    },[])

    return {init}
}