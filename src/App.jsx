import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import PostPage from "./pages/PostPage";
import PostMessagePage from "./pages/PostMessage";
import MainPage from "./pages/MainPage";
import ListPage from "./pages/ListPage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />

          <Route path="/post">
            <Route index element={<PostPage />} />
            <Route path=":id">
              <Route index element={/* 생성된 롤링페이퍼 페이지 */ null} />
              <Route path="message" element={<PostMessagePage />} />
              <Route path="edit" element={/* 롤링페이퍼 수정 페이지 */ null} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
