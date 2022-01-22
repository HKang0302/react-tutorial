/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import './Detail.scss'


let Box = styled.div`
    padding:20px;
`;

let Title = styled.h4`
    font-size:25px;
    color: ${props=>props.color}
`;


function Detail(props){
    
    let [show_alert,change_alert_status] = useState(true);

    // life cycle hook
    // 컴포넌트 실행/업데이트 시 실행됨
    useEffect(()=>{
        let timer = setTimeout(()=>{
            change_alert_status(false);
        }, 2000)

        return ()=>{ clearTimeout(timer) } // 버그 방지용
    },[show_alert]);
        
    let [input, input_change] = useState();

    let history = useHistory();
    let { id } = useParams();
    let found_item = props.shoes.find(item => item.id == id)

    return (
        <div className="container">
            <Box>
                <Title className='red'>
                    상세페이지
                </Title>
            </Box>

            <input onChange={(e)=>{input_change(e.target.value)}}/>

            {
                show_alert?
                <Alert/>:
                null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={found_item.img} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{found_item.title}</h4>
                    <p>{found_item.content}</p>
                    <p>{found_item.price}원</p>
                    <Button variant="outline-dark" onClick = {()=>{
                        history.goBack();
                    }}>뒤로가기</Button>
                    <Button variant="outline-dark" onClick = {()=>{
                        history.push('/');
                    }}>홈으로가기</Button>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

function Alert(){
    return(
        <div className='my-alert-yellow'>
            <p>재고가 얼마 남지 않았습니다.</p>
        </div>
    )
}

export default Detail