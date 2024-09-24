import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AppContextProvier } from "./context/AppContext";

const App = () => {
  return (
    <>
      <AppContextProvier>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContextProvier>
    </>
  );
};

export default App;
