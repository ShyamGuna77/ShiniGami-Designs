"use client";

import { motion } from "framer-motion";
import {
  MousePointer,
  LayoutTemplate,
  Users,
  Eraser,
  Layers,
  Download,
  type LucideIcon,
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
  MousePointer,
  LayoutTemplate,
  Users,
  Eraser,
  Layers,
  Download,
};

export function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
}: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="mb-4 rounded-full bg-gray-100 p-3 dark:bg-gray-700">
        {Icon && <Icon className="h-6 w-6 text-gray-900 dark:text-white" />}
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
