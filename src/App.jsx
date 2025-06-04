// IMPORT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT CONTEXT
import { PostDataProvider } from "./context/PostsDataContenxt";

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
      <PostDataProvider>
        <Routes>
          {/* Rotte che in comune hanno lo stesso Layout */}
          <Route element={<DefaultLayout />}>
            <Route path={pages.HOME()} element={<HomePage />} />
            <Route path={pages.ABOUT()} element={<AboutUsPage />} />

            {/* ROUTE POSTS */}
            <Route path={pages.POSTS()}>
              <Route index element={<PostListPage />} />
              <Route path={pages.POST_CREATE()} element={<PostListPage />} />
              <Route path={pages.POST_DETAIL()} element={<PostDetail />} />
            </Route>

            {/* Gestione NOTFOUND */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </PostDataProvider>
    </BrowserRouter>
  );
}
