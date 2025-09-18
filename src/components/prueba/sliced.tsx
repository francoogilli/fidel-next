"use client";

import { motion } from "motion/react";

interface SlicedTextProps {
  text: string;
  className?: string;
  containerClassName?: string;
  splitSpacing?: number;
}

const SlicedText: React.FC<SlicedTextProps> = ({
  text = "Sliced Text",
  className = "",
  containerClassName = "",
  splitSpacing = 2,
}) => {
  return (
    <motion.div
      className={`w-fit text-center relative inline-block ${
        containerClassName ?? ""
      }`}
      whileHover="hover"
      initial="default"
    >
      <motion.div
        className={`absolute w-full -ml-0.5 ${className ?? ""}`}
        variants={{
          default: {
            clipPath: "inset(0 0 0 0)",
            y: 0,
            opacity: 1,
          },
          hover: {
            clipPath: "inset(0 0 40% 0)",
            y: -splitSpacing / 2,
            opacity: 1,
          },
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.div>
      <motion.div
        className={`absolute w-full ${className ?? ""}`}
        variants={{
          default: {
            clipPath: "inset(0 0 0 0)",
            y: 0,
            opacity: 1,
          },
          hover: {
            clipPath: "inset(60% 0 0 0)",
            y: splitSpacing / 2,
            opacity: 1,
          },
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.div>

      <div className={`invisible ${className ?? ""}`}>{text}</div>
    </motion.div>
  );
};

export default SlicedText;
