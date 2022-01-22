/* eslint-disable */

import { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';

import Data from './data.js'
import Detail from './Detail';
import { Link, Route, Switch } from 'react-router-dom'

function App() {

  let [shoes, change_shoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Details</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        {/* Main page */}
        <Route exact path="/">
          <Main shoes={shoes}/>
        </Route>

        {/* Detail page */}
        <Route exact path="/detail">
          <Detail shoes={shoes}/>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes}/>
        </Route>
      </Switch>

    </div>


  );
}

function Main(props){
  return(
    <div>
      <div className="Jumbotron">
        <h1>20% Season Sale!</h1>
        <p>Let's go shopping~!</p>
        <Button variant="primary">Learn More</Button>{' '}
      </div>

      <Button variant="outline-success" onClick = {()=>{sort_price(shoes)}}>정렬하기</Button>{' '}

      <div className='container'>
        <div className = "row">
          {
            props.shoes.map(function(shoe, ind){
              return(
                <Card shoe={shoe} key={ind}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function Card (props){
  return (
    <div className='col-md-4'>
      <img src = { props.shoe.img } width="100%"/>
      <h4>{ props.shoe.title }</h4>
      <p>{ props.shoe.content } & { props.shoe.price }원</p>
    </div>
  )
}

function sort_price(shoes){
  shoes.sort((a,b)=>a.price>b.price)
}

export default App;
