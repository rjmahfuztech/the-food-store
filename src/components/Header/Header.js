import React from 'react';
import './Header.css';
import { Card, Nav, Navbar } from 'react-bootstrap';
import bannerImg from '../../images/bannerbackground.JPG';
import TextField from '@material-ui/core/TextField';



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
                        {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                        {/* <Nav.Link href="#memes">
                            Login
                        </Nav.Link> */}
                        <button className="p-2 pl-4 pr-4 btn btn-outline-success">Login</button>
                        <button className="p-2 pl-4 pr-4 btn btn-success">Sign Up</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Card className="bg-dark text-white text-center">
                <Card.Img className="" src={bannerImg} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Best food waiting for your belly</Card.Title>
                    {/* <input type="text" className="form-control"/> */}
                        <TextField
                            id="outlined-secondary"
                            label="Outlined secondary"
                            variant="outlined"
                            color="secondary"
                        />
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Header;