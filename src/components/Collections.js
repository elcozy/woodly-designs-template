import React from "react";
import {
    Container,
    Row,
    Col,
    Carousel,
} from "react-bootstrap";
import { Slide, Fade } from "react-awesome-reveal";
import { Collection1, Collection2, Collection3, Collection4, Collection5 } from "./Modal";
import "../css/style.css";

function Collections({ data }) {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);

    return (
        <div id="collections" className="rounded-0 py-4">
            <>
                <Collection1 show={modalShow} onHide={() => setModalShow(false)} />
                <Collection2 show={modalShow2} onHide={() => setModalShow2(false)} />
                <Collection3 show={modalShow3} onHide={() => setModalShow3(false)} />
                <Collection4 show={modalShow4} onHide={() => setModalShow4(false)} />
                <Collection5 show={modalShow5} onHide={() => setModalShow5(false)} />
            </>
            <Container className="my-4">
                <h3 className="text-center">Our Collection</h3>
                <p className="pb-3 text-center">Design your own space</p>

                <Carousel interval={3000}>
                    <Carousel.Item>
                        <Row className="mx-0 carousel-collection">
                            <Col xs className="px-0">
                                <div
                                    className="position-relative h-100 caro1"
                                    onClick={() => setModalShow(true)}
                                >
                                    <Slide direction="left">
                                        <div className="position-absolute caroz">
                                            <h3>Wardrobe</h3>

                                            <a href="#" alt={"shop now"}>
                                                <h5>Shop Now</h5>
                                            </a>
                                        </div>
                                    </Slide>
                                    {/* <img src={"../img/collection1.png"} alt="hey" className="img-fluid mb-3 w-100">
                                    </img> */}
                                </div>
                            </Col>
                            <Col xs md className="ml-2 ml-0 ml-md-4 mr-md-4 px-0 b">
                                <div className="d-flex flex-column">
                                    <div
                                        className="position-relative b1 pb-2 pb-md-4"
                                        onClick={() => setModalShow2(true)}
                                    >
                                        <Slide direction="bottom">
                                            <img
                                                src={"../img/collection2.png"}
                                                alt="hey"
                                                className="img-fluid mb-3 w-100"
                                            ></img>
                                            <div className="position-absolute caroz">
                                                <h3>Tables</h3>
                                                <a href="#" alt={"shop now"}>
                                                    <h5>Shop Now</h5>
                                                </a>
                                            </div>
                                        </Slide>
                                    </div>
                                    <div
                                        className="position-relative b2"
                                        onClick={() => setModalShow4(true)}
                                    >
                                        <Slide direction="top">
                                            <img
                                                src={"../img/collection4.png"}
                                                alt="hey"
                                                className="img-fluid mb-3 w-100"
                                            ></img>
                                            <div className="position-absolute caroz">
                                                <h3>Lamps</h3>
                                                <a href="#" alt={"shop now"}>
                                                    <h5>Shop Now</h5>
                                                </a>
                                            </div>
                                        </Slide>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} md className="px-0 c pt-2 pt-md-0">
                                <div className="d-flex flex-row flex-md-column">
                                    <div
                                        className="position-relative c1 pb-0 pb-md-4 mr-2 mr-md-0"
                                        onClick={() => setModalShow3(true)}
                                    >
                                        <Slide direction="bottom">
                                            <img
                                                src={"../img/collection3.png"}
                                                alt="hey"
                                                className="img-fluid mb-3 w-100"
                                            ></img>
                                            <div className="position-absolute caroz">
                                                <h3>Chairs</h3>
                                                <a href="#" alt={"shop now"}>
                                                    <h5>Shop Now</h5>
                                                </a>
                                            </div>
                                        </Slide>
                                    </div>
                                    <div
                                        className="position-relative c2"
                                        onClick={() => setModalShow5(true)}
                                    >
                                        <Slide direction="top">
                                            <img
                                                src={"../img/collection5.png"}
                                                alt="hey"
                                                className="img-fluid mb-3 w-100"
                                            ></img>
                                            <div className="position-absolute caroz">
                                                <h3>Float</h3>
                                                <a href="#" alt={"shop now"}>
                                                    <h5>Shop Now</h5>
                                                </a>
                                            </div>
                                        </Slide>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default Collections;
