import React, { useState } from 'react'
import styled from 'styled-components'
import { DataModeText } from './DarkModeData'
function DarkMode() {
    const [Dark, setDark] = useState(false);
    return (
        <Parent darkMode={Dark}>
            <Contanier>
                <Title>
                    <h1>Overreacted</h1>

                    <a href='#' onClick={e => setDark(!Dark)}>Toggle</a>
                </Title>
                {DataModeText.map(item => (
                    <Content>
                        <h2>{item.title}</h2>
                        <p>{item.time}</p>
                        <p>{item.para}</p>
                    </Content>
                ))}
            </Contanier>
        </Parent>
    )
}

export default DarkMode

const Parent = styled.div`
     background-color:${props => props.darkMode ? '#282c35' : '#fff'};
     color:${props => props.darkMode ? '#fff' : 'black'};
     transition:all .3s;
`
const Contanier = styled.div`
      width:600px;
      margin:auto;
      display:flex;
      flex-direction:column;
      justify-content:center;
      padding-top:40px;
`
const Title = styled.div`
      display:flex;
      width:100%;
      justify-content:space-between;
      margin-bottom:30px;
      a{
          background-color:#d23669;
          display:flex;
          justify-content:center;
          align-items:center;
          color:#fff;
          height:30px;
          padding:0 20px;
          border-radius:5px;
      }
`
const Content = styled.div`
      margin-bottom:40px;
      h2{
          color:${props => props.darkMode ? '#ffa7c4' : '#d23669'};
          font-size:40px;
      }
      h2,p{
          margin-bottom:10px;
      }
`