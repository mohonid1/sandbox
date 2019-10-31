import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import '../App.css';

import TopBar from './TopBar'
import Footer from './Footer'

function Home() {
  return (
    <>
      <TopBar />
      <div className="App-header">
        <Container>
          <Row>
            <Col sm={8}>
              <div className="content">
                <article>
                  <Jumbotron>
                    <h1>Jensitat Khamsri</h1>
                    <p>I, as a dev who has willing to drive all great projects succeed, want to work with who has interesting ideas. How great is it if we were matched.</p>
                  </Jumbotron>
                  <hr />
                  <h4>Programming language: </h4>
                  Expert: <code>PHP, Nodejs, JavaScript, JQuery, MVC framework(CI, Laravel), XML, JSON, HTML5, CSS3, Bootstrap, SOAP, Rest, Angular, React, React Native, VueJs</code>
                  <br />Fair: <code>C#.NET, VB.NET, ASP.NET, Java, VBA, Perl</code>

                  <h4>Server:</h4>
                  <code>CentOS, Ubuntu, Redhat, Windows
                  Aws EC2, Firebase, Google Cloud, Kubernetes, Micro Services, Docker</code>

                  <h4>Database: </h4> 
                  <code>MySQL, MSSQL, MongoDB, PostgreSQL, Access</code>

                </article>
              </div>
            </Col>
            <Col sm={4}>
              
              <Image src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/43880230_10156516283280155_8074611483679391744_n.jpg?_nc_cat=100&_nc_oc=AQnyZ2nPxO1QIyG0QoK6NzvzVIwPr8oAqACEwS0g4pTFJkhkcTm7bO9zFIyhhlRs-EAFJ129E6s8u-OGqXVrdQRD&_nc_ht=scontent.fbkk5-5.fna&oh=ceffa99b75a88cee3135efe2e7597986&oe=5E19CEA1" thumbnail />

            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Home;
