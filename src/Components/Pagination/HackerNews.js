import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { remove_item } from './redux/Action';

function HackerNews() {
    const [count, setCount] = useState(1);
    const HackerNewsPageOne = useSelector(state => state.HackerNewsPageOne);
    const dispatch = useDispatch();
    const next = () => {
        setCount(count + 1);
        if (count == 5) {
            setCount(1);
        }

    }
    const prev = () => {
        setCount(count - 1);
        if (count < 2) {
            setCount(5);
        }

    }
    return (
        <Contanier>
            <h1>Search Hacker News</h1>
            <input type="text" />
            <Fotr>
                <button onClick={prev}>Prev</button>
                <span>{count} of 5</span>
                <button onClick={next}>Next</button>
            </Fotr>
            <Content>
                {HackerNewsPageOne.filter(item => item.id == count).map((item, index) => (
                    <Person>
                        <h3>{item.name}</h3>
                        <span>{item.point}</span>
                        <a href='#'>Read More</a>
                        <a href='#' onClick={() => dispatch(remove_item(index))}>Remove</a>
                    </Person>
                ))}
            </Content>
        </Contanier >
    )
}

export default HackerNews

const Contanier = styled.div`
                width:1000px;
                margin:auto;
                max-height:500px;
                margin-top:20px;
                `
const Content = styled.div`
                display:grid;
                grid-template-columns:repeat(2,1fr);
                grid-gap:20px;

               a:first-of-type{
                color:#49a6e9;
                margin-right:10px;
             }
             a:nth-of-type(2){
                color:red;
             }

                `
const Person = styled.div`
                background-color:#fff;
                padding:30px;
                border-radius:10px;
                width:500px;
                h3 {
                    margin-bottom:10px;
                }
                span{
                    display:block;
                    margin-bottom:15px;
                }
                `
const Fotr = styled.div`
                text-align:center;
             margin-bottom:30px;
                span{
                    margin - right:10px;
                cursor:pointer;
     }

                span{
                    font - size:30px;

     }
                button{
                    padding:10px;
                font-size:25px;
                margin-right:10px;
                border:none;
                cursor:pointer;
     }
                `
