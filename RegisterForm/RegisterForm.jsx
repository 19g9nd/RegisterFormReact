import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent/ModalContent';


export default function Register() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} disabled={showModal}>
      Register
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
          document.getElementById('modal') 
      )}
    </>
  );
}
