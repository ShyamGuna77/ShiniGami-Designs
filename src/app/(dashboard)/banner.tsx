"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";

import { useCreateProject } from "@/features/projects/api/use-create-project";

import { Button } from "@/components/ui/button";

export const Banner = () => {
  const router = useRouter();
  const mutation = useCreateProject();

  const onClick = () => {
    mutation.mutate(
      {
        name: "Untitled project",
        json: "",
        width: 900,
        height: 1200,
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/editor/${data.id}`);
        },
      }
    );
  };

  return (
    <div className="relative text-white aspect-[5/1] min-h-[200px] md:min-h-[248px] flex flex-col md:flex-row gap-y-6 md:gap-x-8 p-6 md:p-8 items-center rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg mb-8">
      <div className="rounded-full size-24 md:size-32 items-center justify-center bg-white/5 hidden md:flex backdrop-blur-sm">
        <div className="rounded-full size-20 md:size-24 flex items-center justify-center bg-white/10">
          <Sparkles className="h-20 md:h-24 text-white fill-white" />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 flex-1">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Transform Visual Input into Intelligent Design
        </h1>
        <p className="text-sm md:text-base text-white/80 max-w-2xl">
          Upload images or explore our built-in library. Generate
          production-ready code from visual references with ease.
        </p>
        <div className="mt-auto">
          <Button
            disabled={mutation.isPending}
            onClick={onClick}
            variant="secondary"
            className="w-full md:w-[180px] bg-white hover:bg-white/90 text-gray-900 border-none shadow-md transition-all duration-200 hover:scale-105"
          >
            Start creating
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
