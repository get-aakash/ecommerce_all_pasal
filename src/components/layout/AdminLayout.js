import React from "react";
import { SideBar } from "./SideBar";
import { Header } from "./Header";
import { Footer } from "./Footer";


export const AdminLayout = () => {
  return (
    <div className="sidebar">
      <div className="left">
        {/* sidbar */}
        <SideBar />
      </div>
      <div className="right ">
        {/* heder */}
        <Header />

        {/* main body */}
        <main className="main"></main>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};