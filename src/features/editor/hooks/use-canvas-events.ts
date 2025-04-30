
import { fabric } from "fabric";
import { useEffect } from "react";
interface CanvasEventsProps {
    canvas: fabric.Canvas | null;
    container: HTMLDivElement | null;
    setSelectedObjects: (objects: fabric.Object[]) => void;
}




export const useCanvasEvents = ({canvas,container,setSelectedObjects}:CanvasEventsProps) => {

    useEffect(() => {
        if (!canvas || !container) {
            return;
        }

        if(canvas) {
            canvas.on("selected :created", (e) => {
                setSelectedObjects(e.selected || []);
            });
              canvas.on("selected :updated", (e) => {
                setSelectedObjects(e.selected || []);
              });
                canvas.on("selected :cleared", () => {
                  setSelectedObjects( []);
                });
        }

},[
    canvas,
    setSelectedObjects,
    container               // noo need to add these just a wierd bug bug
])
}