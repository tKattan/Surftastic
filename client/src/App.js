import React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';
import NavTab from './component/NavTab';


function App() {
  return (
    <MemoryRouter>
      <Container className="p-3">
        <h1 className="header">Surf</h1>
        <NavTab/>
    </Container>
  </MemoryRouter>
  );
}

export default App;
