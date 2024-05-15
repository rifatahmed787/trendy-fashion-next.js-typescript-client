import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type MegamenuMotionProps = {
  children: React.ReactNode;
  submenu:Boolean
};

const MegamenuMotion: React.FC<MegamenuMotionProps> = ({ children, submenu }) => {
  return (
    <AnimatePresence>
      <motion.div
         initial={false}
         animate={{ x: submenu ? 0 : "100%" }}
         transition={{duration: 0.5 }}
       
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MegamenuMotion;
