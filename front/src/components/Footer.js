import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavLink from 'react-bootstrap/NavLink'

const Footer = () => {
    return (

        <footer>
            <Container>
                <Row>
                    <Col sm={6} className="credit-container">
                        <div className="credit-float">
                            <div id="svgleft-container">
                                <svg id="svgleft" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <polygon points="0,100 100,100 0,0" style={{fill: '#800B00'}} />
                                    Sorry, your browser does not support inline SVG.
                                </svg>
                            </div>                            
                            <Row>
                                <Col style={{whiteSpace: 'nowrap'}}>
                                    Develop by: Jensitat Khamsri
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={6}>&nbsp;</Col>
                </Row>
            </Container>
        </footer>

    )
}

export default Footer
