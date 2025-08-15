import { useState } from "react";
import Input from "./Input";

const Test = () => {
  const [errorTest, setErrorTest] = useState("");
  const [touched, setTouched] = useState(false);

  return (
    <div className="p-[50px] max-w-[720px] mx-auto">
      <Input
        name="error"
        placeholder="에러 테스트"
        value={errorTest}
        onChange={e => setErrorTest(e.target.value)}
        onBlur={() => setTouched(true)}
        errorMsg={touched && errorTest.length === 0 ? "이 필드를 입력해주세요." : ""}
      />{" "}
    </div>
  );
};

export default Test;
