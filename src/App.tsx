import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { AppRouter } from "./components";

import { Footer, Header } from "./layout";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { pathname } = useLocation();
  const shouldShow = pathname.split("/")[1] !== "admin";

  return (
    <div className="App">
      {shouldShow && <Header />}
      <AppRouter />
      {shouldShow && <Footer />}
    </div>
  );
}

export default App;
