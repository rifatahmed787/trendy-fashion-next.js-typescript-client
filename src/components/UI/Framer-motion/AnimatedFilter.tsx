import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedFilterProps {
  isVisible: boolean;
  children: ReactNode;
}

const AnimatedFilter: React.FC<AnimatedFilterProps> = ({
  isVisible,
  children,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedFilter;
