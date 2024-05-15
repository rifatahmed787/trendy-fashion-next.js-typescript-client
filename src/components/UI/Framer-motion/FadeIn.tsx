import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
};

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 3 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeIn;
