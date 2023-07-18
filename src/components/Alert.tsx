import { ReactNode } from "react";

interface IAlert {
  childern: ReactNode;
  onClose: () => void;
}

function Alert({ childern, onClose }: IAlert) {
  return (
    <div
      className="alert alert-danger alert-dismissible position-absolute top-0 end-0 w-50"
      role="alert"
    >
      {childern}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
