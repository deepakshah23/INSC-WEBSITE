import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ScrollToTopButton from "./components/Hook/Scroll-top";
import ContactPage from "./pages/ContactPage";
import AboutusPage from "./pages/AboutusPage";
import BecomeMemberPage from "./pages/BecomeMemberPage";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTopButton />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/aboutus" element={<AboutusPage />} />
          <Route path="/become-member" element={<BecomeMemberPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
