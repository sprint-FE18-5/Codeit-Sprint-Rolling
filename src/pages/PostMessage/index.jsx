import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Form/Input";
import FormLayout from "../../components/Form/FormLayout";
import FormField from "../../components/Form/FormField";
import Editor from "../../components/Form/Editor";
import ProfileSelector from "../../components/Option/ProfileSelector";
import RegularButton from "../../components/Button/RegularButton";
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "../../components/Dropdown";
import getProfileImages from "../../api/getProfileImages";
import postMessage from "../../api/postMessage";
import useToast from "../../hooks/useToast";
import Page from "../Page";

// <상대와의 관계> 옵션
const relationshipOptions = [
  { label: "지인", value: "지인" },
  { label: "친구", value: "친구" },
  { label: "동료", value: "동료" },
  { label: "가족", value: "가족" },
];

// <폰트 선택> 옵션
const fontOptions = [
  { label: "Noto Sans", value: "Noto Sans", className: "font-noto-sans" },
  { label: "Pretendard", value: "Pretendard", className: "font-pretendard" },
  { label: "나눔명조", value: "나눔명조", className: "font-nanum-myeongjo" },
  { label: "나눔손글씨 손편지체", value: "Nanum Handletter", className: "font-nanum-handletter" },
];

const PostMessagePage = () => {
  const navigate = useNavigate();
  const { createToast } = useToast();
  const { id: recipientId } = useParams();

  // form 상태
  const [form, setForm] = useState({
    name: "", // required
    relationship: relationshipOptions[0].value, // required
    font: fontOptions[0].value, // required
    profileImageURL: "", // required
    content: "", // required
  });
  const [errors, setErrors] = useState({ name: "" });
  const [touched, setTouched] = useState({ name: false });
  const [isValidForm, setIsValidForm] = useState(false);

  // 프로필 이미지 상태
  const [profileImages, setProfileImages] = useState([]);
  const [selectedProfileIdx, setSelectedProfileIdx] = useState(null);
  const [isLoadingImages, setIsLoadingImages] = useState(true);

  useEffect(() => {
    setIsLoadingImages(true);
    getProfileImages()
      .then(images => {
        setProfileImages(images);
        if (images.length > 0) {
          setSelectedProfileIdx(0);
          setForm(prev => ({
            ...prev,
            profileImageURL: images[0] || "",
          }));
        }
      })
      .finally(() => setIsLoadingImages(false));
  }, []);

  // 프로필 이미지 선택 핸들러
  const handleProfileImageChange = idx => {
    setSelectedProfileIdx(idx);
    setForm(prev => ({
      ...prev,
      profileImageURL: profileImages[idx] || "",
    }));
  };

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

  const handleSubmitMessage = async e => {
    e.preventDefault();
    const selectedFont = fontOptions.find(option => option.value === form.font);
    const payload = {
      ...form,
      font: selectedFont?.label || form.font,
      recipientId,
    };
    try {
      await postMessage(payload);
      navigate(`/post/${recipientId}`);
    } catch (error) {
      createToast({ message: "메시지 생성을 실패하였습니다", type: "error", bottom: 40 });
    }
  };

  useEffect(() => {
    if (form.name && form.relationship && form.profileImageURL && form.content && form.font) {
      setIsValidForm(true);
    } else setIsValidForm(false);
  }, [form]);

  const selectedFontOption = fontOptions.find(font => font.value === form.font);
  const selectedFontClass = selectedFontOption?.className || "";

  return (
    <Page title="롤링 페이퍼 - 메시지 보내기">
      <FormLayout onSubmit={handleSubmitMessage}>
        <FormField label={`From.${form.name}`} htmlFor="name">
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
          <ProfileSelector
            images={profileImages}
            selectedIdx={selectedProfileIdx}
            onSelect={handleProfileImageChange}
            isLoading={isLoadingImages}
          />
        </FormField>
        <FormField label="상대와의 관계" htmlFor="relationship">
          <Dropdown type="select" defaultValue={form.relationship}>
            <DropdownTrigger id="relationship" showArrow>
              {form.relationship || "지인"}
            </DropdownTrigger>
            <DropdownContent>
              {relationshipOptions.map(option => (
                <DropdownItem
                  key={option.value}
                  value={option.value}
                  onClick={() => setForm(prev => ({ ...prev, relationship: option.value }))}
                >
                  {option.label}
                </DropdownItem>
              ))}
            </DropdownContent>
          </Dropdown>
        </FormField>
        <FormField label="내용을 입력해주세요." htmlFor="editor">
          <Editor selectedFont={form.font} onChange={html => setForm(prev => ({ ...prev, content: html }))} />
        </FormField>
        <FormField label="폰트 선택" htmlFor="font-select">
          <Dropdown type="select" value={form.font}>
            <DropdownTrigger id="font-select" showArrow className={selectedFontClass}>
              {selectedFontOption && selectedFontOption.label}
            </DropdownTrigger>
            <DropdownContent>
              {fontOptions.map(font => (
                <DropdownItem
                  key={font.value}
                  value={font.value}
                  className={font.className}
                  onClick={() =>
                    setForm(prev => ({
                      ...prev,
                      font: font.value,
                    }))
                  }
                >
                  {font.label}
                </DropdownItem>
              ))}
            </DropdownContent>
          </Dropdown>
        </FormField>
        <RegularButton type="submit" size={56} width="100%" className="mt-[12px]" disabled={!isValidForm}>
          생성하기
        </RegularButton>
      </FormLayout>
    </Page>
  );
};

export default PostMessagePage;
