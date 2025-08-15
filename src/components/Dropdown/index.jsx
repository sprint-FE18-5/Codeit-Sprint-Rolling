import { Menu } from "@headlessui/react";
import React from "react";
import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";
import DropdownItem from "./DropdownItem";
import { DropdownProvider } from "../../hooks/useDropdown.jsx";
/**
 * Dropdown 타입별 스타일 클래스 상수
 */
const TYPE_CLASSES = {
  base: "dropdown__content relative inline-block",
  default: "",
  select: "w-full max-w-[320px] block",
};

/**
 * Dropdown Wrapper 컴포넌트
 * Headless UI 라이브러리 Menu 커스텀
 * @param {React.ReactNode} children - DropdownButton과 DropdownList 컴포넌트들
 * @param {string} className - Tailwind 추가 클래스
 * @param {string} type - Dropdown Wrapper 타입(base, default, select)
 * @param {string} defaultValue - 기본 선택값
 * @param {function} onSelect - 선택 시 콜백 함수
 * basic: 모든 타입에 공통 적용
 * default: 일반 드롭다운
 * select: 셀렉트 드롭다운
 *
 * @example 1. 아이콘/라벨 단독 사용 드랍 메뉴
 * e.g.) 아이콘 단독 사용 예시
 * <Dropdown>
 *   <DropdownButton variant="basic" icon={<ShareIcon />} />
 *   <DropdownList className="!w-[140px]">
 *     <DropdownItem label="카카오톡 공유" />
 *     <DropdownItem label="URL 공유" />
 *   </DropdownList>
 * </Dropdown>
 *
 * @example 2. 셀렉트 박스 형태 (상태 관리 포함)
 * 비활성화 상태 추가 시: DropdownButton 컴포넌트에 disabled={true}
 * <DropdownProvider onSelect={(value, label) => console.log(value, label)}>
 *   <Dropdown type="select">
 *     <DropdownButton label="옵션 선택" variant="select" showSelectedValue={true} />
 *     <DropdownList type="select">
 *       <DropdownItem label="옵션 1" value="1" />
 *       <DropdownItem label="옵션 2" value="2" />
 *     </DropdownList>
 *   </Dropdown>
 * </DropdownProvider>
 *
 * @example 3. 커스텀 토글 아이콘이 있을 시
 * <Dropdown type="select">
 *   <DropdownButton
 *     variant="select"
 *     label="커스텀 토글"
 *     toggleIcons={{ open: "아이콘경로", closed: "아이콘경로" }}
 *   />
 *   <DropdownList type="select">
 *     <DropdownItem label="옵션 1" />
 *   </DropdownList>
 * </Dropdown>
 *
 * @example
 */

const Dropdown = ({ children, type = "base", className = "" }) => {
  return (
    <Menu className={`dropdown ${className}`} as="div">
      <div className={`${TYPE_CLASSES.base} ${type !== "base" ? TYPE_CLASSES[type] || "" : ""}`}>{children}</div>
    </Menu>
  );
};

export { Dropdown, DropdownButton, DropdownList, DropdownItem, DropdownProvider };
