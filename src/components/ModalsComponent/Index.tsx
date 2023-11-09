"use client";
import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { selectCurrentModal } from "@/Redux/features/ui/uiSlice";
import registeredModals from "./Register-modal/Register-modal";

export default function RenderModal() {
  const currentModal = useSelector(selectCurrentModal);

  const Modal = currentModal ? registeredModals[currentModal.name] : null;

  return (
    <AnimatePresence>
      {Modal ? (
        <motion.div
          layout
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          exit={{ scale: 0 }}
        >
          <Modal {...currentModal?.props} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
