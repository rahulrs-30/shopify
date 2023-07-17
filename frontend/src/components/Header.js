import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                collapseOnSelect
                style={{
                    background: "linear-gradient(to right, #3a7bd5, #6937a1)",
                }}
            >
                <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand >
                        <img src={logo} alt="shopify" />
                        Shopify
                    </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <LinkContainer to='/cart'>
                            <Nav.Link>
                                <FaShoppingCart /> Cart
                            </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                            <Nav.Link>
                                <FaUser /> Sign In
                            </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
