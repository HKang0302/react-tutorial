/* eslint-disable */

import React, { useContext, useEffect, useState } from 'react';
import { Button, Nav } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import './Detail.scss';
import { CSSTransition } from "react-transition-group";

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
        
    let [tab, tabStatus] = useState(0);

    let history = useHistory();
    let { id } = useParams();
    let found_item = props.shoes.find(item => item.id == id)
    let [animationSwitch, animationSwitchStatus] = useState(false);


    return (
        <div className="container">
            <Box>
                <Title>
                    Detail
                </Title>
            </Box>

            {/* <input onChange={(e)=>{input_change(e.target.value)}}/> */}

            {
                show_alert?
                <Alert/>:
                null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={ 'https://codingapple1.github.io/shop/shoes'+(found_item.id+1)+'.jpg'} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{found_item.title}</h4>
                    <p>{found_item.content}</p>
                    <p>{found_item.price}원</p>
                    <Info item_num = {props.item_num[found_item.id]}/>

                    <Button variant="outline-dark" onClick = {()=>{
                        history.goBack();
                    }}>뒤로가기</Button>
                    <Button variant="outline-dark" onClick = {()=>{
                        history.push('/');
                    }}>홈으로가기</Button>
                    <button className="btn btn-danger" onClick={()=>{
                        let new_item_num = [...props.item_num];
                        new_item_num[found_item.id] -= 1;
                        props.item_num_status(new_item_num);
                    }}>주문하기</button> 
                </div>
            </div>

            <Nav variant="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{ animationSwitchStatus(false); tabStatus(0) }}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{ animationSwitchStatus(false); tabStatus(1) }}>Option 2</Nav.Link>
                </Nav.Item>
            </Nav>

            <CSSTransition in={animationSwitch} classNames="wow" timeout={500}>
                <TabContent tab={tab} animationSwitchStatus={animationSwitchStatus}/>
            </CSSTransition>

        </div> 
    )
}

function TabContent(props){
    let tabEffect = useEffect(()=>{
        props.animationSwitchStatus(true);
    })
    if(props.tab === 0){
        return <div>0번째 내용입니다.</div>
    }else if(props.tab === 1){
        return <div>1번째 내용입니다.</div>
    }
    else{
        return <div>2번째 내용입니다.</div>
    }

}

function Info(props){
    return(
        <p>재고: {props.item_num}개</p>
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