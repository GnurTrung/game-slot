import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { useApplicationContext } from "./contexts/useApplication";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  const { WebApp } = useApplicationContext();
  useEffect(() => {
    if (typeof WebApp?.expand !== "undefined") {
      WebApp.expand();
    }
  }, [WebApp]);
  return (
    <div className="relative max-w-[414px] mx-auto bg-[url('/public/images/background.png')] bg-cover bg-center bg-no-repeat h-[100vh]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
