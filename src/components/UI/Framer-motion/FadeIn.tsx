import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  duration?: number;
};

const FadeIn: React.FC<FadeInProps> = ({ children, duration = 1 }) => {
  return (
    <AnimatePresence>
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 3 }}
         exit={{ opacity: 0 }}
         transition={{ duration }} 
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeIn;
