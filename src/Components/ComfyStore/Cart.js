import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux'
import { deletItem, clear_items } from './redux/Action'
import { Link } from 'react-router-dom'
function Cart() {
    const ProductShop = useSelector(state => state.ProductShop);
    const dispatch = useDispatch();
    for (let i = 0; i < ProductShop.length; i++) {
        for (let j = i + 1; j < ProductShop.length; j++) {
            if (String(ProductShop[i].title) == String(ProductShop[j].title)) {
                ProductShop.splice(j, 1)
            }
        }
    }

    // let NoDuplacte = ProductShop.filter((el, index, s) => index == s.findIndex((t) => (
    //     String(t.title) == String(el.title)
    // )))
    const total = ProductShop.reduce((total, item) => total + (parseInt(item.Quantity) * parseInt(item.price)), 0);

    return (
        <Pa>
            <Header />
            <Content>
                {/* <Container>
                    <h2>Your cart is empty</h2>
                    <a href='#'>FILL IT</a>
                </Container> */}
                <Titl>
                    <Container>
                        <h2> <span>Home</span> /  Cart</h2>
                    </Container>
                </Titl>
                <Container>
                    <ConText>
                        <span>item</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Subtotal</span>
                    </ConText>
                    <hr></hr>
                </Container>
            </Content>
            <Container>
                {ProductShop.map(item => (
                    <div className='pro'>
                        <Product>
                            <div>
                                <img src={item.img} />
                                <div className='title'>
                                    <h3>{item.title}</h3>
                                    <span>Color :</span>
                                </div>
                            </div>
                            <div className='price'>
                                <span>${item.price}</span>
                            </div>
                            <div>
                                <h3>{item.Quantity}</h3>

                            </div>
                            <div>
                                <span>{parseInt(item.price) * parseInt(item.Quantity)}</span>
                            </div>
                            <div>
                                <a onClick={() => dispatch(deletItem(item.title))} href='#'>Delet</a>
                            </div>
                        </Product>
                    </div>
                ))}
                <hr></hr>
                <ContiuneShop>
                    <Link to="/Products">Continue shopping</Link>
                    <a onClick={() => dispatch(clear_items())} href='#'>Clear shopping Cart</a>
                </ContiuneShop>
                <ParntTo>
                    <TotalInfo>
                        <h3>total : $<span>{total}</span></h3>
                    </TotalInfo>
                </ParntTo>
            </Container>
            <Footer>
                <Container>
                    <p>© 2022 <span>ComfySloth</span> All rights reserved</p>
                </Container>
            </Footer>
        </Pa >
    )
}

export default Cart;

const Pa = styled.div`
;
`
const Titl = styled.div`
    background-color:#eaded7;
    padding:10px 0;
    margin-bottom:30px;
    h2{
        font-size:40px;
    }
    span{
        color:#795744;
    }
    @media(max-width:768px){
        h2{
            font-size:30px;
        }
        padding-left:20px;
    }
`
const Container = styled.div`
    max-width:1200px;
    margin:auto;
`
const Content = styled.div`

    h2{
        font-size:40px;
        margin-bottom:20px;
    }
    a{
        background-color:#ab7a5f;
        color:#fff;
        padding:6px 20px;
        border-radius:3px;
    }
    hr{
      margin-top:20px;
    }
    margin-bottom:30px;
`
const ConText = styled.div`
     display:flex;
     justify-content:space-between;
     color:#617d98;
`
const Product = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:15px;
   img{
       width:100px;
       height:100px;
       border-radius:5px;
   }
   h2{
       font-size:30px;
       cursor:pointer;  
   }
   >div{
       display:flex;
       align-items:center;
       gap:10px;
       h3{
           margin-bottom:3px;
       }
       span{
           color:#617d98;
       }
   }
   input{
       width:50px;
   }

`
const ContiuneShop = styled.div` 
       margin-top:20px;
       display:flex;
       justify-content:space-between;
       a{
           display:inline-block;
       }
       a:first-child{
           background-color:#ab7a5f;
           color:#fff;
           border-radius:3px;
           padding:5px 10px;
       }
       a:last-child{
        background-color:black;
        color:#fff;
        border-radius:3px;
        padding:5px 10px;
    }
`
const ParntTo = styled.div`
    display:flex;
    justify-content:flex-end;
`
const TotalInfo = styled.div`
     border:1px solid #bcccdc;
     padding:20px;
     margin-top:30px;
     margin-bottom:30px;
     width:300px;
     p{
         margin-bottom:20px;
     }
     hr {
         margin-bottom:20px;
     }
`
const Footer = styled.div`
        text-align:center;
        background-color:#222222;
        color:#fff;
        padding:30px;
        position:absolute;
        bottom:0;
        width:100%;  
        span{
            color:#ab7a5f;
        }
`
const F = styled.div`
`