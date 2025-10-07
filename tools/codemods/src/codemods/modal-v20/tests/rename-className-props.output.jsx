import React from 'react';

import Modal from '@azublue-ui/modal';
import ConfirmationModal from '@azublue-ui/confirmation-modal';
import MarketingModal from '@azublue-ui/marketing-modal';

const CustomComponent = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal 
        open={open}
        setOpen={setOpen}
        backdropClassName="backdrop-style"
        className="modal-content-style"
      >
        Modal content
      </Modal>
      <ConfirmationModal
        open={open}
        setOpen={setOpen}
        backdropClassName="confirmation-backdrop"
        className="confirmation-content"
        title="Confirm action"
      >
        Are you sure?
      </ConfirmationModal>
      <MarketingModal
        open={open}
        setOpen={setOpen}
        className="marketing-content"
        title="Marketing title"
      >
        Marketing content
      </MarketingModal>
      {/* Component without className props */}
      <Modal open={open} setOpen={setOpen}>
        Simple modal
      </Modal>
      {/* Custom component should not be transformed */}
      <CustomComponent 
        className="custom-backdrop"
        contentClassName="custom-content"
      >
        Custom content
      </CustomComponent>
    </>
  );
};
