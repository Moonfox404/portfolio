import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { NavbarCollapse, NavbarToggle } from "react-bootstrap";

const PortfolioNavbar = () => {
    return (
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
            <Container>
                <NavbarBrand href="#home">XUAN PHAM</NavbarBrand>
                <NavbarToggle aria-controls="navbar-nav"/>
                <NavbarCollapse id="navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavItem><NavLink href="#about">About</NavLink></NavItem>
                        <NavItem><NavLink href="#projects">Projects</NavLink></NavItem>
                        <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
};

export default PortfolioNavbar;
