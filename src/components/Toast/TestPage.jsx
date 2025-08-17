import useToast from "../../hooks/useToast";

const TestPage = () => {
  const { createToast } = useToast();

  return (
    <div className="flex gap-4">
      <button
        className="h-12 w-30 bg-blue-100/50 cursor-pointer"
        onClick={() => createToast({ message: "success", type: "success", bottom: 40 })}
      >
        성공 토스트 열기
      </button>
      <button
        className="h-12 w-30 bg-blue-100/50 cursor-pointer"
        onClick={() => createToast({ message: "failed", type: "error", bottom: 40 })}
      >
        실패 토스트 열기
      </button>
    </div>
  );
};

export default TestPage;
