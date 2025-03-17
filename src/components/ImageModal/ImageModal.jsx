import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { useEffect, useState } from "react";
const ImageModal = ({ img, onClik }) => {
  const [isOpen, setIsOpen] = useState(true);
  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
      width: "80vw",
      height: "80vh",
      padding: "0px",
      overflow: "hidden",
    },
  };

  useEffect(() => console.log("Render oldu"), []);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    onClik();
  }
  return (
    <>
      <div>
        <Modal
          isOpen={isOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className={css.imageCard}>
            <img
              src={img.urls.regular}
              alt={img.alt_description}
              className={css.thumbnail}
              onClick={closeModal}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ImageModal;
