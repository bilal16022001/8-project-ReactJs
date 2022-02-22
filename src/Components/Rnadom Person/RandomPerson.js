import React, { useState } from 'react'
import styled from 'styled-components'
import { DataRnadom } from './RandomData'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StreetviewIcon from '@mui/icons-material/Streetview';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';

function RandomPerson() {
    const DataOflength = DataRnadom.length;
    const [RandomNum, setRandomNum] = useState(0);
    const [Area, setArea] = useState("");

    const switchArea = (ar) => {
        setArea(ar)
    }
    const handlrandom = () => {
        let randomV = Math.floor(Math.random() * DataOflength);
        setRandomNum(randomV)
    }

    return (
        <Contanier>
            <ParCon>
                <Header></Header>
                <Content>
                    {DataRnadom.filter(item => item.id === RandomNum).map(item => (
                        <div key={item.id}>
                            <img src={item.img} />
                            {Area === "" ?
                                <div>
                                    <span>My name is</span>
                                    <h1>{item.name}</h1>
                                </div>
                                :
                                Area === "name" ?
                                    <div>
                                        <span>My name is</span>
                                        <h1>{item.name}</h1>
                                    </div>
                                    :
                                    Area === "email" ?
                                        <div>
                                            <span>My email is</span>
                                            <h1>{item.email}</h1>
                                        </div>
                                        :
                                        Area === "age" ?
                                            <div>
                                                <span>My age is</span>
                                                <h1>{item.age}</h1>
                                            </div>
                                            : Area === "street" ?
                                                <div>
                                                    <span>My street is</span>
                                                    <h1>{item.street}</h1>
                                                </div>
                                                : Area === "phone" ?
                                                    <div>
                                                        <span>My phone is</span>
                                                        <h1>{item.phone}</h1>
                                                    </div>
                                                    : Area === "password" &&
                                                    <div>
                                                        <span>My password is</span>
                                                        <h1>{item.password}</h1>
                                                    </div>
                            }
                            <ul>
                                <li onClick={() => switchArea("name")}><PersonIcon /></li>
                                <li onClick={() => switchArea("email")}><EmailIcon /></li>
                                <li onClick={() => switchArea("age")}><CalendarTodayIcon /></li>
                                <li onClick={() => switchArea("street")}><StreetviewIcon /></li>
                                <li onClick={() => switchArea("phone")}><PhoneIcon /></li>
                                <li onClick={() => switchArea("password")}><LockIcon /></li>
                            </ul>
                        </div>
                    ))}
                    <button onClick={handlrandom}>Rnadom person</button>
                </Content>
            </ParCon>
        </Contanier >
    )
}

export default RandomPerson

const Contanier = styled.div`
      width:700px;
      margin:auto;
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
`
const ParCon = styled.div`
    background:#fff;
    width:100%;
    text-align:center;
    box-shadow:0 5px 15px rgba(0,0,0,0.2);
    border-radius:4px;
    max-height:420px;
`
const Header = styled.div`
   height:120px;
   border-bottom:1px solid black;
   background-color:#f1f5f8;
`
const Content = styled.div`
position:relative;
top:-110px;
    img,h1{
        margin-bottom:30px;
    }
    img{
        border-radius:50%;
        border:5px solid #fff;
        box-shadow:0 5px 15px rgba(0,0,0,0.2);
    }
    span{
        display:block;
        margin-bottom:30px;
    }
    button{
        background-color:#49a6e9;
        color:#fff;
        padding:10px 25px;
        border-radius:4px;
        border:none;
        cursor:pointer;
    }
    ul{
        display:flex;
        justify-content:space-around;
        margin-bottom:20px;
        li{
            cursor:pointer;
           svg{
            font-size:40px;
           }
        }
    }
`