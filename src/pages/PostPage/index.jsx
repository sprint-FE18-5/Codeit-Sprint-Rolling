import { Input } from "@headlessui/react";
import { useState } from "react";
import ToggleButton from "../../components/Button/ToggleButton";
import { ThemeOption, ThemeOptionGroup } from "../../components/Option/ThemeOption";
import { COLOR_OPTIONS, IMAGE_OPTIONS } from "../../constants/OPTIONS";
import RegularButton from "../../components/Button/RegularButton";

const PostPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    backgroundColor: COLOR_OPTIONS[0],
    backgroundImageURL: IMAGE_OPTIONS[0],
  });
  const [selectedType, setSelectedType] = useState("color");

  const isRenderColor = selectedType === "color" ? true : false;

  return (
    <form className="form-container flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-gray-900 font-24-bold">To.</h3>
        <Input
          placeholder="ddd"
          type="text"
          className={"border border-gray-300 rounded-[8px] h-[50px] px-[16px] py-[12px] font-16-regular text-gray-500"}
          onChange
          value
          errorMsg
        />
      </div>

      <div className="flex flex-col gap-[4px]">
        <h3 className="text-gray-900 font-24-bold">배경화면을 선택해 주세요.</h3>
        <p className="text-gray-500 font-16-regular">컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
      </div>

      <ToggleButton
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        colorBtnProps={{ type: "button" }}
        imageBtnProps={{ type: "button" }}
      />
      <ThemeOptionGroup>
        {isRenderColor
          ? COLOR_OPTIONS.map(color => (
              <ThemeOption
                key={color}
                optionType="color"
                label={color}
                name="theme-color"
                value={color}
                checked={formData.backgroundColor === color}
                onChange={() => setFormData(prev => ({ ...prev, backgroundColor: color }))}
              />
            ))
          : IMAGE_OPTIONS.map(url => (
              <ThemeOption
                key={url}
                optionType="image"
                name="theme-image"
                value={url}
                checked={formData.backgroundImageURL === url}
                onChange={() => setFormData(prev => ({ ...prev, backgroundImageURL: url }))}
              />
            ))}
      </ThemeOptionGroup>
      <RegularButton size={56} width="w-full" type="submit">
        생성하기
      </RegularButton>
    </form>
  );
};

export default PostPage;
