import React from 'react'
import styled from 'styled-components'

function ModalAns(props) {

    const handlChange = () => {
        props.setShow(false);
        props.setCount(1);
        props.setIndex(0);
        props.setCountQest(0);
        props.setsuccess(0)
    }

    return (
        <Contanier dis={props.show}>
            <Contentmodl>
                <h1>Congrats!</h1>
                <p>You answered {Math.round(props.success * 100 / 11)}% of questions correctly</p>
                <button onClick={handlChange}>Play again</button>
            </Contentmodl>
        </Contanier>
    )
}

export default ModalAns

const Contanier = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgba(0,0,0,0.3);
    display:flex;
    justify-content:center;
    align-items:center;
    display:${props => props.dis ? "flex" : "none"};
`
const Contentmodl = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:#fff;
    margin:auto;
    padding:40px;
    border-radius:5px;
    h1{
        margin-bottom:20px;
        font-size:50px;
    }
    p{
        margin-bottom:15px;
        color:gray;
        font-size:25px;
    }
    button{
        background-color:#ffb100;
        color:black;
        padding:10px 25px;
        border:none;
        width:50%;
        font-weight:900;
        border-radius:10px;
        cursor:pointer;
    }
`