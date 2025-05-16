import { UserButton } from "@/features/auth/components/user-button";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center p-3 md:p-4 h-[60px] md:h-[68px] border-b bg-white/80 backdrop-blur-sm">
      <div className="ml-auto">
        <UserButton />
      </div>
    </nav>
  );
};
