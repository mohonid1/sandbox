import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

import config from '../config/config'

import '../App.css';

import TopBar from './TopBar'
import Footer from './Footer'

function Place() {
    
    const [keyword, setKeyword] = useState('');
    const [clicks, setCLicks] = useState(0);
    const [result, setResult] = useState([]);
    const [hours, setHours] = useState([]);
    const [minutes, setMinutes] = useState([]);
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');

    const getRestaurants = (keyword) => {
        fetch(config.apiUrl + `SCG/places/${keyword}`)
        .then(res => res.json())
        .then(json => {
            setResult(json)
            setCLicks(clicks + 1)
        });
    }

    const setDetail = () => {
        const body = {
            time: hour + min,
            keyword: keyword
        }
        fetch(config.apiUrl + `SCG/setMessageDetail`, {
            method: 'post',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
    }

    const mapClicked = (data) => {
        const newPageUrl = `https://www.google.com/maps/place/${data.geometry.location.lat},${data.geometry.location.lng}`
        window.open(newPageUrl, "_blank")
    }

    useEffect(() => {
        const hrs = []
        for (let i=0; i < 24; i++){
            hrs.push(i.toString().padStart(2, '0'))
        }
        setHours(hrs)
        const mins = []
        for (let i=0; i < 60; i++){
            mins.push(i.toString().padStart(2, '0'))
        }
        setMinutes(mins)

        fetch(config.apiUrl + `SCG/getMessageDetail`)
        .then(res => res.json())
        .then(json => {
            const { time, keyword } = json
            setKeyword(keyword)
            const hr = time.substring(0,2)
            const mn = time.substring(2,4)
            setHour(hr)
            setMin(mn)
        });

    }, []);

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
                        
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Keyword</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Keyword" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setKeyword(e.target.value)} />
                                <InputGroup.Append>
                                    <Button variant="secondary" onClick={(e) => getRestaurants(keyword)}>Search</Button>
                                </InputGroup.Append>
                            </InputGroup>

                        
                        
                        <h2>OR Add Line Friend</h2>
                        <p>
                            to get a random restaurant at the time.
                        </p>
                        <Row>
                            <Col sm={4}>
                                <Image src={config.lineQrCode} rounded style={{width: '100%'}} />
                            </Col>
                            <Col sm={8}>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm">Keyword</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Keyword" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setKeyword(e.target.value)} value={keyword} />
                                </InputGroup>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm">Time</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl as="select" aria-label="Time" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setHour(e.target.value)} value={hour} >
                                        {
                                            hours.map((data) => {
                                                return (
                                                    <option value={data}>{data}</option>
                                                )
                                            })
                                        }
                                    </FormControl>
                                    :
                                    <FormControl as="select" aria-label="Time" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setMin(e.target.value)} value={min} >
                                        {
                                            minutes.map((data) => {
                                                return (
                                                    <option value={data}>{data}</option>
                                                )
                                            })
                                        }
                                    </FormControl>
                                </InputGroup>
                                <Button variant="secondary" onClick={(e) => setDetail()}>Save</Button>
                            </Col>
                        </Row>
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
