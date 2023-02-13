import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <main className="containerBody">
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
