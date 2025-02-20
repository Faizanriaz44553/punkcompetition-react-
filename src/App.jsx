import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import RoutesJson from "./routes/RoutesJson";

const App = () => {
  const location = useLocation();

  const hideNavbarFooter = location.pathname === "/auth/login" || location.pathname === "/auth/signup";

  return (
    <div>
      {!hideNavbarFooter ? <Navbar /> : null} 
      <div style={{width: "100%" , height: "55px" }}>

      </div>
      
      <Routes>
        {RoutesJson.map(({ path, element }, index) => (
           <Route key={index} path={path} element={element} />
        ))}
      </Routes>

      {!hideNavbarFooter ? <Footer /> :null}
    </div>
  );
};

export default App;

