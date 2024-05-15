import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type LeftToRightProps = {
  children: React.ReactNode;
};

const LeftToRight: React.FC<LeftToRightProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default LeftToRight;
