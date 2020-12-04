import React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';
import NavTab from './component/NavTab';


function App() {
  return (
    <MemoryRouter>
      <Container className="p-3">
        <Row>
          <Col><h1 className="header">Surf</h1></Col>
        </Row>
        <Row>
          <Col>
        <NavTab/></Col>
        </Row>
        <Row>
          <Col><h7>Created by Cidota Ltd.</h7></Col>
        </Row>
    </Container>
  </MemoryRouter>
  );
}

export default App;
