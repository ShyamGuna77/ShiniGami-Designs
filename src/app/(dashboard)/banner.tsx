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
    <div className="text-white aspect-[5/1] min-h-[248px] flex gap-x-6 p-6 items-center rounded-xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
      <div className="rounded-full size-28 items-center justify-center bg-white/10 hidden md:flex">
        <div className="rounded-full size-20 flex items-center justify-center bg-white/20">
          <Sparkles className="h-20 text-white fill-white" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl md:text-3xl font-semibold">
          Transform Visual Input into Intelligent Design
        </h1>
        <p className="text-xs md:text-sm mb-2 text-gray-200">
          Upload images or explore our built-in library. Generate
          production-ready code from visual references with ease.
        </p>
        <Button
          disabled={mutation.isPending}
          onClick={onClick}
          variant="secondary"
          className="w-[160px] bg-white/10 hover:bg-white/20 text-white border-none"
        >
          Start creating
          <ArrowRight className="size-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
