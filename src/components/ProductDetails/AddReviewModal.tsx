import useModal from "@/Hooks/useModal";
import React from "react";
import Modal from "../Modal/Modal";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import { IProduct } from "@/Types/products";
import AddReviewForm from "./AddReviewForm";

const AddReviewModal = ({
  product_details,
}: {
  product_details: IProduct | undefined;
}) => {
  const { isOpen, onClose } = useModal();
  return (
    <>
      <Modal isOpen={isOpen("review")} onClose={onClose}>
        <ModalBody>
          <ModalHeader title="Review" onClose={onClose} />
          <AddReviewForm product_details={product_details} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddReviewModal;
