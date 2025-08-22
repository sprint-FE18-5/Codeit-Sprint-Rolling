import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import PostPage from "./pages/PostPage";
import PostDetailPage from "./pages/PostDetailPage";
import ListTestPage from "./pages/listTestPage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={/* 메인페이지 */ null} />
          <Route path="/list" element={<ListTestPage />} />

          <Route path="/post">
            <Route index element={<PostPage />} />
            <Route path=":id">
              <Route index element={<PostDetailPage />} />
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
