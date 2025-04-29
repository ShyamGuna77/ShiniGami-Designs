


import React from 'react'
import { ActiveTool } from '../types'

type ShapeSideBarProps = {
    activeTool :ActiveTool;
    onChangeActiveTool: (tool: ActiveTool) => void
}

const ShapeSideBar = ({activeTool,onChangeActiveTool}:ShapeSideBarProps) => {
  return (
    <div>ShapeSideBar</div>
  )
}

export default ShapeSideBar