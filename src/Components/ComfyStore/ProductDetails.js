import React, { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux'
import { img_src, addToCart } from './redux/Action'
import { Link } from 'react-router-dom'
import Cart from './Cart';

function ProductDetails() {
    const { id } = useParams();
    const products = useSelector(state => state.ProductsDt);
    const dispatch = useDispatch()
    const [stckImg, setStck] = useState("");
    const [quantity, setquantity] = useState(1);

    const handlClick = (src) => {
        dispatch(img_src(src));
        setStck(src);
    }
    const ProductShop = useSelector(state => state.ProductShop);
    const handl = () => {
        const title = products.filter(i => i.id == parseInt(id)).map(i => i.title);
        const price = products.filter(i => i.id == parseInt(id)).map(i => i.price);
        const img = products.filter(i => i.id == parseInt(id)).map(i => i.img);
        const Quantity = products.filter(i => i.id == parseInt(id)).map(i => i.Quantity);
        setquantity(Quantity);
        dispatch(addToCart(title, price, img, quantity))
    }

    return (
        <Parent>
            <Header />
            <Titl>
                {products.filter(item => item.id === parseInt(id)).map(item => (
                    <Container>
                        <h2><span>Home / Products</span> / {item.title}</h2>
                    </Container>
                ))}
            </Titl>
            <Container>
                <a href='/Products'>Back To Products</a>
                {products.filter(item => item.id === parseInt(id)).map(item => (
                    <Content>
                        <div>
                            <img src={stckImg !== "" ? stckImg : item.img} />
                            <Images>
                                {item.otherImg.map((img) => (
                                    <div>
                                        <img onClick={(e) => handlClick(img)} src={`${img}`} />
                                    </div>
                                ))}
                            </Images>
                        </div>
                        <Para>
                            <h1>{item.title}</h1>
                            <span>${item.price}</span>
                            <p>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
                            <InfoP>
                                <p>Available : <span>In Stock</span></p>
                            </InfoP>
                            <InfoP>
                                <p>SKU : <span>RecoW8ecgjtKx2Sj2</span></p>
                            </InfoP>
                            <InfoP>
                                <p>Brand : <span>{item.category}</span></p>
                            </InfoP>
                            <input onChange={e => setquantity(e.target.value)} type="number" />
                            <br /><br />
                            <Link onClick={handl} to="/Cart">ADD TO CART</Link>
                        </Para>
                    </Content>
                ))}
            </Container>
        </Parent>
    )
}

export default ProductDetails;

const Parent = styled.div`
`

const Container = styled.div`
    max-width:1200px;
    margin:auto;
    a{
        background-color:#ab7a5f;
        color:#eaded7;
        display:inline-block;
        padding:10px 25px;
        border-radius:5px;
        margin-bottom:40px;
    }
`
const Titl = styled.div`
    background-color:#eaded7;
    padding:40px 0;
    margin-bottom:50px;
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
const Content = styled.div`
    display:flex;
    margin-bottom:60px;
    img{
        width:600px;
        height:600px;
        margin-bottom:30px;
    }
    @media(max-width:768px){
        flex-direction:column;

    }
`
const Images = styled.div`
    display:flex;
    img{
        width:150px;
        height:150px;
        margin-right:20px;
    }
`
const Para = styled.div`
    padding-left:50px;
    h1{
        font-size:50px;
        margin-bottom:10px;
    }
     p:first-child{
       line-height:1.9;
       color:#617d98;
       margin-bottom:20px;
   }
   p{
       margin-bottom:20px;
   }
   span{
       font-size:;
       font-weight:bold;
       display:inline-block;
       margin-bottom:20px;
   }
   @media(max-width:768px){
       text-align:center;
       h1{
           font-size:40px;    
       }
       p{
           width:340px;
       }
   }
   

`
const InfoP = styled.div`

`