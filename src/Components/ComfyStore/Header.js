import React, { useState } from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
function Header() {
    const [Toggle, setToggle] = useState(false);
    return (
        <Container>
            <Hdr>
                <Logo src="/imgComfy/logo.221f6b13.svg" />
                <IconBrs onClick={e => setToggle(true)}>
                    <MenuIcon />
                </IconBrs>
                <Nav showNav={Toggle}>
                    <Lg><Logo src="imgComfy/logo.221f6b13.svg" /></Lg>
                    <Close onClick={e => setToggle(false)}>
                        <CloseIcon />
                    </Close>
                    <Layout>
                        <Link to="/"><a href='#'>Home</a></Link>
                    </Layout>
                    <Layout>
                        <Link to="/About"><a href='#'>About</a></Link>
                    </Layout>
                    <Layout>
                        <Link to="/Products"><a href='#'>Products</a></Link>
                    </Layout>
                    <CarTRespo>
                        <Cart>
                            <a href='#'>Cart</a>
                            <IconShop>
                                <span>0</span>
                                <ShoppingCartIcon />
                            </IconShop>
                        </Cart>
                        <Login>
                            <a href='#'>Login</a><PersonAddAltIcon />
                        </Login>
                    </CarTRespo>
                </Nav>
                <CarLo>
                    <Cart>
                        <Link to="/Cart"><a href='#'>Cart</a></Link>
                        <IconShop>
                            <span>0</span>
                            <ShoppingCartIcon />
                        </IconShop>
                    </Cart>
                    <Login>
                        <a href='#'>Login</a><PersonAddAltIcon />
                    </Login>
                </CarLo>
            </Hdr>
        </Container>
    )
}

export default Header;
const Container = styled.div`
   max-width:1200px;
   margin:auto;
`
const Hdr = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   margin-bottom:20px;
   position:relative;
   @media(max-width:768px){
       flex-direction:column;
       align-items:flex-start;
       position:relative;
   }

`
const IconBrs = styled.div`
     display:none;
     @media(max-width:768px){
         display:block;
         position:absolute;
         right:20px;
         top:20px;
         cursor:pointer;
         svg{
            font-size:40px;
         }
     }
`
const Logo = styled.img`
   width:175px;
   height:75px;
`
const Nav = styled.div`
    display:flex;
    width:200px;
    justify-content:space-between;
    @media(max-width:768px){
        background:#fff;
        flex-direction:column;
        margin-bottom:20px;
        justify-content:flex-start;
        height:100vh;
        position:absolute;
        width:100%;
        z-index:999;
        transition:all .3s;
        transform:${props => props.showNav ? 'translateX(0)' : 'translateX(-100%)'};
    }
`
const Lg = styled.div`
    display:none;
      @media(max-width:768px){
        display:block;
    }
`
const Close = styled.div`
    position:absolute;
    right:10px;
    top:20px;
    cursor:pointer;
    display:none;
    svg{
        font-size:40px;
    }
    @media(max-width:768px){
        display:block;
    }
`
const Layout = styled.div`
    a{
        color:black;
    }
    @media(max-width:768px){
       margin-bottom:20px;
       padding-left:15px;
    }
`
const CarLo = styled.div`
    width:180px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media(max-width:768px){
       padding-left:15px;
       display:none;
    }

`
const CarTRespo = styled(CarLo)`
    display:none;
    @media(max-width:768px){
        display:flex;
    }
`
const Cart = styled.div`
    display:flex;
    align-items:center;
    a{
        margin-right:4px;
        font-size:20px;
        color:black;
    }
    svg{
        font-size:30px;
    }
`
const Login = styled(Cart)`
`
const IconShop = styled.div` 
    position:relative;
    span{
        position:absolute;
        right:-6px;
        top:-6px;
        width:20px;
        height:20px;
        border-radius:50%;
        background-color:#ab7a5f;
        color:#fff;
        text-align:center;
        line-height:20px;
    }
`