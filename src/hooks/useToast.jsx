import { useState } from "react";
import Toast from "../components/Toast";

const useToast = () => {
  const [toast, setToast] = useState(null);

  const createToast = ({ duration = 3000, message = "", type = "success", bottom = 20, onClose, onClick }) => {
    setToast({ duration, message, type, bottom, onClose, onClick, key: Date.now() });
  };

  const handleClose = () => setToast(null);

  const ToastComponent = toast && (
    <Toast
      key={toast.key}
      message={toast.message}
      type={toast.type}
      duration={toast.duration}
      bottom={toast.bottom}
      onClose={handleClose}
    ></Toast>
  );

  return { createToast, ToastComponent };
};

export default useToast;
