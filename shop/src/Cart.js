import React from "react";
import { Table } from "react-bootstrap"
import { connect } from "react-redux";

function Cart(props){
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> { (props.state[0].id+1) } </td>
                        <td> { props.state[0].name }</td>
                        <td> { props.state[0].quantity } </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

function stateAsProps(state){
    return{
        state: state
    }
}

export default connect(stateAsProps)(Cart)

// export default Cart;