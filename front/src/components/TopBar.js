import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavLink from 'react-bootstrap/NavLink'

const TopBar = () => {
    return (

        <header>
            <Container>
                <Row>
                    <Col sm={6}>&nbsp;</Col>
                    <Col sm={6} className="menu-container">
                        <div className="menu-float">
                            <div id="svgright-container">
                                <svg id="svgright" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <polygon points="0,100 100,0 0,0" style={{fill: '#800B00'}} />
                                    Sorry, your browser does not support inline SVG.
                                </svg>
                            </div>                            
                            <Row>
                                <Col style={{whiteSpace: 'nowrap'}}>
                                    <NavLink href="/SCG">
                                        Home
                                    </NavLink>
                                </Col>
                                <Col style={{whiteSpace: 'nowrap'}}>
                                    <NavLink href="/SCG/Formula">
                                        Formula
                                    </NavLink>
                                </Col>
                                <Col style={{whiteSpace: 'nowrap'}}>
                                    <NavLink href="/SCG/Place">
                                        Find Restaurants
                                    </NavLink>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>

    )
}

export default TopBar
