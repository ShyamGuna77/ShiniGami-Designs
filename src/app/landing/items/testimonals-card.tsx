"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
  delay?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="mb-4 flex items-center space-x-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image src={avatarSrc} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {author}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <div className="relative">
        <svg
          className="absolute -left-2 -top-2 h-8 w-8 text-gray-200 dark:text-gray-700"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative pl-6 text-gray-600 dark:text-gray-300">
          {quote}
        </p>
      </div>
    </motion.div>
  );
}
