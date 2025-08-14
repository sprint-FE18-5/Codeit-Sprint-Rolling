import { Dropdown, DropdownButton, DropdownList, DropdownItem } from ".";
import { ArrowUpIcon } from "./DropdownButton";
//import 예시: import Button from "../Button/Button";

/**
 * 컴포넌트 테스트
 * import DropdownTest from "./components/Dropdown/Test";
 * 이모지 태그 컴포넌트
 */
export const EmojiTest = () => (
  <span className="bg-black/50 px-3 rounded-full h-8 inline-flex items-center justify-center text-white">😀 23</span>
);

const DropdownTest = () => {
  return (
    <>
      <div className="m-50">
        {/* 기본 버튼 기능 */}
        <Dropdown type="default" className="m-2">
          <DropdownButton
            type="default"
            label={
              <>
                <EmojiTest />
                <EmojiTest />
                <EmojiTest />
              </>
            }
            icon={<ArrowUpIcon />}
            icLabel="이모지 더보기"
          />
          <DropdownList type="emoji">
            <DropdownItem label={<EmojiTest />}></DropdownItem>
            <DropdownItem label={<EmojiTest />}></DropdownItem>
            <DropdownItem label={<EmojiTest />}></DropdownItem>
            <DropdownItem label={<EmojiTest />}></DropdownItem>
            <DropdownItem label={<EmojiTest />}></DropdownItem>
            <DropdownItem label={<EmojiTest />}></DropdownItem>
            <DropdownItem label={<EmojiTest />}></DropdownItem>
            <DropdownItem label={<EmojiTest />}></DropdownItem>
          </DropdownList>
        </Dropdown>

        {/* 일반 버튼 */}
        <Dropdown type="default" className="m-2">
          <DropdownButton type="default" label="아이콘 SVG" icon={null} icLabel="SNS 공유하기" />
          <DropdownList type="share">
            <DropdownItem label="카카오톡 공유"></DropdownItem>
            <DropdownItem label="URL 공유"></DropdownItem>
          </DropdownList>
        </Dropdown>

        {/* 셀렉트 박스 버튼 */}
        <Dropdown type="select" className="m-2">
          <DropdownButton type="select" label="옵션을 선택해주세요" icon={<ArrowUpIcon />} />
          <DropdownList type="select">
            <DropdownItem label="옵션 1"></DropdownItem>
            <DropdownItem label="옵션 2"></DropdownItem>
            <DropdownItem label="옵션 3"></DropdownItem>
          </DropdownList>
        </Dropdown>

        {/* 에러 상태 셀렉트 박스 */}
        <Dropdown type="select" className="m-2">
          <DropdownButton type="select" label="Error" icon={<ArrowUpIcon />} />
          <DropdownList type="select">
            <DropdownItem label="옵션 1"></DropdownItem>
            <DropdownItem label="옵션 2"></DropdownItem>
            <DropdownItem label="옵션 3"></DropdownItem>
          </DropdownList>
        </Dropdown>

        {/* 비활성화 상태 */}
        <Dropdown type="select" className="m-2">
          <DropdownButton type="select" label="Disabled" icon={<ArrowUpIcon />} disabled={true} />
          <DropdownList type="select">
            <DropdownItem label="옵션 1"></DropdownItem>
            <DropdownItem label="옵션 2"></DropdownItem>
            <DropdownItem label="옵션 3"></DropdownItem>
          </DropdownList>
        </Dropdown>
      </div>
    </>
  );
};

export default DropdownTest;
