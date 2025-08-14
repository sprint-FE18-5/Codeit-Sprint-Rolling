import { Dropdown, DropdownButton, DropdownList, DropdownItem } from ".";
//import 예시: import Button from "../Button/Button";

/**
 * 컴포넌트 테스트
 * import DropdownTest from "./components/Dropdown/Test";
 */
const DropdownTest = () => {
  return (
    <>
      {/* 기본 버튼 기능 */}
      <Dropdown type="default">
        <DropdownButton
          type="base"
          label="(😀 23) (😃 52) (😄 3)"
          icon={/*아이콘 컴포넌트*/ null}
          icLabel="이모지 더보기"
        />
        <DropdownList type="emoji">
          <DropdownItem label={"(😀 23)"}></DropdownItem>
          <DropdownItem label={"(😀 3)"}></DropdownItem>
          <DropdownItem label={"(😀 64)"}></DropdownItem>
          <DropdownItem label={"(😀 15)"}></DropdownItem>
          <DropdownItem label={"(😀 1)"}></DropdownItem>
          <DropdownItem label={"(😀 6)"}></DropdownItem>
          <DropdownItem label={"(😀 62)"}></DropdownItem>
          <DropdownItem label={"(😀 9)"}></DropdownItem>
        </DropdownList>
      </Dropdown>

      {/* 일반 버튼 */}
      <Dropdown type="default">
        <DropdownButton type="default" label="아이콘 SVG" icon={null} icLabel="SNS 공유하기" />
        <DropdownList type="share">
          <DropdownItem label="카카오톡 공유"></DropdownItem>
          <DropdownItem label="URL 공유"></DropdownItem>
        </DropdownList>
      </Dropdown>

      {/* 셀렉트 박스 버튼 */}
      <Dropdown type="select">
        <DropdownButton type="select" label="옵션을 선택해주세요" icon={/*아이콘 컴포넌트*/ null} />
        <DropdownList type="select">
          <DropdownItem label="옵션 1"></DropdownItem>
          <DropdownItem label="옵션 2"></DropdownItem>
          <DropdownItem label="옵션 3"></DropdownItem>
        </DropdownList>
      </Dropdown>

      {/* 에러 상태 셀렉트 박스 */}
      <Dropdown type="select">
        <DropdownButton type="select" label="Error" icon={/*아이콘 컴포넌트*/ null} />
        <DropdownList type="select">
          <DropdownItem label="옵션 1"></DropdownItem>
          <DropdownItem label="옵션 2"></DropdownItem>
          <DropdownItem label="옵션 3"></DropdownItem>
        </DropdownList>
      </Dropdown>

      {/* 비활성화 상태 */}
      <Dropdown type="select">
        <DropdownButton type="select" label="Disabled" icon={null} disabled={true} />
        <DropdownList type="select">
          <DropdownItem label="옵션 1"></DropdownItem>
          <DropdownItem label="옵션 2"></DropdownItem>
          <DropdownItem label="옵션 3"></DropdownItem>
        </DropdownList>
      </Dropdown>
    </>
  );
};

export default DropdownTest;
