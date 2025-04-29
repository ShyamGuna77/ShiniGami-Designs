

import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import React from 'react'


type SideBarItemProps = {
    icon: LucideIcon
    label: string
    isActive:boolean
    onClick: () => void
}

const SideBarItem = ({icon:Icon,label,isActive,onClick}: SideBarItemProps) => {
  return (
    <Button variant= "ghost"  onClick={onClick} className={cn('w-full h-full aspect-video p-3 py-4 flex flex-col rounded-none ',isActive && 'bg-muted font-medium text-primary')}>
        <Icon className='size-5 mt-2 stroke-2 shrink-0'/>
        <span className=' text-xs'>{label}</span>
    </Button>
  )
}

export default SideBarItem