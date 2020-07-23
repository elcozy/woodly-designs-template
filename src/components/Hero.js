import React, { useState } from "react";
import { Navbar, Nav, Container, Jumbotron, Row, Col } from 'react-bootstrap';

// import Scrollspy from 'react-scrollspy'
import ScrollspyNav from "react-scrollspy-nav";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import "../css/style.css";

function Hero({ data }) {
    const [change, setChange] = useState(false);
    const changePosition = 1;

    let position = useWindowScrollPosition();
    // position == { x: 0, y: 0 }

    if (position.y > changePosition && !change) {
        setChange(true);
    }

    if (position.y <= changePosition && change) {
        setChange(false);
    }

    let style = {
        backgroundColor: change ? "#333333" : "transparent",
    };
    return (
        <div id="hero" className="rounded-0">
            <Navbar expand="md" style={style}>
                <Container>
                    <Navbar.Brand href="#home" className="text-white">woodly</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"></Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <ScrollspyNav className="m-0 d-block p-0 d-md-flex" offset={-80} scrollDuration="100" scrollTargetIds={['hero', 'about', 'services', 'collections', 'contact']} activeNavClass="is-current" headerBackground="true">
                                <ul className="ml-auto d-block d-md-flex m-0">
                                    <Nav.Link href="#hero" className="text-center text-white px-4">Home</Nav.Link>
                                    <Nav.Link href="#about" className="text-center text-white px-4">About</Nav.Link>
                                    <Nav.Link href="#services" className="text-center text-white px-4">Services</Nav.Link>
                                    <Nav.Link href="#collections" className="text-center text-white px-4">Works</Nav.Link>
                                    <Nav.Link href="#contact" className="text-center text-white px-4">Contact</Nav.Link>
                                </ul>
                            </ScrollspyNav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className=" h-86 h-md-100 d-flex">
                <div className="text-center text-white m-auto hero-cont">
                    <h1>
                        Modern and Minimalistic Designs
    </h1>
                    <a href="#about"> <button className="mt-4 rounded-circle discoverr py-4 px-2 py-md-5 px-md-4">Discover</button></a>
                </div>
            </Container>
        </div >
    )
}

export default Hero;