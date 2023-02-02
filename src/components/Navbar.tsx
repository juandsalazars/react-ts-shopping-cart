import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink} >
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink} >
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink} >
                        About
                    </Nav.Link>
                </Nav>
                <Button
                    style={{width: "3rem", height: "3rem", position: "relative"}}
                    className="d-flex justify-content-start rounded-circle"
                    variant="outline-primary"
                >
                    <FaShoppingCart size={35} className="mr-5" />
                    <div className="rounded-circle bg-danger d-flex justify-content-center
                        align-items-center"
                        style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(+25%,+25%)"
                        }}
                    >3</div>
                </Button>
            </Container>
        </NavbarBs>
    );
}