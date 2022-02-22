import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { ProductHomePage, CustomData } from './ProductData'
import Header from './Header';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <Header />
            <Container>
                <Content>
                    <AboutText>
                        <h2>Design Your<br />Comfort Zone</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                            Iusto, at sed omnis corporis doloremque possimus velit!<br />
                            Repudiandae nisi odit, aperiam odio ducimus, obcaecati <br />
                            libero et quia tempora excepturi quis alias?</p>
                        <a href='/Products'>Shop Now</a>
                    </AboutText>
                    <ImgCon>
                        <img src='imgComfy/hero-bcg.a876f19f.jpeg' />
                        <Her>
                            <img src='imgComfy/hr_.jpeg' />
                        </Her>
                    </ImgCon>
                </Content>
            </Container>
            <FeaturedProduct>
                <Container>
                    <h1>Featured Products</h1>
                    <Products>
                        {ProductHomePage.map(item => (
                            <Pro>
                                <Pss>
                                    <OverLay></OverLay>
                                    <img src={item.img} />
                                    <IconSrch>
                                        <SearchIcon />
                                    </IconSrch>
                                </Pss>
                                <Titl>
                                    <h3>{item.title}</h3>
                                    <span>{item.price}</span>
                                </Titl>
                            </Pro>

                        ))}
                    </Products>
                    <a href='/Products'>All Products</a>
                </Container>
            </FeaturedProduct>
            <CustomFurniture>
                <Container>
                    <Title>
                        <h1>Custom Furniture<br />Built Only For You</h1>
                        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis<br /> consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                    </Title>
                    <Fur>
                        {CustomData.map(Item => (
                            <Fcon>
                                <h2>{Item.title}</h2>
                                <p>{Item.para}</p>
                            </Fcon>
                        ))}
                    </Fur>
                </Container>
            </CustomFurniture>
            <Container>
                <Newsletter>
                    <TextTil>
                        <h1>Join our newsletter and get 20% off</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde<br /> quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                    </TextTil>
                    <Conn>
                        <input type="email" placeholder='Enter Email' />
                        <button>Subscribe</button>
                    </Conn>
                </Newsletter>
            </Container>
            <Footer>
                <Container>
                    <p>© 2022 <span>ComfySloth</span> All rights reserved</p>
                </Container>
            </Footer>
        </div>
    )
}

export default Home;

const Container = styled.div`
     max-width:1200px;
     margin:auto;
`

const Content = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
`
const AboutText = styled.div`
    h2{
        font-size:50px;
        margin-bottom:20px;
    }
    p{
        margin-bottom:30px;
        color:#617d98;
        line-height:1.9;
    }
    a{
        background-color:#ab7a5f;
        color:#fff;
        display:inline-block;
        padding:10px 25px;
        border-radius:3px;
        transition:all .3s;
        &:hover{
            background-color:#decbc0;
            color:black;
        }    
    }
    @media(max-width:768px){
        padding-left:15px;
    }
`
const ImgCon = styled.div`
   img {
    height:550px;
   }
   position:relative;
   &:before{
       position:absolute;
       content:"";
       width:100%;
       height:81%;
       background:#decbc0;
       z-index:-1;
       left:-40px;
       top:100px;
       border-radius:5px;
   }
   @media(max-width:768px){
       display:none;
   }
`
const Her = styled.div`
    img{
        width:250px;
        height:150px;
        position:absolute;
        bottom: 4px;
        left:-125px
    }
`
const FeaturedProduct = styled.div`
    background-color:#f1f5f8;
    padding:50px;
    h1{
        text-align:center;
        margin-bottom:30px;
        font-size:40px;
        position:relative;
        @media(max-width:768px){
              font-size:35px;
        }
        &:before{
            position:absolute;
            content:"";
            width:100px;
            height:4px;
            background:#ab7a5f;
            bottom:-8px;
            left:50%;
            transform:translateX(-50%);
        }
    }
    a{
        text-align:center;
        width:170px;
        margin:auto;
        display:block;
        background-color: #ab7a5f;
        color: #fff;
        padding: 10px 25px;
        border-radius: 3px;
        transition: all .3s;
        &:hover{
            background-color:#decbc0;
            color:black;
        }
    }

`
const Products = styled.div`
     display:flex;
     gap:30px;
     margin-bottom:20px;
     @media(max-width:768px){
         flex-direction:column;
    }
`
const OverLay = styled.div`
     position:absolute;
     inset:0;
     background-color:rgba(0,0,0,0.3);
     display:none;
`
const Pro = styled.div`
     img{
         width:360px;
         height:225px;
       
     }
`
const IconSrch = styled.div`
     position:absolute;
     top:50%;
     left:50%;
     transform:translate(-50%,-50%);
     background-color:#ab7a5f;
     width:45px;
     height:45px;
     border-radius:50%;
     color:#fff;
     text-align:center;
     display:none;
       svg{
          margin-top:10px;
       }
`
const Pss = styled.div`
 position:relative;
 &:hover{
    ${OverLay},${IconSrch}{
        display:block;
    }
  }
`

const Titl = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const CustomFurniture = styled.div`
    background-color:#eaded7;
    padding:60px 0;
    margin-bottom:200px;
`
const Title = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:40px;
    h1{
        @media(max-width:768px){
            margin-bottom:20px;
   }
    }
    p{
        line-height:1.9;
        @media(max-width:768px){
            width:300px;
   }
    }
    @media(max-width:768px){
        flex-direction:column;
   
}
`
const Fur = styled.div`
   display:flex;
   justify-content:space-between;
   text-align:center;
   position:relative;
   bottom:-150px;
   @media(max-width:768px){
         flex-direction:column;
}
   p{
       width:320px;
       color:#5f4435;

   }
`
const Fcon = styled.div`
   background-color:#c5a491;
   padding:80px 30px;
   border-radius:6px;
    h2{
        font-size:35px;
        margin-bottom:15px;
    }
    p{
        line-height:1.9;
    }
    @media(max-width:768px){
      margin-bottom:50px;
}
`
const Newsletter = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:flex-end;
   margin-bottom:100px;
   h1{
       margin-bottom:20px;
   }
   p{
       line-height:1.9;
       color:#617d98;
       @media(max-width:768px){
     margin-bottom:20px;
}
   }
   input{
       width:400px;
       height:38px;
       padding-left:10px;
       border:2px solid black;
       @media(max-width:768px){
       margin-bottom:20px;
}
   }
   button{
       background-color:#ab7a5f;
       height:38px;
       color:black;
       padding:6px 15px;
       border:2px solid black;
   }
   @media(max-width:768px){
    flex-direction:column;
   text-align:center;
}
`
const TextTil = styled.div`

`
const Conn = styled.div`
`
const Footer = styled.div`
     text-align:center;
     background-color:#222222;
     color:#fff;
     padding:30px;
     span{
         color:#ab7a5f;
     }
`