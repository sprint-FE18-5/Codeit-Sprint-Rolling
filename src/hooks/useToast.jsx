import { useContext } from "react";
import { ToastContext } from "../components/Toast/ToastProvider";

const useToast = () => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error("useToast는 ToastProvider 내부에서 사용해야 합니다");
  }
  return toastContext;
};

export default useToast;
