import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type ZoomInProps = {
  children: React.ReactNode;
  duration?: number;
};

const ZoomIn: React.FC<ZoomInProps> = ({ children, duration = 1 }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration }} 
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ZoomIn;
