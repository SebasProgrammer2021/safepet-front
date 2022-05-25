import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./modules/about/About";
import AffiliateModule from "./modules/affiliate/AffiliateModule";
import CardCopayment from "./modules/affiliate/containers/CardCopayment";
import Home from "./modules/home/Home";
import Register from "./modules/affiliate/containers/Register";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="affiliate" element={<AffiliateModule />} />
        <Route path="register-user" element={<Register />} />
        <Route path="consult-copayment" element={<CardCopayment />} />
      </Routes>
    </Layout>
  );
}

export default App;
