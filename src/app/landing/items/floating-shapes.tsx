"use client";

import { motion } from "framer-motion";

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large Circle */}
      <motion.div
        className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium Circle */}
      <motion.div
        className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small Circle */}
      <motion.div
        className="absolute left-1/3 bottom-1/4 h-48 w-48 rounded-full bg-pink-500/20 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute left-[15%] top-[20%] h-24 w-24"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-full w-full rounded-full border-4 border-blue-500/30" />
      </motion.div>

      <motion.div
        className="absolute right-[20%] top-[30%] h-32 w-32"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-full w-full rotate-45 border-4 border-purple-500/30" />
      </motion.div>

      <motion.div
        className="absolute left-[25%] bottom-[25%] h-28 w-28"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-0 w-0 border-l-[56px] border-r-[56px] border-b-[97px] border-l-transparent border-r-transparent border-b-pink-500/30" />
      </motion.div>

      {/* Additional Blurred Shapes */}
      <motion.div
        className="absolute right-1/3 top-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/4 bottom-1/3 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
