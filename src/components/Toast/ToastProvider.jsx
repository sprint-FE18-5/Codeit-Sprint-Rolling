import { createContext, useState } from "react";
import Toast from ".";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState();

  const createToast = ({ duration = 3000, message = "", type = "success", bottom = 20, onClose, onClick }) => {
    setToast({ duration, message, type, bottom, onClose, onClick, key: Date.now() });
  };

  const handleClose = () => setToast(null);

  return (
    <ToastContext.Provider value={{ createToast }}>
      {children}
      {toast && (
        <Toast
          key={toast.key}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          bottom={toast.bottom}
          onClose={handleClose}
        ></Toast>
      )}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
