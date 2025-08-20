import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import PostPage from "./pages/PostPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={/* 메인페이지 */ null} />
          <Route path="/list" element={<ListPage />} />

          <Route path="/post">
            <Route index element={/* 롤링페이퍼 생성페이지 */ null} />
            <Route path=":id">
              <Route index element={<PostPage />} />
              <Route path="message" element={/* 롤링페이퍼 메세지 보내기 페이지 */ null} />
              <Route path="edit" element={/* 롤링페이퍼 수정 페이지 */ null} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
