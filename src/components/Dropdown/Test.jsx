import { Dropdown, DropdownButton, DropdownList, DropdownItem } from "../../components/Dropdown";

/**
 * 컴포넌트 테스트
 * import DropdownTest from "./components/Dropdown/Test";
 */
const DropdownTest = () => {
  return (
    <>
      <Dropdown>
        {/* 기본 버튼 기능 */}
        <DropdownButton type="base" label="(😀 23) (😃 52) (😄 3)" icon={null} icLabel="이모지 더보기" />

        {/* 일반 버튼 */}
        <DropdownButton type="default" label="아이콘 SVG" icon={null} icLabel="SNS 공유하기" />

        {/* 셀렉트 박스 버튼 */}
        <DropdownButton type="select" label="옵션을 선택해주세요" icon={null} />

        {/* 에러 상태 셀렉트 박스 */}
        <DropdownButton type="select" label="Error" icon={null} errorMessage="선택값을 입력해주세요" />

        {/* 비활성화 상태 */}
        <DropdownButton type="select" label="Disabled" icon={null} disabled={true} />
      </Dropdown>
    </>
  );
};

export default DropdownTest;
