import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type TopToBottomProps = {
  children: React.ReactNode;
};

const TopToBottom: React.FC<TopToBottomProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
         initial={{ y: -500, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: -100, opacity: 0 }}
         transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TopToBottom;
