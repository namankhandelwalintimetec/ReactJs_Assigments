import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import About from "./Screens/About/About";
import Skills from "./Screens/Skills/Skill";
import Contact from "./Screens/Contact/Contact";
import Services from "./Screens/Service/Service";
import Home from "./Screens/Home/Home";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
