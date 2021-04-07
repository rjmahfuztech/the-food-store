import React from 'react';
import './Header.css';
import { Card, Nav, Navbar } from 'react-bootstrap';
import bannerImg from '../../images/bannerbackground.png';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">The Food Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features"></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Card className="bg-dark text-black text-center">
                <Card.Img className="" src={bannerImg} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Best food waiting for your belly</Card.Title>
                    {/* <input type="text" className="form-control"/> */}
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Header;