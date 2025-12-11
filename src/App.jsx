import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu } from "./pages";
import Header from "./components/shared/Header";
import Clarity from "@microsoft/clarity";

function App() {
  // Microsoft Clarity
  useEffect(() => {
    Clarity.init("ujo59gd873");
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
