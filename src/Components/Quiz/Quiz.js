import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import ModalAns from './ModalAns';
import QuizTwo from './QuizTwo';
function Quiz(props) {
    const [Count, setCount] = useState(1);
    const [show, setShow] = useState(false);
    const [success, setsuccess] = useState(0);
    const [CountQest, setCountQest] = useState(0);
    const [index_, setIndex] = useState(0);
    const state = useSelector(state => state.Quizdata);
    const stateAnswer = useSelector(state => state.Quizdata[index_].answers);
    const [Toggle, setToggle] = useState(false);

    const handlChng = () => {
        setCount(Count + 1);
        if (Count == state.length - 1) {
            setShow(true);
            setCount(0)
        }
        setIndex(index_ + 1);
        setCountQest(CountQest + 1)

    }

    const start = () => {
        setToggle(true);

    }
    return (
        <Contanier>
            <StartQuiz showStart={Toggle}>
                <h1>Setup Quiz</h1>
                <button onClick={start}>Start</button>
            </StartQuiz>
            <Content show={Toggle}>
                {state.filter(item => item.id == Count).map((item) => (
                    <div>
                        <h1>{item.Question}</h1>
                    </div>
                ))}
                <span>Correct Answers {success} / {CountQest} </span>
                {stateAnswer.map((item) => (
                    <QuizTwo item={item} success={success} setsuccess={setsuccess} CountQest={CountQest} setCountQest={setCountQest} setIndex={setIndex} index_={index_} show={show} setShow={setShow} setCount={setCount} Count={Count} />
                ))}
                <a href='#' className='btn' onClick={handlChng}>Next Question</a>
            </Content>
            <ModalAns show={show} setShow={setShow} Count={Count} success={success} setsuccess={setsuccess} setCount={setCount} setIndex={setIndex} CountQest={CountQest} setCountQest={setCountQest} />

        </Contanier >
    )
}

export default Quiz

const Contanier = styled.div`
     width:1200px;
     margin:auto;
     @media(max-width:767px){
        width:;
       
    }

`

const Content = styled.div`
     display:${props => props.show ? "block" : "None"};
     background-color:#fff;
     width:100%;
     text-align:center;
     padding:70px;
     position:relative;
     span{
         display:block;
         margin-bottom:20px;
         display:flex;
         justify-content:flex-end;
         letter-spacing:0.1rem;
         color:#25bb32;
     }
     
     h1{
         margin-bottom:30px;
         @media(max-width:767px){
             width:;
             text-align:center;
             margin:auto;
             margin-bottom:30px;
         }
         
     }
     button{
         width:60%;
         display:block;
         margin:auto;
         margin-bottom:20px;
         padding:10px;
         background-color:#8bcbf9;
         border:none;
         border-radius:5px;
         cursor:pointer;
         @media(max-width:767px){
             width:100%;
         }
         
     }
     a{
        position:absolute;
        right:30px;
        width:40%;  
        background-color:#ffb100;
        font-weight:bold;
        padding:10px;
        color:black;
        border-radius:4px;
        @media(max-width:767px){
          padding:10px;
        }
}
     @media(max-width:767px){
        width:30%;
        margin:auto;
        padding:50px;
    }
   
`
const StartQuiz = styled.div`
background-color:#fff;
padding:40px;
width:500px;
display:${props => props.showStart ? "none" : "block"};
margin:auto;
h1{
    font-size:50px;
    margin-bottom:25px;
}
span{
    display:block;
    margin-bottom:10px;
}
button{
    width:100%;
    padding:3px;
    background:rgb(255, 177, 0);
    color:black;
    border:none;
    padding:6px;
    border-radius:5px;
    cursor:pointer;
    font-weight:bold;
}
@media (max-width:767px){
    width:350px;
    
}
`