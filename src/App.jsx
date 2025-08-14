import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout/Layout";
import DropdownTest from "./components/Dropdown/Test";
function App() {
  return (
    <>
      <DropdownTest />
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
