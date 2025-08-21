//import Page from "../../components/Page";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/Form/Input";
import FormLayout from "../../components/Form/FormLayout";
import FormField from "../../components/Form/FormField";
import Editor from "../../components/Form/Editor";
import ProfileSelector from "../../components/Option/ProfileSelector";
import RegularButton from "../../components/Button/RegularButton";
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "../../components/Dropdown";

const PostMessagePage = () => {
  //form 상태 관리
  const [form, setForm] = useState({ name: "" });
  const [errors, setErrors] = useState({ name: "" });
  const [touched, setTouched] = useState({ name: false });

  // 유효성 체크/에러 메시지
  const validateName = value => {
    if (!value) return "값을 입력해주세요.";
    return "";
  };

  // input change 핸들러(에러 메시지)
  const handleInput = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    if (e.type === "blur" || touched[name]) {
      setTouched(prev => ({ ...prev, [name]: true }));
      let error = "";
      if (name === "name") error = validateName(value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  // <상대와의 관계> 옵션
  const relationshipOptions = [
    { label: "친구", value: "친구" },
    { label: "지인", value: "지인" },
    { label: "동료", value: "동료" },
    { label: "가족", value: "가족" },
  ];
  // <상대와의 관계> 옵션 상태관리
  const [selectedRelationship, setSelectedRelationship] = useState("지인");

  // <폰트 선택> 옵션
  const fontOptions = [
    { label: "Noto Sans", value: "Noto Sans", className: "font-noto-sans" },
    { label: "Pretendard", value: "Pretendard", className: "font-pretendard" },
    { label: "나눔명조", value: "나눔명조", className: "font-nanum-myeongjo" },
    { label: "나눔손글씨 손편지체", value: "handletter", className: "font-handletter" },
  ];

  // <폰트 선택> 옵션 상태관리
  const [selectedFont, setSelectedFont] = useState("Noto Sans");
  const selectedFontOption = fontOptions.find(font => font.value === selectedFont);
  const selectedFontClass = selectedFontOption?.className || "";

  // 프로필 이미지
  const IMAGE_OPTIONS = [
    "https://picsum.photos/id/522/100/100",
    "https://picsum.photos/id/859/100/100",
    "https://picsum.photos/id/522/100/100",
    "https://picsum.photos/id/859/100/100",
    "https://picsum.photos/id/522/100/100",
    "https://picsum.photos/id/859/100/100",
    "https://picsum.photos/id/522/100/100",
    "https://picsum.photos/id/859/100/100",
    "https://picsum.photos/id/522/100/100",
    "https://picsum.photos/id/859/100/100",
  ];

  // 프로필 이미지 선택 상태 (선택 안 했을 때 null)
  const [selectedProfileIdx, setSelectedProfileIdx] = useState(null);

  return (
    <FormLayout>
      <FormField label="From." htmlFor="name">
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="이름을 입력해주세요."
          value={form.name}
          onChange={handleInput}
          onBlur={handleInput}
          errorMsg={touched.name ? errors.name : ""}
        />
      </FormField>
      <FormField label="프로필 이미지" htmlFor="profileImage">
        <ProfileSelector images={IMAGE_OPTIONS} selectedIdx={selectedProfileIdx} onSelect={setSelectedProfileIdx} />
      </FormField>
      <FormField label="상대와의 관계" htmlFor="relationship">
        <Dropdown type="select" defaultValue="acquaintance">
          <DropdownTrigger id="relationship" showArrow>
            {selectedRelationship?.label || "지인"}
          </DropdownTrigger>
          <DropdownContent>
            {relationshipOptions.map(option => (
              <DropdownItem
                key={option.value}
                value={option.value}
                onClick={() => setSelectedRelationship(option.value)}
              >
                {option.label}
              </DropdownItem>
            ))}
          </DropdownContent>
        </Dropdown>
      </FormField>
      <FormField label="내용을 입력해주세요." htmlFor="editor">
        <Editor selectedFont={selectedFont} />
      </FormField>
      <FormField label="폰트 선택" htmlFor="font-select">
        <Dropdown type="select" defaultValue={selectedFont}>
          <DropdownTrigger id="font-select" showArrow className={selectedFontClass}>
            {selectedFontOption && selectedFontOption.label}
          </DropdownTrigger>
          <DropdownContent>
            {fontOptions.map(font => (
              <DropdownItem
                key={font.value}
                value={font.value}
                className={font.className}
                onClick={() => setSelectedFont(font.value)}
              >
                {font.label}
              </DropdownItem>
            ))}
          </DropdownContent>
        </Dropdown>
      </FormField>
      <RegularButton type="submit" size={56} width="100%" className="mt-[12px]" disabled>
        생성하기
      </RegularButton>
    </FormLayout>
  );
};

export default PostMessagePage;
