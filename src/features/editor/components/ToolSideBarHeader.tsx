interface ToolSidebarHeaderProps {
  title: string;
  description?: string;
}

export const ToolSidebarHeader = ({
  title,
  description,
}: ToolSidebarHeaderProps) => {
  return (
    <div className="p-4 border-b border-gray-200 space-y-1 h-[68px] bg-white shadow-sm">
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      {description && <p className="text-xs text-gray-500">{description}</p>}
    </div>
  );
};
