import { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';

import Data from './data.js'

function App() {

  let [shoes, change_shoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="Jumbotron">
        <h1>20% Season Sale!</h1>
        <p>Let's go shopping~!</p>
        <Button variant="primary">Learn More</Button>{' '}
      </div>

      <div className='container'>
        <div className = "row">
          {
            shoes.map(function(shoe, ind){
              return(
              <div className='col-md-4'>
                <img src = { shoe.img } width="100%"/>
                <h4>{ shoe.title }</h4>
                <p>{ shoe.content } & { shoe.price }</p>
              </div>)
            })
          }
        </div>
      </div>
    </div>


  );
}

export default App;
