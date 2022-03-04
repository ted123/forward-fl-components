import React, { useState } from 'react';
import { Modal } from './modal';

export const BasicModal = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <>
      <Modal borderColorModal="red" open={shouldShowModal} onClose={() => setShouldShowModal(false)}>
        <p>Content Modal Start</p>
      </Modal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)} data-testid="showmodalbutton" type="button">
        Click To Show Modal
      </button>
    </>

  );
};
