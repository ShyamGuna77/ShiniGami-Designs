"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
  delay?: number;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  avatarSrc,
  delay = 0,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative h-full rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900"
    >
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-4">
          <div className="relative h-12 w-12">
            <Image
              src={avatarSrc}
              alt={author}
              fill
              className="rounded-full object-cover"
              sizes="(max-width: 768px) 48px, 48px"
            />
          </div>
          <p className="text-sm text-gray-600 line-clamp-4 dark:text-gray-300">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
            {author}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};
