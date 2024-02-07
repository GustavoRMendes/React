import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <p>Layout principal. Abaixo: </p>
        <hr />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
