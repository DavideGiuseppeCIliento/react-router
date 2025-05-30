// IMPORT ROUTER
import { Outlet } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// --- COMPONENT DECLARATION
export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
