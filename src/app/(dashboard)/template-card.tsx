import Image from "next/image";
import { Crown } from "lucide-react";

import { cn } from "@/lib/utils";

interface TemplateCardProps {
  imageSrc: string;
  title: string;
  onClick: () => void;
  disabled?: boolean;
  description: string;
  width: number;
  height: number;
  isPro: boolean | null;
}

export const TemplateCard = ({
  imageSrc,
  title,
  onClick,
  disabled,
  description,
  height,
  width,
  isPro,
}: TemplateCardProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "space-y-2 md:space-y-3 group text-left transition-all duration-200 flex flex-col",
        disabled
          ? "cursor-not-allowed opacity-75"
          : "cursor-pointer hover:scale-[1.02]"
      )}
    >
      <div
        style={{ aspectRatio: `${width}/${height}` }}
        className="relative rounded-xl md:rounded-2xl h-full w-full overflow-hidden border shadow-sm"
      >
        <Image
          fill
          src={imageSrc}
          alt={title}
          className="object-cover transition-all duration-300 transform group-hover:scale-105"
        />
        {isPro && (
          <div className="absolute top-2 md:top-3 right-2 md:right-3 h-8 md:h-10 w-8 md:w-10 flex items-center justify-center bg-black/50 rounded-full backdrop-blur-sm">
            <Crown className="size-4 md:size-5 fill-white text-white" />
          </div>
        )}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl md:rounded-2xl backdrop-blur-sm">
          <p className="text-white font-medium">Open in editor</p>
        </div>
      </div>
      <div className="space-y-1 md:space-y-1.5">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-200">
          {description}
        </p>
      </div>
    </button>
  );
};
