import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex fixed flex-col w-[280px] md:w-[300px] left-0 shrink-0 h-full bg-white/80 backdrop-blur-sm border-r">
      <Logo />
      <SidebarRoutes />
    </aside>
  );
};
