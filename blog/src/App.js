/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  let [titles,title_func] = useState(['남자 코트 추천', '강남 우동 맛집', '우리집으로 가자']);
  let [modal, modal_change] = useState(false);
  let [count, count_func] = useState([0,0,0]);
  let [post_index, index_change] = useState(-1);
  
  let [input, input_change] = useState('');

  let title_style = { fontSize: '30px' };
  
  function count_change(ind){
    var newArray = [...count];
    newArray[ind] += 1;
    count_func(newArray);
  }

  function sort_posts(){
    var newArray = [...titles];
    newArray.sort();
    title_func(newArray);
  }

  function post_index_change(ind){
    if (ind === post_index){
      index_change(-1);
    } else{
      index_change(ind);
    }
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style = {title_style}>히진이의 개발 blog</div>
      </div>
      {/* <button onClick={ sort_posts }> 글 정렬 </button> */}

      {
        titles.map(function(a,ind){
          return(
            <div className="list" key={ind}>
              <h3> 
                <span onClick={() => { post_index_change(ind) } }>{ a }</span> 
                <span onClick={() => { count_change(ind) }}>👍🏻</span>{ count[ind] }
              </h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <div className='publish'>
        <input onChange={ (e) => {input_change(e.target.value)} }/>
        <button onClick={ () => {this.setState()} }>저장</button>
      </div>

      {
        post_index >= 0
        ? <Modal title={titles} ind={post_index}/>
        : null
      }

      <img src = {logo}/>
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h2>{props.title[props.ind]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
