import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import "../css/style.css";

function Services({ data, props }) {

    return (
        <div id="services" className="rounded-0 py-4">
            <Container>
                <div className="text-center mb-3">
                    <h3 className="text-center mb-0 mb-md-2">Services</h3>
                    <img src={require(`../img/servicesB.png`)} alt="hey" className="img-fluid text-center"></img>

                </div>
                <Row className="row-works">
                    {data.map(d => (
                        <Col sm={12} md={6} lg={4} >
                            <Fade direction={d.direction} >
                                <div className="mb-5 text-center text-md-left">
                                    <div>
                                        <img src={require(`../img/${d.imageName}`)} alt="hey" className="img-fluid mb-3 w-100"></img>

                                    </div>
                                    <h4 className="text-center text-md-left pb-1 m-0 text-uppercase"> {d.title}</h4>
                                    <p className="text-center text-md-left">
                                        {d.description}
                                    </p>
                                </div>
                            </Fade>
                        </Col>
                    ))}
                </Row>
            </Container>


        </div >
    )
}

export default Services;