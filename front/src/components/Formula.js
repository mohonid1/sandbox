import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import fetch from 'node-fetch'
import config from '../config/config'
import '../App.css';

import TopBar from './TopBar'
import Footer from './Footer'

const numRound = 7
let resultTmp = []

for (let i=0; i < numRound; i++) {
    resultTmp[i] = null
}

function Formula() {

    const [result, setResult] = useState([]);
    const [clicks, setCLicks] = useState(0);

    useEffect(() => {
        setResult(resultTmp)
    }, []);

    const callValue = (index) => {
        fetch(config.apiUrl + `SCG/formula/${index}`)
        .then(res => res.text())
        .then(text => {
            resultTmp[index] = text
            setResult(resultTmp)
            setCLicks(clicks + 1)
        });
        
    }

    return (
        <>
        <TopBar />
        <div className="App-header">
            <Container>
            <Row>
                <Col sm={8}>
                <div className="content">
                    <Jumbotron fluid>
                        <Container>
                            <h1>Formula</h1>
                            <p>
                            f(n) = f(n - 1) + (2n)<br />
                            if n &lt; 0 , f(n) = 0<br />
                            if n = 0 , f(n) = 3
                            </p>
                        </Container>
                    </Jumbotron>
                    <Row>
                        <Col>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        {result.map((data, key) => {
                                            return (
                                                <th><Button variant="outline-warning" onClick={() => callValue(key)}>{key}</Button></th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {result.map((data, key) => {
                                            return (
                                                <td>{data}</td>
                                            )
                                        })}
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
                </Col>
                <Col sm={4}>
                    
                </Col>
            </Row>
            </Container>
        </div>
        <Footer />
        </>
    );
}

export default Formula;
