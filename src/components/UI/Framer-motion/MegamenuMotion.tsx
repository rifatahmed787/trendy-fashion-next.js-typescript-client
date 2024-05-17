import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type MegamenuMotionProps = {
  children: React.ReactNode;
};

const MegamenuMotion: React.FC<MegamenuMotionProps> = ({ children }) => {
  return (
    <AnimatePresence>
       <motion.div
         initial={{ y: 100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: 100, opacity: 0 }}
         transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MegamenuMotion;
