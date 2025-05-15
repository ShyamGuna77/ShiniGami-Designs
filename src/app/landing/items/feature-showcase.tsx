"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureShowcaseProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  delay?: number;
}

export function FeatureShowcase({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  delay = 0,
}: FeatureShowcaseProps) {
  return (
    <motion.div
      className="py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`flex items-center ${
              reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="relative mx-auto w-full max-w-xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-transparent to-black/10" />
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {title}
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
