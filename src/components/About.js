import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

import "../css/style.css";

function About({ data }) {

    return (
        <div id="about" className="rounded-0 pt-4 my-md-5">
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <Fade direction={"right"} duration={1500}>
                            <Image src="./img/about.png" alt="image" fluid />
                        </Fade>
                    </Col>
                    <Col sm={12} md={{ order: 'first' }} className="pb-md-4 pb-md-1">
                        <Fade direction={"left"} delay={500} duration={1500}>
                            <h3 className="text-center text-md-left py-4">About Us</h3>
                            <h6 className="text-left font-weight-normal">Founded in 1986, we give your space the facial appeal it needs in terms of furniture. Crafted with the finest mahogany, oak, maple, pine, cherry and cedar wood based on your preference you can be rest assured that you’re getting quality for your order.</h6>
                        </Fade>
                    </Col>



                </Row>
            </Container>
        </div >
    )
}

export default About;