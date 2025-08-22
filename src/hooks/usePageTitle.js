import { useEffect } from "react";

/**
 * 페이지 타이틀 설정 훅
 * @param {string} [title=""] - 페이지 타이틀 (기본값은 Rolling)
 */
const usePageTitle = (title = "") => {
  useEffect(() => {
    document.title = `${title && title + " | "}Rolling`;
  }, [title]);
};

export default usePageTitle;
