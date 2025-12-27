// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bike from "./components/Bike";
import Footer from "./components/Footer";
import HeadlineCard from "./components/HeadlineCard";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import Payment from "./components/Payment";


// Layout wrapper for pages
const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      {/* Navbar always visible and receives search updater */}
      <Navbar setSearchTerm={setSearchTerm} />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <HeadlineCard />
              <Bike searchTerm={searchTerm} />
            </Layout>
          }
        />

        {/* Other Pages */}
        <Route path="/AboutUs" element={<Layout><AboutUs /></Layout>} />
        <Route path="/ContactUs" element={<Layout><ContactUs /></Layout>} />
        <Route path="/Signin" element={<Layout><Signin /></Layout>} />
        <Route path="/SignUp" element={<Layout><SignUp /></Layout>} />
        
        <Route path="/payment" element={<Layout><Payment /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
