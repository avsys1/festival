import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Lineup from "./components/pages/Lineup";
import Tickets from "./components/pages/Tickets";
import Info from "./components/pages/Info";
import Footer from "./components/pages/Footer";
import Homepage from "./components/pages/Homepage";
import SingleArtist from "./components/pages/SingleArtist";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-orange-500">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/lineup" element={<Lineup />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/info" element={<Info />} />
            <Route path="/artist/:nickname" element={<SingleArtist />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
