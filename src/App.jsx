// IMPORT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostListPage from "./pages/PostListPage";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFoundPage from "./pages/NotFoundPage";
import CreatePost from "./pages/CreatePost";
import pages from "./data/pages";
import PostDetail from "./pages/PostDetail";

// --- COMPONENT DECLARATION
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotte che in comune hanno lo stesso Layout */}
        <Route element={<DefaultLayout />}>
          <Route path={pages.HOME()} element={<HomePage />} />
          <Route path={pages.ABOUT()} element={<AboutUsPage />} />
          <Route path={pages.POSTS()} element={<PostListPage />} />

          {/* ROUTE POSTS */}
          <Route path="/posts">
            <Route index element={<PostListPage />} />
            <Route path="create" element={<PostListPage />} />
            <Route path=":id" element={<PostDetail />} />
          </Route>

          {/* Gestione NOTFOUND */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
