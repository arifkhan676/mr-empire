import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import brand from '../Image/6.jpg'
import './Navbaar.css'
import { NavLink } from 'react-router-dom';


function Navbaar() {
    return (
        <div className='navbaar' >
            <>
                {['sm'].map((expand) => (
                    <Navbar key={expand} expand={expand} className="mb-2"  >
                        <Container fluid>
                            <Navbar.Brand href="#">  <NavLink to='/'>  <img className='logo' src={brand} alt="" />  </NavLink></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${!expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Mr-Empire
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="#action1">Home</Nav.Link>
                                        <Nav.Link href="#action2">About</Nav.Link>
                                        <NavDropdown
                                            title="Categories"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="#action3">Design</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                                Interiro Design
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                All Design
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
        </div>

    );
}

export default Navbaar;