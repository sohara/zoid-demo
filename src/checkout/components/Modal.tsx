import React, { FunctionComponent } from 'react';

interface ModalProps {
  close: () => void;
}

export const Modal: FunctionComponent<ModalProps> = ({ children, close }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={close}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
