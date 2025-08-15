import { Dropdown, DropdownButton, DropdownList, DropdownItem, DropdownProvider } from ".";
import FormMessage from "../common/FormMessage";
import { useFormValidation } from "../../hooks/useFormValidation";
import { useEffect, useState } from "react";

/**
 * 테스트 컴포넌트
 * 이모지 태그 컴포넌트
 * 버튼 컴포넌트
 * 에러 상태
 */
export const EmojiTest = () => (
  <span className="bg-black/50 px-3 rounded-full h-8 inline-flex items-center justify-center text-white">😀 13</span>
);
export const ShareTest = () => (
  <span className="rounded-[6px] border border-[#ccc] px-4 h-[35px] flex items-center justify-center cursor-pointer">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5761 1.45064C11.8104 1.21632 12.1903 1.21632 12.4246 1.45064L16.9246 5.95064C17.1589 6.18495 17.1589 6.56485 16.9246 6.79917C16.6903 7.03348 16.3104 7.03348 16.0761 6.79917L12.6001 3.32323V13.1249C12.6001 13.4563 12.3315 13.7249 12.0001 13.7249C11.6688 13.7249 11.4001 13.4563 11.4001 13.1249V3.32363L7.92461 6.79917C7.69029 7.03348 7.31039 7.03348 7.07608 6.79917C6.84176 6.56485 6.84176 6.18495 7.07608 5.95064L11.5761 1.45064ZM4.12515 11.3499C3.8352 11.3499 3.60015 11.585 3.60015 11.8749V20.9999C3.60015 21.2899 3.8352 21.5249 4.12515 21.5249H19.8751C20.1651 21.5249 20.4001 21.2899 20.4001 20.9999V11.8749C20.4001 11.585 20.1651 11.3499 19.8751 11.3499H17.6251C17.2938 11.3499 17.0251 11.0813 17.0251 10.7499C17.0251 10.4185 17.2938 10.1499 17.6251 10.1499H19.8751C20.8278 10.1499 21.6001 10.9222 21.6001 11.8749V20.9999C21.6001 21.9526 20.8278 22.7249 19.8751 22.7249H4.12515C3.17246 22.7249 2.40015 21.9526 2.40015 20.9999V11.8749C2.40015 10.9222 3.17246 10.1499 4.12515 10.1499H6.37515C6.70652 10.1499 6.97515 10.4185 6.97515 10.7499C6.97515 11.0813 6.70652 11.3499 6.37515 11.3499H4.12515Z"
        fill="#101010"
      />
    </svg>
  </span>
);
const DropdownTest = () => {
  const selectValidator = value => {
    if (!value) return "옵션을 선택해주세요.";
    return true;
  };

  const {
    value: selectValue,
    error: selectError,
    hasError: selectHasError,
    setValue: setSelectValue,
    handleBlur: handleSelectBlur,
    validate,
  } = useFormValidation("", selectValidator);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false); // 한번이라도 열렸는지 체크

  const handleSelectChange = value => {
    setSelectValue(value);
    // 유효성 검사 실행
    setTimeout(() => validate(value), 0);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      setHasBeenOpened(true);
    } else if (!isDropdownOpen && hasBeenOpened && selectValue === "") {
      handleSelectBlur();
    }
  }, [isDropdownOpen, hasBeenOpened, selectValue, handleSelectBlur]);

  return (
    <>
      <div className="pt-10 pb-10 max-w-[320px] mx-auto">
        {/* 이모지 버튼 */}
        <Dropdown type="default">
          <DropdownButton
            variant="toggle"
            type="emoji"
            label={[<EmojiTest />, <EmojiTest />, <EmojiTest />]}
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

        {/* 공유 버튼 */}
        <Dropdown>
          <DropdownButton variant="basic" type="default" icon={<ShareTest />} icLabel="공유하기 버튼" />
          <DropdownList type="select" className="!w-[140px]">
            <DropdownItem label="카카오톡 공유"></DropdownItem>
            <DropdownItem label="URL 공유"></DropdownItem>
          </DropdownList>
        </Dropdown>

        {/* 셀렉트 박스 - 옵션 선택 기능 */}
        <DropdownProvider onSelect={() => {}}>
          <Dropdown type="select">
            <DropdownButton label="옵션 선택" variant="select" type="select" showSelectedValue={true} />
            <DropdownList type="select">
              <DropdownItem label="옵션 1" value="1" type="select" />
              <DropdownItem label="옵션 2" value="2" type="select" />
            </DropdownList>
          </Dropdown>
        </DropdownProvider>

        {/* Error */}
        <DropdownProvider onSelect={handleSelectChange}>
          <Dropdown
            type="select"
            onStateChange={isOpen => {
              setIsDropdownOpen(isOpen);
            }}
          >
            <DropdownButton
              variant="select"
              type="select"
              label="에러 메시지 테스트"
              hasError={selectHasError}
              showSelectedValue={true}
            />
            <DropdownList type="select">
              <DropdownItem label="옵션 1" value="1" />
              <DropdownItem label="옵션 2" value="2" />
              <DropdownItem label="옵션 3" value="3" />
            </DropdownList>
          </Dropdown>
          <FormMessage type="error" message={selectError} show={selectHasError} />
        </DropdownProvider>

        {/* Disabled */}
        <Dropdown type="select">
          <DropdownButton variant="select" type="select" label="Disabled" disabled={true} />
          <DropdownList type="select">
            <DropdownItem label="옵션 1"></DropdownItem>
            <DropdownItem label="옵션 2"></DropdownItem>
            <DropdownItem label="옵션 3"></DropdownItem>
          </DropdownList>
        </Dropdown>

        {/* 커스텀 토글 예시 (링크 속성은 예시일 뿐입니다. 고정X, 자유롭게 선택해 사용) */}
        <Dropdown type="select">
          <DropdownButton
            variant="select"
            type="select"
            label="커스텀 토글 아이콘"
            toggleIcons={{
              open: "경로",
              closed: "경로",
            }}
          />
          <DropdownList type="select">
            <DropdownItem
              label="Google 링크"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              title="구글로 이동"
            />
            <DropdownItem label="버튼 1" onClick={() => alert("버튼 클릭")} />
            <DropdownItem label="버튼 2" onClick={() => alert("버튼 클릭")} />
          </DropdownList>
        </Dropdown>
      </div>
    </>
  );
};

export default DropdownTest;
