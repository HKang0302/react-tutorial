/* eslint-disable */

import { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';
import axios from 'axios'; // for Ajax

import Data from './data.js';
import Detail from './Detail';
import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, change_shoes] = useState(Data);
  let [loading, loading_status] = useState(false);
  let [item_num, item_num_status] = useState([10,11,12]);

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
          <div>
            <div className="Jumbotron">
              <h1>20% Season Sale!</h1>
              <p>Let's go shopping~!</p>
              <Button variant="primary">Learn More</Button>{' '}
            </div>

            {/* <Button variant="outline-success" onClick = {()=>{sort_price(shoes)}}>정렬하기</Button>{' '} */}

            <div className='container'>
              <div className = "row">
                {
                  shoes.map(function(shoe, ind){
                    return(
                      <Card shoe={shoe} key={ind}/>
                    )
                  })
                }
              </div>
            </div>

            {
              loading?
              <p>로딩중...</p>:
              null
            }

            <Button variant="outline-success" onClick = {()=>{
              loading_status(true);

              // axios.post('url', {id: 'heejin', pw: '1234'})

              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                loading_status(false);
                change_shoes( [...shoes, ...result.data] );
              })
              .catch(()=>{
                loading_status(false);
                console.log('failed')
              })
            }}>더보기</Button>{' '}

          </div>
        </Route>

        {/* Detail page */}
        <Route exact path="/detail">
          <Detail shoes={shoes}/>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} item_num={item_num} item_num_status={item_num_status}/>
        </Route>
      </Switch>

    </div>


  );
}

function Card (props){
  return (
    <div className='col-md-4'>
      <img src = { 'https://codingapple1.github.io/shop/shoes'+(props.shoe.id+1)+'.jpg' } width="100%"/>
      <h4>{ props.shoe.title }</h4>
      <p>{ props.shoe.content } & { props.shoe.price }원</p>
    </div>
  )
}

function add_items(shoes, new_items){
  let new_list = [...shoes];
  new_items.map((item)=>{
    new_list.push(item);
  })
  console.log(new_list)
  change_shoes(new_list);
}

function sort_price(shoes){
  shoes.sort((a,b)=>a.price>b.price)
}

export default App;
