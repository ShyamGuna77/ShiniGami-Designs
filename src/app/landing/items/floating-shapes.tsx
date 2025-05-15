"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  const shapes = [
    {
      shape: "circle",
      size: "h-12 w-12",
      position: "left-[10%] top-[20%]",
      delay: 0,
      duration: 20,
    },
    {
      shape: "square",
      size: "h-16 w-16",
      position: "right-[15%] top-[15%]",
      delay: 5,
      duration: 25,
    },
    {
      shape: "triangle",
      size: "h-20 w-20",
      position: "left-[20%] bottom-[20%]",
      delay: 2,
      duration: 22,
    },
    {
      shape: "donut",
      size: "h-24 w-24",
      position: "right-[10%] bottom-[25%]",
      delay: 8,
      duration: 18,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} ${item.size} opacity-5 dark:opacity-10`}
          initial={{
            x: 0,
            y: 0,
            rotate: 0,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {item.shape === "circle" && (
            <div className="h-full w-full rounded-full border-2 border-gray-900 dark:border-white" />
          )}
          {item.shape === "square" && (
            <div className="h-full w-full rotate-45 border-2 border-gray-900 dark:border-white" />
          )}
          {item.shape === "triangle" && (
            <div className="h-0 w-0 border-l-[50px] border-r-[50px] border-b-[86px] border-l-transparent border-r-transparent border-b-gray-900 dark:border-b-white" />
          )}
          {item.shape === "donut" && (
            <div className="flex h-full w-full items-center justify-center rounded-full border-4 border-gray-900 dark:border-white">
              <div className="h-1/2 w-1/2 rounded-full bg-white dark:bg-gray-900" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
