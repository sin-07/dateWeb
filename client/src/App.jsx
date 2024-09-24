import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { io } from "socket.io-client";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AppContextProvider } from "./context/AppContext";

// const server = io("http://localhost:5000");

function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
