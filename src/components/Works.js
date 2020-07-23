import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import "../css/style.css";

function Work({ data }) {
    const [filterOption, setFilterOption] = React.useState('all');
    const [filteredData, setFilterData] = React.useState(data);
    const shoot = (name) => {
        setFilterOption(name)
        const filtered = data.filter((v) => {
            if (name === 'all') return data
            return v.category.includes(name)
        })
        setFilterData(filtered)
    };
    return (
        <div id="work" className="rounded-0 py-4">
            <div id="works">
                <Container className="text-center py-4">
                    <div className="text-center mb-3">
                        <h3 className="text-center mb-1 mb-md-2">Our Works</h3>
                        <p className="text-center">A quick tour of our achievements</p>
                    </div>
                    {/* <h3>{filterOption}</h3> */}
                    <Form className="w-75 mx-auto nav-form">
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom onChange={(e) => shoot(e.target.value)}>
                                <option value="all">ALL PROJECTS</option>
                                <option value="residential">RESIDENTIAL</option>
                                <option value="office">OFFICE</option>
                                <option value="hospital">HOSPITAL</option>
                                <option value="hotel">HOTEL</option>
                                <option value="resturant">RESTAURANT</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <Row className="mx-auto justify-content-center my-3 navs-works">
                        <ul className="our-works p-0 m-0 w-100 justify-content-between d-flex">
                            <button onClick={() => shoot('all')} className={`btn ${filterOption === 'all' ? 'active' : ''}`}>ALL PROJECTS</button>
                            <button onClick={() => shoot('residential')} className={`btn ${filterOption === 'residential' ? 'active' : ''}`}>RESIDENTIAL</button>
                            <button onClick={() => shoot('office')} className={`btn ${filterOption === 'office' ? 'active' : ''}`}>OFFICE</button>
                            <button onClick={() => shoot('hospital')} className={`btn ${filterOption === 'hospital' ? 'active' : ''}`}>HOSPITAL</button>
                            <button onClick={() => shoot('hotel')} className={`btn ${filterOption === 'hotel' ? 'active' : ''}`}>HOTEL</button>
                            <button onClick={() => shoot('restaurant')} className={`btn ${filterOption === 'restaurant' ? 'active' : ''}`}>RESTAURANT</button>
                        </ul>
                    </Row>
                    <Row>
                        {filteredData.map((d) => (
                            <Col sm={12} md={6} lg={4} key={d.id}>
                                <Fade direction={d.direction}>
                                    <div className="mb-5 text-center text-md-left">
                                        <div>
                                            <img
                                                src={require(`../img/${d.imageName}`)}
                                                alt="hey"
                                                className="img-fluid mb-3 w-100"
                                            ></img>
                                        </div>
                                        <h4 className="text-center text-md-left pb-1 m-0 text-uppercase">
                                            {" "}
                                            {d.title}
                                        </h4>
                                        <p className="text-center text-md-left">
                                            {d.description}
                                        </p>
                                    </div>
                                </Fade>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Work;
