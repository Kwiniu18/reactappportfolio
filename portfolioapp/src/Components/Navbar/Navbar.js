import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './Navbar.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const NavigationBar = () => {

    return (
        <Navbar bg="dark" expand="md" className={style.Navbar} >
            <Container >
                <Navbar.Brand href="#home" className={style.Logo}>PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={style.Row}>
                        <br></br>
                        <Container>
                            <Row className="Row">
                                <Col> <Nav.Link href="#home" className={style.navigator} >O mnie</Nav.Link></Col>


                                <Col><Nav.Link href="#link" className={style.navigator}>Wlepka</Nav.Link></Col>



                                <Col><Nav.Link href="#link" className={style.navigator}>Projekty</Nav.Link></Col>
                            </Row>
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )

}
export default NavigationBar