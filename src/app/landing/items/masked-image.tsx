"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MaskedImageProps {
  src: string;
  alt: string;
  shape: "blob" | "wave" | "circle";
  title: string;
  delay?: number;
}

export function MaskedImage({
  src,
  alt,
  shape,
  title,
  delay = 0,
}: MaskedImageProps) {
  const maskStyles = {
    blob: "mask-image: url(\"data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M416.7 155.2c38.3 33.8 54.3 97.4 61.5 165.8 7.2 68.3 5.8 141.5-31.3 198.6-37.1 57-109.8 97.9-186.9 106.3-77 8.3-158.4-15.9-203.7-73-45.3-57-54.5-147.9-33.8-222.1 20.7-74.2 71.3-131.6 134.1-165.5 62.8-33.8 137.8-44.1 197.5-19.4 59.8 24.7 104.3 84.5 142.6 118.3z' fill='%23000'/%3E%3C/svg%3E\")",
    wave: "mask-image: url(\"data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,200 Q150,100 300,200 Q450,300 600,200 L600,600 L0,600 Z' fill='%23000'/%3E%3C/svg%3E\")",
    circle:
      "mask-image: url(\"data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='300' cy='300' r='250' fill='%23000'/%3E%3C/svg%3E\")",
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
    >
      <div
        className="aspect-[3/4] w-full"
        style={{
          WebkitMaskImage: maskStyles[shape],
          maskImage: maskStyles[shape],
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </motion.div>
  );
}
