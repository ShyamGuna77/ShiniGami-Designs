import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  onClick,
}: SidebarItemProps) => {
  return (
    <Link href={href} onClick={onClick}>
      <div
        className={cn(
          "flex items-center px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-transparent hover:bg-gray-100 transition-all duration-200",
          isActive && "bg-gray-100 shadow-sm"
        )}
      >
        <Icon className="size-4 mr-2 md:mr-3 stroke-[1.5]" />
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
    </Link>
  );
};
