import { useEffect, useState } from "react";
import ToggleButton from "../../components/Button/ToggleButton";
import { ThemeOption, ThemeOptionGroup } from "../../components/Option/ThemeOption";
import { COLOR_OPTIONS, IMAGE_OPTIONS } from "../../constants/OPTIONS";
import RegularButton from "../../components/Button/RegularButton";
import postRecipients from "../../api/postRecipients";
import { useNavigate } from "react-router";
import Input from "../../components/Form/Input";
import useToast from "../../hooks/useToast";
const PostPage = () => {
  const [name, setName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(COLOR_OPTIONS[0]);
  const [backgroundImageURL, setBackgroundImageURL] = useState(IMAGE_OPTIONS[0]);
  const [selectedType, setSelectedType] = useState("color");
  const [errorMsg, setErrorMsg] = useState("");

  const { createToast } = useToast();

  const isRenderColor = selectedType === "color" ? true : false;

  const navigate = useNavigate();

  const getResponse = async () => {
    switch (selectedType) {
      case "color":
        return await postRecipients({ name, backgroundColor });

      case "image":
        return await postRecipients({ name, backgroundColor, backgroundImageURL });

      default:
        return null;
    }
  };

  const handleSubmitRecipient = async e => {
    e.preventDefault();
    try {
      if (!name) {
        throw new Error("값을 입력해주세요.");
      }
      const response = await getResponse();
      const { id } = response;
      navigate(`/post/${id}`);
    } catch (error) {
      createToast({ message: error.message, type: "error", bottom: 40, duration: 5000 });
    }
  };

  const handleBlur = () => {
    if (!name) {
      setErrorMsg("값을 입력해주세요.");
    } else {
      setErrorMsg("");
    }
  };
  return (
    <form onSubmit={handleSubmitRecipient} className="form-container flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-gray-900 font-24-bold">To. {name}</h3>
        <Input
          placeholder="받는 사람 이름을 입력해 주세요"
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
          onBlur={handleBlur}
          errorMsg={errorMsg}
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
                checked={backgroundColor === color}
                onChange={setBackgroundColor}
              />
            ))
          : IMAGE_OPTIONS.map(url => (
              <ThemeOption
                key={url}
                optionType="image"
                name="theme-image"
                value={url}
                checked={backgroundImageURL === url}
                onChange={setBackgroundImageURL}
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
