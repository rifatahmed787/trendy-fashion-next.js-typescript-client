import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type SidebarSlideProps = {
  children: React.ReactNode;
  isMenuOpen:Boolean
};

const SidebarSlide: React.FC<SidebarSlideProps> = ({ children, isMenuOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
         initial={false}
         animate={{ x: isMenuOpen ? 0 : "100%" }}
         transition={{duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SidebarSlide;
