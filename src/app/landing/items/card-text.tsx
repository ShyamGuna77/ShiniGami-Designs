"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface CircleTextProps {
  text: string;
  className?: string;
}

export function CircleText({ text, className }: CircleTextProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const textPath = svgRef.current.querySelector("textPath");
    if (textPath) {
      textPath.textContent = text.repeat(2);
    }
  }, [text]);

  return (
    <motion.div
      className={`absolute -left-16 -top-16 z-0 h-64 w-64 opacity-10 ${className}`}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 30,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <svg ref={svgRef} viewBox="0 0 100 100" className="h-full w-full">
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="transparent"
        />
        <text>
          <textPath
            xlinkHref="#circlePath"
            className="text-xs font-medium uppercase tracking-wider"
          >
            {text.repeat(2)}
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
