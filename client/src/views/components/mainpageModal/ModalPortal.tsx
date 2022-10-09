import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = (props: React.PropsWithChildren) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return ReactDOM.createPortal(props.children, modalRoot);
};
export default ModalPortal;
