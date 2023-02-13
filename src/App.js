import React from "react";
import ErrorPages from "./components/ErrorPages/ErrorPages";
import Navbar from "./components/Header/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ROUTE } from "./constants/Constants";
import Page from "./components/Page/Page";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path={ROUTE.NOT_FOUND} element={ErrorPages} />
          <Route path={ROUTE.PAGES} element={Page} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
