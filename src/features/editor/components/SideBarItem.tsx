import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}: SidebarItemProps) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "w-full h-14 px-2 py-1 flex items-center justify-center flex-col rounded-none",
        isActive && "bg-slate-200 text-primary"
      )}
    >
      <Icon className="size-5 stroke-2 shrink-0" />
      <span className="text-xs">{label}</span>
    </Button>
  );
};
