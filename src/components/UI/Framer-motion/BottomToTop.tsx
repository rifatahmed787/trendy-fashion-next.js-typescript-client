import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type BottomToTopProps = {
  children: React.ReactNode;
  duration?: number;
};

const BottomToTop: React.FC<BottomToTopProps> = ({ children, duration = 1 }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration }} 
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BottomToTop;
