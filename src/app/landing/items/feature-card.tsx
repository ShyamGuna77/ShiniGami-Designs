"use client";

import {
  MousePointer,
  LayoutTemplate,
  Users,
  Eraser,
  Layers,
  Download,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "./animated-section";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
  imageSrc?: string;
}

const iconMap: Record<string, LucideIcon> = {
  MousePointer,
  LayoutTemplate,
  Users,
  Eraser,
  Layers,
  Download,
};

export const FeatureCard = ({
  title,
  description,
  icon,
  delay = 0,
  imageSrc,
}: FeatureCardProps) => {
  const Icon = iconMap[icon];

  return (
    <AnimatedSection
      delay={delay}
      className="group relative h-[400px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="flex h-full flex-col">
        <div className="relative z-10">
          <div className="mb-6 inline-flex rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
            {Icon && <Icon className="h-8 w-8 text-gray-900 dark:text-white" />}
          </div>
          <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>

        {imageSrc && (
          <div className="relative mt-6 h-[180px] w-full overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};
