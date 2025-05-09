import Image from "next/image";
import { AlertTriangle, Upload } from "lucide-react";
import { toast } from "sonner";
import { useCallback } from "react";

// import { usePaywall } from "@/features/subscriptions/hooks/use-paywall";

import { ActiveTool, Editor } from "../types";
import { ToolSidebarClose } from "./ToolSideBarclose";
import { ToolSidebarHeader } from "./ToolSideBarHeader";

import { useRemoveBg } from "@/features/ai/api/use-remove-bg";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RemoveBgSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const RemoveBgSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: RemoveBgSidebarProps) => {
  //   const { shouldBlock, triggerPaywall } = usePaywall();
  const mutation = useRemoveBg();

  const selectedObject = editor?.selectedObjects[0];

  // @ts-expect-error - _originalElement is not typed in the editor type
  const imageSrc = selectedObject?._originalElement?.currentSrc;

  const onClose = () => {
    onChangeActiveTool("select");
  };

  const handleFileUpload = useCallback(
    async (file: File) => {
      try {
        const reader = new FileReader();

        reader.onload = async (e) => {
          const base64 = e.target?.result as string;

          mutation.mutate(
            {
              image: base64,
            },
            {
              onSuccess: (response) => {
                if (response.error) {
                  toast.error(response.error);
                  return;
                }
                editor?.addImage(response.data);
              },
              onError: (error) => {
                toast.error(error.message || "Failed to remove background");
              },
            }
          );
        };

        reader.readAsDataURL(file);
      } catch (error) {
        toast.error("Failed to process image");
        console.error("Image processing error:", error);
      }
    },
    [editor, mutation]
  );

  const handleUrlImage = useCallback(
    async (url: string) => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onload = async (e) => {
          const base64 = e.target?.result as string;

          mutation.mutate(
            {
              image: base64,
            },
            {
              onSuccess: (response) => {
                if (response.error) {
                  toast.error(response.error);
                  return;
                }
                editor?.addImage(response.data);
              },
              onError: (error) => {
                toast.error(error.message || "Failed to remove background");
              },
            }
          );
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        toast.error("Failed to process image");
        console.error("Image processing error:", error);
      }
    },
    [editor, mutation]
  );

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFileUpload(file);
      }
    },
    [handleFileUpload]
  );

  const handleRemoveBg = useCallback(() => {
    if (!imageSrc) {
      toast.error("No image selected");
      return;
    }

    // Check if the image is a URL (from Unsplash) or a base64 string
    if (imageSrc.startsWith("http")) {
      handleUrlImage(imageSrc);
    } else {
      mutation.mutate(
        {
          image: imageSrc,
        },
        {
          onSuccess: (response) => {
            if (response.error) {
              toast.error(response.error);
              return;
            }
            editor?.addImage(response.data);
          },
          onError: (error) => {
            toast.error(error.message || "Failed to remove background");
          },
        }
      );
    }
  }, [imageSrc, handleUrlImage, mutation, editor]);

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "remove-bg" ? "visible" : "hidden"
      )}
    >
      <ToolSidebarHeader
        title="Background removal"
        description="Remove background from image using AI"
      />
      {!imageSrc && (
        <div className="flex flex-col gap-y-4 items-center justify-center flex-1">
          <AlertTriangle className="size-4 text-muted-foreground" />
          <p className="text-muted-foreground text-xs">
            Feature not available for this object
          </p>
        </div>
      )}
      {imageSrc && (
        <ScrollArea>
          <div className="p-4 space-y-4">
            <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6">
              <input
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  Click to upload an image
                </p>
              </label>
            </div>
            <div
              className={cn(
                "relative aspect-square rounded-md overflow-hidden transition bg-muted",
                mutation.isPending && "opacity-50"
              )}
            >
              <Image
                src={imageSrc}
                fill
                alt="Image"
                className="object-cover"
                unoptimized={imageSrc.startsWith("data:")}
              />
            </div>
            <Button
              disabled={mutation.isPending || !imageSrc}
              onClick={handleRemoveBg}
              className="w-full"
            >
              {mutation.isPending
                ? "Removing background..."
                : "Remove background"}
            </Button>
          </div>
        </ScrollArea>
      )}
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
