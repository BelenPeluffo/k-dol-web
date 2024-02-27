import { ReactNode } from "react";

const Modal = ({
  title,
  message,
  actions,
  open,
}: {
  title?: string;
  message: string;
  actions?: ReactNode[];
  open: boolean;
}) => {
    console.log('Modal open?',open);
  return (
    <div className="modal" style={{ display: open ? "flex" : "none" }}>
      <div className="modal-title">{title ? title : null}</div>
      <div className="modal-message">{message ? message : null}</div>
      <div>{actions ? actions : null}</div>
    </div>
  );
};

export default Modal;
