import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const NavigationBar = () => {

    return (
        <Navbar bg="dark" expand="md" className="Navbar" >
            <Container >
                <Navbar.Brand href="#home" className="Logo">PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav " className="col-btn" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="Row">
                        <br></br>
                        <Container>
                            <Row >
                                <Col className="Col"> <Nav.Link href="#about-me" className="navigator" >O mnie</Nav.Link></Col>


                                <Col className="Col"><Nav.Link href="#link" className="navigator">Wlepka</Nav.Link></Col>



                                <Col className="Col"><Nav.Link href="#projects" className="navigator">Projekty</Nav.Link></Col>
                            </Row>
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )

}
export default NavigationBar