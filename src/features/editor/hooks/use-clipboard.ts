import { fabric } from "fabric";
import { useCallback, useRef } from "react";

interface UseClipboardProps {
  canvas: fabric.Canvas | null;
}

export const useClipboard = ({ canvas }: UseClipboardProps) => {
  const clipboard = useRef<fabric.Object | null>(null);

  const copy = useCallback(() => {
    if (!canvas) return;
    const activeObject = canvas.getActiveObject();
    if (!activeObject) return;

    activeObject.clone((cloned: fabric.Object) => {
      clipboard.current = cloned;
    });
  }, [canvas]);

  const paste = useCallback(() => {
    if (!canvas || !clipboard.current) return;

    clipboard.current.clone((cloned: fabric.Object) => {
      canvas.discardActiveObject();

      // Offset the pasted object slightly
      cloned.set({
        left: (cloned.left || 0) + 10,
        top: (cloned.top || 0) + 10,
        evented: true,
      });

      if (cloned.type === "activeSelection") {
        // Handle multiple selected objects
        (cloned as fabric.ActiveSelection).canvas = canvas;
        (cloned as fabric.ActiveSelection).forEachObject(
          (obj: fabric.Object) => {
            canvas.add(obj);
          }
        );
        cloned.setCoords();
      } else {
        canvas.add(cloned);
      }

      //  clipboard.current.top = (clipboard.current.top || 0) + 10;
      //  clipboard.current.left = (clipboard.current.left || 0) + 10;


      canvas.setActiveObject(cloned);
      canvas.requestRenderAll();
    });
  }, [canvas]);

  return { copy, paste };
};
