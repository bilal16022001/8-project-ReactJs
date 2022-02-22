import React from 'react';
import styled from 'styled-components';
import Header from './Header';
function About() {
    return (
        <Parent>
            <Header />
            <Titl>
                <Container>
                    <h2><span>Home</span> / About</h2>
                </Container>
            </Titl>
            <Container>
                <Content>
                    <img src='imgComfy/hero-bcg.a876f19f.jpeg' />
                    <Para>
                        <h1>Our Story</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                    </Para>
                </Content>
            </Container>
            <Footer>
                <Container>
                    <p>© 2022 <span>ComfySloth</span> All rights reserved</p>
                </Container>
            </Footer>
        </Parent>
    )
}

export default About;
const Parent = styled.div`
`
const Container = styled.div`
    max-width:1200px;
    margin:auto;
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
        // width:50%;
        height:600px;
        margin-bottom:30px;
    }
    @media(max-width:768px){
        flex-direction:column;

    }
`
const Para = styled.div`
    padding-left:50px;
    h1{
        font-size:50px;
        margin-bottom:35px;
        position:relative;
        &:before{
            position:absolute;
            content:"";
            width:100px;
            height:4px;
            background:#ab7a5f;
            bottom:-8px;
            left:0;
            @media(max-width:768px){
                left:50%;
                transform:translateX(-50%);
            }
        }
    }
   p{
       line-height:1.9;
       color:#617d98;
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
const Footer = styled.div`
        text-align:center;
        background-color:#222222;
        color:#fff;
        padding:30px;
        span{
            color:#ab7a5f;
        }
`