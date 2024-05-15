import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type ZoomOutProps = {
  children: React.ReactNode;
};

const ZoomOut: React.FC<ZoomOutProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ZoomOut;
