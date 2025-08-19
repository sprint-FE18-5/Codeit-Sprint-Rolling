/**
 * 모달 컴포넌트
 *
 * @param {Object} props - Modal 컴포넌트 props
 * @param {boolean} [props.isVisible=false] - 모달 표시 여부. true일 때만 렌더링 됨
 * @param {function} props.onClose - onClose 콜백 함수
 * @param {React.ReactNode} [props.children] - 모달 내용
 * @returns {JSX.Element|null}
 */
const Modal = ({ isVisible = false, onClose, children }) => {
  if (!isVisible) return null;
  return (
    <div className="h-dvh flex items-center justify-center bg-black/60" onClick={onClose}>
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
