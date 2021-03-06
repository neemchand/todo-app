import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../Components/Logo'
import Navbar from '../Navbar';
class Header extends React.Component {
    render() {
        return <>
            <header>
                <Container fluid={true}>
                    <Row>
                        <Col md={3}><Logo/></Col>
                        <Col md={9} ><Navbar/></Col>
                    </Row>
                </Container>
            </header>
        </>
    }
}
export default Header;