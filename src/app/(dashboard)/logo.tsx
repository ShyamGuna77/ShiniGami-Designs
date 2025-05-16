import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Space_Grotesk({
  weight: ["700"],
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-3 hover:opacity-75 transition h-[68px] px-4 md:px-6">
        <div className="size-8 md:size-9 relative">
          <Image
            src="/seven.svg"
            alt="Image AI"
            fill
            className="object-contain"
          />
        </div>
        <h1
          className={cn(
            font.className,
            "text-lg md:text-xl font-bold text-gray-900"
          )}
        >
          ShiniGami Designs
        </h1>
      </div>
    </Link>
  );
};
