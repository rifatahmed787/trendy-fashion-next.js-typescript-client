import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type BottomToTopProps = {
  children: React.ReactNode;
};

const BottomToTop: React.FC<BottomToTopProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
         initial={{ y: 200, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: 100, opacity: 0 }}
         transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BottomToTop;
