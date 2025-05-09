import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Loader } from "lucide-react";

import { ActiveTool, Editor } from "@/features/editor/types";
import { ToolSidebarClose } from "./ToolSideBarclose";
import { ToolSidebarHeader } from "./ToolSideBarHeader";

import { useGetImages } from "@/features/images/api/use-get-images";

import { cn } from "@/lib/utils";
import { UploadButton } from "@/lib/uploadthing";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ImageSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const ImageSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: ImageSidebarProps) => {
  const { data, isLoading, isError } = useGetImages();

  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "images" ? "visible" : "hidden"
      )}
    >
      <ToolSidebarHeader
        title="Images"
        description="Add images to your canvas"
      />
      <div className="p-4 border-b space-y-2">
        <UploadButton
          appearance={{
            button:
              "bg-blue-600 hover:bg-blue-700 text-center text-white text-sm font-semibold px-2 py-2 rounded-md transition-all duration-200 disabled:cursor-not-allowed ut-uploading:bg-gray-500 ut-ready:bg-blue-500",
            container: "w-full",
            allowedContent: "text-xs text-gray-500 mt-1 text-center",
          }}
          content={{
            button: ".",
          }}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            editor?.addImage(res[0].ufsUrl);
          }}
        />
      </div>
      {isLoading && (
        <div className="flex items-center justify-center flex-1">
          <Loader className="size-4 text-muted-foreground animate-spin" />
        </div>
      )}
      {isError && (
        <div className="flex flex-col gap-y-4 items-center justify-center flex-1">
          <AlertTriangle className="size-4 text-muted-foreground" />
          <p className="text-muted-foreground text-xs">
            Failed to fetch images
          </p>
        </div>
      )}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              {data &&
                data.map((image) => {
                  return (
                    <button
                      onClick={() => editor?.addImage(image.urls.regular)}
                      key={image.id}
                      className="relative w-full h-[100px] group hover:opacity-75 transition bg-muted rounded-sm overflow-hidden border"
                    >
                      <Image
                        fill
                        src={image.urls.small}
                        alt={image.alt_description || "Image"}
                        className="object-cover"
                      />
                      <Link
                        target="_blank"
                        href={image.links.html}
                        className="opacity-0 group-hover:opacity-100 absolute left-0 bottom-0 w-full text-[10px] truncate text-white hover:underline p-1 bg-black/50 text-left"
                      >
                        {image.user.name}
                      </Link>
                    </button>
                  );
                })}
            </div>
          </div>
        </ScrollArea>
      </div>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
