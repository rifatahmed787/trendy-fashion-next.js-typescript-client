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
      <ModalBody>
        <ModalHeader title="Delete" onClose={onClose} />
        <Paragraph>Are you sure you want to delete?</Paragraph>
        <div>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            icon={Loading ? ICONS.button_loading_icon : undefined}
            isDisabled={Loading}
            onClick={deleteHandler}
            className="bg-red-500"
          >
            Delete
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default DeleteModal;
