import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import "../css/style.css";

function Contact({ data }) {

    return (
        <div id="contact" className="rounded-0 pt-4">
            <Container>
                <div className="py-4 contact">
                    <h3 className="text-center">GET IN TOUCH</h3>
                    <p className="pb-3 text-center">Whether its about our products, pricing, need a trial anything you need, our team will answer your questions</p>
                    <div className="border border-dark contactM p-4 p-md-5">
                        <div className="form-group floating-label-group"> <br></br>

                            <input
                                type="text"
                                className="form-control inputText mb-4"
                                name="name"
                                required
                            /><span class="floating-label">Name</span>
                        </div>
                        <div className="form-group floating-label-group"> <br></br>

                            <input
                                type="email"
                                className="form-control inputText mb-4"
                                name="email"
                                required
                            />
                            <span class="floating-label">Email Address</span>
                        </div>
                        <div className="form-group floating-label-group"> <br></br>

                            <input
                                type="phone"
                                className="form-control inputText mb-4"
                                placeholder=""
                                name="phone"
                                required
                            />
                            <span class="floating-label">Contact number</span>
                        </div>
                        <div className="form-group floating-label-group ">

                            <input
                                className="form-control inputText pt-5 pb-5 mb-4"
                                type="text"
                                required
                            />
                            <span class="floating-label">Your message</span>
                        </div>
                        <div className="text-center contact-btn">
                            <button
                                type="submit"
                                value="Send"
                                className="btn btn-outline-secondary btn-lg my-3 px-4"
                            >
                                SEND MESSAGE
            </button>
                        </div>
                    </div>
                </div>
                <div className="contact-below mt-4 py-3">
                    <Row>
                        <Col xs={5} lg={3} className="my-3 my-md-1 a">
                            <h4 className="text-left">woodly</h4>
                            <p className="my-2 my-md-3">+36702327589</p>
                            <p className="my-2 my-md-3">woodly@gmail.com</p>
                            <p className="my-2 my-md-3">03, 1999 Inker, LA</p>
                        </Col>
                        <Col xs={7} lg={3} className="my-3 my-md-1 b">
                            <h5 className="mb-0 mb-md-3">Company</h5>
                            <Row className="mx-0">
                                <Col xs={5} className="px-0"><a href="#about">About Us</a></Col>
                                <Col xs={5} className="px-0 pr-md-2"><a href="#contact">Contact</a></Col>
                                <Col xs={5} className="px-0"><a href="#services">Services</a></Col>
                                <Col xs={5} className="px-0 pr-md-2"><a href="#">Career</a></Col>
                                <Col xs={5} className="px-0"><a href="#">Shop</a></Col>
                            </Row>
                        </Col>
                        <Col xs={5} lg={2} className="my-3 my-md-1 c mt-4 mt-lg-0 socials">
                            <h5>Social</h5>
                            <div className="text-left d-flex flex-wrap">
                                <Col xs={12} className="text-left d-flex flex-wrap p-0 mb-3">
                                    <a href="#"><img className="img-fluid pr-3 pr-md-4" src={"../img/twit.png"}></img></a>
                                    <a href="#"><img className="img-fluid pr-3 pr-md-4" src={"../img/insta.png"}></img></a>
                                    <a href="#"><img className="img-fluid pr-3" src={"../img/faceb.png"}></img></a>
                                </Col>
                                <Col xs={12} className="text-left d-flex flex-wrap p-0">
                                    <a href="#"><img className="img-fluid pr-3 pr-md-4" src={"../img/linkn.png"}></img></a>
                                    <a href="#"><img className="img-fluid" src={"../img/gplus.png"}></img></a>
                                </Col>
                            </div>
                        </Col>
                        <Col xs={7} lg={4} className="my-3 my-md-1 d">
                            <h5>Stay Informed</h5>
                            <p className="font-weight-normal mb-2">Get the scoop on new products and more.</p>
                            <Form className="position-relative sign-up ">
                                <Form.Control placeholder="E-mail" className="border-0" />
                                <button className="position-absolute m-0 bg-white border-0">Sign Up</button>

                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="footer-con py-3 py-md-4">
                <Container>
                    <div className="d-flex flex-row justify-content-left">
                        <h5 className="pr-md-3">
                            woodly. All Rights Reserved 2020
                    </h5>
                        <h5 className="pr-md-3">|
                    </h5>
                        <a href="#"><h5 className="pr-md-3">Terms & Conditions</h5></a>
                        <h5 className="pr-md-3">|
                    </h5>
                        <a href="#"><h5 className="pr-md-3">Privacy Policy</h5></a>
                    </div>
                </Container>

            </div>
        </div >
    )
}

export default Contact;