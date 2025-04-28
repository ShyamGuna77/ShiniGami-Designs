import React, { useEffect,useCallback } from 'react'



interface UseAutoSizeProps {
    canvas: fabric.Canvas | null;
    container: HTMLDivElement|null
}
const useAutoResize = ({canvas,container}:UseAutoSizeProps) => {
    const autoZoom  = useCallback(() => {
        if(!canvas || !container) {
            return
        }

        const width = container.offsetWidth;
        const height = container.offsetHeight;
        canvas.setWidth(width);
        canvas.setHeight(height);
        const 

    },[])

    useEffect(() => {
        let resizeObserver: ResizeObserver |null = null;
        if(canvas && container){
            resizeObserver = new ResizeObserver(() => {
                autoZoom()
                console.log("resized")
               
            })
            resizeObserver.observe(container)
        }
        return () => {
            if(resizeObserver){
                resizeObserver.disconnect()
            }
        }

 },[canvas,container,autoZoom])
 
}

export default useAutoResize