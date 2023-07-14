
import { Route, Routes } from "react-router-dom";

import Exchange from "./components/exchange";
import Home from "./components/Home";
import Footer from "./components/Footer";

import ForgotPassword from "./components/ForgotPassword";
import RegisterAndLogin from "./components/RegisterAndLogin";
import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init();

function App() {
  return (
    <div className="root scroll-smooth">
       
      <Routes>
      <Route path="/" element={<RegisterAndLogin/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/reset" element={<ForgotPassword/>} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
