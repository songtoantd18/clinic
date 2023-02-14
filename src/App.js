import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Page from "./components/Page/Page";
import Service from "./components/Service/Service";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/home/pages" element={<Page />} />
          <Route path="/home/services" element={<Service />} />
          <Route path="/home/blogs" element={<Blog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
