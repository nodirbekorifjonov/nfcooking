import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ColorList from "../components/ColorList";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <Navbar />
      <ColorList />
      <main className="max-w-screen-lg mx-auto px-6 mb-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
