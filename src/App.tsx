import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Document from "./pages/Document";
import Feed from "./pages/Feed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/document" element={<Document />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default App;
