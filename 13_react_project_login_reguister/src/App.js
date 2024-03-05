import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/write" element={<WritePage/>} />
{/*       <Route path="/@:username" element={<PostListPage/>} />
      <Route path="/@:username/:postID" element={<PostPage/>} /> */}

      <Route path="/@:username">
        <Route index element={<PostListPage/>} />
        <Route path=':postID' element={<PostPage/>} />
      </Route>
    </Routes>

  );
}

export default App;
