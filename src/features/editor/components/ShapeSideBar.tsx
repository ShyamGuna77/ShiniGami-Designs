


import React from 'react'
import { ActiveTool } from '../types'
import {cn} from '@/lib/utils'

type ShapeSideBarProps = {
    activeTool :ActiveTool;
    onChangeActiveTool: (tool: ActiveTool) => void
}

const ShapeSideBar = ({activeTool,onChangeActiveTool}:ShapeSideBarProps) => {
  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool ===  "shapes" ? "visible" : "hidden"
      )}
    >

   Shapes Side bar

    </aside>
  );
}

export default ShapeSideBar