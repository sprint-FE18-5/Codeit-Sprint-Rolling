import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import PostPage from "./pages/PostPage";
import PostDetailPage from "./pages/PostDetailPage";
import ListPage from "./pages/ListPage";
import PostMessagePage from "./pages/PostMessage";
import MainPage from "./pages/MainPage";

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
              <Route index element={<PostDetailPage />} />
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
