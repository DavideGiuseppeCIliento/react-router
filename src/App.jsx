// IMPORT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostListPage from "./pages/PostListPage";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFoundPage from "./pages/NotFoundPage";
import pages from "./data/pages";

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
          {/* Gestione NOTFOUND */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
