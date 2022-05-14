import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./modules/home/Home";
import About from "./modules/about/About";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
