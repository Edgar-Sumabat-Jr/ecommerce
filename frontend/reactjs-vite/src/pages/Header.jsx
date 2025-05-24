import React from "react"
import { Outlet, Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import ThemeToggle from "../components/ThemeToggle";

import '../styles/header.css'
import '../index.css'

import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <>
      <Navbar expand="lg" className="custom-navbar shadow">
        <Container fluid className="px-3"> {/* remove vertical padding here */}
          <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>
              {user ? (
                <Nav.Link onClick={handleLogout} className="custom-nav-link">Logout</Nav.Link>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className="custom-nav-link">Login</Nav.Link>
                  <Nav.Link as={Link} to="/register" className="custom-nav-link">Register</Nav.Link>
                </>
              )}
            </Nav>
            <div className="ms-auto">
              <ThemeToggle />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default Header