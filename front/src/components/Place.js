import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import config from '../config/config'
import '../App.css';

import TopBar from './TopBar'
import Footer from './Footer'

function Place() {
    
    const [keyword, setKeyword] = useState('');
    const [clicks, setCLicks] = useState(0);
    const [result, setResult] = useState([]);

    const getRestaurants = (keyword) => {
        fetch(config.apiUrl + `SCG/places/${keyword}`)
        .then(res => res.json())
        .then(json => {
            console.log('ssss', json)
            setResult(json)
            setCLicks(clicks + 1)
        });
    }

    const mapClicked = (data) => {
        const newPageUrl = `https://www.google.com/maps/place/${data.geometry.location.lat},${data.geometry.location.lng}`
        window.open(newPageUrl, "_blank")
     }

    return (
        <>
        <TopBar />
        <div className="App-header">
            <Container>
                <Row>
                    <Col sm={8}>
                    <div className="content">
                        <Jumbotron>
                        <h1>Find Restaurants</h1>
                        <p>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Keyword</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Keyword" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setKeyword(e.target.value)} />
                                <InputGroup.Append>
                                    <Button variant="secondary" onClick={(e) => getRestaurants(keyword)}>Button</Button>
                                </InputGroup.Append>
                            </InputGroup>

                        </p>
                        </Jumbotron>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Row>
                            {result.map((data) => {
                                return (
                                    <Col sm={4}>
                                        <Card style={{marginTop: '15px', }}>
                                            <Card.Body>
                                                <Card.Title>{data.name}</Card.Title>
                                                <Card.Text>
                                                {data.vicinity}
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => mapClicked(data)}>See on Map</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
        </>
    );
}

export default Place;
