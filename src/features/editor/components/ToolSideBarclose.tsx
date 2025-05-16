import { ChevronsLeft } from "lucide-react";

interface ToolSidebarCloseProps {
  onClick: () => void;
}

export const ToolSidebarClose = ({ onClick }: ToolSidebarCloseProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute -right-[1.80rem] h-[70px] bg-white top-1/2 transform -translate-y-1/2 flex items-center justify-center rounded-r-xl px-1 pr-2 border-r border-y border-gray-200 shadow-sm hover:bg-gray-50 transition-colors group"
    >
      <ChevronsLeft className="size-4 text-gray-600 group-hover:text-gray-900 transition-colors" />
    </button>
  );
};
