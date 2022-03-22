import React from 'react';
import { Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';

import PetLogo from './images/pet-logo.png';
import DogIcon from './images/dog-icon.png';
import CatIcon from './images/cat-icon.png';
import FishIcon from './images/fish-icon.png';
import TurtleIcon from './images/turtle-icon.png';
import BirdIcon from './images/bird-icon.png';
import HorseIcon from './images/horse-icon.png';
import SidebarFilter from './images/sidebar-filter2.png';
import Card from 'react-bootstrap/Card';
import ProductImage from './images/main-results.png';
import AnimalNames from './images/animal-names.png';
import TopIconNavigation from './images/top-icon-navigation.png';
import './about.css';

export default function NavbarMain() {
  return (
    <div class="first">
      <Navbar className="black-navbar" bg="dark" variant="dark">
        <Container></Container>
      </Navbar>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">
            <div>
              <img
                href="/home"
                alt=""
                src={PetLogo}
                width="55"
                height="57"
                className="pet-logo"
              />
              <img
                src={TopIconNavigation}
                className="top-icon-navigation"
              ></img>
              {''}
            </div>
          </Navbar.Brand>
          <div className="btn-class">
            <button type="button" class="btn btn-secondary">
              Cart
            </button>
            <button type="button" class="btn btn-secondary">
              Login
            </button>
          </div>
          {/* </div> */}
        </Container>
      </Navbar>
      {/* <img className="animal-names" src={AnimalNames}></img> */}

      <p></p>
      <div classname="search-section">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/home">Hi Papa Bear!</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-3"
                  aria-label="Search"
                  a
                  href="search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
