import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  let [title,title_change] = useState(['남자 코트 추천', '강남 우동 맛집', '우리집으로 가자']);
  let posts = '강남 고기 맛집';
  let title_style = { color : 'blue', fontSize: '30px' };

  return (
    <div className="App">
      <div className="black-nav">
        <div style = { title_style }>개발 blog</div>
      </div>
      <div className="list">
        <h3> { title[0] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <img src = {logo}/>
    </div>
  );
}

export default App;
