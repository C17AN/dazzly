import React from "react";
import Modal from "react-modal";

interface IProps {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "70%",
    borderRadius: "8px",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#modal");

const ModalPortal: React.FC<IProps> = ({ modalIsOpen, setModalIsOpen, children }) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
};

export default ModalPortal;
