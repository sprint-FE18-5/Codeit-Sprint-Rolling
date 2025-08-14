import "./App.css";
import MainImg from "./components/MainImg";
import MainImgPlus from "./components/MainImgPlus";
function App() {
  return (
    <div className="flex gap-6">
      <MainImg />
      <MainImg />
      <MainImgPlus />
    </div>
  );
}

export default App;
