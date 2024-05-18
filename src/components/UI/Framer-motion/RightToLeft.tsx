import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type RightToLeftProps = {
  children: React.ReactNode;
  duration?: number;
};

const RightToLeft: React.FC<RightToLeftProps> = ({ children, duration = 1 }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration }} 
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default RightToLeft;
