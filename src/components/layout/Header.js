import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import {AiFillDashboard} from "react-icons/ai"
import Dashboard from "../../pages/dashboard/Dashboard";

export const Header = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">CBS CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <GoSignIn /> Sign In
            </Link>
            <Link className="nav-link" to="/signup">
              <FaUserEdit /> Sign Up
            </Link>
            <Link className="nav-link" to="/dashboard">
              <AiFillDashboard /> Dashboard
            </Link>
            <Link className="nav-link" to="#!">
              <GoSignOut /> Sign Out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};