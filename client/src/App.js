import React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

function App() {
  return (
    <MemoryRouter>
      <Container className="p-3">
        <h1 className="header">Surf</h1>
        <Nav variant="tabs" activeKey="/home" >
          <Nav.Item>
            <Nav.Link>
                <LinkContainer to="/">
                  <Button>Home</Button>
                </LinkContainer>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <LinkContainer to="/about">
                <Button>About</Button>
              </LinkContainer>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <LinkContainer to="/users">
                <Button>Users</Button>
              </LinkContainer>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <h2>
          Current Page is{' '}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </h2>
    </Container>
  </MemoryRouter>
  );
}

export default App;
