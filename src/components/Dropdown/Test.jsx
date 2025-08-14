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
      <Dropdown>
        <DropdownButton
          type="base"
          label="(😀 23) (😃 52) (😄 3)"
          icon={/*아이콘 컴포넌트*/ null}
          icLabel="이모지 더보기"
        />
        <DropdownList>
          <DropdownItem>(😀 23)</DropdownItem>
          <DropdownItem>(😃 52)</DropdownItem>
          <DropdownItem>(😄 3)</DropdownItem>
          <DropdownItem>(😄 3)</DropdownItem>
          <DropdownItem>(😄 3)</DropdownItem>
          <DropdownItem>(😄 3)</DropdownItem>
          <DropdownItem>(😄 3)</DropdownItem>
          <DropdownItem>(😄 3)</DropdownItem>
        </DropdownList>
      </Dropdown>

      {/* 일반 버튼 */}
      <Dropdown>
        <DropdownButton
          as={/* Button */ null}
          label="버튼 컴포넌트 자리(임시 라벨 지정)"
          icon={/*아이콘 컴포넌트*/ null}
          icLabel="SNS 공유하기"
        />
        <DropdownList>
          <DropdownItem>카카오톡 공유</DropdownItem>
          <DropdownItem>URL 공유</DropdownItem>
        </DropdownList>
      </Dropdown>

      {/* 셀렉트 박스 버튼 */}
      <Dropdown>
        <DropdownButton type="select" label="옵션을 선택해주세요" icon={/*아이콘 컴포넌트*/ null} />
        <DropdownList>
          <DropdownItem>옵션 1</DropdownItem>
          <DropdownItem>옵션 2</DropdownItem>
          <DropdownItem>옵션 3</DropdownItem>
        </DropdownList>
      </Dropdown>

      {/* 에러 상태 셀렉트 박스 */}
      <Dropdown>
        <DropdownButton
          type="select"
          label="Error"
          icon={/*아이콘 컴포넌트*/ null}
          errorMessage="선택값을 입력해주세요"
        />
        <DropdownList>
          <DropdownItem>옵션 1</DropdownItem>
          <DropdownItem>옵션 2</DropdownItem>
        </DropdownList>
      </Dropdown>

      {/* 비활성화 상태 */}
      <Dropdown>
        <DropdownButton type="select" label="Disabled" icon={null} disabled={true} />
        <DropdownList>
          <DropdownItem>옵션 1</DropdownItem>
        </DropdownList>
      </Dropdown>
    </>
  );
};

export default DropdownTest;
