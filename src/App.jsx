import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "./components/Dropdown";

function App() {
  return (
    <>
      <Dropdown type="select" errorMsg="입력해">
        <DropdownTrigger showArrow>선택해주세요.</DropdownTrigger>
        <DropdownContent>
          <DropdownItem type="select" value="option1">
            옵션 1
          </DropdownItem>
          <DropdownItem type="select" value="option2">
            옵션 2
          </DropdownItem>
          <DropdownItem type="select" value="option3">
            옵션션 3
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={/* 메인페이지 */ null} />
          <Route path="/list" element={/* 롤링페이퍼 목록페이지 */ null} />

          <Route path="/post">
            <Route index element={/* 롤링페이퍼 생성페이지 */ null} />
            <Route path=":id/message" element={/* 롤링페이퍼 메세지 보내기 페이지 */ null} />
            <Route element={<div>헤더서비스입니다</div>}>
              <Route path=":id" element={/* 생성된 롤링페이퍼 페이지 */ null} />
              <Route path=":id/edit" element={/* 롤링페이퍼 수정 페이지 */ null} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
