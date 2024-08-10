"use client"
import React from "react";
import useModal from "@/Hooks/useModal";
import Modal from "../Modal/Modal";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import Paragraph from "./Paragraph/Paragraph";
import { Button } from "./Button";
import ICONS from "../shared/Icons/AllIcons";

interface IDelete {
  deleteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  Loading: boolean;
}

const DeleteModal = ({ deleteHandler, Loading }: IDelete) => {
  const { onClose, isOpen } = useModal();
  

  return (
    <Modal isOpen={isOpen("delete")} onClose={onClose}>
      <ModalBody className="w-11/12 md:w-3/4 lg:w-1/4">
        <ModalHeader title="Delete" onClose={onClose} />
        <Paragraph className="text-center">
          Are you sure you want to delete?
        </Paragraph>
        <div className="pt-5 flex justify-center items-center gap-3">
          <Button className="border border-primary-100" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={deleteHandler} 
            className="bg-red-500 text-white"
            icon={Loading ? ICONS.button_loading_icon : undefined}
            isDisabled={Loading}
          >
            Delete
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default DeleteModal;
