import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/Contact";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </HashRouter>
  );
}

export default App;