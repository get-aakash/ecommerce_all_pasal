import React from "react";
import { SideBar } from "./SideBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";


export const AdminLayout = ({children}) => {
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
        <Container className="Container">{children}</Container>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};